import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiSearch, FiSun, FiMoon } from 'react-icons/fi';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const postsPerPage = 5;

  // Updated blog data with tutoring and subjects information
  const blogData = [
    { title: "Mastering GCSE Mathematics", category: "Mathematics", excerpt: "Understand the key concepts in GCSE Maths...", content: "GCSE Mathematics covers various topics including algebra, geometry, and statistics. Here's how to ace your exams...", date: "2024-01-01" },
    { title: "Top Tips for English Literature A-Levels", category: "English", excerpt: "How to analyze texts effectively in A-Level English...", content: "English Literature A-Level can be challenging, but with the right approach, you can excel in analyzing literature...", date: "2024-01-05" },
    { title: "Preparing for Common Entry Exams", category: "Common Entry Exams / 11+", excerpt: "What you need to know to succeed in 11+ exams...", content: "Common entry exams require a focus on verbal reasoning, mathematics, and English. Here’s a complete guide to your preparation...", date: "2024-01-10" },
    { title: "How to Excel in A-Level Physics", category: "Physics", excerpt: "Tackle the hardest concepts in A-Level Physics...", content: "From mechanics to electromagnetism, A-Level Physics can be a complex subject. Here's how to approach it with confidence...", date: "2024-01-15" },
    { title: "Business Studies: Key Areas for GCSE Success", category: "Business", excerpt: "Understand business fundamentals in your GCSEs...", content: "Business Studies covers finance, marketing, and management. Learn how to succeed in your exams...", date: "2024-01-20" },
    { title: "Achieving Fluency in Mandarin for Beginners", category: "Mandarin", excerpt: "How to master Mandarin with simple steps...", content: "Mandarin is one of the most spoken languages in the world. Here's how to begin learning and achieve fluency over time...", date: "2024-01-25" },
    { title: "Preparing for University Entry Exams", category: "University Entry Exams", excerpt: "Acing your university admission tests...", content: "University entry exams can be daunting. Learn about the best strategies to prepare for Oxbridge and other universities...", date: "2024-01-30" },
    { title: "French: Preparing for GCSE and A-Level", category: "French", excerpt: "Key tips to excel in French for GCSE and A-Levels...", content: "Mastering French requires a combination of vocabulary building, grammar understanding, and practicing oral exams...", date: "2024-02-01" },
    { title: "Getting Ready for A-Level History", category: "History", excerpt: "Master the skills needed for A-Level History exams...", content: "A-Level History is more than remembering dates; it's about understanding cause and effect. Here's how to write compelling essays...", date: "2024-02-05" },
    { title: "The Importance of Critical Thinking in Politics", category: "Politics", excerpt: "Why critical thinking matters in A-Level Politics...", content: "A-Level Politics requires not just knowledge but the ability to critically evaluate political systems. Learn how to develop this skill...", date: "2024-02-10" },
  ];

  const categories = [
    "All", "Mathematics", "English", "Common Entry Exams / 11+", "Physics", 
    "Business", "Mandarin", "University Entry Exams", "French", "History", "Politics"
  ];

  const filteredPosts = blogData.filter(post =>
    (selectedCategory === 'All' || post.category === selectedCategory) &&
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredPosts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  }, [darkMode]);

  return (
    <div className={`relative flex flex-col items-center py-16 px-4 min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#0d1b2a]'} text-white overflow-hidden`}>
      {/* Blog Page Title */}
      <motion.h1
        className="text-5xl font-extrabold text-center text-[#00D4A6] mb-8 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ fontFamily: 'Oswald, sans-serif' }}
      >
        Tutoring Blog
      </motion.h1>

      {/* Dark/Light Mode Toggle Button */}
      <motion.button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 p-2 bg-[#00D4A6] text-[#0d1b2a] rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
        whileHover={{ scale: 1.1 }}
      >
        {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
      </motion.button>

      {/* Search Bar */}
      <motion.div
        className="flex items-center w-full max-w-md p-3 mb-8 text-[#0d1b2a] bg-white rounded-md shadow-md focus-within:ring-2 focus-within:ring-[#00D4A6] transition duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <FiSearch className="mr-2 text-gray-400" />
        <input
          type="text"
          placeholder="Search tutoring topics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full focus:outline-none"
        />
      </motion.div>

      {/* Category Filter */}
      <div className="flex space-x-4 mb-8">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${selectedCategory === category ? 'bg-[#00D4A6] text-[#0d1b2a]' : 'bg-white text-[#0d1b2a]'} shadow-md hover:shadow-lg transition-shadow duration-300`}
            whileHover={{ scale: 1.05 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Blog Post Container */}
      <motion.div
        className="max-w-4xl mx-auto z-10 relative bg-white bg-opacity-10 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.02 }}
      >
        {paginatedPosts.map((post, index) => (
          <div key={index} className="mb-6 border-b border-[#00D4A6] pb-4">
            <motion.div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleExpand(index)}
              whileHover={{ scale: 1.05 }}
            >
              <motion.h2
                className="text-2xl font-semibold text-[#00D4A6] mb-4"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {post.title}
              </motion.h2>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {expandedIndex === index ? (
                  <FiChevronUp className="text-[#00D4A6]" size={24} />
                ) : (
                  <FiChevronDown className="text-[#00D4A6]" size={24} />
                )}
              </motion.div>
            </motion.div>

            <p className="text-sm text-gray-400 mb-2">{post.date} - Category: {post.category}</p>

            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  className="text-white text-lg mt-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <p>{post.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>

      {/* Pagination */}
      <div className="flex items-center space-x-4 mt-8">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-[#00D4A6] text-[#0d1b2a] rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Previous
        </button>
        <span className="text-[#00D4A6] font-semibold">Page {currentPage} of {Math.ceil(filteredPosts.length / postsPerPage)}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(filteredPosts.length / postsPerPage)}
          className={`px-4 py-2 bg-[#00D4A6] text-[#0d1b2a] rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ${currentPage === Math.ceil(filteredPosts.length / postsPerPage) ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blog;
