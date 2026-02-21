import os
import asyncio
import logging
import json
from typing import Dict, Any, List, Set, Optional

from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import firebase_admin
from firebase_admin import credentials, messaging
from dotenv import load_dotenv
import httpx
from geopy.distance import distance as geodesic

# Load environment variables
load_dotenv()

# Configuration
PORT = int(os.getenv("PORT", 10001))
MAIN_BACKEND_URL = os.getenv("MAIN_BACKEND_URL", "https://api.selvagam.com/api/v1")
APPROACHING_RADIUS = 500  # meters
ARRIVED_RADIUS = 20       # meters

# Logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("BusServer")

# Initialize Firebase
firebase_app = None
try:
    cred = credentials.Certificate({
        "type": "service_account",
        "project_id": os.getenv("FIREBASE_PROJECT_ID"),
        "private_key": os.getenv("FIREBASE_PRIVATE_KEY", "").replace("\\n", "\n"),
        "client_email": os.getenv("FIREBASE_CLIENT_EMAIL"),
        "token_uri": "https://oauth2.googleapis.com/token",
    })
    firebase_app = firebase_admin.initialize_app(cred)
    logger.info("✅ Firebase Admin initialized")
except Exception as e:
    logger.warning(f"⚠️ Firebase Admin not initialized: {e}")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory storage
active_trips: Dict[str, Dict[str, Any]] = {}
notified_stops: Dict[str, Set[str]] = {}

# --- Helpers ---

async def send_fcm_notification(tokens: List[str], title: str, body: str, data: Dict[str, Any] = None) -> Dict[str, int]:
    if not tokens:
        logger.warning("⚠️ No tokens to send notification to")
        return {"success": 0, "failed": 0}
    
    if not firebase_app:
        logger.error("❌ Firebase not initialized")
        return {"success": 0, "failed": len(tokens)}

    if data is None:
        data = {}
    
    # Convert data values to strings
    string_data = {k: str(v) for k, v in data.items()}
    
    # Chunk strings if > 500 (Firebase Limit)
    chunk_size = 500
    total_success = 0
    total_failed = 0
    
    for i in range(0, len(tokens), chunk_size):
        chunk = tokens[i:i + chunk_size]
        
        # NOTE: No channelId — parent app creates its own default channel
        message = messaging.MulticastMessage(
            tokens=chunk,
            notification=messaging.Notification(title=title, body=body),
            data=string_data,
            android=messaging.AndroidConfig(priority='high'),
            apns=messaging.APNSConfig(
                headers={'apns-priority': '10'},
                payload=messaging.APNSPayload(
                    aps=messaging.Aps(alert=messaging.ApsAlert(title=title, body=body), sound='default', badge=1)
                )
            )
        )

        try:
            # Run blocking call in thread
            response = await asyncio.to_thread(messaging.send_multicast, message)
            total_success += response.success_count
            total_failed += response.failure_count
            logger.info(f"📊 Chunk Result: {response.success_count} success, {response.failure_count} failed")
        except Exception as e:
            logger.error(f"Error sending multicast chunk: {e}")
            total_failed += len(chunk)
            
    return {"success": total_success, "failed": total_failed}

async def fetch_all_tokens() -> List[str]:
    try:
        async with httpx.AsyncClient() as client:
            resp = await client.get(f"{MAIN_BACKEND_URL}/fcm-tokens")
            data = resp.json()
            
            raw_tokens = []
            if isinstance(data, dict) and "fcm_tokens" in data:
                raw_tokens = data["fcm_tokens"]
            elif isinstance(data, list):
                raw_tokens = data
                
            return [t for t in raw_tokens if isinstance(t, str) and t]
    except Exception as e:
        logger.error(f"Error fetching all tokens: {e}")
        return []

async def fetch_tokens_by_route(route_id: str) -> List[str]:
    try:
        async with httpx.AsyncClient() as client:
            resp = await client.get(f"{MAIN_BACKEND_URL}/fcm-tokens/by-route/{route_id}")
            data = resp.json()
            tokens = []
            
            # Handle nested logic
            if isinstance(data, dict) and "stops" in data:
                stops = data["stops"]
                for stop in stops:
                    stop_tokens = stop.get("fcm_tokens", [])
                    for t_obj in stop_tokens:
                        t_val = t_obj.get("fcm_token") or t_obj.get("token")
                        if t_val:
                            tokens.append(t_val)
            elif isinstance(data, list):
                for item in data:
                    t_val = item.get("fcm_token") if isinstance(item, dict) else item
                    if isinstance(t_val, str):
                        tokens.append(t_val)
            
            tokens = list(set(tokens))
            
            # 🚨 FALLBACK: If 0 tokens, use ALL tokens as safety net
            if not tokens:
                logger.warning(f"⚠️ Route {route_id} returned 0 tokens. Activating FALLBACK to ALL tokens.")
                tokens = await fetch_all_tokens()
                
            return tokens
    except Exception as e:
        logger.error(f"Error fetching route tokens: {e}")
        logger.warning("Activting FALLBACK due to error.")
        return await fetch_all_tokens()

