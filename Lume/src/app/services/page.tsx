"use client";
import { motion } from "framer-motion";
import { 
  HeartPulse,   // wedding rings + heart
  Briefcase, 
  CakeSlice, 
  CheckCircle2 
} from "lucide-react";

const services = [
  {
    title: "Weddings",
    price: "From KSh 350,000",
    icon: HeartPulse, // beautiful wedding rings + heart
    features: ["Full planning & coordination", "Venue & vendor sourcing", "Floral design & decor", "Catering, cake & bar"],
  },
  {
    title: "Corporate Events",
    price: "From KSh 200,000",
    icon: Briefcase,
    features: ["Conferences & summits", "Product launches", "Team building retreats", "Annual gala dinners"],
  },
  {
    title: "Private Parties",
    price: "From KSh 50,000",
    icon: CakeSlice,
    features: ["Luxury birthdays", "Anniversaries & proposals", "Baby showers", "Intimate house parties"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-cream dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
            Every celebration deserves to <span className="text-orange-500 font-bold">shine</span>
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-orange-300/30 dark:hover:shadow-orange-800/30 transition-all duration-500 border border-orange-200 dark:border-orange-800 overflow-hidden"
            >
              {/* Orange glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />

              {/* Icon with orange accent */}
              <div className="relative mb-8">
                <service.icon className="w-20 h-20 text-orange-500 mx-auto drop-shadow-lg" />
                <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-3xl -z-10 scale-150" />
              </div>

              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4 text-center">
                {service.title}
              </h3>

              <p className="text-4xl font-black text-center mb-10 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                {service.price}
              </p>

              <ul className="space-y-5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Subtle orange ring at bottom */}
              <div className="mt-10 flex justify-center">
                <div className="h-1 w-24 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}