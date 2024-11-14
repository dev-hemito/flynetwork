'use client'
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-4 md:px-8 relative overflow-hidden">
      {/* Decorative curved shape */}
      {/* <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
        <div className="w-full h-full bg-purple-800/20  blur-md rounded-full transform translate-x-2/4 translate-y-1/4"></div>
      </div> */}

      {/* Content Container */}
      <div className="text-center relative z-10 py-16">
        {/* Heading with gradient text */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 relative" data-aos="fade-down"  data-aos-delay="300">
          <span className="animate-gradient bg-gradient-to-r from-purple-700 via-pink-300 via-white to-purple-700 bg-[length:400%_400%] text-transparent bg-clip-text">
            Empowering the Next Generation
            <br />
            of Entrepreneurs
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto" data-aos="fade-down" data-aos-delay="200">
          Platform dedicated to empowering young entrepreneurs by providing a space for collaboration,
          learning, and business growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-down">
          <Link href='/register' className="px-8 py-3 bg-purple-100 text-purple-900 rounded-md font-semibold hover:bg-purple-200 transition-colors duration-300">
            Join Us
          </Link>
          <Link href='/' className="px-8 py-3  bg-purple-600 text-purple-100 rounded-md font-semibold hover:bg-purple-800 transition-colors duration-300">
            Learn More
          </Link>
        </div>
      </div>
    </div>
    
  );
};

export default HeroSection;