"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop')", // Marble/geometric tile style placeholder
          }}
        />
        {/* Gradient overlays to blend into matte black background */}
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-matte-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start justify-center">
        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 glass-panel px-4 py-2 rounded-full mb-8"
        >
          <CheckCircle className="text-electric-cyan w-4 h-4" />
          <span className="text-sm font-medium text-gray-200 tracking-wide">
            Based in Pontardawe | Fully Insured & Guaranteed
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.15] tracking-tight">
            Flawless Wall & Floor <br />
            <span className="text-gradient-cyan">Tiling</span> Across
            <br /> South Wales
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-base md:text-lg text-gray-400 font-sans leading-relaxed"
        >
          Professional precision in all aspects of tiling and wetrooms. Transform
          your spaces with premium craftsmanship that stands the test of time.
          Fully guaranteed and insured.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            href="#contact"
            className="group flex items-center justify-center space-x-2 bg-electric-cyan text-black px-8 py-4 rounded font-bold hover:bg-cyan-300 transition-all duration-300"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#gallery"
            className="flex items-center justify-center px-8 py-4 rounded font-semibold text-white border border-white/20 hover:bg-white/5 transition-all duration-300"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
