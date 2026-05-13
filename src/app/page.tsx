"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/About";
import Stats from "@/components/sections/Stats";
import Features from "@/components/sections/Features";
import Gallery from "@/components/Gallery";
import BackgroundScene from "@/components/3d/BackgroundScene";
import SmoothScroll from "@/components/SmoothScroll";
import { motion } from "framer-motion";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-[9999] hidden md:block"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isHovering ? 1.5 : 1,
        backgroundColor: isHovering ? "rgba(59, 130, 246, 0.2)" : "transparent",
      }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
    />
  );
}

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <BackgroundScene />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Features />
        <Gallery />
        
        {/* Additional futuristic sections can be added here */}
        <section className="py-24 flex items-center justify-center">
          <div className="container mx-auto px-6">
            <div className="glass-card p-20 rounded-[4rem] text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <h2 className="text-4xl md:text-7xl font-display font-bold mb-10 text-glow">
                Shape the Future of <br />
                <span className="text-secondary italic">Your Child</span> Today
              </h2>
              <button className="px-12 py-6 rounded-3xl bg-white text-black font-bold text-xl shadow-2xl hover:scale-105 transition-all">
                Book a Virtual Tour
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-20 bg-black/50 backdrop-blur-3xl border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-10 mb-10">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">LinkedIn</a>
          </div>
          <p className="text-gray-600 font-medium tracking-widest uppercase text-xs">
            © 2026 Selvagam Santhanalakshmi Noble School. All rights reserved.
          </p>
        </div>
      </footer>
    </SmoothScroll>
  );
}
