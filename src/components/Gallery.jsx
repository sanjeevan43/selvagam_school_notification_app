import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const Gallery = () => {
  const images = [
    { src: "/images/school-4.avif", span: "md:col-span-2 md:row-span-2" },
    { src: "/images/school-5.avif", span: "" },
    { src: "/images/school-6.avif", span: "" },
    { src: "/images/school-8.avif", span: "md:col-span-2" },
  ];

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="section-title">Campus Life</h2>
          <p className="text-gray-500 text-lg">A glimpse into the daily activities and vibrant environment at Selvagam Noble.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-[2.5rem] group shadow-lg ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary shadow-xl"
                >
                  <Plus size={32} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
