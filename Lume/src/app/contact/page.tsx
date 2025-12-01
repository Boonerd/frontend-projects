"use client";
import { Sparkles } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-cream dark:bg-slate-950">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-center mb-4 text-gray-900 dark:text-gray-100">
          Let’s Plan Your Dream Event
        </h1>
        <p className="text-center text-xl text-gray-600 dark:text-gray-400 mb-16">
          Tell us about your vision — we’ll make it unforgettable
        </p>

        <form
          action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`}
          method="POST"
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 space-y-8 border border-orange-200 dark:border-orange-800"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-6 py-5 rounded-2xl border-2 border-orange-200 dark:border-orange-800 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-900/50 outline-none transition text-gray-900 dark:text-gray-100 placeholder-gray-500 text-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-6 py-5 rounded-2xl border-2 border-orange-200 dark:border-orange-800 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-900/50 outline-none transition text-gray-900 dark:text-gray-100 placeholder-gray-500 text-lg"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone (e.g. 0712 345 678)"
            required
            className="w-full px-6 py-5 rounded-2xl border-2 border-orange-200 dark:border-orange-800 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-900/50 outline-none transition text-gray-900 dark:text-gray-100 placeholder-gray-500 text-lg"
          />
          <textarea
            name="message"
            placeholder="Tell us about your event — wedding, corporate gala, birthday?"
            rows={6}
            required
            className="w-full px-6 py-5 rounded-2xl border-2 border-orange-200 dark:border-orange-800 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-900/50 outline-none transition resize-none text-gray-900 dark:text-gray-100 placeholder-gray-500 text-lg"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-2xl text-xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            Send Message
            <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </button>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            We reply within 24 hours • Nairobi, Kenya
          </p>
        </form>
      </div>
    </div>
  );
}