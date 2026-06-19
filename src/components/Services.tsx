"use client";

import { motion, Variants } from "framer-motion";
import { Grid, Layout, Droplets } from "lucide-react";

const services = [
  {
    title: "Wall Tiling",
    description:
      "Kitchen splashbacks, feature walls, and complete bathroom surrounds. Precision cuts and flawless alignment for a premium finish.",
    icon: Layout,
    details:
      "Specializing in intricate patterns, herringbone, and seamless grouting to elevate the aesthetic of any room.",
  },
  {
    title: "Floor Tiling",
    description:
      "Large format tiles, natural stone, porcelain, and complex geometric layouts designed for durability and elegance.",
    icon: Grid,
    details:
      "Perfect leveling and meticulous sub-floor preparation ensure a long-lasting, immaculate surface.",
  },
  {
    title: "Plumbing & Wetrooms",
    description:
      "Comprehensive wetroom preparation, advanced waterproofing (tanking), and essential plumbing adjustments.",
    icon: Droplets,
    details:
      "Integrated services mean fewer tradesmen to manage. We handle the prep, plumbing, and finish for a true luxury wetroom.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-matte-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Our <span className="text-gradient-cyan">Expertise</span>
          </h2>
          <p className="text-gray-400 font-sans text-lg">
            From meticulous preparation to the final polished grout line, we provide
            comprehensive tiling and wetroom solutions across South Wales.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-electric-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
              
              <div className="relative h-full glass-panel p-8 rounded-2xl transition-all duration-500 ease-in-out group-hover:-translate-y-2 group-hover:border-electric-cyan/50 overflow-hidden">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-electric-cyan/10 transition-colors duration-500">
                  <service.icon className="w-7 h-7 text-electric-cyan" />
                </div>
                
                {/* Title & Description */}
                <h3 className="text-2xl font-serif font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-sans leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Hidden Details Overlay (reveals on hover) */}
                <div className="absolute inset-0 bg-matte-black/95 backdrop-blur p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-center border border-electric-cyan/30 rounded-2xl">
                  <div className="w-14 h-14 rounded-full bg-electric-cyan/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-electric-cyan" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-white mb-3">
                    Precision Focus
                  </h3>
                  <p className="text-gray-300 font-sans leading-relaxed">
                    {service.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
