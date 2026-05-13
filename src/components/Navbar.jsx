import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Academics', to: 'academics' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-3 bg-white/90 backdrop-blur-lg shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="home" className="flex items-center gap-3 cursor-pointer group">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
            <GraduationCap size={28} />
          </div>
          <div>
            <h1 className={`text-xl font-display font-bold leading-tight ${isScrolled ? 'text-primary' : 'text-white md:text-primary lg:text-white'}`}>
              Selvagam Noble
            </h1>
            <p className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isScrolled ? 'text-primary-light' : 'text-secondary'}`}>
              Santhanalakshmi
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className={`font-semibold cursor-pointer transition-colors hover:text-primary-light ${
                isScrolled ? 'text-primary' : 'text-white md:text-primary lg:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="contact" smooth={true} className="btn-primary">
            Admissions Open
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`lg:hidden p-2 rounded-xl ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-8 px-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-primary border-b border-gray-100 pb-2"
              >
                {link.name}
              </Link>
            ))}
            <Link to="contact" smooth={true} onClick={() => setIsMobileMenuOpen(false)} className="btn-primary text-center">
              Admissions Open
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
