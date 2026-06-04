import React from 'react';
import { Phone, Mail, ChevronDown, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full flex flex-col z-50 sticky top-0 font-sans">
      

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