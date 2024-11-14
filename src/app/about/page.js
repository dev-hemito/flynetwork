'use client';
import AnimatedBackground from '@/components/AnimatedBackground';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaEyeDropper } from 'react-icons/fa';
import {
    Users,
    Milestone,
    HeartHandshake,
    Sprout,
    Sparkles
} from 'lucide-react';
import EventsPage from '@/components/Event';

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
    const features = [
        {
            title: "Rise Together",
            description: "We believe in the power of unity and collective growth. Every member of FLY plays a role in lifting each other up, creating a foundation where all can thrive by supporting one another.",
            icon: Users // Represents community and teamwork
        },
        {
            title: "Lead & Lift",
            description: "Leadership isn't just about reaching the top; it's about lifting others as you climb. At FLY, we are dedicated to developing leaders who inspire and empower their peers, creating a positive cycle of mentorship and guidance.",
            icon: Milestone // Represents progress and leadership milestones
        },
        {
            title: "Build & Bloom",
            description: "Our members are the builders of their own futures. FLY provides the environment for each individual to lay their foundation, nurture their growth, and ultimately bloom as successful, impactful entrepreneurs.",
            icon: Sprout // Represents growth and development
        },
        {
            title: "Thrive by Giving",
            description: "We embrace a culture of contribution. By sharing knowledge, resources, and support, we help each other succeed. At FLY, we understand that true success is amplified when we give generously and supportively",
            icon: HeartHandshake // Represents giving and mutual support
        },
        {
            title: "Empower, Connect, Transform",
            description: "Through empowerment and meaningful connections, FLY transforms potential into achievement. We believe that with the right support, every young entrepreneur has the power to drive positive change and reach new heights",
            icon: Sparkles // Represents transformation and empowerment
        }
    ];

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
                        <Link href='/register' className="px-8 py-3 bg-purple-100 text-purple-900 rounded-md font-semibold hover:bg-purple-200 transition-colors duration-300">
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
            <div className=" text-white min-h-[200px] p-8 md:p-12 mt-2 md:mb-32">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
                    <div className="flex-shrink-0">
                        <div className="md:bg-purple-800 p-4 rounded-full">
                            <FaEyeDropper className="w-32 h-32 md:w-16 md:h-16" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl md:text-3xl font-semibold text-left">
                            Our Vision
                        </h2>
                        <p className="text-purple-100 text-sm md:text-base leading-relaxed text-justify">
                            Transforming the future of business by equipping young entrepreneurs with structured networking, relationship-building, and access to resources and mentorship to become tomorrow's visionary leaders and innovators
                        </p>
                    </div>
                </div>
            </div>
            <div className=" mx-auto text-center relative z-10 md:mt-16 mt-10 md:mb-16 p-2 text-white ">
                <div className="">
                    {/* Header Section */}
                    <div className="text-center mb-16 max-w-7xl  mx-auto  relative z-10  text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">Values of FLY</h1>
                        <p className="text-gray-300 mx-auto text-sm md:text-base" data-aos="fade-up">
                            FLY’s mission is to cultivate a community of empowered, connected, and inspired young entrepreneurs who support each other on their journeys to success.
                            Our core values reflect our commitment to fostering meaningful relationships, shared growth, and impactful transformation.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="flex  flex-wrap justify-center gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="p-6 md:w-3/12 rounded-lg hover:bg-purple-700/50 transition-all duration-300 flex flex-col items-start" data-aos="fade-in" data-aos-delay={`${index}00`}
                            >
                                <feature.icon className="w-8 h-8 mb-4 text-purple-400" />
                                <h3 className="text-xl font-semibold mb-3 text-left">{feature.title}</h3>
                                <p className="text-gray-300 text-sm text-left">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="text-center mt-12">
                        <Link href='/register' className="bg-purple-100 text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-mint-200 transition-colors duration-300 inline-flex items-center group">
                            Become a member now
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
                        </Link>
                    </div>
                </div>
            </div>
            {/* <EventsPage/> */}
        </>
    );
};

export default AboutUs;