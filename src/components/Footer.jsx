import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from '../assets/footerImg.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="MediFor7 Logo" className="w-32 mb-4" />
          <p className="text-sm text-gray-400">
            Your trusted partner in smart medication management.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <a href="#home" className="text-gray-300 hover:text-white mb-2">Home</a>
          <a href="#about" className="text-gray-300 hover:text-white mb-2">About</a>
          <a href="#features" className="text-gray-300 hover:text-white mb-2">Features</a>
          <a href="#achievements" className="text-gray-300 hover:text-white">Achievements</a>
        </div>

        {/* Social Media */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white"><FaFacebookF /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MediFor7. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
