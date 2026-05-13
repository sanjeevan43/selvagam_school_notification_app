"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Zap, Globe, Sparkles, BrainCircuit } from "lucide-react";

const features = [
  { icon: <BrainCircuit />, title: "Digital Learning", desc: "Interactive AI-driven curriculum integrated with TN State Board standards." },
  { icon: <ShieldCheck />, title: "Secure Campus", desc: "Safe learning environment with 24/7 monitoring in Thirukkazhukundram." },
  { icon: <Zap />, title: "Smart Labs", desc: "State-of-the-art computer and science labs for hands-on matriculation excellence." },
  { icon: <Globe />, title: "Holistic Vision", desc: "Nurturing global citizens through discipline, leadership, and cultural exchange." },
  { icon: <Cpu />, title: "STEM Focus", desc: "Coding and modern tech education starting from primary levels." },
  { icon: <Sparkles />, title: "Creative Arts", desc: "Nurturing extracurricular talents in digital media and performing arts." },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#020617] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Futuristic <span className="text-primary italic">Education Hub</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Empowering students with the tools of tomorrow, today. Our innovative approach combines technology with character.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[2.5rem] glass-card relative overflow-hidden transition-all hover:bg-white/10"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-glow transition-all">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
