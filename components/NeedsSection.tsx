import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa'; // Importing icons

const NeedsSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#0d1b2a] text-white overflow-hidden">
      {/* Background SVG wave */}
      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#1e2746"
            fillOpacity="1"
            d="M0,320L40,298.7C80,277,160,235,240,208C320,181,400,171,480,192C560,213,640,267,720,293.3C800,320,880,320,960,277.3C1040,235,1120,149,1200,106.7C1280,64,1360,64,1400,64L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-extrabold mb-10 text-center"
          style={{ fontFamily: 'Oswald, sans-serif' }}
        >
          Understanding <span className="text-[#00FFC6]">Your Needs</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg leading-relaxed text-center mb-12 max-w-4xl mx-auto"
        >
          Our approach revolves around understanding your unique learning style and academic goals. With this, we tailor
          our lessons to meet your needs and ensure you stay on the path to success.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tailored Lessons Card */}
          <motion.div
            className="bg-white text-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FaChalkboardTeacher className="text-[#00FFC6] text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-[#1e2746]">Tailored Lessons</h3>
            <p className="text-lg leading-relaxed">
              Our tutoring plans are customized based on your personal and academic goals. We adapt to your learning style for better results.
            </p>
          </motion.div>

          {/* Flexible Scheduling Card */}
          <motion.div
            className="bg-white text-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <FaCalendarAlt className="text-[#00FFC6] text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-[#1e2746]">Flexible Scheduling</h3>
            <p className="text-lg leading-relaxed">
              We offer lessons that fit around your timetable and lifestyle, ensuring a balance between learning and other commitments.
            </p>
          </motion.div>

          {/* Regular Feedback Card */}
          <motion.div
            className="bg-white text-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <FaCheckCircle className="text-[#00FFC6] text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-[#1e2746]">Regular Feedback</h3>
            <p className="text-lg leading-relaxed">
              Receive ongoing feedback to track your progress and make adjustments to help you achieve steady academic improvement.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NeedsSection;
