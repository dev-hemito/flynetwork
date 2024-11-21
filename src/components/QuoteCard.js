import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const QuoteCard = () => {
    const quotes = [
        {
            name: "Dhirubhai Ambani",
            quote: "Think big, think fast, think ahead. Ideas are no one's monopoly.",
            country: "India",
            imageUrl: "/dhiru.jpeg"
        },
        {
            name: "Ratan Tata",
            quote: "I don't believe in taking right decisions. I take decisions and then make them right.",
            country: "India",
            imageUrl: "/ratan.jpeg"
        },
        {
            name: "Elon Musk",
            quote: "When something is important enough, you do it even if the odds are not in your favor.",
            country: "USA",
            imageUrl: "/elon.jpeg"
        },
        {
            name: "Mark Zuckerberg",
            quote: "The biggest risk is not taking any risk.",
            country: "USA",
            imageUrl: "/mark.jpeg"
        },
        {
            name: "Warren Buffett",
            quote: "The more you learn, the more you earn.",
            country: "USA",
            imageUrl: "/warren.jpeg"
        },
        {
            name: "Indra Nooyi",
            quote: "The world is changing, and the skills that we used to build our career in the past are not necessarily the skills that will help us in the future.",
            country: "India",
            imageUrl: "/indra.jpeg"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextQuote = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevQuote = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="min-h-screen p-4 flex items-center justify-center mt-12 ">
            <div className="max-w-7xl w-full">
                {/* Desktop Grid View */}
                <div className="hidden lg:grid grid-cols-3 gap-6">
                    {quotes.map((quote, index) => (
                        <div
                            key={index}
                            className="bg-white/10 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <div className="flex flex-col items-center space-y-4">
                                <img
                                    src={quote.imageUrl}
                                    alt={quote.name}
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                                <h3 className="text-xl font-bold text-gray-100">{quote.name}</h3>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                    {quote.country}
                                </span>
                                <p className="text-gray-200 text-center mt-4 italic">
                                    "{quote.quote}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile/Tablet Carousel View */}
                <div className="lg:hidden">
                    <div className="bg-white/10 rounded-xl shadow-lg p-6">
                        <div className="flex flex-col items-center space-y-4">
                            <img
                                src={quotes[currentIndex].imageUrl}
                                alt={quotes[currentIndex].name}
                                className="w-32 h-32 rounded-full object-cover"
                            />
                            <h3 className="text-2xl font-bold text-gray-100">
                                {quotes[currentIndex].name}
                            </h3>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                {quotes[currentIndex].country}
                            </span>
                            <p className="text-gray-200 text-center mt-4 italic">
                                "{quotes[currentIndex].quote}"
                            </p>

                            <div className="flex justify-center space-x-4 mt-6">
                                <button
                                    onClick={prevQuote}
                                    className="p-2 rounded-full bg-purple-900 hover:bg-gray-200 transition-colors"
                                >
                                    <ChevronLeft className="w-6 h-6 text-gray-200" />
                                </button>
                                <button
                                    onClick={nextQuote}
                                    className="p-2 rounded-full bg-purple-900 hover:bg-gray-200 transition-colors"
                                >
                                    <ChevronRight className="w-6 h-6 text-gray-200" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {quotes.map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 w-2 rounded-full transition-colors ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteCard;