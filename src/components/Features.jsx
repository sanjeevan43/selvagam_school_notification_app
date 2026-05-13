import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Monitor, Trophy, BookOpen, HeartHandshake, Laptop, MapPin } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Users className="text-blue-500" />,
      title: "Friendly Teachers",
      desc: "Our educators are approachable, passionate, and dedicated to each student."
    },
    {
      icon: <ShieldCheck className="text-green-500" />,
      title: "Safe Campus",
      desc: "24/7 CCTV surveillance and secure entry/exit protocols for peace of mind."
    },
    {
      icon: <Monitor className="text-yellow-500" />,
      title: "Smart Classrooms",
      desc: "Digitally enabled learning spaces with modern multimedia tools."
    },
    {
      icon: <Trophy className="text-purple-500" />,
      title: "Sports & Cultural",
      desc: "Comprehensive programs for physical fitness and creative expression."
    },
    {
      icon: <BookOpen className="text-red-500" />,
      title: "Library Resources",
      desc: "A vast collection of books and digital media to inspire young readers."
    },
    {
      icon: <HeartHandshake className="text-pink-500" />,
      title: "Parent Support",
      desc: "Regular communication and portals for tracking student progress."
    },
    {
      icon: <Laptop className="text-cyan-500" />,
      title: "Digital Learning",
      desc: "Integration of technology to prepare students for the future."
    },
    {
      icon: <MapPin className="text-orange-500" />,
      title: "Prime Location",
      desc: "Conveniently located in the heart of Tirukazhukundram."
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="section-title">Why Parents Trust Us</h2>
          <p className="text-gray-500 text-lg">
            We provide a holistic educational experience that goes beyond textbooks, focusing on the character and future of every child.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
