"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Send } from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0b] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 -mr-64 -mt-64 w-[600px] h-[600px] bg-electric-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Let's Discuss Your <span className="text-gradient-cyan">Project</span>
            </h2>
            <p className="text-gray-400 font-sans text-lg mb-10 max-w-md leading-relaxed">
              Ready to transform your space? Contact us today for a free, no-obligation quote. Our team is ready to bring your vision to life.
            </p>

            <div className="space-y-8 mb-12">
              <a
                href="tel:+447713246545"
                className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-electric-cyan/10 flex items-center justify-center group-hover:bg-electric-cyan transition-colors duration-300">
                  <Phone className="w-6 h-6 text-electric-cyan group-hover:text-black" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1">Call Us Directly</p>
                  <p className="text-xl text-white font-semibold tracking-wide">+44 7713 246545</p>
                </div>
              </a>

              <a
                href="mailto:KDTTILINGSWANSEA@outlook.com"
                className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-electric-cyan/10 flex items-center justify-center group-hover:bg-electric-cyan transition-colors duration-300">
                  <Mail className="w-6 h-6 text-electric-cyan group-hover:text-black" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1">Email Us</p>
                  <p className="text-lg md:text-xl text-white font-semibold tracking-wide break-all">
                    KDTTILINGSWANSEA@outlook.com
                  </p>
                </div>
              </a>
            </div>

            {/* Social Card */}
            <a
              href="https://instagram.com/kdttilingswansea"
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-panel p-6 rounded-2xl border-electric-cyan/20 hover:border-electric-cyan/50 hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <InstagramIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 flex items-center">
                    @kdttilingswansea
                    <span className="ml-2 text-xs bg-electric-cyan/20 text-electric-cyan px-2 py-1 rounded-full">Follow us</span>
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    Join our 200+ followers to see daily project updates! Slide into our DMs for an instant response.
                  </p>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel rounded-3xl p-8 md:p-10 border border-white/10 relative"
          >
            <h3 className="text-2xl font-serif font-semibold text-white mb-8">
              Request a Callback
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Floating Label Input: Name */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="block px-0 py-4 w-full text-base text-white bg-transparent border-0 border-b-2 border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-electric-cyan peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute text-base text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-electric-cyan peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Full Name
                </label>
              </div>

              {/* Floating Label Input: Phone */}
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  className="block px-0 py-4 w-full text-base text-white bg-transparent border-0 border-b-2 border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-electric-cyan peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="phone"
                  className="absolute text-base text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-electric-cyan peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone Number
                </label>
              </div>

              {/* Floating Label Input: Email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="block px-0 py-4 w-full text-base text-white bg-transparent border-0 border-b-2 border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-electric-cyan peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute text-base text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-electric-cyan peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email Address (Optional)
                </label>
              </div>

              {/* Floating Label Textarea: Details */}
              <div className="relative">
                <textarea
                  id="details"
                  rows={4}
                  className="block px-0 py-4 w-full text-base text-white bg-transparent border-0 border-b-2 border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-electric-cyan peer resize-none"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="details"
                  className="absolute text-base text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-electric-cyan peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Project Details
                </label>
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center space-x-2 bg-electric-cyan text-black font-bold py-4 rounded hover:bg-cyan-300 transition-all duration-300 mt-4"
              >
                <span>Send Request</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
