import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-black mb-6">Lume</h2>
        <p className="text-xl mb-8">Nairobi, Kenya</p>
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="hover:text-indigo-400"><Instagram size={28} /></a>
          <a href="#" className="hover:text-indigo-400"><Facebook size={28} /></a>
          <a href="#" className="hover:text-indigo-400"><Mail size={28} /></a>
        </div>
        <p>© 2025 Lume Events. All rights reserved.</p>
      </div>
    </footer>
  );
}