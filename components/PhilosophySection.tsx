import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaChartLine, FaLaptop, FaUserGraduate } from 'react-icons/fa'; // Icons for each philosophy

const PhilosophySection: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#f9fafb] to-[#e8ecf3] overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#e8ecf3"
            fillOpacity="1"
            d="M0,64L40,101.3C80,139,160,213,240,240C320,267,400,245,480,218.7C560,192,640,160,720,165.3C800,171,880,213,960,213.3C1040,213,1120,171,1200,154.7C1280,139,1360,149,1400,154.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold text-[#1e2746] mb-10"
          style={{ fontFamily: 'Oswald, sans-serif' }}
        >
          Our <span className="text-[#00FFC6]">Philosophy</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          We believe each student is unique with their own needs, and their tutoring plan should be tailored to them. By applying our EPOU philosophy (Engaging, Progressive, Online, Understanding), we ensure that every lesson is suited to individual students.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Engaging */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <FaLightbulb className="text-[#00FFC6] text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-[#1e2746] mb-4">Engaging</h3>
            <p className="text-gray-500">We make learning interactive, fun, and engaging to keep students motivated and excited.</p>
          </div>

          {/* Progressive */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <FaChartLine className="text-[#00FFC6] text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-[#1e2746] mb-4">Progressive</h3>
            <p className="text-gray-500">Our lessons focus on constant growth and improvement to help students excel progressively.</p>
          </div>

          {/* Online */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <FaLaptop className="text-[#00FFC6] text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-[#1e2746] mb-4">Online</h3>
            <p className="text-gray-500">Using cutting-edge technology, we make learning accessible and flexible through online platforms.</p>
          </div>

          {/* Understanding */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <FaUserGraduate className="text-[#00FFC6] text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-[#1e2746] mb-4">Understanding</h3>
            <p className="text-gray-500">We tailor our tutoring plans to the unique needs of each student for a personalized learning experience.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
