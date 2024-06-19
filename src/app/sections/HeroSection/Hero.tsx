import React from "react";
import Carousel from "./Carousel"; 

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh]">
      <Carousel />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
        <div className="flex h-2/3 w-2/3 bg-opacity-40 bg-gray-800">
          <h1 className="text-white text-4xl font-extrabold py-40 px-72 animate-fadeIn font-serif">
            Your path to victory
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
