"use client";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Heart, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream dark:bg-slate-950">
        {/* Subtle glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* YOUR UNDRAW SVG — LEFT SIDE (desktop only) */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-1/3 xl:w-2/5 pointer-events-none select-none">
          <Image
            src="/svg/undraw_celebration_wtm8.svg"
            alt="Celebrating your dream event"
            width={700}
            height={700}
            priority
            className="drop-shadow-2xl opacity-85 dark:opacity-70 scale-110"
          />
        </div>

        {/* Floating confetti sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          <Sparkles className="absolute top-20 left-20 w-8 h-8 text-orange-500 animate-bounce" />
          <Sparkles className="absolute top-40 right-32 w-6 h-6 text-orange-400/60 animate-pulse" />
          <Sparkles className="absolute bottom-32 left-1/4 w-10 h-10 text-orange-400/40 animate-bounce" style={{ animationDelay: "0.5s" }} />
          <Sparkles className="absolute top-1/3 right-20 w-7 h-7 text-orange-400/50 animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-5xl lg:max-w-3xl lg:ml-auto lg:mr-10"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-7xl md:text-9xl font-black text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
              Lume
            </h1>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-1 w-16 bg-orange-500 rounded-full"></div>
              <Sparkles className="w-6 h-6 text-orange-500" />
              <div className="h-1 w-16 bg-orange-500 rounded-full"></div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl font-light text-gray-700 dark:text-gray-300 mb-4"
          >
            Let us plan your
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-orange-500 mb-12"
          >
            dream event
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
          >
            <Link href="/contact">
              <button className="group bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full text-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Start Planning
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-900/50 px-10 py-5 rounded-full text-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                View Our Work
              </button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { Icon: Heart, number: "500+", label: "Happy Couples" },
              { Icon: Calendar, number: "10+", label: "Years Experience" },
              { Icon: Star, number: "4.9★", label: "Client Rating" },
            ].map(({ Icon, number, label }, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                <Icon className="w-10 h-10 mx-auto mb-3 text-orange-500" />
                <p className="text-4xl font-black text-gray-900 dark:text-gray-100">{number}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}