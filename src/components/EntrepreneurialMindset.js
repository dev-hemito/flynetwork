import React, { useState } from 'react';
import { ArrowLeft, Clock, User } from 'lucide-react';

const BlogCard = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const threeCsList = [
        { title: "Confidence", desc: "Bolsters your belief in your vision, particularly during difficult times." },
        { title: "Creativity", desc: "Facilitates the development of innovative solutions, distinguishing you from competitors." },
        { title: "Courage", desc: "Empowers you to confront uncertainty and venture into uncharted territories without fear." }
    ];

    const keyFactors = [
        { title: "Clear Objectives", desc: "Enable business owners to act with intention and determination" },
        { title: "Positive Attitude", desc: "Essential for the success of a business and overall conduct" },
        { title: "Resilient Mindset", desc: "Ability to navigate unforeseen and unavoidable challenges" },
        { title: "Persuasion Skills", desc: "Essential for making sales and presenting solutions" },
        { title: "Continuous Learning", desc: "Commitment to self-education and practical wisdom" },
        { title: "Data-Driven Decisions", desc: "Utilize insights to make rational and well-informed choices" },
        { title: "Leadership", desc: "Master in motivation and human resource utilization" }
    ];

    if (!isExpanded) {
        return (
            <div
                onClick={() => setIsExpanded(true)}
                className="max-w-7xl mx-auto border border-purple-600 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer p-8 mt-12 mb-12"
            >
                <div className="flex items-start justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        The Entrepreneurial Mindset
                    </h2>
                    <div className="flex items-center space-x-4">
                        <div className="text-right">
                            <p className="text-sm text-gray-600 dark:text-gray-400">Dr. Arun Oommen</p>
                            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-1">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>10 min read</span>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-left">
                    Discover the key traits and mindset that drive successful entrepreneurs in today's dynamic business environment.
                    Learn how to develop the mental framework that sets apart industry leaders and innovators.
                </p>

                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                    Read more →
                </span>
            </div>
        );
    }

    return (
        <article className="max-w-7xl mx-auto border border-purple-600 rounded-lg shadow-sm p-8">
            <button
                onClick={() => setIsExpanded(false)}
                className="flex items-center text-blue-600 dark:text-blue-400 mb-8 hover:underline"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to preview
            </button>

            <header className="mb-12">
                <div className="flex items-start justify-between mb-6">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                        The Entrepreneurial Mindset
                    </h1>
                    <div className="text-right">
                        <p className="text-gray-600 dark:text-gray-400 font-medium">Dr. Arun Oommen</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">MBBS, MS, Mch, MRCS Ed (UK), MBA</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">Senior Consultant Neurosurgeon</p>
                        <div className="flex items-center justify-end text-gray-500 dark:text-gray-400 text-sm mt-2">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>10 min read</span>
                        </div>
                    </div>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-400 border-l-4 border-blue-500 pl-4">
                    Discover the key traits and mindset that drive successful entrepreneurs in today's dynamic business environment.
                    Learn how to develop the mental framework that sets apart industry leaders and innovators.
                </p>
            </header>

            <section className="mb-12">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What Makes an Entrepreneurial Mind?</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            An individual possessing an entrepreneurial mindset perceives challenges as distinct opportunities for growth.
                            They thrive in dynamic environments and are quick to capitalize on opportunities as they arise.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Why It Matters</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            An entrepreneurial mindset offers advantages not only to yourself but also to your employees,
                            clients, and the organization as a whole. It equips you with the strength and resilience
                            necessary to navigate difficult periods.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">The 3C's of Entrepreneurial Mindset</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {threeCsList.map((item, index) => (
                        <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Key Factors for Success</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {keyFactors.map((factor, index) => (
                        <div key={index} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{factor.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{factor.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Final Thoughts</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Developing an entrepreneurial mindset is a journey that requires dedication, practice, and continuous learning.
                    By embracing these principles and maintaining a growth-oriented perspective, you can cultivate the mental framework
                    necessary for success in today's business landscape.
                </p>
            </section>

            <footer className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Last updated: November 2024</span>
                </div>
            </footer>
        </article>
    );
};

export default BlogCard;