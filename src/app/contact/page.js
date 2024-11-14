'use client'
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaSpinner
} from 'react-icons/fa';
import AnimatedBackground from '@/components/AnimatedBackground';

const ContactPage = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const contactInfo = [
        {
            icon: FaMapMarkerAlt,
            title: 'Visit Us',
            content: [
                'XXI/152, Cochin University Post, Kalamassery, Kochi - 682022',
                '17 Salt Hill Avenue, Post code -SL1 3XP Slough, United Kingdom'
            ]
        },
        {
            icon: FaPhone,
            title: 'Call Us',
            content: ['+91 8848085572', '+91 8129839102', '+44 7407702612 (UK)']
        },
        {
            icon: FaEnvelope,
            title: 'Email Us',
            content: ['info@flynetwork.in']
        }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            // Then, save to Google Sheet
            const formData = new FormData(formRef.current);
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_name: formData.get('user_name'),
                    user_email: formData.get('user_email'),
                    subject: formData.get('subject'),
                    message: formData.get('message')
                }),
            });

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you for your message. We will get back to you soon!'
                });
                formRef.current.reset();
            } else {
                throw new Error('Failed to save submission');
            }

        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Something went wrong. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen px-4 sm:px-6 lg:px-8 mt-32 mb-32">
            <AnimatedBackground />

            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-gray-100 max-w-2xl mx-auto">
                        Have questions or need assistance? We're here to help. Reach out to us through any of the channels below or fill out the contact form.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-semibold text-white mb-8">
                            Contact Information
                        </h2>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="flex items-start p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-800"
                                >
                                    <div className="p-3 rounded-lg">
                                        <info.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-medium text-white mb-2">
                                            {info.title}
                                        </h3>
                                        <div className="space-y-2">
                                            {info.content.map((item, idx) => (
                                                <p key={idx} className="text-gray-200">
                                                    {item}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-semibold text-purple-900 mb-6">
                            Send us a Message
                        </h2>

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="user_name"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="user_email"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                                    placeholder="Your message..."
                                />
                            </div>

                            {submitStatus.message && (
                                <div
                                    className={`p-4 rounded-lg ${submitStatus.type === 'success'
                                        ? 'bg-green-50 text-green-800'
                                        : 'bg-red-50 text-red-800'
                                        }`}
                                >
                                    {submitStatus.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium
                                    ${!isSubmitting && 'hover:bg-purple-700'} 
                                    transition-colors duration-300 
                                    disabled:opacity-70 disabled:cursor-not-allowed
                                    flex items-center justify-center`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <FaSpinner className="animate-spin mr-2" />
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;