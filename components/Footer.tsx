import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#0d1b2a] to-[#1e2746] text-white py-16 overflow-hidden">
      {/* Background gradient decoration */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a] to-[#1e2746] opacity-20"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto text-center relative z-10">
        {/* Logo or Brand Name */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <h2 className="text-3xl text-white font-bold tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>
            The Tutoring Collective
          </h2>
        </motion.div>

        {/* Quick Links and Social Media Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#00FFC6]">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-white hover:text-[#00FFC6] transition duration-300">Home</a></li>
              <li><a href="/how-we-tutor" className="text-white hover:text-[#00FFC6] transition duration-300">How We Tutor</a></li>
              <li><a href="/our-tutors" className="text-white hover:text-[#00FFC6] transition duration-300">Our Tutors</a></li>
              <li><a href="/subjects" className="text-white hover:text-[#00FFC6] transition duration-300">Subjects</a></li>
              <li><a href="/contact" className="text-white hover:text-[#00FFC6] transition duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#00FFC6]">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="text-white hover:text-[#00FFC6] transition duration-300">FAQ</a></li>
              <li><a href="/reviews" className="text-white hover:text-[#00FFC6] transition duration-300">Reviews</a></li>
              <li><a href="/blog" className="text-white hover:text-[#00FFC6] transition duration-300">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#00FFC6]">Connect With Us</h3>
            <div className="flex justify-center space-x-6 mt-4">
              <motion.a
                href="#"
                className="text-white text-2xl hover:text-blue-500"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                href="#"
                className="text-white text-2xl hover:text-blue-300"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="#"
                className="text-white text-2xl hover:text-pink-500"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
        >
          <p className="text-sm text-gray-400">&copy; 2024 The Tutoring Collective. All rights reserved.</p>
        </motion.div>
      </div>

      {/* Decorative Wave Effect at the Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-24 bg-gradient-to-t from-[#0d1b2a] to-transparent"></div>
    </footer>
  );
};

export default Footer;
