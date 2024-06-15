"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import One from "../../../../public/assets/carousel-1.webp";
import Two from "../../../../public/assets/carousel-2.webp";
import Three from "../../../../public/assets/carousel-3.webp";

const Carousel = () => {
  const images = [One, Two, Three];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((current) => (current + 1) % images.length);
      setIsTransitioning(false);
    }, 500); // Transition duration should match the CSS transition duration
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((current) => (current - 1 + images.length) % images.length);
      setIsTransitioning(false);
    }, 500); // Transition duration should match the CSS transition duration
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-[100vh] flex-shrink-0">
            <Image src={image} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-blue-500' : 'bg-white'}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
