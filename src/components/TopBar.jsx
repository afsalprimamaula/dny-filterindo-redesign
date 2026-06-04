import React from 'react';
import { Phone, Mail } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[#0a3265] text-white py-2 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center text-sm font-sans">
      
      {/* Bagian Kiri: Info Kontak */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-2 sm:mb-0">
        <a href="tel:+62123456789" className="flex items-center hover:text-gray-300 transition-colors duration-200">
          <Phone size={15} className="mr-2" />
          <span>+62 123 456 789</span>
        </a>
        <a href="mailto:info@dnyfilterindo.com" className="flex items-center hover:text-gray-300 transition-colors duration-200">
          <Mail size={15} className="mr-2" />
          <span>info@dnyfilterindo.com</span>
        </a>
      </div>

      {/* Bagian Kanan (Sesuai Konteks Layout): Link Navigasi */}
      <div className="flex gap-4 sm:gap-6 font-medium">
        <a href="#about" className="hover:text-gray-300 transition-colors duration-200">About</a>
        <a href="#careers" className="hover:text-gray-300 transition-colors duration-200">Careers</a>
        <a href="#contact" className="hover:text-gray-300 transition-colors duration-200">Contact</a>
      </div>
      
    </div>
  );
};

export default TopBar;