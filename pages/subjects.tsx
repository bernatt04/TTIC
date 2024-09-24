import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const floatEffect = {
  hover: { y: -10, transition: { duration: 0.3, yoyo: Infinity } },
};

// Intro Section with slogan and image
const IntroSection: React.FC = () => (
  <section className="relative bg-gradient-to-r from-[#0d1b2a] to-[#1b263b] text-white py-20 overflow-hidden">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
      <motion.div
        className="max-w-xl text-left md:pr-10"
        initial="hidden"
        whileInView="visible"
        variants={fadeInRight}
      >
        <h1 className="text-6xl font-extrabold mb-6 leading-tight text-[#00D4A6]" style={{ fontFamily: 'Oswald, sans-serif' }}>
          Empowering Every Student with Diverse, High-Quality Subject Tuition
        </h1>
        <p className="text-lg leading-relaxed text-gray-300">
          Our experienced tutors provide tailored lessons for students of all ages and curricula, including GCSEs, A-Levels, and more. Achieve your best results with us.
        </p>
      </motion.div>
      <motion.div
        className="w-full md:w-[600px] mt-8 md:mt-0 rounded-xl shadow-lg overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        <img src="../pexels-karolina-grabowska-4195330.jpg" alt="Students learning" className="w-full object-cover" />
      </motion.div>
    </div>

    {/* Background wave */}
    <div className="absolute inset-0 z-0">
      <svg
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#1b263b"
          fillOpacity="1"
          d="M0,320L40,277.3C80,235,160,149,240,112C320,75,400,85,480,122.7C560,160,640,224,720,234.7C800,245,880,203,960,170.7C1040,139,1120,117,1200,106.7C1280,96,1360,96,1400,96L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </svg>
    </div>
  </section>
);

// Education Section
const EducationSection: React.FC = () => (
  <section className="bg-gradient-to-b from-[#1B263B] to-[#0d1b2a] text-white py-24">
    <div className="container mx-auto text-center">
      <motion.h2
        className="text-5xl font-extrabold mb-10 text-[#00D4A6]"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        style={{ fontFamily: 'Oswald, sans-serif' }}
      >
        Achieve Your Best Results
      </motion.h2>
      <motion.p
        className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-300"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        Our tutors are experienced professionals who provide personalized lessons and ongoing support to help you reach your academic goals. Whether you're working towards your GCSEs, A Levels, International Baccalaureate, or university entry exams, we've got you covered.
      </motion.p>
    </div>
  </section>
);

// Subjects Section
const SubjectsSection: React.FC = () => (
  <section className="relative bg-gradient-to-r from-[#e6f7ff] to-[#f2fcff] py-24 overflow-hidden">
    {/* Magic background shapes */}
    <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-30">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#00d4a6" fillOpacity="0.3" d="M0,32L48,64C96,96,192,160,288,160C384,160,480,96,576,96C672,96,768,160,864,165.3C960,171,1056,117,1152,106.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>

    <div className="container mx-auto text-center relative z-10">
      <motion.h2
        className="text-5xl font-extrabold text-[#00D4A6] mb-16"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        style={{ fontFamily: 'Oswald, sans-serif' }}
      >
        Subjects We Offer
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-16 px-8 md:px-0"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
      >
        {/* First Column */}
        <motion.div
          className="space-y-4 text-left bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          variants={fadeInUp}
        >
          <h3 className="text-3xl font-bold text-[#00D4A6]">GCSE Subjects</h3>
          <ul className="text-lg space-y-4 text-gray-700">
            {['Accounting', 'Applications of Mathematics', 'Arabic', 'Biology', 'Business', 'Business Management', 'Chemistry', 'Common Entry Exams / 11+', 'Computing', 'Computer Science', 'English', 'English Literature', 'English as a Foreign Language', 'French'].map(
              (subject) => (
                <motion.li
                  key={subject}
                  className="hover:text-[#00D4A6] transition-all cursor-pointer hover:underline relative"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  variants={floatEffect}
                >
                  {subject}
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        {/* Second Column */}
        <motion.div
          className="space-y-4 text-left bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          variants={fadeInUp}
        >
          <h3 className="text-3xl font-bold text-[#00D4A6]">A Level & IB Subjects</h3>
          <ul className="text-lg space-y-4 text-gray-700">
            {['Geography', 'German', 'History', 'Human Biology', 'Italian', 'Mandarin', 'Mathematics', 'Oxbridge Admissions', 'Physics', 'Politics', 'Psychology', 'Sociology', 'Spanish', 'University Entry Exams'].map(
              (subject) => (
                <motion.li
                  key={subject}
                  className="hover:text-[#00D4A6] transition-all cursor-pointer hover:underline relative"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  variants={floatEffect}
                >
                  {subject}
                </motion.li>
              )
            )}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Main Page Component
const SubjectsPage: React.FC = () => {
  return (
    <div className="bg-[#F8F8F2]">
      {/* Intro Section */}
      <IntroSection />

      {/* Education Section */}
      <EducationSection />

      {/* Subjects Section */}
      <SubjectsSection />
    </div>
  );
};

export default SubjectsPage;
