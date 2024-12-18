'use client'
import React from 'react';
import { 
    BiBook, 
    BiGroup, 
    BiTrendingUp, 
    BiDollar, 
    BiTargetLock, 
    BiHeart, 
    BiCrown, 
    BiBox, 
    BiWrench,
    BiRightArrowAlt 
} from 'react-icons/bi';
import Link from 'next/link';
import HeroSection from './Hero';

const features = [
    {
        icon: BiBook,
        title: "Business Systems and Processes",
        description: "Learn to build efficient workflows and standardized procedures that reduce errors and improve productivity."
    },
    {
        icon: BiGroup,
        title: "Business Culture",
        description: "Shape the identity, morale, and productivity of your team through strong cultural foundations."
    },
    {
        icon: BiTrendingUp,
        title: "Business Strategy",
        description: "Develop clear, actionable strategies tailored to your goals and market conditions."
    },
    {
        icon: BiDollar,
        title: "Financial Planning",
        description: "Master business finances, including budgeting, cash flow, and financial forecasting."
    },
    {
        icon: BiTargetLock,
        title: "Marketing & Brand Building",
        description: "Explore modern marketing techniques and build a strong brand presence."
    },
    {
        icon: BiHeart,
        title: "Sales & Customer Relations",
        description: "Master sales fundamentals while building strong customer relationships."
    },
    {
        icon: BiCrown,
        title: "Leadership & Team Building",
        description: "Gain essential skills to inspire and manage high-performing teams."
    },
    {
        icon: BiBox,
        title: "Operations Management",
        description: "Optimize processes, control inventory, and manage supply chain logistics."
    },
    {
        icon: BiWrench,
        title: "Modern Business Tools",
        description: "Get hands-on experience with essential tools for strategy and management."
    }
];

const MBALandingPage = () => {
    return (
        <div className="min-h-screen text-white relative overflow-hidden">
            <HeroSection 
                headingTop="Practical MBA for Young "
                headingBottom="Entrepreneurs"
                ptag="A unique, result-oriented course crafted for ambitious entrepreneurs ready to master the essentials of business success."
                btn1="Start Your Journey"
                btn1Link="/join-fly"
                btn2="Learn More"
                btn2Link="/"
            />

            {/* Features Grid */}
            <section className="relative px-4 pb-20">
                <h3 className='text-center text-5xl mb-16 font-bold'>Let's dive deep</h3>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300 group">
                                    <div className="mb-4">
                                        <Icon className="w-8 h-8 text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                                    <p className="text-gray-300">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Transform Your Entrepreneurial Journey Today
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Join a community of driven entrepreneurs and gain the knowledge, tools, and confidence to scale your business.
                    </p>
                    <Link href='/join-fly' className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full inline-flex items-center space-x-2 transition-colors">
                        <span>Enroll Now</span>
                        <BiRightArrowAlt className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default MBALandingPage;