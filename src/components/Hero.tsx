"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('/images/hero_cropped.png')",
          }}
        />
        {/* Gradient overlays to blend into matte black background */}
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-matte-black/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-start">
        {/* Container for Logo (background) and Text (overlay) */}
        <div className="relative w-full flex flex-col items-start justify-end min-h-[600px] lg:min-h-[750px] pb-3 lg:pb-6">
          
          {/* Logo (Absolute in background, positioned top-right) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 right-0 w-[180px] sm:w-[250px] md:w-[320px] lg:w-[520px] xl:w-[580px] max-w-full sm:max-w-none h-auto pointer-events-none z-0 select-none"
          >
            <Image
              src="/images/kdt-logo-transparent.png"
              alt="KDT Tiling Logo"
              width={1377}
              height={842}
              priority
              className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,242,254,0.12)]"
            />
          </motion.div>

          {/* Text Content Container (Relative overlaying the logo) */}
          <div className="relative z-10 w-full max-w-3xl flex flex-col items-start text-left pr-0">
            
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="max-w-3xl text-left mr-auto"
            >
              <h1 className="text-3xl xs:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.15] tracking-tight">
                Flawless Wall & Floor <br />
                <span className="text-gradient-cyan">Tiling</span> Across
                <br /> South Wales
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="mt-3 sm:mt-6 max-w-2xl text-base md:text-lg text-gray-300 font-sans leading-relaxed mr-auto"
            >
              Professional precision in all aspects of floor & wall tiling, domestic plumbing, wall & ceiling panelling, and small bricklaying jobs. Transform your spaces with premium craftsmanship across South Wales.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="mt-4 sm:mt-10 flex flex-col sm:flex-row justify-start gap-4 w-full sm:w-auto mr-auto"
            >
              <Link
                href="#contact"
                className="group w-full sm:w-auto flex items-center justify-center space-x-2 bg-electric-cyan text-black px-8 py-4 rounded font-bold hover:bg-cyan-300 transition-all duration-300"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#gallery"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded font-semibold text-white border border-white/20 hover:bg-white/5 transition-all duration-300"
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Location Badge nestled at the bottom of the text, aligned left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              className="mt-6 sm:mt-12 pl-4 border-l-2 border-electric-cyan/50 text-left mr-auto select-none"
            >
              <span className="block text-xs md:text-sm font-semibold text-electric-cyan uppercase tracking-wider">
                Based in Pontardawe
              </span>
              <span className="block text-[10px] md:text-xs text-gray-400 tracking-wide mt-0.5">
                Fully Insured & Guaranteed
              </span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
