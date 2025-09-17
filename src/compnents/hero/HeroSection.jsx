import React from 'react';
// import { cinzel, raleway } from './layout';
import Container from '@/compnents/Container';
import PrimBtn from '@/compnents/PrimBtn';
import { cinzel, raleway } from '@/app/layout';

const HeroSection = () => {
    return (
        <div style={{
      backgroundImage: "url('/assets/heroimg.png')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
    }} className='h-screen flex justify-center items-center'>
      <Container>
        <div className='flex flex-col justify-center items-center'>
          <h1 className={`${cinzel.className} text-white text-6xl text-center leading-[136%]`}>Welcome to Sum Dim Sum – Where Every Bite Tells a Story</h1>
        <p className={`${raleway.className} font-normal w-[850px] text-base text-white text-center mt-5 mb-16`}>At Sum Dim Sum, we bring families and friends together over the timeless tradition of sharing delectable dishes. From our expertly crafted dim sum to our vibrant ambiance, every moment here is a celebration of taste and togetherness. Explore our menu, reserve your table, or order your favorites online today!</p>

        <PrimBtn Title={'Explore Our Menu'}/>
        </div>
      </Container>
    </div> 
    );
};

export default HeroSection;