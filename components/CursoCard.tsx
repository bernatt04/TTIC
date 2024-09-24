// src/components/CursoCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { BsShare, BsArrowRight } from 'react-icons/bs';
import Button from './Button';

interface CursoCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
  animationDelay?: number; // Añadir esta línea
}

const CursoCard: React.FC<CursoCardProps> = ({ title, description, imageUrl, onClick, animationDelay }) => {
  return (
    <motion.div
      className="max-w-sm bg-gradient-to-br from-white to-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 m-4"
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ type: 'spring', stiffness: 300, delay: animationDelay || 0 }} // Usar animationDelay aquí
    >
      <div className="relative group">
        <motion.img
          className="w-full h-48 object-cover transition-transform duration-500"
          src={imageUrl}
          alt={title}
          whileHover={{ scale: 1.1 }}
        />
        <motion.button
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition duration-300"
          whileHover={{ scale: 1.3, rotate: 90 }}
          onClick={() => alert('Curso compartido')}
        >
          <BsShare className="text-blue-600" />
        </motion.button>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
          <p className="text-white text-lg opacity-0 group-hover:opacity-100 transition duration-300">
            ¡Explora más sobre este curso!
          </p>
        </div>
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-primary">{title}</h2>
        <p className="text-gray-700 text-base mb-4">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-4 flex justify-between items-center">
        <Button
          onClick={onClick}
          className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded-full flex items-center transform transition-transform hover:scale-105"
        >
          Ver más
          <BsArrowRight className="ml-2" />
        </Button>
        <motion.div
          className="text-sm text-gray-500 flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
            #Popular
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
            #Nuevo
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CursoCard;
