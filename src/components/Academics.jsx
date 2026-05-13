import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Academics = () => {
  const programs = [
    {
      title: "Kindergarten",
      level: "Level 01",
      desc: "Nurturing young minds through play-based learning and social development.",
      features: ["Sensory Activities", "Motor Skills", "Basic Numeracy"]
    },
    {
      title: "Primary School",
      level: "Level 02",
      desc: "Building a strong foundation in core subjects with critical thinking.",
      features: ["Language Arts", "Math & Science", "EVS"]
    },
    {
      title: "Middle School",
      level: "Level 03",
      desc: "Preparing students for advanced concepts and future leadership.",
      features: ["Digital Literacy", "Lab Experiments", "Creative Writing"]
    }
  ];

  return (
    <section id="academics" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="section-title text-white after:bg-secondary">Academic Excellence</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our curriculum is designed to inspire curiosity and prepare students for the challenges of the 21st century.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] group hover:bg-white/20 transition-all duration-500"
            >
              <span className="text-secondary font-display font-bold tracking-widest text-sm mb-6 block uppercase">{program.level}</span>
              <h3 className="text-3xl font-bold mb-6 group-hover:text-secondary transition-colors">{program.title}</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">{program.desc}</p>
              
              <div className="space-y-4">
                {program.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="text-secondary" size={18} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="mt-10 w-full py-4 rounded-2xl border border-white/20 font-bold hover:bg-white hover:text-primary transition-all">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;
