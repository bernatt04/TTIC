import React from 'react';  // Hero component from the new site
import NeedsSection from '../components/NeedsSection'; // Section about understanding needs
import PhilosophySection from '../components/PhilosophySection'; // Philosophy section with EPOU concept
import LearningEnvironmentSection from '../components/LearningEnvironmentSection'; // Learning environment section
import SpecialRequirements from '../components/SpecialRequirements'; // Special Requirements section
import Header from '../components/Header';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Needs Section - Understanding Student Needs */}
      <section id="needs" className="pt-0 pb-0">
        <NeedsSection />
      </section>

      {/* Our Philosophy Section */}
      <section id="philosophy" className="bg-gradient-to-b from-[#f6f7fb] to-[#e8ecf3] pt-0 pb-0">
        <PhilosophySection />
      </section>

      {/* Learning Environment Section */}
      <section id="learning-environment" className="pt-0 pb-0">
        <LearningEnvironmentSection />
      </section>

      {/* Special Requirements Section */}
      <section id="special-requirements" className="bg-[#f6f7fb] pt-0 pb-0">
        <SpecialRequirements />
      </section>
    </div>
  );
};

export default HomePage;
