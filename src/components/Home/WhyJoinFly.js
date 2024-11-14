import React from 'react';
import { RiTeamLine, RiBookOpenLine, RiUserStarLine, RiAwardLine, RiHeartLine, RiRocketLine } from 'react-icons/ri';

const WhyJoinSection = () => {
  const features = [
    {
      title: "Build Lasting Networks",
      description: "Connect with like-minded peers, seasoned mentors, and successful entrepreneurs, expanding your professional network through growth and support.",
      icon: RiTeamLine
    },
    {
      title: "Gain Practical Skills",
      description: "Access workshops, training sessions, and hands-on experiences in key areas like strategy, finance, marketing, and sales.",
      icon: RiBookOpenLine
    },
    {
      title: "Learn from Industry Experts",
      description: "Benefit from guidance and mentorship from business leaders who offer insights and real-world advice to help you succeed.",
      icon: RiUserStarLine
    },
    {
      title: "Showcase and Grow Your Talents",
      description: "Participate in FLY's NextGen Entrepreneur Awards, earn recognition in specialized categories, and gain industry visibility.",
      icon: RiAwardLine
    },
    {
      title: "Experience a Values-Driven Community",
      description: "Join a supportive network based on values of Innovation, Integrity, and Collaboration, encouraging both personal success and social responsibility.",
      icon: RiHeartLine
    },
    {
      title: "Prepare for Lifelong Success",
      description: "FLY provides a strong foundation, whether you're starting a venture, joining a family business, or driving change within an organization.",
      icon: RiRocketLine
    }
  ];

  return (
    <div className="text-white px-4 py-16 min-h-screen">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">Why Join FLY</h1>
          <p className="text-gray-300 mx-auto text-sm md:text-base text-justify" data-aos="fade-up">
            Joining FLY (Forward Looking Youth) International is your gateway to a vibrant community of future business
            leaders and next-generation entrepreneurs. As a member of FLY, you're stepping into an environment designed
            to empower young talents, sharpen entrepreneurial skills, and foster lifelong connections with like-minded
            peers and industry leaders. Here's why FLY is the ideal platform for young entrepreneurs ready to make a
            meaningful impact.
          </p>
          <p className='text-gray-300 mx-auto text-sm md:text-base text-justify' data-aos="fade-up">
            FLY connects ambitious individuals from entrepreneurial backgrounds, offering them access to valuable resources and personalized mentorship. Through FLY, members can engage in networking opportunities, share innovative ideas, and develop key business skills. The platform also hosts workshops and provides educational tools to help entrepreneurs navigate the challenges of building successful ventures

          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg hover:bg-purple-700/50 transition-all duration-300 flex flex-col items-start" data-aos="fade-in" data-aos-delay={`${index}00`}
            >
              <feature.icon className="w-8 h-8 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-3 text-left">{feature.title}</h3>
              <p className="text-gray-300 text-sm md:text-left text-justify">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-purple-100 text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-mint-200 transition-colors duration-300 inline-flex items-center group">
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinSection;