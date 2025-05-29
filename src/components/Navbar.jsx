import React, { useState } from 'react';
import logo from '../assets/media4_logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navItems = ['Home', 'About', 'Features', 'Achievements'];

    return (
        <header className="w-full fixed top-0 z-50 bg-white shadow-md">
            <nav className="py-4 px-6 md:px-20 max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <a href="#home" className="inline-block">
                    <img src={logo} alt="MediFor7 Logo" className="h-10 w-auto" />
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-gray-700 hover:text-blue-600 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition underline-offset-4 hover:underline"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-600 p-2 rounded"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <svg
                        className="h-6 w-6 text-gray-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        {isOpen ? (
                            // X icon when open
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            // Hamburger icon when closed
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-4">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={closeMenu}
                            className="block text-gray-700 hover:text-blue-600 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;
