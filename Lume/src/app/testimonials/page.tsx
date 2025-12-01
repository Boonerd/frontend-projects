"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Aisha & Kevin", event: "Wedding 2025", rating: 5, text: "Lume made our day absolutely magical. Every detail was perfect!" },
  { name: "Safaricom Events Team", event: "Product Launch", rating: 5, text: "Professional, creative, and flawless execution. Highly recommend!" },
  { name: "Sarah M.", event: "30th Birthday", rating: 5, text: "Best party of my life! They turned my vision into reality." },
  { name: "Corporate Client", event: "Annual Gala", rating: 5, text: "Exceeded all expectations. Our guests are still talking about it." },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-cream dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mb-6 bg-linear-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"
        >
          Client Love Stories
        </motion.h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-16">Don’t just take our word for it</p>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-2xl border border-orange-100 dark:border-gray-800"
            >
              <Quote className="w-12 h-12 text-orange-400 mb-6" />
              <p className="text-xl italic mb-8 text-gray-700 dark:text-gray-200">&quot;{t.text}&quot;</p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-lg">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.event}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-orange-400 text-orange-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}