'use client'
import AnimatedBackground from '@/components/AnimatedBackground'

import EventsPage from '@/components/Event'
import HeroSection from '@/components/Home/Hero'
import ValuesofFly from '@/components/Home/ValuesofFly'
import BlogPost from '@/components/EntrepreneurialMindset'
import QuoteCard from '@/components/QuoteCard'
import React from 'react'
import HeroCarousel from '@/components/Home/HeroCarousal'
import Image from 'next/image'

const page = () => {

  const slides = [
    {
      type: 'founder',
      message: "I created FLY to be a launchpad for young entrepreneurs, who are ready to make their mark. Here, you will find mentorship that inspires and offers resources and connections that spark growth. My goal is simple, that is to help ambitious minds' ideas turn into reality and to build a community where success is shared and celebrated.",
      name: "Mr. Sami K Haridas",
      title: "Founder & CEO",
      imageUrl: "/members/sami.jpg", // Replace with actual image path
      signature: "/sign.png" // Replace with actual signature path
    },

  ];
  return (
    <div className='max-w-7xl mx-auto text-center relative z-10 py-16 text-white'>
      <AnimatedBackground />
      <HeroSection headingTop="Empowering the Next Generation"
        headingBottom="of Entrepreneurs"
        ptag="Platform dedicated to empowering young entrepreneurs by providing a space for collaboration,
          learning, and business growth."
        btn1="Join Us"
        btn1Link="/join-fly"
        btn2="Learn More"
        btn2Link="/" />
      <ValuesofFly />
      <div style={{ height: "calc(100vh - 100px)" }} className=" flex flex-col md:flex-row items-center justify-center  relative overflow-hidden">
        <div className="w-1/2  flex justify-center mb-8 md:mb-0">
          <div className="md:w-64 md:h-64  flex items-center flex-wrap justify-center">
            <Image
              src={slides[0].imageUrl}
              alt={slides[0].name}
              width={500}
              height={500}
              className="object-cover md:w-full md:h-full w-32 h-32 rounded-full"
            />
            <h3 className="text-2xl font-bold">{slides[0].name}</h3>
            <p className="text-gray-400">{slides[0].title}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className=" italic mb-6 max-w-2xl mx-auto">"{slides[0].message}"</p>
          <div>

            <Image
              src={slides[0].signature}
              alt="Signature"
              width={200}
              height={100}
              className="mt-4 mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
      <QuoteCard />
      <BlogPost />
    </div>
  )
}

export default page
