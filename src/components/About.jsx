import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-accent/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="/images/about-school.png" alt="Students Learning" className="w-full aspect-[4/5] object-cover" />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl z-20 hidden md:block">
              <p className="text-primary font-display font-bold text-5xl mb-1">15+</p>
              <p className="text-gray-500 font-semibold uppercase tracking-widest text-xs">Years of Excellence</p>
            </div>
            {/* Background blobs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-primary/5 rounded-[3rem] rotate-6 -z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-left section-title after:left-0 after:translate-x-0">
              Nurturing Creativity, <br />
              <span className="text-primary-light">Leadership & Discipline</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Selvagam Santhanalakshmi Noble School is committed to providing quality education that nurtures creativity, discipline, leadership, and lifelong learning in students. Our campus is more than just a school; it's a sanctuary of knowledge.
            </p>

            <div className="grid gap-8">
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Target size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Our Mission</h4>
                  <p className="text-gray-500">To provide a safe, positive, and innovative learning environment that fosters student growth.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Eye size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Our Vision</h4>
                  <p className="text-gray-500">To be a leader in transformative education, shaping future global citizens and leaders.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Heart size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Our Values</h4>
                  <p className="text-gray-500">Integrity, Excellence, Respect, and Innovation are at the core of everything we do.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
