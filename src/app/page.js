import HeroSection from '@/compnents/hero/HeroSection';
import OurStory from '@/compnents/ourstory/OurStory';
import Tradition from '@/compnents/tradition/Tradition';
import React from 'react';



const page = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* OurStory Section */}
      <OurStory/>

      {/* Taste the Tradition Section */}
      <Tradition/>
    </>
  );
};

export default page;