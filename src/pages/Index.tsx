
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import VisionSection from '@/components/sections/VisionSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-sos-dark text-white overflow-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <VisionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
