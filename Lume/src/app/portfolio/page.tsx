"use client";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Heart, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream-100 dark:bg-slate-900">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        {/* Central SVG Illustration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl opacity-10 dark:opacity-5 pointer-events-none">
          <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Balloons */}
            <ellipse cx="200" cy="250" rx="40" ry="50" fill="currentColor" className="text-accent/30" />
            <path d="M200 300 L195 350" stroke="currentColor" strokeWidth="2" className="text-accent/30" />
            
            <ellipse cx="280" cy="200" rx="45" ry="55" fill="currentColor" className="text-accent/40" />
            <path d="M280 255 L275 310" stroke="currentColor" strokeWidth="2" className="text-accent/40" />
            
            <ellipse cx="520" cy="220" rx="42" ry="52" fill="currentColor" className="text-accent/35" />
            <path d="M520 272 L515 330" stroke="currentColor" strokeWidth="2" className="text-accent/35" />
            
            <ellipse cx="600" cy="180" rx="38" ry="48" fill="currentColor" className="text-accent/30" />
            <path d="M600 228 L595 280" stroke="currentColor" strokeWidth="2" className="text-accent/30" />

            {/* Confetti pieces */}
            <rect x="150" y="150" width="15" height="25" fill="currentColor" className="text-accent/40" transform="rotate(25 150 150)" />
            <rect x="350" y="120" width="12" height="20" fill="currentColor" className="text-accent/30" transform="rotate(-15 350 120)" />
            <rect x="550" y="140" width="18" height="28" fill="currentColor" className="text-accent/35" transform="rotate(35 550 140)" />
            <rect x="650" y="250" width="14" height="22" fill="currentColor" className="text-accent/30" transform="rotate(-25 650 250)" />
            
            {/* Streamers */}
            <path d="M100 400 Q150 350 180 420 T240 480" stroke="currentColor" strokeWidth="3" fill="none" className="text-accent/20" />
            <path d="M700 380 Q650 340 620 400 T560 460" stroke="currentColor" strokeWidth="3" fill="none" className="text-accent/20" />
            
            {/* Stars */}
            <path d="M400 100 L405 115 L420 115 L410 125 L415 140 L400 130 L385 140 L390 125 L380 115 L395 115 Z" fill="currentColor" className="text-accent/40" />
            <path d="M680 300 L683 310 L693 310 L686 317 L689 327 L680 320 L671 327 L674 317 L667 310 L677 310 Z" fill="currentColor" className="text-accent/35" />
            <path d="M120 320 L123 330 L133 330 L126 337 L129 347 L120 340 L111 347 L114 337 L107 330 L117 330 Z" fill="currentColor" className="text-accent/30" />

            {/* Champagne glasses (clinking) */}
            <g transform="translate(320, 450)">
              <path d="M10 0 L15 25 L15 35 L10 35 L10 45 L20 45 L20 35 L15 35 L15 25 L20 0 Z" fill="currentColor" className="text-accent/25" />
              <ellipse cx="15" cy="5" rx="8" ry="3" fill="currentColor" className="text-accent/25" />
            </g>
            
            <g transform="translate(460, 445) scale(-1, 1)">
              <path d="M10 0 L15 25 L15 35 L10 35 L10 45 L20 45 L20 35 L15 35 L15 25 L20 0 Z" fill="currentColor" className="text-accent/25" />
              <ellipse cx="15" cy="5" rx="8" ry="3" fill="currentColor" className="text-accent/25" />
            </g>
          </svg>
        </div>

        {/* SVG Decoration - Floating confetti/sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-20 left-20 w-8 h-8 text-accent animate-bounce" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2l2.5 6.5L19 10l-6.5 2.5L10 19l-2.5-6.5L1 10l6.5-2.5L10 2z" />
          </svg>
          <svg className="absolute top-40 right-32 w-6 h-6 text-accent/60 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2l2.5 6.5L19 10l-6.5 2.5L10 19l-2.5-6.5L1 10l6.5-2.5L10 2z" />
          </svg>
          <svg className="absolute bottom-32 left-1/4 w-10 h-10 text-accent/40 animate-bounce" style={{animationDelay: '0.5s'}} fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2l2.5 6.5L19 10l-6.5 2.5L10 19l-2.5-6.5L1 10l6.5-2.5L10 2z" />
          </svg>
          <svg className="absolute top-1/3 right-20 w-7 h-7 text-accent/50 animate-pulse" style={{animationDelay: '1s'}} fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2l2.5 6.5L19 10l-6.5 2.5L10 19l-2.5-6.5L1 10l6.5-2.5L10 2z" />
          </svg>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          {/* Main heading */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-7xl md:text-9xl font-black text-text-light dark:text-text-dark mb-4 tracking-tight">
              Lume
            </h1>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-1 w-16 bg-accent rounded-full"></div>
              <Sparkles className="w-6 h-6 text-accent" />
              <div className="h-1 w-16 bg-accent rounded-full"></div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl font-light text-text-muted-light dark:text-text-muted-dark mb-4"
          >
            Let us plan your
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-accent mb-12"
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
              <button className="group bg-accent hover:bg-accent-dark text-white px-10 py-5 rounded-full text-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Start Planning 
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="bg-cream-300 dark:bg-slate-800 text-text-light dark:text-text-dark hover:bg-cream-200 dark:hover:bg-slate-700 px-10 py-5 rounded-full text-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                View Our Work
              </button>
            </Link>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto"
          >
            <div className="text-center p-6 rounded-2xl bg-cream-200/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <Heart className="w-10 h-10 mx-auto mb-3 text-accent" />
              <p className="text-4xl font-black text-text-light dark:text-text-dark">500+</p>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark font-medium">Happy Couples</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-cream-200/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <Calendar className="w-10 h-10 mx-auto mb-3 text-accent" />
              <p className="text-4xl font-black text-text-light dark:text-text-dark">10+</p>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark font-medium">Years Experience</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-cream-200/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <Star className="w-10 h-10 mx-auto mb-3 text-accent" />
              <p className="text-4xl font-black text-text-light dark:text-text-dark">4.9★</p>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark font-medium">Client Rating</p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}