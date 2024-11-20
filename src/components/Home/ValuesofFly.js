import Link from 'next/link';
import React from 'react';
import {
    Users,
    Milestone,
    HeartHandshake,
    Sprout,
    Sparkles,
    Rocket
} from 'lucide-react';

const ValuesofFly = () => {
    const features = [
        {
            title: "Rise Together",
            description: "We believe in the power of unity and collective growth. Every member of FLY plays a role in lifting each other up, creating a foundation where all can thrive by supporting one another.",
            icon: Users
        },
        {
            title: "Lead & Lift",
            description: "Leadership isn't just about reaching the top; it's about lifting others as you climb. At FLY, we are dedicated to developing leaders who inspire and empower their peers, creating a positive cycle of mentorship and guidance.",
            icon: Milestone
        },
        {
            title: "Build & Bloom",
            description: "Our members are the builders of their own futures. FLY provides the environment for each individual to lay their foundation, nurture their growth, and ultimately bloom as successful, impactful entrepreneurs.",
            icon: Sprout
        },
        {
            title: "Thrive by Giving",
            description: "We embrace a culture of contribution. By sharing knowledge, resources, and support, we help each other succeed. At FLY, we understand that true success is amplified when we give generously and supportively",
            icon: HeartHandshake
        },
        {
            title: "Empower, Connect, Transform",
            description: "Through empowerment and meaningful connections, FLY transforms potential into achievement. We believe that with the right support, every young entrepreneur has the power to drive positive change and reach new heights",
            icon: Sparkles
        },
        {
            title: "Innovate & Excel",
            description: "We foster a culture of innovation and excellence. FLY encourages members to push boundaries, think creatively, and strive for exceptional results while maintaining a commitment to sustainable and ethical practices.",
            icon: Rocket
        }
    ];

    return (
        <section className="min-h-screen  py-16 px-4 relative overflow-hidden">
            {/* Background decoration */}


            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                        Values of FLY
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
                        FLY's mission is to cultivate a community of empowered, connected, and inspired young entrepreneurs who support each other on their journeys to success.
                        Our core values reflect our commitment to fostering meaningful relationships, shared growth, and impactful transformation.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-center">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10"
                        >
                            <div className="h-12 w-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                                <feature.icon className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-white">
                                {feature.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <Link 
                        href="/join-fly"
                        className="inline-flex items-center px-8 py-4 text-lg font-semibold text-purple-900 bg-white rounded-full hover:bg-purple-50 transition-colors duration-300 group"
                    >
                        Become a member now
                        <svg
                            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
        </section>
    );
};

export default ValuesofFly;