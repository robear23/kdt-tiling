"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1000&auto=format&fit=crop",
    alt: "Luxury Marble Bathroom Tiling South Wales",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop",
    alt: "Modern Geometric Kitchen Splashback",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    alt: "Premium Wetroom Installation",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
    alt: "Large Format Porcelain Floor Tiles",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1000&auto=format&fit=crop",
    alt: "Herringbone Wall Tiling Feature",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=800&auto=format&fit=crop",
    alt: "Luxury Tiled Kitchen Backsplash",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Our <span className="text-gradient-cyan">Portfolio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 font-sans text-lg max-w-2xl mx-auto"
          >
            A selection of our recent high-end tiling projects. From minimalist
            bathrooms to expansive floor spaces, experience the KDT standard.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4 md:gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl group ${img.span}`}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Subtle gradient at bottom for potential text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
