import React from 'react';
import { motion } from 'framer-motion';

// Sample tutor data (replace this with actual data)
const tutors = [
  {
    id: 1,
    name: 'Rafa',
    description: 'STEM tutor specializing in Maths, Further Maths, and Statistics.',
    imageUrl: '/img/Tutors Pictures/Rafa_pfp.jpg', // Replace with actual image paths
  },
  {
    id: 2,
    name: 'Alvaro',
    description: 'MSc Biomedical Engineering.',
    imageUrl: '/img/Tutors Pictures/Alvaro_pfp.jpg',
  },
  {
    id: 3,
    name: 'Sophia',
    description: 'Art and English tutor, focusing on creativity and expression.',
    imageUrl: '/img/Tutors Pictures/Sophia_pfp.jpg',
  },
  {
    id: 4,
    name: 'Louie',
    description: 'Business and Psychology tutor with real-world experience.',
    imageUrl: '/img/Tutors Pictures/Louie_pfp.jpg',
  },
  {
    id: 5,
    name: 'Heather',
    description: 'Linguistics tutor, specializing in Mandarin, Spanish, and French.',
    imageUrl: '/img/Tutors Pictures/Heather_pfp.jpg',
  },
];

const TutorCards: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-primary text-center mb-12" style={{ fontFamily: 'Oswald, sans-serif' }}>
          Meet Our Tutors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {tutors.map((tutor, index) => (
            <motion.div
              key={tutor.id}
              className="relative group rounded-lg overflow-hidden shadow-xl cursor-pointer bg-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Card container with a hover effect */}
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                {/* Tutor Image */}
                <img
                  src={tutor.imageUrl}
                  alt={tutor.name}
                  className="w-full h-80 object-cover transition-transform duration-500 transform group-hover:scale-110"
                />

                {/* Info section sliding up on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Tutor name and description on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-2xl font-bold mb-2">{tutor.name}</h3>
                  <p className="text-gray-200 text-lg">{tutor.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorCards;
