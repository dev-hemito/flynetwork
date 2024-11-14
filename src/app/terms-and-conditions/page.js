'use client'
import AnimatedBackground from '@/components/AnimatedBackground';
import React from 'react';
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const page = () => {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-32">
            <AnimatedBackground />
            <div className="max-w-7xl mx-auto text-white   overflow-hidden">
                <div className="bg-purple-950 p-6 text-white">
                    <div className="flex items-center gap-3">
                        <IoDocumentTextOutline className="text-3xl" />
                        <h1 className="text-2xl font-bold">Terms and Conditions for Forward Looking Youth (FLY)</h1>
                    </div>
                    <p className="mt-2 text-blue-100">Effective Date: 29/10/2024</p>
                </div>

                <div className="p-8 text-white">
                    <div className="space-y-6">
                        {/* Terms Sections */}
                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
                            <p className="text-gray-300">By participating in the FLY NextGen Awards 2024, you agree to these Terms and Conditions. If you do not agree, please do not participate.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">2. Eligibility</h2>
                            <p className="text-gray-300">Participants must be in the age group 18 - 25 and should be registered for the event.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">3. Registration</h2>
                            <p className="text-gray-300">All participants must complete the registration form and provide accurate information. FLY reserves the right to refuse registration at its discretion.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">4. Participation</h2>
                            <p className="text-gray-300">Participants agree to engage respectfully and professionally throughout the event, adhering to all guidelines provided by FLY.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">5. Intellectual Property</h2>
                            <p className="text-gray-300">All materials shared during the event are the intellectual property of FLY and may not be reproduced or distributed without permission.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">6. Liability</h2>
                            <p className="text-gray-300">FLY is not liable for any direct, indirect, incidental, or consequential damages resulting from your participation in the event.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">7. Governing Law</h2>
                            <p className="text-gray-300">These Terms and Conditions are governed by the laws of Kochi jurisdiction in Kerala, India.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">8. Changes to Terms</h2>
                            <p className="text-gray-300">FLY reserves the right to modify these Terms and Conditions at any time. Changes will be communicated through our website.</p>
                        </section>

                        {/* Contact Information */}
                        <section className="mt-8 pt-8 border-t border-gray-200">
                            <h2 className="text-xl font-semibold text-white mb-4">9. Contact Information</h2>
                            <p className="text-gray-300 mb-4">For any inquiries regarding these Terms and Conditions, please contact us at:</p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MdLocationOn className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-white">Forward Looking Youth (FLY)</p>
                                        <p className="text-gray-300">XXI/152, Cochin University Post,</p>
                                        <p className="text-gray-300">Kalamassery, Kochi - 682022, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <MdLocationOn className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-300">17 Salt Hill Avenue,</p>
                                        <p className="text-gray-300">Post Code - SL1 3XP Slough, United Kingdom</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <MdPhone className="text-blue-600 text-xl flex-shrink-0" />
                                    <p className="text-gray-300">+91 884 808 5572 / +91 812 983 9102 / +44 7407702612 (UK)</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <MdEmail className="text-blue-600 text-xl flex-shrink-0" />
                                    <a href="mailto:info@flynetwork.in" className="text-blue-600 hover:underline">info@flynetwork.in</a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;