"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-cream dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black text-center mb-20 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent"
        >
          About Lume
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
              Turning Moments into <span className="text-orange-500">Memories</span>
            </h2>
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              Founded in Nairobi in 2023, <strong>Lume</strong> brings world-class event planning to East Africa. 
              We believe every celebration — whether it’s a corporate gala for 500 or an intimate garden wedding — deserves to be <em>extraordinary</em>.
            </p>
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              Our team combines creativity, precision, and deep local expertise to deliver events that don’t just meet expectations — they <strong>exceed</strong> them, every single time.
            </p>
          </motion.div>

          {/* BEAUTIFUL SVG IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <Image
                src="/svg/undraw_good-team_zww8.svg"   // ← change name if yours is different
                alt="Lume team creating magical events"
                width={600}
                height={500}
                className="w-full drop-shadow-2xl"
                priority
              />
            </div>
            {/* Orange glow behind image */}
            <div className="absolute inset-0 -bottom-10 -left-10 w-full h-full bg-orange-400/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}