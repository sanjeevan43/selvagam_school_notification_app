import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-banner.png" 
          alt="School Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 backdrop-blur-md border border-secondary/30 text-secondary font-bold rounded-full text-xs md:text-sm mb-8 uppercase tracking-widest">
              <span className="w-2 h-2 bg-secondary rounded-full animate-ping"></span>
              Admissions Open 2026-27
            </span>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl text-white font-display font-bold mb-8 leading-[1.1]">
              Empowering <span className="text-secondary italic">Young Minds</span> For A Brighter Future
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
              Selvagam Santhanalakshmi Noble School provides a nurturing environment where knowledge, discipline, and excellence converge to shape the leaders of tomorrow.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary px-8 py-4 text-lg flex items-center gap-2"
              >
                Enroll Your Child <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 text-white font-bold group"
              >
                <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                  <Play size={24} fill="currentColor" />
                </div>
                Explore Campus
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 p-12 hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-48 h-48 border-2 border-white/10 rounded-full flex items-center justify-center"
        >
          <div className="w-32 h-32 border border-white/5 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
