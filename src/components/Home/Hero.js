'use client'
import Link from 'next/link';
import React from 'react';

const HeroSection = ({ headingTop, headingBottom, ptag, btn1, btn1Link, btn2, btn2Link }) => {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-4 md:px-8 relative overflow-hidden">
      {/* Content Container */}
      <div className="text-center relative z-10 py-16">
        {/* Heading with gradient text */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 relative" data-aos="fade-down" data-aos-delay="300">
          <span className="animate-gradient bg-gradient-to-r from-purple-700 via-pink-300 via-white to-purple-700 bg-[length:400%_400%] text-transparent bg-clip-text">
           {headingTop}
            <br />
           {headingBottom}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto" data-aos="fade-down" data-aos-delay="200">
           {ptag}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-down">
          <Link href={`${btn1Link}`} className="px-8 py-3 bg-purple-100 text-purple-900 rounded-md font-semibold hover:bg-purple-200 transition-colors duration-300">
            {btn1}
          </Link>
          <Link href={`${btn2Link}`} className="px-8 py-3  bg-purple-600 text-purple-100 rounded-md font-semibold hover:bg-purple-800 transition-colors duration-300">
           {btn2}
          </Link>
        </div>
      </div>
    </div>

  );
};

export default HeroSection;