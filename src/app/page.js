import HeroSection from '@/compnents/hero/HeroSection';
import OurStory from '@/compnents/ourstory/OurStory';
import SumDim from '@/compnents/sumdimsum/SumDim';
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

      {/* Sum Dim Sum Section */}
      <SumDim/>
    </>
  );
};

export default page;