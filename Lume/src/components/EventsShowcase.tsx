// src/components/EventsShowcase.tsx
"use client";

import { useState, useEffect } from "react";
import { Calendar, MapPin, Search, Wifi, WifiOff, Ticket } from "lucide-react";
import fallbackEvents from "@/data/events-fallback.json";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  category: string;
  price: string;
  image: string;
}

const eventImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1492684223066-8131a6e13f2f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
];

export default function EventsShowcase() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    async function loadEvents() {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=9");
        if (!res.ok) throw new Error("Failed");
        const data = await res.json();

        const mapped: Event[] = data.products.map((p: { id: number; title: string }, i: number) => ({
          id: p.id,
          title: p.title.length > 35 ? p.title.slice(0, 32) + "..." : p.title,
          date: fallbackEvents[i % fallbackEvents.length].date,
          location: fallbackEvents[i % fallbackEvents.length].location,
          category: fallbackEvents[i % fallbackEvents.length].category,
          price: fallbackEvents[i % fallbackEvents.length].price,
          image: eventImages[i % eventImages.length],
        }));
        setEvents(mapped);
        setIsOnline(true);
      } catch {
        setEvents(fallbackEvents.map((e: unknown, i: number) => ({
          ...e,
          image: eventImages[i % eventImages.length],
        })));
        setIsOnline(false);
      } finally {
        setLoading(false);
      }
    }
    loadEvents();
  }, []);

  const filtered = events.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="text-center py-20 text-2xl">Loading events...</div>;

  return (
    <>
      <div className="flex justify-center mb-10">
        <span className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold ${isOnline ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
          {isOnline ? <Wifi size={18} /> : <WifiOff size={18} />}
          {isOnline ? "Live" : "Offline"}
        </span>
      </div>

      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-5 top-5 text-gray-400" size={24} />
          <input
            type="text"
            placeholder="Search Nairobi events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-16 pr-6 py-5 rounded-2xl text-lg border border-gray-300 dark:border-gray-700 focus:ring-4 focus:ring-purple-500 outline-none bg-white dark:bg-gray-800"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((event) => (
          <div key={event.id} className="group bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition">
            <div className="aspect-video relative">
              // eslint-disable-next-line @next/next/no-img-element
              <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <span className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-bold">{event.category}</span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-400">
                <p className="flex items-center gap-2"><Calendar size={18} /> {event.date}</p>
                <p className="flex items-center gap-2"><MapPin size={18} /> {event.location}</p>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <span className="text-3xl font-black text-purple-600">{event.price}</span>
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition"
                >
                  <Ticket size={20} /> Tickets
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedEvent(null)}>
          <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-md w-full p-8" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-3xl font-bold mb-4">{selectedEvent.title}</h2>
            <p className="text-5xl font-black text-purple-600 mb-8">{selectedEvent.price}</p>
            <a href="/mpesa" className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-5 rounded-2xl text-xl font-bold">
              Pay with M-Pesa
            </a>
            <button onClick={() => setSelectedEvent(null)} className="mt-4 w-full text-gray-500">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}