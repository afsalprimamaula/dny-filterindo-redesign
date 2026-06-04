import React from 'react';
import { Phone, Mail, ChevronDown, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full flex flex-col z-50 sticky top-0 font-sans">
      
      {/* --- TOP BAR (Warna Biru) --- */}
      <div className="bg-dny-blue text-white py-2 px-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex gap-6">
          <a href="#" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Phone size={14} />
            <span>+62 123 456 789</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <Mail size={14} />
            <span>info@dnyfilterindo.com</span>
          </a>
        </div>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-gray-300 transition-colors">About</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Careers</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
        </div>
      </div>

      {/* --- MAIN NAVBAR (Warna Putih) --- */}
      <div className="bg-white py-4 px-8 flex justify-between items-center shadow-md">
        {/* Logo */}
        <div className="text-2xl font-bold text-dny-blue tracking-wide cursor-pointer">
          DNY FILTERINDO
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#" className="flex items-center gap-1 hover:text-dny-blue transition-colors group">
            Products 
            <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-dny-blue transition-colors group">
            Industries 
            <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-dny-blue transition-colors group">
            Solutions 
            <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
          </a>
        </nav>

        {/* Search Icon */}
        <button className="text-gray-700 hover:text-dny-blue transition-colors">
          <Search size={20} />
        </button>
      </div>

    </header>
  );
};

export default Header;  