"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Facilities", href: "#facilities" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "py-4 bg-white/90 backdrop-blur-2xl border-b border-black/5 shadow-sm" : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-xl group-hover:rotate-12 transition-transform">
            <GraduationCap className="text-white" size={28} />
          </div>
          <div>
            <h1 className={`text-xl font-display font-bold tracking-tight leading-none transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>Selvagam Noble</h1>
            <p className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors ${scrolled ? "text-primary" : "text-white/70"}`}>Thirukkazhukundram</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-semibold transition-all relative group ${scrolled ? "text-foreground/70 hover:text-primary" : "text-white/70 hover:text-white"}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <button className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-xl ${scrolled ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-black hover:bg-primary hover:text-white"}`}>
            Inquiry Now
          </button>
        </div>

        <button 
          className={`lg:hidden p-2 transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white backdrop-blur-2xl border-b border-black/5 py-10 px-6 flex flex-col gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-display font-bold text-foreground/70 hover:text-primary transition-all"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full py-4 rounded-2xl bg-primary text-white font-bold text-lg shadow-xl">
              Inquiry Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
