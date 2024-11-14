import React from 'react';
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { BsListCheck } from "react-icons/bs";

const Page = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-32">
      <div className="max-w-7xl mx-auto  overflow-hidden">
        <div className="bg-purple-950 p-6 text-white">
          <div className="flex items-center gap-3">
            <IoShieldCheckmarkOutline className="text-3xl" />
            <h1 className="text-2xl font-bold">Privacy Policy for Forward Looking Youth (FLY)</h1>
          </div>
          <p className="mt-2 text-indigo-100">Effective Date: 29/10/2024</p>
        </div>

        <div className="p-8">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
              <p className="text-gray-300">Forward Looking Youth (FLY) is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you participate in the FLY NextGen Awards 2024 and other FLY initiatives.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
              <p className="text-gray-300 mb-3">We may collect the following types of information:</p>
              <div className="space-y-3 pl-4">
                <div className="flex items-start gap-2">
                  <BsListCheck className="text-purple-500 text-xl mt-1 flex-shrink-0" />
                  <p className="text-gray-300"><span className="font-medium">Personal Information:</span> Name, email address, phone number, and other contact details provided during registration.</p>
                </div>
                <div className="flex items-start gap-2">
                  <BsListCheck className="text-purple-500 text-xl mt-1 flex-shrink-0" />
                  <p className="text-gray-300"><span className="font-medium">Demographic Information:</span> Age, gender, and industry-related details.</p>
                </div>
                <div className="flex items-start gap-2">
                  <BsListCheck className="text-purple-500 text-xl mt-1 flex-shrink-0" />
                  <p className="text-gray-300"><span className="font-medium">Event Participation Data:</span> Information regarding your participation in activities, sessions, and competitions.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
              <p className="text-gray-300 mb-3">We use your information for:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Event registration and management.</li>
                <li>Communication regarding the event and future opportunities.</li>
                <li>Analysis to improve our services and events.</li>
                <li>Recognition and awards processes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Data Sharing and Disclosure</h2>
              <p className="text-gray-300 mb-3">We do not sell or rent your personal information to third parties. We may share your information:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>With partners and sponsors to facilitate the event.</li>
                <li>As required by law or to protect our rights and the rights of others.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Data Security</h2>
              <p className="text-gray-300">We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights</h2>
              <p className="text-gray-300 mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Access your personal information.</li>
                <li>Request correction of your personal information.</li>
                <li>Withdraw your consent for us to process your personal information.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Changes to This Policy</h2>
              <p className="text-gray-300">We may update this Privacy Policy periodically. Any changes will be posted on our website with an updated effective date.</p>
            </section>

            <section className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-white mb-4">8. Contact Us</h2>
              <p className="text-gray-300 mb-4">For questions about this Privacy Policy, please contact us at:</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MdLocationOn className="text-purple-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Forward Looking Youth (FLY)</p>
                    <p className="text-gray-300">XXI/152, Cochin University Post,</p>
                    <p className="text-gray-300">Kalamassery, Kochi - 682022, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MdLocationOn className="text-purple-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">17 Salt Hill Avenue,</p>
                    <p className="text-gray-300">Post Code - SL1 3XP Slough, United Kingdom</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MdPhone className="text-purple-500 text-xl flex-shrink-0" />
                  <p className="text-gray-300">+91 884 808 5572 / +91 812 983 9102 / +44 7407702612 (UK)</p>
                </div>

                <div className="flex items-center gap-3">
                  <MdEmail className="text-purple-500 text-xl flex-shrink-0" />
                  <a href="mailto:info@flynetwork.in" className="text-purple-500 hover:underline">info@flynetwork.in</a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;