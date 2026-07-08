"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { locations } from "@/lib/locations";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Why Choose Us", href: "/#features" },
  { name: "Reviews", href: "/#reviews" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-serif font-bold tracking-wider text-white">
              KDT<span className="text-electric-cyan font-sans font-extrabold">TILING</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-white transition-colors duration-200 text-sm tracking-wide font-medium"
              >
                {link.name}
              </Link>
            ))}

            {/* Locations Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-200 hover:text-white transition-colors duration-200 text-sm tracking-wide font-medium py-4">
                <span>Locations</span>
                <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full right-0 w-48 bg-black/95 backdrop-blur-xl border border-white/10 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden z-50">
                <div className="py-2">
                  {locations.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/#contact"
              className="text-gray-200 hover:text-white transition-colors duration-200 text-sm tracking-wide font-medium"
            >
              Contact
            </Link>

            <Link
              href="/#contact"
              className="bg-electric-cyan text-black px-6 py-2.5 rounded hover:bg-cyan-300 transition-colors duration-300 font-semibold text-sm"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 max-h-[calc(100vh-6rem)] overflow-y-auto"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
              >
                Contact
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center mt-6 w-full bg-electric-cyan text-black px-6 py-3 rounded hover:bg-cyan-300 font-bold"
              >
                Get a Free Quote
              </Link>

              <div className="px-3 pt-2 pb-4 border-t border-white/10">
                <div className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">Locations</div>
                <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                  {locations.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="block text-sm font-medium text-gray-300 hover:text-white"
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
