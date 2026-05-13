"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";

function Blob({ position, color, speed, distort }: any) {
  const mesh = useRef<any>();
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={mesh} args={[1, 64, 64]} position={position} scale={2}>
      <MeshDistortMaterial
        color={color}
        speed={speed}
        distort={distort}
        radius={1}
        transparent
        opacity={0.15}
      />
    </Sphere>
  );
}

export default function BackgroundScene() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <Blob position={[-5, 3, -5]} color="#3b82f6" speed={1} distort={0.5} />
        <Blob position={[5, -3, -5]} color="#4f46e5" speed={1.5} distort={0.4} />
        <Blob position={[0, -5, -2]} color="#8b5cf6" speed={2} distort={0.6} />
      </Canvas>
    </div>
  );
}
