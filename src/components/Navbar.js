'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppButton from './WhatsappButton';

const Navbar = ({ className }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { href: '/', text: 'Home' },
        { href: '/about', text: 'About' },
        // { href: '/about#activity', text: 'Activity' },
        { href: '/courses', text: 'Courses' },
        { href: '/events', text: 'Events' },
        { href: '/membership', text: 'Membership' },    
        { href: '/contact', text: 'Contact' },
    ];

    return (
        <header
            className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-[#291043]' : 'bg-transparent'
                } ${className}`}

        >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6">
                <div className="flex justify-between items-center w-full md:w-auto">
                    <Link href='/'  onClick={() => setIsMenuOpen(false)}><Image
                        src="/logo1.png"
                        width={500}
                        height={500}
                        alt="Header Logo"
                        className="h-10 w-40 object-contain"
                    /></Link>
                    <button
                        className="md:hidden rounded-lg p-2 hover:bg-white/10 text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-2/3 gap-4 `}>
                    <ul className="flex flex-col md:flex-row md:justify-end items-center md:gap-16 md:mr-16 gap-4 w-full ">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    href={link.href}
                                    className="text-sm font-semibold text-white hover:text-gray-200 block text-center mt-10 md:mt-0" onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link href='/join-fly' className="md:px-4 px-2 py-2 font-bold mt-10 md:mt-0 text-purple-800 hover:text-white  bg-purple-100 rounded-lg hover:bg-purple-600 transition-all duration-300 flex justify-center min-w-32" onClick={() => setIsMenuOpen(false)}>
                        Join Us
                    </Link>
                </nav>
            </div>
            <WhatsAppButton/>
        </header>
    );
};

export default Navbar;