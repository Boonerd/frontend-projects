"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-5xl font-black text-center mb-12">
          About Lume
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Turning Moments into Memories</h2>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Founded in Nairobi in 2023, Lume brings world-class event planning to East Africa. 
              We believe every celebration deserves to be extraordinary – whether it is a corporate gala for 500 or an intimate garden wedding.
            </p>
            <p className="text-lg leading-relaxed mt-6 text-gray-600 dark:text-gray-400">
              Our team combines creativity, precision, and local expertise to deliver events that exceed expectations every single time.
            </p>
          </div>
          <div className="bg-gray-200 dark:bg-gray-800 border-2 border-dashed rounded-3xl w-full h-96" />
        </div>
      </div>
    </div>
  );
}