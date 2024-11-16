import Link from 'next/link';
import React from 'react';
import {
    Users,
    Milestone,
    HeartHandshake,
    Sprout,
    Sparkles
} from 'lucide-react';


const ValuesofFly = () => {
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
    <div>
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
                        <Link href='/join-fly' className="bg-purple-100 text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-mint-200 transition-colors duration-300 inline-flex items-center group">
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
    </div>
  )
}

export default ValuesofFly
