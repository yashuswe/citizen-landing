import React from 'react';
import Carousel from './Carousel'; // Adjust the path as necessary

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh]">
      <Carousel />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
        <h1 className="text-white text-4xl font-bold animate-fadeIn font-serif">Your path to victory</h1>
      </div>
    </div>
  );
}

export default Hero;
