'use client'
import AnimatedBackground from '@/components/AnimatedBackground'

import EventsPage from '@/components/Event'
import HeroSection from '@/components/Home/Hero'
import ValuesofFly from '@/components/Home/ValuesofFly'
import BlogPost from '@/components/EntrepreneurialMindset'
import QuoteCard from '@/components/QuoteCard'
import React from 'react'
import HeroCarousel from '@/components/Home/HeroCarousal'

const page = () => {
  return (
    <div className='max-w-7xl mx-auto text-center relative z-10 py-16 text-white'>
      <AnimatedBackground />
      <HeroCarousel/>
      <ValuesofFly />
      <QuoteCard />
      <BlogPost />
    </div>
  )
}

export default page
