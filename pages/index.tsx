import React from 'react';
import HeroSection from '../components/HeroSection';
import CursoCard from '../components/CursoCard';
import Testimonials from '../components/Testimonials';
import useCursos from '../hooks/useCursos';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const { cursos, loading, error } = useCursos();

  return (
    <div>
      <HeroSection />
      
      <section className="bg-gradient-to-br from-[#e6f7ff] to-[#f2fcff] py-20">
  <div className="container mx-auto px-6">
    <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-8">
      {/* Our Commitment Section */}
      <motion.div
        className="lg:w-1/3 bg-white rounded-xl shadow-lg p-8 mb-10 lg:mb-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Icon with animation */}
        <motion.div
          className="flex justify-center mb-6"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/img/Icons and Logos/education.svg" alt="Commitment Icon" className="w-16 h-16" />
        </motion.div>
        {/* Title */}
        <h3 className="text-3xl font-extrabold text-[#1e2746] text-center mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
          Our Commitment
        </h3>
        {/* Description */}
        <p className="text-gray-700 text-center text-lg leading-relaxed">
          The Tutoring Collective was born with the aim to break down educational barriers and provide tailored quality tuition by making online tuition accessible and affordable for anyone. Our tutors help students of all ages improve their confidence and grades with personalized tuition at a fraction of what tutoring agencies cost without compromising quality.
        </p>
      </motion.div>

      {/* How We Do It Section */}
      <motion.div
        className="lg:w-1/3 bg-white rounded-xl shadow-lg p-8 mb-10 lg:mb-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Icon with animation */}
        <motion.div
          className="flex justify-center mb-6"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/img/Icons and Logos/approved.svg" alt="How We Do It Icon" className="w-16 h-16" />
        </motion.div>
        {/* Title */}
        <h3 className="text-3xl font-extrabold text-[#1e2746] text-center mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
          How We Do It
        </h3>
        {/* Description */}
        <p className="text-gray-700 text-center text-lg leading-relaxed">
          Our tutors are our most valuable assets due to the importance we place on recruiting. All of our tutors specialize in their respective subjects across multiple exam boards. They are patient, kind, flexible, and can adapt their teaching style to your needs.
        </p>
      </motion.div>

      {/* Why Support TTC Section */}
      <motion.div
        className="lg:w-1/3 bg-white rounded-xl shadow-lg p-8 mb-10 lg:mb-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        {/* Icon with animation */}
        <motion.div
          className="flex justify-center mb-6"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/img/Icons and Logos/badge.svg" alt="Why Support Icon" className="w-16 h-16" />
        </motion.div>
        {/* Title */}
        <h3 className="text-3xl font-extrabold text-[#1e2746] text-center mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
          Why Support TTC
        </h3>
        {/* Description */}
        <p className="text-gray-700 text-center text-lg leading-relaxed">
          We find the best tutor for your needs at a fair price and ensure the tutors are paid fairly. Our tutors are tried and tested and will make the learning experience enjoyable. Weekly progress reports ensure that the quality of tuition remains the best.
        </p>
      </motion.div>
    </div>
  </div>
</section>


      <Testimonials />

      <section className="py-16 bg-gradient-to-b from-[#0d1b2a] to-[#1e2746] text-center text-white">
        <div className="container mx-auto">
          {/* Heading */}
          <h2 className="text-5xl text-white font-extrabold mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Ready to Excel in Your Studies?
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Discover our personalized tutoring services and get paired with expert tutors to help you achieve your academic goals. 
            We provide tailored, one-on-one tutoring in a variety of subjects.
          </p>

          {/* Call to Action Button */}
          <a
            href="/tutoring-services"
            className="inline-block bg-[#00FFC6] text-[#1e2746] font-bold py-4 px-10 rounded-full shadow-lg hover:bg-[#00D4A6] hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Explore Tutoring Services
          </a>
        </div>
      </section>


    </div>
  );
};

export default Home;
