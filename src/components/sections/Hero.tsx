"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PlayCircle, MapPin } from "lucide-react";

const heroImages = [
  "/images/school-2.png",
  "/images/school-3.avif",
  "/images/school-8.avif",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const titleWords = "Building Bright Futures with Knowledge, Discipline & Excellence".split(" ");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image Slider Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img 
              src={heroImages[currentImage]} 
              alt="School Campus" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="flex flex-col items-center gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Admissions Open 2026-27
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 text-white/80 text-sm font-medium tracking-wider"
          >
            <MapPin size={16} className="text-secondary" />
            Thirukkazhukundram, Chengalpattu
          </motion.div>
        </div>

        <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-8 leading-tight text-white">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="inline-block mr-4 drop-shadow-2xl"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
          Selvagam Santhanalakshmi Noble School is committed to providing quality education 
          that nurtures creativity, discipline, leadership, and lifelong learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <button className="px-8 py-4 rounded-2xl bg-primary text-white font-bold text-lg shadow-2xl hover:scale-105 transition-all flex items-center gap-3 group">
            Apply for Admission <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-3">
            Explore Campus <PlayCircle />
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-xs uppercase tracking-widest font-bold">Scroll Down</span>
        <div className="w-1 h-8 bg-gradient-to-b from-white to-transparent rounded-full" />
      </div>
    </section>
  );
}
