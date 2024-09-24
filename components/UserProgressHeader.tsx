// src/components/UserProgressHeader.tsx
import React from 'react';
import { motion } from 'framer-motion';

const UserProgressHeader: React.FC = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bg-blue-900 text-white py-2 px-4 shadow-lg z-50"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-lg font-bold">¡Bienvenido de nuevo!</h2>
        <div>
          <span className="mr-4">Progreso: 40%</span>
          <a href="/perfil" className="text-yellow-300 hover:text-yellow-500 transition-colors duration-300">Mi perfil</a>
        </div>
      </div>
    </motion.div>
  );
};

export default UserProgressHeader;
