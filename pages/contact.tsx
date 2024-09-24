import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Validation regex for email and phone number
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?\d{10,15}$/;

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: false, phone: false, email: false, message: false });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Handle inline validation
    if (name === 'email') {
      setErrors({ ...errors, email: !emailRegex.test(value) });
    } else if (name === 'phone') {
      setErrors({ ...errors, phone: !phoneRegex.test(value) });
    } else {
      setErrors({ ...errors, [name]: value.trim() === '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, message } = form;

    // Basic form validation
    const newErrors = {
      name: name.trim() === '',
      phone: !phoneRegex.test(phone),
      email: !emailRegex.test(email),
      message: message.trim() === '',
    };

    if (Object.values(newErrors).every((valid) => !valid)) {
      setSubmitted(true);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-[#1e2746] via-[#1e2746] to-[#1e2746] min-h-screen py-24 text-white overflow-hidden">
      {/* Parallax Background Decoration */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.2) 2px, transparent 2px)`,
          backgroundSize: '60px 60px',
        }}
        animate={{
          backgroundPosition: ['0 0', '100px 100px', '0 0'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Contact Form Section */}
      <div className="container mx-auto relative z-10 max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Get in Touch
          </h1>
          <p className="text-lg text-gray-300">
            We’re here to help you with any inquiries. Whether you have questions about our services or need more information, feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Contact Form */}
          <form className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-2xl relative" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-white mb-2" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-900 bg-opacity-30 border-2 ${errors.name ? 'border-red-500' : 'border-transparent'} rounded-lg focus:border-blue-500 outline-none`}
                  placeholder="Your Full Name"
                />
                {errors.name && <p className="text-red-500 mt-1 text-sm">Please enter your name.</p>}
              </div>

              <div>
                <label className="block text-lg font-semibold text-white mb-2" htmlFor="phone">
                  Telephone:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-900 bg-opacity-30 border-2 ${errors.phone ? 'border-red-500' : 'border-transparent'} rounded-lg focus:border-blue-500 outline-none`}
                  placeholder="Your Phone Number"
                />
                {errors.phone && <p className="text-red-500 mt-1 text-sm">Please enter a valid phone number.</p>}
              </div>

              <div>
                <label className="block text-lg font-semibold text-white mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-900 bg-opacity-30 border-2 ${errors.email ? 'border-red-500' : 'border-transparent'} rounded-lg focus:border-blue-500 outline-none`}
                  placeholder="Your Email Address"
                />
                {errors.email && <p className="text-red-500 mt-1 text-sm">Please enter a valid email address.</p>}
              </div>

              <div>
                <label className="block text-lg font-semibold text-white mb-2" htmlFor="message">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full h-36 px-4 py-3 bg-gray-900 bg-opacity-30 border-2 ${errors.message ? 'border-red-500' : 'border-transparent'} rounded-lg focus:border-blue-500 outline-none`}
                  placeholder="Your Message"
                />
                {errors.message && <p className="text-red-500 mt-1 text-sm">Please enter your message.</p>}
              </div>

              <div className="text-center">
                <motion.button
                  type="submit"
                  className="px-6 py-3 bg-[#00FFC6] text-[#1e2746] font-bold rounded-full hover:bg-[#00D4A6] transition-colors duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                </motion.button>
              </div>
            </div>
          </form>

          {/* Contact Information (if needed) */}
          <motion.div
            className="flex flex-col justify-center bg-gray-900 bg-opacity-20 backdrop-blur-lg p-8 rounded-xl shadow-2xl text-gray-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-4">Contact Information</h2>
            <p className="mb-4">Feel free to reach us via phone or email if you'd prefer a more direct approach.</p>
            <div className="space-y-4">
              <p className="text-xl">
                <span className="font-semibold">Phone:</span> +1 (234) 567-890
              </p>
              <p className="text-xl">
                <span className="font-semibold">Email:</span> contact@tutoringcollective.com
              </p>
              <p className="text-xl">
                <span className="font-semibold">Location:</span> 123 Tutoring St, Education City, USA
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Modal after submission */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-lg p-8 max-w-sm w-full text-gray-900 text-center"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: 100 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                <p>Your message has been sent. We will get back to you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactPage;
