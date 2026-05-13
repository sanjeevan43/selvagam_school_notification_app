import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Admission = () => {
  return (
    <section id="contact" className="py-24 bg-accent/20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              Ready to Join Our <br />
              <span className="text-primary-light italic">Noble Family?</span>
            </h2>
            <p className="text-gray-500 text-lg mb-12">
              We are excited to welcome new students for the upcoming academic year. Contact us to schedule a campus tour or start the admission process.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Our Location</h4>
                  <p className="text-gray-500">H3M5+Q2R, Tirukazhukundram, TN 603109</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Call Us</h4>
                  <p className="text-gray-500">+91 [Insert Phone Number]</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email Us</h4>
                  <p className="text-gray-500">info@selvagamschool.edu.in</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 rounded-[2.5rem] overflow-hidden shadow-2xl h-64 grayscale group-hover:grayscale-0 transition-all border-8 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.344!2d80.052!3d12.612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDM2JzQzLjIiTiA4MMKwMDMnMDcuMiJF!5e0!3m2!1sen!2sin!4v1620000000000" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl relative"
          >
            <h3 className="text-3xl font-bold text-primary mb-8">Admission Inquiry</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Student Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:border-primary transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Parent Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:border-primary transition-all" placeholder="Jane Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                <input type="tel" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:border-primary transition-all" placeholder="+91 00000 00000" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Grade Level</label>
                <select className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:border-primary transition-all appearance-none">
                  <option>Kindergarten</option>
                  <option>Primary School</option>
                  <option>Middle School</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
                <textarea rows="4" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl outline-none focus:border-primary transition-all" placeholder="Any specific questions?"></textarea>
              </div>
              <button className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3">
                Submit Inquiry <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
