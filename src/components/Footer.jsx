import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-xl">
                <GraduationCap size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold">Selvagam Noble</h2>
                <p className="text-secondary text-xs font-bold tracking-[0.3em] uppercase">Santhanalakshmi</p>
              </div>
            </div>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-10">
              Empowering students in Tirukazhukundram with world-class education and values that last a lifetime. Building a better tomorrow, today.
            </p>
            <div className="flex gap-6">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#academics" className="hover:text-secondary transition-colors">Academics</a></li>
              <li><a href="#gallery" className="hover:text-secondary transition-colors">Campus Life</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Admissions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Contact Us</h4>
            <div className="space-y-6 text-gray-400">
              <p className="flex items-start gap-4">
                <span className="text-secondary font-bold">A:</span>
                H3M5+Q2R, Tirukazhukundram, <br />Tamil Nadu 603109
              </p>
              <p className="flex items-center gap-4">
                <span className="text-secondary font-bold">P:</span>
                +91 [Insert Phone]
              </p>
              <p className="flex items-center gap-4">
                <span className="text-secondary font-bold">E:</span>
                info@selvagamschool.edu.in
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© 2026 Selvagam Santhanalakshmi Noble School. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
