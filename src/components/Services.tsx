"use client";

import { motion, Variants } from "framer-motion";
import { Grid, Layout, Wrench, Layers, Hammer } from "lucide-react";

const services = [
  {
    title: "Wall Tiling (All Aspects)",
    description:
      "All aspects of wall tiling, including kitchen splashbacks, feature walls, shower enclosures, and complete bathroom surrounds.",
    icon: Layout,
    details:
      "Expert installation of ceramic, porcelain, mosaic, and natural stone. Precision cuts, layout symmetry, and immaculate grouting guaranteed.",
  },
  {
    title: "Floor Tiling (All Aspects)",
    description:
      "From large-format tiles to complex layouts, we cover all aspects of floor tiling with perfect sub-floor prep and leveling.",
    icon: Grid,
    details:
      "Meticulous preparation, self-leveling compounds, decoupling membranes, underfloor heating integration, and durable finishes.",
  },
  {
    title: "Domestic Plumbing",
    description:
      "Professional domestic plumbing, handling pipework adjustments, sanitaryware installations, and full bathroom refits.",
    icon: Wrench,
    details:
      "Seamless integration with tiling work. We handle leak repairs, basin/toilet installs, shower valves, and radiator installations.",
  },
  {
    title: "Wall & Ceiling Panelling",
    description:
      "Premium wall and ceiling panelling to add modern style, seamless finishes, and durability to your living spaces.",
    icon: Layers,
    details:
      "Expert installation of decorative wood panelling, PVC ceiling panels, and moisture-resistant panels for kitchens and bathrooms.",
  },
  {
    title: "Small Bricklaying Jobs",
    description:
      "Small-scale masonry and brickwork, including garden walls, steps, fireplace surrounds, and minor structural repairs.",
    icon: Hammer,
    details:
      "Precise, clean, and durable brick and block work to enhance your property's exterior, garden, or indoor fireplace areas.",
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
            From meticulous preparation to the final polished finish, we provide
            comprehensive property improvement solutions across South Wales.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] min-w-[280px] max-w-[380px] flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-electric-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
              
              <div className="relative flex-1 flex flex-col glass-panel p-8 rounded-2xl transition-all duration-500 ease-in-out group-hover:-translate-y-2 group-hover:border-electric-cyan/50 overflow-hidden">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-electric-cyan/10 transition-colors duration-500">
                  <service.icon className="w-7 h-7 text-electric-cyan" />
                </div>
                
                {/* Title & Description */}
                <h3 className="text-2xl font-serif font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-sans leading-relaxed mb-6 flex-1">
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