async def fetch_route_stops(route_id: str) -> List[Dict]:
    try:
        async with httpx.AsyncClient() as client:
            resp = await client.get(f"{MAIN_BACKEND_URL}/route-stops?route_id={route_id}")
            stops = resp.json()
            stops.sort(key=lambda x: x.get("pickup_stop_order", 0))
            return stops
    except Exception as e:
        logger.error(f"Error fetching stops: {e}")
        return []

# --- Endpoints ---

@app.get("/health")
async def health_check():
    return {
        "status": "OK", 
        "active_trips": len(active_trips), 
        "backup_mode": "Python",
        "fcm_initialized": firebase_app is not None
    }

@app.post("/api/bus-tracking/location")
async def update_location(request: Request):
    try:
        body = await request.json()
    except:
        raise HTTPException(status_code=400, detail="Invalid JSON")
        
    trip_id = body.get("trip_id")
    try:
        lat = float(body.get("latitude"))
        lng = float(body.get("longitude"))
    except:
        lat = lng = None
    
    if not trip_id or lat is None or lng is None:
        raise HTTPException(status_code=400, detail="Missing required fields")
        
    logger.info(f"📍 Location: {trip_id} -> {lat}, {lng}")
    
    # Initialize trip
    if trip_id not in active_trips:
        try:
            async with httpx.AsyncClient() as client:
                trip_resp = await client.get(f"{MAIN_BACKEND_URL}/trips/{trip_id}")
                trip = trip_resp.json()
                route_id = trip.get("route_id")
                
                stops = await fetch_route_stops(route_id)
                
                active_trips[trip_id] = {
                    "tripId": trip_id,
                    "routeId": route_id,
                    "stops": stops,
                    "currentStopIndex": -1,
                    "status": "ONGOING"
                }
                notified_stops[trip_id] = set()
                logger.info(f"✅ Initialized trip {trip_id} with {len(stops)} stops")
                
                # Notify Start
                tokens = await fetch_tokens_by_route(route_id)
                if tokens:
                    await send_fcm_notification(
                        tokens, "🚌 Bus Started", "Bus has started the trip", 
                        {"trip_id": trip_id, "route_id": route_id, "status": "STARTED"}
                    )
        except Exception as e:
            logger.error(f"Error initializing trip: {e}")
            
    trip_data = active_trips.get(trip_id)
    if not trip_data:
        return {"success": False, "message": "Trip not initialized"}
        
    notified = notified_stops[trip_id]
    current_loc = (lat, lng)
    
    return {"success": True, "trip_id": trip_id}

# Manual Endpoints
@app.post("/api/notifications/manual-send")
async def send_manual(request: Request):
    body = await request.json()
    tokens = body.get("tokens", [])
    title = body.get("title")
    message = body.get("message")
    data = body.get("data", {})
    res = await send_fcm_notification(tokens, title, message, data)
    return {"success": True, "recipients": len(tokens), "delivered": res["success"], "failed": res["failed"]}

@app.post("/api/trip/start")
async def start_trip(request: Request):
    body = await request.json()
    trip_id = body.get("trip_id")
    route_id = body.get("route_id")
    tokens = await fetch_tokens_by_route(route_id)
    if tokens:
        await send_fcm_notification(tokens, "🚌 Bus Started", "Your bus has started the trip", 
                                  {"trip_id": trip_id, "route_id": route_id, "status": "STARTED"})
    return {"success": True, "recipients": len(tokens), "status": "STARTED"}

@app.post("/api/trip/complete")
async def complete_trip(request: Request):
    body = await request.json()
    trip_id = body.get("trip_id")
    route_id = body.get("route_id")
    tokens = await fetch_tokens_by_route(route_id)
    if tokens:
        await send_fcm_notification(tokens, "✅ Trip Completed", "Your bus has completed the trip", 
                                  {"trip_id": trip_id, "route_id": route_id, "status": "COMPLETED"})
    if trip_id in active_trips:
        del active_trips[trip_id]
        if trip_id in notified_stops:
            del notified_stops[trip_id]
    return {"success": True, "recipients": len(tokens), "status": "COMPLETED"}

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=PORT, reload=True)
