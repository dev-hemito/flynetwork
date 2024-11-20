import React, { useState } from 'react';

const BlogPost = () => {
    const [expandedId, setExpandedId] = useState(null);

    const posts = [
        {
            id: 1,
            title: "THE ENTREPRENEURIAL MINDSET",
            excerpt: "Many individuals aspire to establish their own businesses; however, they may lack the necessary entrepreneurial mindset to succeed. They often do not fully grasp the realities and implications of entrepreneurship.",
            author: "Dr Arun Oommen",
            credentials: "MBBS, MS (General Surgery), Mch (Neurosurgery), MRCS Ed (UK), MBA (Hospital Administration), D Litt(h), DSc(h), PhD(h), ENLS",
            role: "Senior Consultant Neurosurgeon",
            hospital: "VPS Lakeshore Hospital, Kochi",
            content: `Many individuals aspire to establish their own businesses; however, they may lack the necessary entrepreneurial mindset to succeed. They often do not fully grasp the realities and implications of entrepreneurship. Many are simply drawn to the perceived freedom associated with owning a business. While it is accurate that entrepreneurship can offer a sense of liberation, it can also be mentally, emotionally, and physically demanding...`
        },
        {
            id: 2,
            title: "THE ENTREPRENEURIAL MINDSET",
            excerpt: "Many individuals aspire to establish their own businesses; however, they may lack the necessary entrepreneurial mindset to succeed. They often do not fully grasp the realities and implications of entrepreneurship.",
            author: "Dr Arun Oommen",
            credentials: "MBBS, MS (General Surgery), Mch (Neurosurgery), MRCS Ed (UK), MBA (Hospital Administration), D Litt(h), DSc(h), PhD(h), ENLS",
            role: "Senior Consultant Neurosurgeon",
            hospital: "VPS Lakeshore Hospital, Kochi",
            content: `Many individuals aspire to establish their own businesses; however, they may lack the necessary entrepreneurial mindset to succeed. They often do not fully grasp the realities and implications of entrepreneurship. Many are simply drawn to the perceived freedom associated with owning a business. While it is accurate that entrepreneurship can offer a sense of liberation, it can also be mentally, emotionally, and physically demanding...`
        },
        {
            id: 3,
            title: "THE ENTREPRENEURIAL MINDSET",
            excerpt: "Many individuals aspire to establish their own businesses; however, they may lack the necessary entrepreneurial mindset to succeed. They often do not fully grasp the realities and implications of entrepreneurship.",
            author: "Dr Arun Oommen",
            credentials: "MBBS, MS (General Surgery), Mch (Neurosurgery), MRCS Ed (UK), MBA (Hospital Administration), D Litt(h), DSc(h), PhD(h), ENLS",
            role: "Senior Consultant Neurosurgeon",
            hospital: "VPS Lakeshore Hospital, Kochi",
            content: `Many individuals aspire to establish their own businesses; however, they may lack the necessary entrepreneurial mindset to succeed. They often do not fully grasp the realities and implications of entrepreneurship. Many are simply drawn to the perceived freedom associated with owning a business. While it is accurate that entrepreneurship can offer a sense of liberation, it can also be mentally, emotionally, and physically demanding...`
        },
        {
            id: 4,
            title: "THE ENTREPRENEURIAL MINDSET",
            excerpt: "Many individuals aspire to establish their own businesses; however, they may lack the necessary entrepreneurial mindset to succeed. They often do not fully grasp the realities and implications of entrepreneurship.",
            author: "Dr Arun Oommen",
            credentials: "MBBS, MS (General Surgery), Mch (Neurosurgery), MRCS Ed (UK), MBA (Hospital Administration), D Litt(h), DSc(h), PhD(h), ENLS",
            role: "Senior Consultant Neurosurgeon",
            hospital: "VPS Lakeshore Hospital, Kochi",
            content: `Many individuals aspire to establish their own businesses; however, they may lack the necessary entrepreneurial mindset to succeed. They often do not fully grasp the realities and implications of entrepreneurship. Many are simply drawn to the perceived freedom associated with owning a business. While it is accurate that entrepreneurship can offer a sense of liberation, it can also be mentally, emotionally, and physically demanding...`
        },

        // ... other posts with unique IDs 2, 3, 4
    ];

    return (
        <div className="p-4 max-w-7xl mx-auto text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {posts.map((post, index) => (
                    <div 
                        key={post.id}
                        className={`bg-white/10 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300
                            ${expandedId === post.id ? 'md:col-span-2' : 'hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer'}`}
                        onClick={() => !expandedId && setExpandedId(post.id)}
                    >
                        {expandedId !== post.id ? (
                            // Collapsed View
                            <div className="p-6">
                                <div className="md:flex items-start gap-4">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white text-xl font-bold">
                                        {post.author.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
                                        <p className="text-purple-200 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                                        <div className="text-purple-300 text-sm">
                                            <p className="font-medium">{post.author}</p>
                                            <p className="text-purple-400">{post.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Expanded View
                            <div className="p-6">
                                <div className="flex flex-col md:flex-row gap-6 mb-6">
                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white text-3xl font-bold mx-auto md:mx-0">
                                        {post.author.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center md:text-left">{post.title}</h1>
                                        <div className="text-purple-200">
                                            <p className="font-medium text-lg">{post.author}</p>
                                            <p className="text-sm text-purple-300">{post.credentials}</p>
                                            <p className="text-purple-300">{post.role}</p>
                                            <p className="text-purple-300">{post.hospital}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-invert prose-purple max-w-none">
                                    <p className="text-purple-200 leading-relaxed">{post.content}</p>

                                    <h3 className="text-white font-bold mt-6 mb-4">The 3C's of entrepreneurial mindset:</h3>
                                    <ul className="text-purple-200 list-disc pl-6 space-y-2">
                                        <li><span className="font-medium text-white">Confidence</span> - bolsters your belief in your vision, particularly during difficult times.</li>
                                        <li><span className="font-medium text-white">Creativity</span> - facilitates the development of innovative solutions, distinguishing you from your competitors.</li>
                                        <li><span className="font-medium text-white">Courage</span> - empowers you to confront uncertainty and venture into uncharted territories without fear.</li>
                                    </ul>
                                </div>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setExpandedId(null);
                                    }}
                                    className="mt-6 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPost;