import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      text: "Nice place good teacher. The management is very supportive and caring.",
      author: "Parent Review",
      platform: "Google Maps"
    },
    {
      text: "Good environment and location. Very convenient and safe for students.",
      author: "Verified Reviewer",
      platform: "Google Maps"
    },
    {
      text: "Staffs are very friendly especially Ms.Karthika maam. Highly recommended.",
      author: "Happy Parent",
      platform: "Google Maps"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-left after:left-0 after:translate-x-0 mb-4">What Parents Say</h2>
            <div className="flex items-center gap-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="text-primary font-bold">4.8 Stars (12 Reviews)</p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm relative group hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute top-10 right-10 text-primary/5 group-hover:text-primary/10 transition-colors">
                <Quote size={80} />
              </div>
              
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              
              <p className="text-gray-600 italic text-lg leading-relaxed mb-8 relative z-10">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{review.author}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{review.platform}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
