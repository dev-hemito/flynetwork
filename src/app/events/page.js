'use client'
import AnimatedBackground from '@/components/AnimatedBackground'
import EventsPage from '@/components/Event'
import React from 'react'

const page = () => {
  return (
    <div className='mt-32 mb-32'>
        <AnimatedBackground/>
      <EventsPage/>
    </div>
  )
}

export default page
