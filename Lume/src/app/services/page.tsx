"use client";
import { motion } from "framer-motion";
import { Heart, Briefcase, Cake, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Weddings",
    price: "From KSh 350,000",
    icon: Heart,
    features: ["Full planning", "Venue sourcing", "Floral & Decor", "Catering & Cake"],
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Corporate Events",
    price: "From KSh 500,000",
    icon: Briefcase,
    features: ["Conferences", "Product launches", "Team building", "Gala dinners"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Private Parties",
    price: "From KSh 150,000",
    icon: Cake,
    features: ["Birthdays", "Anniversaries", "Baby showers", "House parties"],
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Every celebration deserves to shine</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${s.color} opacity-0 group-hover:opacity-10 transition`} />
              <s.icon className="w-16 h-16 text-indigo-600 mb-6" />
              <h3 className="text-3xl font-bold mb-3">{s.title}</h3>
              <p className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 mb-8">
                {s.price}
              </p>
              <ul className="space-y-4">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}