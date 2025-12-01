"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Weddings", "Corporate", "Private"];
const items = [
  { title: "Aisha & Kevin Wedding", category: "Weddings", svg: "wedding" },
  { title: "Safaricom Launch", category: "Corporate", svg: "corporate" },
  { title: "30th Birthday Bliss", category: "Private", svg: "party" },
  { title: "Tech Summit 2025", category: "Corporate", svg: "TechSummit" },
  { title: "Baby Shower Dreams", category: "Private", svg: "Babyshower" },
  { title: "Annual Gala", category: "Corporate", svg: "Gala" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? items : items.filter(i => i.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-cream-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-black text-center mb-6 text-text-light dark:text-text-dark">
          Our Work
        </h1>
        <p className="text-center text-xl text-text-muted-light dark:text-text-muted-dark mb-12">Moments that sparkle</p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                filter === cat 
                  ? "bg-accent text-white shadow-lg hover:bg-accent-dark" 
                  : "bg-cream-300 dark:bg-slate-800 text-text-light dark:text-text-dark hover:shadow-md hover:bg-cream-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="group bg-cream-200 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="aspect-video bg-cream-50 dark:bg-slate-700 p-10 flex items-center justify-center">
                <img 
                  src={`/svg/${item.svg}.svg`} 
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-text-light dark:text-text-dark">{item.title}</h3>
                <p className="text-accent dark:text-accent-light font-medium">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}