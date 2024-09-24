import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiSun, FiMoon } from 'react-icons/fi';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  }, [darkMode]);

  // Updated FAQ content in English
  const faqData = [
    {
      question: "What is The Tutoring Collective?",
      answer:
        "The Tutoring Collective is a platform offering personalized, high-quality tutoring services to students of all ages, with a focus on improving academic performance and boosting confidence.",
    },
    {
      question: "What subjects do you offer?",
      answer:
        "We offer a wide range of subjects including Math, Science, English, History, and more. We tailor each session to fit the student’s needs and help them excel in their exams.",
    },
    {
      question: "How do I book a tutor?",
      answer:
        "You can book a tutor by visiting our 'Tutors' page, selecting the tutor that fits your needs, and following the instructions to book a session.",
    },
    {
      question: "Do you offer online tutoring?",
      answer:
        "Yes, all of our tutoring services are available online. Our tutors are equipped with the latest tools to provide interactive and effective online lessons.",
    },
    {
      question: "Can I choose my tutor?",
      answer:
        "Absolutely! You can browse through our list of tutors and choose the one that best fits your subject and learning style. All our tutors are experienced and qualified.",
    },
    {
      question: "What are your payment options?",
      answer:
        "We accept a variety of payment methods, including credit cards, PayPal, and bank transfers. Payment details are provided at the time of booking.",
    },
    {
      question: "Do you provide progress reports?",
      answer:
        "Yes, we provide weekly progress reports to ensure that parents and students are informed of improvements and areas that need more focus.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel or reschedule a session up to 24 hours before the scheduled time. Cancellations made within 24 hours may incur a fee.",
    },
    {
      question: "Do you offer group tutoring?",
      answer:
        "Yes, we offer group tutoring for certain subjects. Group sessions can be a great way to learn with peers at a reduced rate.",
    },
    {
      question: "How long is each tutoring session?",
      answer:
        "Most of our tutoring sessions last between 60 to 90 minutes, depending on the subject and student’s needs. You can discuss session lengths with your tutor.",
    },
  ];

  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`relative flex flex-col items-center py-16 px-4 min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-[#0d1b2a] via-[#1B263B] to-[#0d1b2a]'} text-white overflow-hidden`}>
      {/* Title of the FAQ page */}
      <motion.h1
        className="text-5xl font-extrabold text-center text-[#00D4A6] mb-8 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ fontFamily: 'Oswald, sans-serif' }}
      >
        Frequently Asked Questions
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
      <motion.input
        type="text"
        placeholder="Search questions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md p-3 mb-8 text-[#0d1b2a] rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#00D4A6] transition duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* FAQ Container */}
      <motion.div
        className="max-w-4xl mx-auto z-10 relative bg-white bg-opacity-10 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.02 }}
      >
        {filteredFAQs.map((faq, index) => (
          <div key={index} className="mb-6 border-b border-[#00D4A6] pb-4">
            <motion.div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(index)}
              whileHover={{ scale: 1.05 }}
            >
              <motion.h2
                className="text-2xl font-semibold text-[#00D4A6] mb-4"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {faq.question}
              </motion.h2>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index ? (
                  <FiChevronUp className="text-[#00D4A6]" size={24} />
                ) : (
                  <FiChevronDown className="text-[#00D4A6]" size={24} />
                )}
              </motion.div>
            </motion.div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  className="text-white text-lg mt-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQ;
