"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, Award, Calendar } from "lucide-react";

const stats = [
  { icon: <Users />, label: "Students Enrolled", value: "1000+", color: "from-blue-500 to-cyan-400" },
  { icon: <GraduationCap />, label: "Qualified Teachers", value: "50+", color: "from-purple-500 to-pink-400" },
  { icon: <Award />, label: "Awards Won", value: "120+", color: "from-orange-500 to-yellow-400" },
  { icon: <Calendar />, label: "Years of Excellence", value: "15+", color: "from-green-500 to-emerald-400" },
];

export default function Stats() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative p-1 rounded-3xl overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
              <div className="relative glass-card p-10 h-full flex flex-col items-center text-center rounded-[1.4rem]">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-6 shadow-xl`}>
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-display font-bold mb-2 text-white group-hover:text-glow transition-all">
                  {stat.value}
                </h3>
                <p className="text-gray-400 font-medium uppercase tracking-widest text-xs">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
