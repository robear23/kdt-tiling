"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, BadgePoundSterling } from "lucide-react";

const features = [
  {
    title: "Fully Guaranteed",
    description: "Every project comes with a comprehensive guarantee. We stand behind our craftsmanship and materials to give you complete peace of mind.",
    icon: ShieldCheck,
  },
  {
    title: "Fully Insured Experts",
    description: "Our tradesmen are fully insured and highly experienced. Your property is protected, and our work is conducted to the highest safety standards.",
    icon: FileCheck,
  },
  {
    title: "Competitive Pricing",
    description: "We offer transparent, no-obligation quotes. Exceptional quality and luxury finishes shouldn't mean unreasonable prices.",
    icon: BadgePoundSterling,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-matte-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col items-center text-center ${
                index !== 0 ? "pt-12 md:pt-0" : ""
              } md:px-8`}
            >
              <div className="w-16 h-16 rounded-2xl bg-electric-cyan/10 flex items-center justify-center mb-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-electric-cyan" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 font-sans leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
