'use client'
import React from 'react'
// pages/index.js
import { useState, useEffect } from 'react';

export default function BcimrCard() {
  // Define the images to display in the carousel
  const images = [
    './images/flyers/bci1.jpg',
    './images/flyers/bci2.jpg',
    './images/flyers/bci3.jpg',
    './images/flyers/bci4.jpg',
    './images/flyers/bci5.jpg',
  ];

  // Define the state for the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define the interval for the automatic sliding
  const interval = 5000;

  // Define the function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Define the function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  // Define the function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Use an effect to set up the automatic sliding
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, interval);
    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide]);

  return (
    <div className="flex justify-center items-center h-screen">
      
      <div
        className="relative w-full"
        style={{ height: '530px', width: '530px' }}
      >
        <div className="relative h-full overflow-hidden rounded-lg">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full duration-700 ease-in-out transform ${
                index === currentSlide
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <img
                src={image}
                alt={`image ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse ">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              className={` w-3 h-3 rounded-full mt-8 ${
                index === currentSlide
                  ? 'bg-gray-900'
                  : 'bg-red-300 hover:bg-gray-400'
              }`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
        <span className='text-2xl'>Flyer BCIMR</span>
        <p className='text-sm '>Ces flyer sont realiser pour agence de communication dans pour un travail en freelance </p>
      </div>
    </div>
    
  );
  
  
}

