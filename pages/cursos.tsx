import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import Modal from '../components/Modal';
import useCursos, { Curso } from '../hooks/useCursos';

const Cursos: React.FC = () => {
  const { cursos, loading, error } = useCursos();
  const [selectedCurso, setSelectedCurso] = useState<Curso | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleCursoClick = (curso: Curso) => {
    setSelectedCurso(curso);
  };

  const handleCloseModal = () => {
    setSelectedCurso(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  }, [darkMode]);

  // Para la animación del fondo
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const translateX = useTransform(mouseX, [0, windowWidth], [-50, 50]);
  const translateY = useTransform(mouseY, [0, windowHeight], [-50, 50]);

  return (
    <div
      className={`relative flex flex-col items-center py-10 px-4 min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800'} overflow-hidden text-white`}
      onMouseMove={handleMouseMove}
    >
      {/* Fondo dinámico con efecto de partículas */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 1) 2px, transparent 2px)`,
          backgroundSize: '50px 50px',
          translateX,
          translateY,
        }}
        initial={{ opacity: 0.1 }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          backgroundPosition: ['0 0', '100px 100px', '0 0'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Título de la página de cursos */}
      <motion.h1
        className="text-5xl font-extrabold text-center text-yellow-300 mb-8 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ fontFamily: 'Nunito, sans-serif' }}
      >
        Nuestros Cursos
      </motion.h1>

      {/* Botón de Tema Claro/Oscuro */}
      <motion.button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 p-2 bg-yellow-300 text-blue-900 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
        whileHover={{ scale: 1.1 }}
      >
        {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
      </motion.button>

      {/* Contenido principal de la página */}
      {loading ? (
        <motion.p
          className="text-center text-yellow-400 w-full z-10 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Cargando cursos...
        </motion.p>
      ) : error ? (
        <motion.p
          className="text-center text-red-500 w-full z-10 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {error}
        </motion.p>
      ) : (
        <div className="w-full max-w-5xl z-10 relative space-y-8">
          {cursos.map((curso) => (
            <motion.div
              key={curso.id}
              className={`bg-white bg-opacity-80 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row items-center hover:bg-opacity-100 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              onClick={() => handleCursoClick(curso)}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={curso.imageUrl}
                alt={curso.title}
                className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6"
              />
              <div className="flex flex-col flex-grow">
                <h2 className={`text-2xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-blue-800'}`} style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {curso.title}
                </h2>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>{curso.description}</p>
                <button
                  className={`self-start px-4 py-2 ${darkMode ? 'bg-blue-600 text-white' : 'bg-yellow-400 text-blue-900'} rounded hover:bg-yellow-500 transition duration-300`}
                  onClick={(e) => {
                    e.stopPropagation(); // Evita que el click también abra el modal
                    handleCursoClick(curso);
                  }}
                >
                  Ver más
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Modal para detalles del curso */}
      <AnimatePresence>
        {selectedCurso && (
          <Modal onClose={handleCloseModal}>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center overflow-auto"
            >
              <motion.div
                className={`bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto overflow-y-auto max-h-[80vh] relative ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-blue-800'}`} style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {selectedCurso.title}
                </h2>
                <img
                  src={selectedCurso.imageUrl}
                  alt={selectedCurso.title}
                  className="w-full h-64 object-cover mb-4 rounded"
                />
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>{selectedCurso.detailedDescription}</p>

                {/* Sección de objetivos de aprendizaje */}
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Lo que aprenderán:</h3>
                <ul className="list-disc list-inside mb-4">
                  {selectedCurso.learningObjectives.map((objective, index) => (
                    <li key={index} className={`${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                      {objective}
                    </li>
                  ))}
                </ul>

                {/* Sección de competencias transversales */}
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Competencias transversales:</h3>
                <ul className="list-disc list-inside mb-4">
                  {selectedCurso.transversalCompetencies.map((competency, index) => (
                    <li key={index} className={`${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                      {competency}
                    </li>
                  ))}
                </ul>

                {/* Sección de habilidades adquiridas */}
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Habilidades adquiridas:</h3>
                <ul className="list-disc list-inside mb-4">
                  {selectedCurso.acquiredSkills.map((skill, index) => (
                    <li key={index} className={`${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                      {skill}
                    </li>
                  ))}
                </ul>

                {/* Sección de beneficios del curso */}
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Beneficios del curso:</h3>
                <ul className="list-disc list-inside mb-4">
                  {selectedCurso.courseBenefits.map((benefit, index) => (
                    <li key={index} className={`${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleCloseModal}
                  className={`mt-4 px-4 py-2 ${darkMode ? 'bg-yellow-500 text-blue-900' : 'bg-blue-600 text-white'} rounded hover:bg-blue-700 transition duration-300 absolute top-4 right-4`}
                >
                  Cerrar
                </button>
              </motion.div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cursos;
