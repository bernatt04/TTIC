import React from 'react';
import { motion } from 'framer-motion';
import { FaHandsHelping, FaChalkboardTeacher } from 'react-icons/fa'; // Adding relevant icons

const LearningEnvironment: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-[#e6f7ff] to-[#f2fcff] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#e6f7ff"
            fillOpacity="1"
            d="M0,64L40,106.7C80,149,160,235,240,240C320,245,400,171,480,165.3C560,160,640,224,720,245.3C800,267,880,245,960,229.3C1040,213,1120,203,1200,202.7C1280,203,1360,213,1400,218.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold text-[#1e2746] mb-10 text-center"
          style={{ fontFamily: 'Oswald, sans-serif' }}
        >
          Creating an <span className="text-[#00D4A6]">Ideal Learning Environment</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-600 leading-relaxed text-center mb-12 max-w-3xl mx-auto"
        >
          We strive to create a productive and supportive learning environment that encourages students to participate
          actively, build their confidence, and stay engaged.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Trust & Motivation Card */}
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
            <FaHandsHelping className="text-[#00D4A6] text-4xl mb-4" />
            <h3 className="text-2xl font-bold text-[#1e2746] mb-4">Trust & Motivation</h3>
            <p className="text-lg leading-relaxed">
              We foster a trusting environment where students feel motivated to participate, ask questions, and take charge of their learning.
            </p>
          </div>

          {/* Dynamic Lessons Card */}
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
            <FaChalkboardTeacher className="text-[#00D4A6] text-4xl mb-4" />
            <h3 className="text-2xl font-bold text-[#1e2746] mb-4">Dynamic Lessons</h3>
            <p className="text-lg leading-relaxed">
              Our lessons are designed to be interactive, encouraging students to stay engaged and active throughout the learning process.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningEnvironment;
