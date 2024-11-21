'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slides configuration
  const slides = [
    {
      type: 'landing',
      headingTop: "Empowering the Next Generation",
      headingBottom: "of Entrepreneurs",
      ptag: "Platform dedicated to empowering young entrepreneurs by providing a space for collaboration, learning, and business growth.",
      btn1: "Join Us",
      btn1Link: "/join-fly",
      btn2: "Learn More",
      btn2Link: "/about"
    },
    {
      type: 'founder',
      message: "I created FLY to be a launchpad for young entrepreneurs, who are ready to make their mark. Here, you will find mentorship that inspires and offers resources and connections that spark growth. My goal is simple, that is to help ambitious minds' ideas turn into reality and to build a community where success is shared and celebrated.",
      name: "Mr. Sami K Haridas",
      title: "Founder & CEO",
      imageUrl: "/members/sami.jpg", // Replace with actual image path
      signature: "/sign.png" // Replace with actual signature path
    },
    {
      type: 'group',
      imageUrl: "/members/group.jpg", // Replace with actual group photo path
      title: "",
      description: ""
    }
  ];

  // Auto-slide logic
  useEffect(() => {
    const slideDurations = [8000, 8000, 8000]; // Durations for each slide
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideDurations[currentSlide]);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Render different slide types
  const renderLandingSlide = (slide) => (
    <div style={{height:"calc(100vh - 100px)"}} className=" flex flex-col items-center justify-center px-4 md:px-8 relative overflow-hidden">
      <div className="text-center relative z-10 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 relative" data-aos="fade-down" data-aos-delay="300">
          <span className="animate-gradient bg-gradient-to-r from-purple-700 via-pink-300 via-white to-purple-700 bg-[length:400%_400%] text-transparent bg-clip-text">
            {slide.headingTop}
            <br />
            {slide.headingBottom}
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto" data-aos="fade-down" data-aos-delay="200">
          {slide.ptag}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-down">
          <Link href={slide.btn1Link} className="px-8 py-3 bg-purple-100 text-purple-900 rounded-md font-semibold hover:bg-purple-200 transition-colors duration-300">
            {slide.btn1}
          </Link>
          <Link href={slide.btn2Link} className="px-8 py-3 bg-purple-600 text-purple-100 rounded-md font-semibold hover:bg-purple-800 transition-colors duration-300">
            {slide.btn2}
          </Link>
        </div>
      </div>
    </div>
  );

  const renderFounderSlide = (slide) => (
    <div style={{height:"calc(100vh - 100px)"}} className=" flex flex-col md:flex-row items-center justify-center px-4 md:px-8 relative overflow-hidden">
      <div className="w-1/2  flex justify-center mb-8 md:mb-0">
        <div className="md:w-64 md:h-64  flex items-center flex-wrap justify-center">
          <Image 
            src={slide.imageUrl} 
            alt={slide.name} 
            width={500} 
            height={500} 
            className="object-cover md:w-full md:h-full w-32 h-32 rounded-full"
          />
          <h3 className="text-2xl font-bold">{slide.name}</h3>
          <p className="text-gray-400">{slide.title}</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className=" italic mb-6 max-w-2xl mx-auto">"{slide.message}"</p>
        <div>
          
          <Image 
            src={slide.signature} 
            alt="Signature" 
            width={200} 
            height={100} 
            className="mt-4 mx-auto md:mx-0"
          />
        </div>
      </div>
    </div>
  );

  const renderGroupSlide = (slide) => (
    <div style={{height:"calc(100vh - 100px)"}} className=" flex flex-col items-center justify-center px-4 md:px-8 relative overflow-hidden">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">{slide.title}</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">{slide.description}</p>
        <div className="w-full max-w-4xl mx-auto">
          <Image 
            src={slide.imageUrl} 
            alt="Community Group Photo" 
            width={800} 
            height={800} 
            className="rounded-lg shadow-2xl w-full h-full"
          />
        </div>
      </div>
    </div>
  );

  // Slide rendering map
  const slideRenderers = {
    'landing': renderLandingSlide,
    'founder': renderFounderSlide,
    'group': renderGroupSlide
  };

  return (
    <div className="relative">
      {/* Slides Container */}
      <div className="transition-all duration-700 ease-in-out">
        {/* Current Slide */}
        {slideRenderers[slides[currentSlide].type](slides[currentSlide])}
      </div>

      {/* Optional: Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-purple-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;