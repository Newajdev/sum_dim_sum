import HeroSection from '@/compnents/hero/HeroSection';
import OurStory from '@/compnents/ourstory/OurStory';
import React from 'react';



const page = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* OurStory Section */}
      <OurStory/>
    </>
  );
};

export default page;