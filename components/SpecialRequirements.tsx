import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaHandsHelping, FaEye } from 'react-icons/fa'; // Icons representing special needs

const SpecialRequirements: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-[#f9f9fc] to-[#e0f7fa] overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#00D4A6] rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#1e2746] rounded-full opacity-30 blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold text-[#1e2746] mb-10"
          style={{ fontFamily: 'Oswald, sans-serif' }}
        >
          Special Requirements
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          At The Tutoring Collective, we offer specialized tutoring programs for students with ADHD, anxiety, dyslexia,
          and other learning differences. Our goal is to tailor programs to meet their specific needs and help them thrive academically and socially.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* ADHD Icon */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
            <FaBrain className="text-[#00D4A6] text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-[#1e2746] mb-2">ADHD</h3>
            <p className="text-gray-600">
              We offer strategies and lessons tailored for students with ADHD to help them stay focused and engaged.
            </p>
          </div>

          {/* Anxiety Icon */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
            <FaHandsHelping className="text-[#00D4A6] text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-[#1e2746] mb-2">Anxiety</h3>
            <p className="text-gray-600">
              For students with anxiety, we create a calm, supportive environment that fosters confidence.
            </p>
          </div>

          {/* Dyslexia Icon */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
            <FaEye className="text-[#00D4A6] text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-[#1e2746] mb-2">Dyslexia</h3>
            <p className="text-gray-600">
              Our tutors use specialized methods to support students with dyslexia in improving reading and writing skills.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialRequirements;
