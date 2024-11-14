'use client'
import AnimatedBackground from '@/components/AnimatedBackground'
import EventsPage from '@/components/Event'
import HeroSection from '@/components/Home/Hero'
import MissionStatement from '@/components/Home/Mission'
import TeamBoard from '@/components/Home/Team'
import TestimonialSection from '@/components/Home/Testimonial'
import WhyJoinSection from '@/components/Home/WhyJoinFly'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-7xl mx-auto text-center relative z-10 py-16 text-white'>
      <AnimatedBackground />
      <HeroSection />
      <WhyJoinSection />
      <MissionStatement/>
      <TeamBoard />
      <EventsPage />
      {/* <TestimonialSection/> */}
    </div>
  )
}

export default page
