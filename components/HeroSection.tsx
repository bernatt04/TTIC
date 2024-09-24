import React from 'react';
import { motion } from 'framer-motion';

// You can change this URL to your actual image URL
const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#0d1b2a] to-[#1e2746] overflow-hidden">
      <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between lg:space-x-12 py-20">
        {/* Left side (text) */}
        <div className="lg:w-1/2 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl font-extrabold text-white leading-tight lg:leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Quality Remote <span className="text-[#00FFC6]">Tutoring</span> - Without the Agency Fees
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-lg">
              Our personalized, one-on-one tutoring ensures the best results for students of all ages and academic levels.
            </p>
          </motion.div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <a
              href="#contact"
              className="inline-block bg-[#00FFC6] text-[#1e2746] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-[#00D4A6] transition-colors duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Right side (image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="lg:w-1/2 mt-12 lg:mt-0 relative z-10"
        >
          <img
            src="/img/student_learning.jpg" // Update to your actual image URL
            alt="Student Learning"
            className="rounded-xl shadow-2xl"
          />
        </motion.div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-opacity-20 bg-white pointer-events-none transform scale-150 translate-x-28 translate-y-24 blur-3xl"></div>
        <div className="absolute top-0 left-0 w-1/3 h-full bg-opacity-30 bg-white pointer-events-none transform scale-125 translate-y-48 blur-2xl"></div>
      </div>
    </section>
  );
};

export default Hero;
