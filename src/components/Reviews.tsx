"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const allReviews = [
  { name: "Paul", text: "Kyle done a great job on tiling our exterior wall with rough face porcelain brick style tiles. His attention to detail is spot on. After completing the wall he re grouted our fire pit patio 10/10" },
  { name: "Susan", text: "Kyle's attention to detail when tiling our hall and kitchen were outstanding. He talked us through the best options to ensure a fantastic end result. We'd thoroughly recommend KDT and they will be our first choice for any similar work we need in the future." },
  { name: "Sam", text: "I would highly recommend KDT tiling. Kyle came to tile a kitchen and utility backsplash with metro tiles. He was professional, prompt and hard working. Before and throughout the project he kept in touch and communicated well about timings etc. It is obvious that he is passionate about his work and strives for the best for his clients. Our backsplash looks fantastic and has really enhanced the appearance of our kitchen and utility." },
  { name: "Rose", text: "Kyle did a great job tiling the bathroom floor after a flood left my previous laminate tiles in a mess. Great timekeeping and cleaned up after each stage. Any tiling needed I would definitely recommend KDT Tiling." },
  { name: "Jillian", text: "Kyle was fab start to finish Turned up to give quote when he said he would, kept in touch. He done and did a fabulous job on my cloakroom! Couldn't be happier, highly recommend Kyle" },
  { name: "Rebecca", text: "Kyle has recently finished tiling our kitchen floor. The communication was great, always replying quickly and came when agreed. He was professional, very helpful and patient - especially when my daughter was asking lots of questions and wanting to help! He did a fantastic job, I would recommend him to anyone needing any tiling work done. Thank you Kyle!" },
  { name: "Charlie", text: "Kyle was fab start to finish with us! Turned up to give quote when he said he would, kept in touch and communicated he could come earlier than we had booked if it was suitable, which it was, had no problem getting shouted at by our dogs 3 mornings in a row and did a fabulous job on our kitchen! Couldn't be happier" },
  { name: "Wendy", text: "Found KDT on FB, best decision ever made. Professional, friendly, arrived when agreed, all work completed at a lovely price. Would highly recommend. Will be using again for our bathroom. Thank you Kyle" },
  { name: "Jane", text: "A great job done on our en-suite floor. The job was clean and tidy and we were kept informed on each step as work progressed. We are very pleased with the job done and would recommend KDT tiling to our friends. Many thanks" },
  { name: "Jessica", text: "Kyle did a wonderful job of my conservatory tiles just before Christmas. He was clean, tidy and efficient. Couldn't recommend Kyle enough, he finished the job quickly and was very responsive with updates and photos of the progress!" },
  { name: "Claire", text: "Outstanding quality and first class service. Kyle finished my kitchen to perfection, with patience and professionalism. Would HIGHLY recommend ⭐⭐⭐⭐⭐ thank you!" },
  { name: "Stella", text: "great job done by Kyle, tiling my kitchen. Prompt tidy service" },
  { name: "Siân", text: "Highly recommend! Kyle tiled our downstairs WC and did a lovely job. The finish is really neat and tidy, and he kept us in the loop with timescales, start times etc. We're so happy with the result. It's transformed a boring room into something a bit more exciting. He was also a big hit with our toddler, who doesn't always take kindly to strangers! Hehe! Thanks Kyle" },
  { name: "Carys", text: "Kyle recently tiled our conservatory and kitchen. We're really pleased with his work, both rooms look amazing! He was responsive from start to finish and always turned up when he said he was going to. He was polite and patient, even when my dog and toddler were running around! He was even happy to come and change something last minute after I changed my mind (sorry Kyle!). Highly recommend for any tiling jobs, you won't be disappointed." },
  { name: "David", text: "Really happy with the tiling that Kyle completed on a very awkward kitchen with not a straight edge in sight. Completely trustworthy as I was away when he was doing the job but I received regular video messages throughout. Really professional from start to finish." },
  { name: "Karlie", text: "We recently had our bathroom tiled, and we are extremely impressed with the quality of work. From start to finish, Kyle demonstrated professionalism, attention to detail, and a great work ethic. The tiles were laid out with precision, and the grout lines are clean and even. The job was completed on time, with no mess left behind, and the results look fantastic. I highly recommend Kyle's services to anyone looking for top-notch tiling work!" }
];

export default function Reviews() {
  const [reviews, setReviews] = useState<typeof allReviews>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Shuffle and pick 6 random reviews on mount to avoid hydration mismatch
    const shuffled = [...allReviews].sort(() => 0.5 - Math.random());
    setReviews(shuffled.slice(0, 6));
  }, []);

  useEffect(() => {
    if (reviews.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [reviews, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  if (reviews.length === 0) return null;

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-electric-cyan/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-electric-cyan/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            What Our <span className="text-electric-cyan">Customers Say</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here is what some of our recent clients have to say about our work.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 sm:px-16">
          <button 
            onClick={handlePrev}
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/50 hover:bg-electric-cyan hover:text-black text-white border border-white/20 transition-all duration-300 backdrop-blur-md"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/50 hover:bg-electric-cyan hover:text-black text-white border border-white/20 transition-all duration-300 backdrop-blur-md"
            aria-label="Next review"
          >
            <ChevronRight size={24} className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="flex justify-center items-center min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 w-full shadow-2xl relative"
              >
                <Quote className="absolute top-6 left-6 md:top-8 md:left-8 w-12 h-12 text-electric-cyan/20" />
                <div className="relative z-10 text-center">
                  <p className="text-xl md:text-2xl text-gray-200 font-medium italic mb-8 leading-relaxed">
                    "{reviews[currentIndex].text}"
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-electric-cyan/20 rounded-full flex items-center justify-center">
                      <span className="text-electric-cyan font-bold text-xl">
                        {reviews[currentIndex].name.charAt(0)}
                      </span>
                    </div>
                    <div className="text-left">
                      <h4 className="text-white font-bold text-lg">{reviews[currentIndex].name}</h4>
                      <div className="flex text-electric-cyan text-sm">
                        {"★".repeat(5)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "bg-electric-cyan w-8" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
