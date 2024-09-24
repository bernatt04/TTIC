import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Datos de los tutores
const tutors = [
  {
    id: 1,
    name: 'Rafa Pérez',
    title: 'Math and Statistics Tutor',
    description: 'Rafa specializes in Math, Further Math, and Statistics, helping students excel in advanced topics.',
    imageUrl: '/img/Tutors Pictures/rafa_pfp.jpg',
    bio: 'Rafa has been tutoring for over 5 years, focusing on higher-level math and statistics. His students consistently achieve high marks...',
    specialties: ['Calculus', 'Statistics', 'Further Math', 'Exam Preparation'],
    fullBio: 'Rafa has a passion for teaching complex topics in a way that is accessible and engaging. His focus on exam preparation has helped hundreds of students achieve top grades in subjects like Calculus and Statistics...',
  },
  {
    id: 2,
    name: 'Alvaro Pérez',
    title: 'Physics and Chemistry Tutor',
    description: 'Alvaro helps students understand complex Physics and Chemistry concepts with ease.',
    imageUrl: '/img/Tutors Pictures/alvaro_pfp.jpg',
    bio: 'With a background in Engineering, Alvaro specializes in tutoring students in Physics and Chemistry.',
    specialties: ['Mechanics', 'Electromagnetism', 'Organic Chemistry', 'Lab Reports'],
    fullBio: 'Alvaro’s real-world experience in engineering brings a unique perspective to his teaching, helping students connect theory with practice...',
  },
  {
    id: 3,
    name: 'Sophia Williams',
    title: 'English and Art Tutor',
    description: 'Sophia encourages creativity and expression through her English and Art lessons.',
    imageUrl: '/img/Tutors Pictures/sophia_profile.jpg',
    bio: 'Sophia has a background in both literature and visual arts, and her unique approach inspires her students.',
    specialties: ['Creative Writing', 'Literature Analysis', 'Painting', 'Art History'],
    fullBio: 'Sophia blends her love for literature with her passion for art, making her classes a creative and enriching experience for students...',
  },
];

// Modal para mostrar más información
const TutorModal: React.FC<{ tutor: any; closeModal: () => void }> = ({ tutor, closeModal }) => {
  return (
    <AnimatePresence>
      {tutor && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg p-8 max-w-3xl w-full relative text-gray-900 shadow-lg"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-gray-600 hover:text-gray-800 font-bold text-2xl"
            >
              &times;
            </button>
            <h2 className="text-4xl font-bold mb-4 text-[#1e2746]">{tutor.name}</h2>
            <p className="text-xl mb-2 text-gray-700">{tutor.title}</p>
            <p className="text-sm mb-6 text-gray-600">{tutor.fullBio}</p>
            <div>
              <h3 className="text-xl font-semibold mb-2">Specialties:</h3>
              <ul className="list-disc ml-6 text-gray-600">
                {tutor.specialties.map((specialty: string, index: number) => (
                  <li key={index} className="text-gray-600">{specialty}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TutorsPage: React.FC = () => {
  const [selectedTutor, setSelectedTutor] = useState(null);

  const openModal = (tutor: any) => setSelectedTutor(tutor);
  const closeModal = () => setSelectedTutor(null);

  return (
    <div className="relative bg-[#0d1b2a] py-24 text-white overflow-hidden">
      {/* Fondo con elementos geométricos abstractos */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Líneas diagonales decorativas */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-[#00D4A6] opacity-5" />
        <div className="absolute top-0 left-0 w-48 h-48 bg-transparent border border-[#00FFC6] opacity-30 rotate-45"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-transparent border border-[#ff477e] opacity-30 rotate-45"></div>
        
        {/* Partículas geométricas */}
        <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="200" r="4" fill="#00FFC6" opacity="0.6"></circle>
          <circle cx="300" cy="120" r="3" fill="#ff477e" opacity="0.5"></circle>
          <circle cx="500" cy="280" r="2" fill="white" opacity="0.4"></circle>
          <circle cx="700" cy="180" r="4" fill="#00FFC6" opacity="0.6"></circle>
          <circle cx="900" cy="220" r="3" fill="#ff477e" opacity="0.5"></circle>
        </svg>
      </div>

      {/* Encabezado de la página */}
      <div className="container mx-auto text-center mb-16 z-10 relative">
        <h2 className="text-6xl text-white font-extrabold mb-12" style={{ fontFamily: 'Oswald, sans-serif' }}>
          Meet Our Tutors
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Our expert tutors specialize in a wide range of subjects, each bringing unique experience and expertise to ensure you achieve your academic goals.
        </p>
      </div>

      {/* Grid de los tutores */}
      <div className="container mx-auto space-y-24 relative z-10">
        {tutors.map((tutor) => (
          <motion.div
            key={tutor.id}
            className="relative bg-white bg-opacity-90 rounded-xl shadow-lg p-8 overflow-hidden transition-transform duration-500 hover:shadow-xl hover:scale-105"
            whileHover={{ scale: 1.03 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Imagen del tutor */}
              <motion.img
                src={tutor.imageUrl}
                alt={tutor.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              />

              {/* Información del tutor */}
              <div className="flex flex-col justify-center text-left">
                <h3 className="text-5xl font-extrabold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#00D4A6' }}>
                  {tutor.name}
                </h3>
                <p className="text-2xl text-gray-700 mb-6">{tutor.title}</p>
                <p className="text-xl text-gray-500 mb-6">{tutor.bio}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-700">Specialties:</h4>
                  <ul className="list-disc ml-6 text-gray-500">
                    {tutor.specialties.map((specialty: string, index: number) => (
                      <li key={index}>{specialty}</li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => openModal(tutor)}
                  className="mt-6 px-8 py-4 bg-[#00D4A6] text-white font-bold rounded-full hover:bg-[#00bfa3] transition-colors duration-300 shadow-lg"
                >
                  More Information
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal para mostrar más detalles */}
      {selectedTutor && <TutorModal tutor={selectedTutor} closeModal={closeModal} />}
    </div>
  );
};

export default TutorsPage;
