"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const links = ["Home", "Services", "Portfolio", "About", "Testimonials", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-100/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-cream-300 dark:border-slate-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-4xl font-black text-accent hover:text-accent-dark transition-colors">
          Lume
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link}
              href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className={`font-semibold transition-colors duration-200 ${
                pathname === (link === "Home" ? "/" : `/${link.toLowerCase()}`)
                  ? "text-accent"
                  : "text-text-light dark:text-text-dark hover:text-accent-dark dark:hover:text-accent-light"
              }`}
            >
              {link}
            </Link>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-cream-300 dark:bg-slate-800 hover:bg-cream-200 dark:hover:bg-slate-700 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-accent" />
              ) : (
                <Moon className="w-5 h-5 text-accent" />
              )}
            </button>
          )}
        </div>

        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden text-text-light dark:text-text-dark"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream-100 dark:bg-slate-900 border-t border-cream-300 dark:border-slate-700">
          <div className="flex flex-col gap-4 p-6">
            {links.map((link) => (
              <Link
                key={link}
                href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className={`font-semibold transition-colors ${
                  pathname === (link === "Home" ? "/" : `/${link.toLowerCase()}`)
                    ? "text-accent"
                    : "text-text-light dark:text-text-dark hover:text-accent"
                }`}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}