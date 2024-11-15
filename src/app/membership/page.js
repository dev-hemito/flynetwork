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
import TeamBoard from '@/components/Home/Team';
import WhyJoinSection from '@/components/Home/WhyJoinFly';
import FlyIntakeProcess from '@/components/Home/HowtoJoin';
import HeroSection from '@/components/Home/Hero';

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
            <HeroSection headingTop="Become a Member of FLY and"
                headingBottom="Empower your Future"
                ptag=""
                btn1="Join Us"
                btn1Link="/join-fly"
                btn2="Learn More"
                btn2Link="/" />

            <div className="mx-auto max-w-7xl">
                <AnimatedBackground />
                <WhyJoinSection />

            </div>
            <FlyIntakeProcess />
        </>
    );
};

export default AboutUs;