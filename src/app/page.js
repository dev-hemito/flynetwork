'use client'
import AnimatedBackground from '@/components/AnimatedBackground'

import EventsPage from '@/components/Event'
import HeroSection from '@/components/Home/Hero'
import ValuesofFly from '@/components/Home/ValuesofFly'
import BlogPost from '@/components/EntrepreneurialMindset'
import QuoteCard from '@/components/QuoteCard'
import React from 'react'

const page = () => {
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
      <QuoteCard />
      <BlogPost />
    </div>
  )
}

export default page
