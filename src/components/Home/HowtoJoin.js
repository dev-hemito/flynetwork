import React from 'react';
import { ChevronDown, UserPlus, Calendar, FileCheck, CreditCard, Gift, Users, Check } from 'lucide-react';

const FlyIntakeProcess = () => {
  const steps = [
    {
      title: "Pre-Application Engagement",
      icon: <UserPlus className="w-6 h-6" />,
      description: "Initial outreach and welcome kit distribution",
      details: [
        "Personalized email invitation",
        "Digital brochure about FLY",
        "Video message from founders",
        "Online applicant portal access"
      ]
    },
    {
      title: "Application Submission",
      icon: <FileCheck className="w-6 h-6" />,
      description: "Complete the FLY Applicant Intake Form",
      details: [
        "Personal information",
        "Business background",
        "Education details",
        "Career goals",
        "Supporting materials"
      ]
    },
    {
      title: "Intake Interview",
      icon: <Calendar className="w-6 h-6" />,
      description: "Virtual or in-person interview with FLY representatives",
      details: [
        "Structured interview process",
        "Interview board review",
        "Branded interview space",
        "Professional assessment"
      ]
    },
    {
      title: "Payment & Documents",
      icon: <CreditCard className="w-6 h-6" />,
      description: "Complete necessary paperwork and fees",
      details: [
        "Membership fee collection",
        "ID verification",
        "Required documentation",
        "Record keeping"
      ]
    },
    {
      title: "Welcome Kit",
      icon: <Gift className="w-6 h-6" />,
      description: "Receive your exclusive FLY welcome package",
      details: [
        "Official membership certificate",
        "FLY pin or badge",
        "Branded merchandise",
        "Personalized welcome card"
      ]
    },
    {
      title: "Orientation",
      icon: <Users className="w-6 h-6" />,
      description: "Join the FLY community officially",
      details: [
        "Meet FLY leadership",
        "Learn about policies",
        "Connect with mentors",
        "Group photo session"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 text-white">
          <h1 className="text-4xl font-bold mb-4">
            Join the FLY Community
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Embark on your journey to become a part of our prestigious community. 
            Follow these steps to begin your FLY membership experience.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-purple-100 hover:bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    {step.icon}
                  </div>
                  <span className="text-sm font-semibold text-indigo-600">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>
                <div className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
             
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a href='/join-fly'  className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors duration-300">
            Start Your Application
          </a>
          <p className="mt-4 text-gray-200">
            Have questions? Contact our membership team for assistance
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlyIntakeProcess;