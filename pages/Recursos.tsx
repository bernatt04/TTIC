import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiDownload, FiHeart, FiShare2, FiSun, FiMoon } from 'react-icons/fi';

interface Recurso {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  format: string;
  link: string;
}

const recursosData: Recurso[] = [
  {
    id: 1,
    title: 'Guía de Programación en Python',
    description: 'Una guía completa para aprender Python desde cero.',
    category: 'Programación',
    level: 'Principiante',
    format: 'PDF',
    link: '/recursos/python-guide.pdf',
  },
  {
    id: 2,
    title: 'Introducción a la Ciberseguridad',
    description: 'Conozca los conceptos básicos de la ciberseguridad.',
    category: 'Ciberseguridad',
    level: 'Intermedio',
    format: 'Video',
    link: '/recursos/cybersecurity-intro.mp4',
  },
  {
    id: 3,
    title: 'Curso Avanzado de AI',
    description: 'Domina los algoritmos avanzados de inteligencia artificial.',
    category: 'Inteligencia Artificial',
    level: 'Avanzado',
    format: 'Artículo',
    link: '/recursos/ai-advanced.pdf',
  },
  // Añadir más recursos según sea necesario
];

const Recursos: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecursos, setFilteredRecursos] = useState<Recurso[]>(recursosData);
  const [selectedRecurso, setSelectedRecurso] = useState<Recurso | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setFilteredRecursos(
      recursosData.filter((recurso) =>
        recurso.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSelectRecurso = (recurso: Recurso) => {
    setSelectedRecurso(recurso);
  };

  const handleCloseModal = () => {
    setSelectedRecurso(null);
  };

  return (
    <div className={`relative flex flex-col items-center py-16 px-4 min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800'} text-white overflow-hidden`}>
      {/* Botón de Tema Claro/Oscuro */}
      <motion.button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 p-2 bg-yellow-300 text-blue-900 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
        whileHover={{ scale: 1.1 }}
      >
        {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
      </motion.button>

      {/* Título de la página de Recursos */}
      <motion.h1
        className="text-5xl font-extrabold text-center text-yellow-300 mb-8 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ fontFamily: 'Nunito, sans-serif' }}
      >
        Recursos
      </motion.h1>

      {/* Barra de búsqueda */}
      <motion.div
        className="flex items-center w-full max-w-md mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <FiSearch className="text-yellow-300 mr-2" size={24} />
        <input
          type="text"
          placeholder="Buscar recursos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 text-blue-900 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
        />
      </motion.div>

      {/* Lista de Recursos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10 relative">
        {filteredRecursos.map((recurso) => (
          <motion.div
            key={recurso.id}
            className={`bg-white bg-opacity-10 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-500 flex flex-col ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleSelectRecurso(recurso)}
          >
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">{recurso.title}</h3>
            <p className="text-sm text-white mb-4">{recurso.description}</p>
            <div className="mt-auto flex justify-between items-center">
              <span className="text-yellow-300">{recurso.category}</span>
              <button className="px-4 py-2 bg-yellow-500 text-blue-900 font-bold rounded-full hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl">
                Ver más
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal con detalles del recurso */}
      <AnimatePresence>
        {selectedRecurso && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto overflow-y-auto max-h-[80vh] relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-800">{selectedRecurso.title}</h2>
              <p className="text-gray-800 mb-4">{selectedRecurso.description}</p>
              <p className="text-sm text-gray-600 mb-4">Categoría: {selectedRecurso.category}</p>
              <p className="text-sm text-gray-600 mb-4">Nivel: {selectedRecurso.level}</p>
              <p className="text-sm text-gray-600 mb-4">Formato: {selectedRecurso.format}</p>
              <a href={selectedRecurso.link} className="text-yellow-500 hover:underline flex items-center">
                <FiDownload className="mr-2" /> Descargar Recurso
              </a>

              <div className="flex justify-end space-x-4 mt-6">
                <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300" onClick={handleCloseModal}>
                  Cerrar
                </button>
                <button className="p-2 bg-yellow-500 text-blue-900 rounded-full hover:bg-yellow-400 transition duration-300">
                  <FiHeart />
                </button>
                <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
                  <FiShare2 />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Recursos;
