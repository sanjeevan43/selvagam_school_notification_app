import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Academics from './components/Academics';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Admission from './components/Admission';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Academics />
        <Reviews />
        <Gallery />
        <Admission />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/910000000000"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center text-3xl z-40"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </motion.a>
    </div>
  );
}

export default App;
