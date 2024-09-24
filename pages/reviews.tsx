import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar
          key={i}
          className={`text-2xl ${
            i < rating ? 'text-[#FFD700]' : 'text-gray-400'
          }`}
        />
      ))}
    </div>
  );
};

// Review Card Component
const ReviewCard: React.FC<{ rating: number; review: string; name: string }> = ({
  rating,
  review,
  name,
}) => (
  <motion.div
    className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-transform"
    initial="hidden"
    whileInView="visible"
    variants={fadeInUp}
  >
    <StarRating rating={rating} />
    <p className="text-gray-700 italic mt-4 mb-6">{review}</p>
    <div className="text-right">
      <h3 className="text-lg font-bold text-[#0d1b2a]">{name}</h3>
    </div>
  </motion.div>
);

// Section for Introduction
const IntroSection: React.FC = () => (
  <section className="bg-[#0d1b2a] text-white py-20">
    <div className="container mx-auto text-center">
      <motion.h1
        className="text-5xl font-bold mb-6"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        What Our Students Say
      </motion.h1>
      <motion.p
        className="text-lg leading-relaxed max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        Discover how our tutoring services have helped students excel in their academic journeys. Here are some of the experiences shared by our students.
      </motion.p>
    </div>
  </section>
);

// Reviews Section
const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      review:
        "The Tutoring Collective completely transformed my understanding of math. I went from failing grades to confidently acing my tests! I can't recommend them enough.",
    },
    {
      name: 'James Smith',
      rating: 4,
      review:
        'The tutors here truly cared about my progress and helped me with my ADHD struggles. I feel more focused and prepared for my future exams.',
    },
    {
      name: 'Emma Wilson',
      rating: 5,
      review:
        "With their support, I finally understood how to manage my time and stay on top of my studies. I'm much more confident now in my learning.",
    },
    {
      name: 'Daniel Green',
      rating: 4,
      review:
        "The chemistry tutor was amazing! I always struggled with organic chemistry, but now I feel like I can tackle anything thanks to the detailed and patient lessons.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-[#0d1b2a] mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          Student Reviews
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              rating={review.rating}
              review={review.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Featured Quote Section
const FeaturedQuote: React.FC = () => (
  <section className="bg-gradient-to-r from-[#00D4A6] to-[#1B263B] text-white py-20">
    <div className="container mx-auto text-center">
      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        <FaQuoteLeft className="text-6xl mx-auto text-[#FFD700]" />
        <p className="text-2xl italic leading-relaxed mt-6 mb-8">
          "The Tutoring Collective helped me develop both academically and personally. Their tutors are passionate, patient, and truly invested in your success."
        </p>
        <h3 className="text-xl font-bold">Michael Rodriguez</h3>
      </motion.div>
    </div>
  </section>
);

// Main Reviews Page Component
const ReviewsPage: React.FC = () => {
  return (
    <div>
      {/* Intro Section */}
      <IntroSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Featured Quote Section */}
      <FeaturedQuote />
    </div>
  );
};

export default ReviewsPage;
