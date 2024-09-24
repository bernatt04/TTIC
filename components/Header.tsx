import React, { useState, useEffect, useCallback } from 'react';
import { Menu } from '@headlessui/react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import '@fontsource/oswald'; // Import Oswald font for header text
import '@fontsource/inter';  // Import Inter font for navigation text

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

const linkHoverVariants = {
  hover: {
    scale: 1.1,
    borderBottom: '2px solid #0F705A',
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
};

const iconVariants = {
  hover: { rotate: 90, scale: 1.1 },
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(min-width: 1024px)');
    setIsDesktopOrLaptop(mediaQueryList.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsDesktopOrLaptop(event.matches);
    };

    mediaQueryList.addEventListener('change', handleMediaQueryChange);
    return () => mediaQueryList.removeEventListener('change', handleMediaQueryChange);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="bg-gradient-to-r from-[#0d1b2a] to-[#1e2746] text-white shadow-xl top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        {/* Logo Section */}
        <a href="/" className="logo-container flex items-center space-x-6 cursor-pointer transform hover:scale-105 transition-transform duration-300 mr-16">
          <motion.div
            className="logo-img"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/img/Icons and Logos/Logo_TTC.png"
              alt="The Tutoring Collective Logo"
              className="w-28 drop-shadow-md"
            />
          </motion.div>
          <motion.div
            className="logo-text"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-4xl font-bold leading-none text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
              The
            </span>
            <span className="block text-4xl font-bold leading-none text-white text-center" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Tutoring
            </span>
            <span className="block text-4xl font-bold leading-none text-white text-center" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Collective
            </span>
          </motion.div>
        </a>

        {/* Desktop Navigation */}
        {isDesktopOrLaptop ? (
          <nav className="flex-grow flex justify-end items-center space-x-6">
            {['HOME', 'HOW WE TUTOR', 'OUR TUTORS', 'SUBJECTS', 'REVIEWS', 'CONTACT'].map((item) => (
              <motion.a
                key={item}
                href={item === 'HOME' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="text-lg font-semibold text-[#708090] hover:text-[#00FFC6] relative px-2"
                variants={linkHoverVariants}
                whileHover="hover"
                whileTap="tap"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
        ) : (
          <motion.button
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            whileHover="hover"
            variants={iconVariants}
            className="text-white"
          >
            {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </motion.button>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {!isDesktopOrLaptop && isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0d1b2a] text-white shadow-md"
          >
            <Menu as="div" className="container mx-auto px-6 py-4 space-y-4">
              {['Home', 'How We Tutor', 'Our Tutors', 'Subjects', 'Reviews', 'Contact'].map((item) => (
                <Menu.Item key={item}>
                  {({ active }) => (
                    <motion.a
                      href={item === 'HOME' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                      className={`block px-4 py-2 rounded-md text-lg font-medium transition-colors duration-300 ${
                        active ? 'bg-gray-700 text-white' : 'text-gray-300'
                      }`}
                      variants={linkHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item}
                    </motion.a>
                  )}
                </Menu.Item>
              ))}
            </Menu>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
