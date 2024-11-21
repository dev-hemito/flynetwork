'use client';
import AnimatedBackground from '@/components/AnimatedBackground';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import TeamBoard from '@/components/Home/Team';
import MissionStatement from '@/components/Home/Mission';
import Vision from '@/components/Home/Vision';

const AboutUs = () => {
    const [displayText, setDisplayText] = useState('');
    const [showButtons, setShowButtons] = useState(false);
    const fullText = "Forward Looking Youth (FLY) is a dynamic networking platform dedicated to empowering young entrepreneurs in their journey toward success. Inspired by the principles of structured networking, we connect ambitious individuals from diverse entrepreneurial backgrounds, fostering collaboration, learning, and business growth.";

    useEffect(() => {
        let currentIndex = 0;
        const typingSpeed = 10; // Adjust typing speed (milliseconds per character)

        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length - 1) {
                setDisplayText(fullText.substring(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setShowButtons(true);
                }, 500); // Delay before showing buttons
            }
        }, typingSpeed);

        return () => clearInterval(typingInterval);
    }, []);


    return (
        <>
            <AnimatedBackground />

            <div className="relative min-h-[600px] w-full h-screen">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url('mockup1.jpg')`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A0C2A] via-purple-900/50 to-purple-900/10 backdrop-blur-sm" />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-6 py-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                        <span className="text-purple-700" data-aos="fade-right" data-aos-delay="300">ABOUT</span>{" "}
                        <span className="text-white" data-aos="fade-right" data-aos-delay="200">US</span>
                    </h2>

                    {/* Typewriter Text */}
                    <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10">
                        {displayText}
                        <span className={`inline-block w-0.5 h-5 bg-purple-300 ml-1 ${displayText.length === fullText.length ? 'opacity-0' : 'animate-pulse'}`} />
                    </p>

                    {/* Animated Buttons */}
                    <div className={`flex flex-wrap gap-4 transition-opacity duration-500 ${showButtons ? 'opacity-100' : 'opacity-0'}`}>
                        <Link href='/join-fly' className="px-8 py-3 bg-purple-100 text-purple-900 rounded-md font-semibold hover:bg-purple-200 transition-colors duration-300">
                            Join Us
                        </Link>
                        <Link href='/' className="px-8 py-3 border-2 border-purple-100 text-purple-100 rounded-md font-semibold hover:bg-purple-800 transition-colors duration-800">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative w-full max-w-7xl mx-auto text-center z-10 py-16 text-white">
                <div className=" mx-auto px-4 py-8 md:py-12 lg:py-16">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Left side - Banner image */}
                        <div className="w-full md:w-1/2">
                            <Image src={'/mockup2.jpg'} height={500} width={800} className='w-full h-full cover rounded-sm' />
                        </div>

                        {/* Right side - Content */}
                        <div className="w-full md:w-1/2 space-y-6 text-left">
                            <div className="space-y-4">
                                <p className="">
                                    FLY provides members with access to invaluable resources, mentorship, and structured networking opportunities that facilitate the development of meaningful relationships with industry professionals.
                                    Through interactive workshops and comprehensive educational tools, we equip our members with the skills and knowledge necessary to navigate the challenges of launching and scaling successful ventures.
                                </p>

                                <p className="">
                                    Our mission is to cultivate a community of young entrepreneurs, supporting their holistic development and guiding them to become the innovative business leaders of tomorrow.
                                    By harnessing the power of networking, FLY aims to change the way young professionals connect and thrive in the business world.
                                </p>
                            </div>

                            <button className="bg-purple-100 text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-mint-200 transition-colors duration-300 inline-flex items-center group">
                                Take Membership now

                                <svg
                                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <MissionStatement />
            <Vision />
            <div className="mx-auto max-w-7xl">
                <TeamBoard />
            </div>
            {/* <EventsPage/> */}
        </>
    );
};

export default AboutUs;