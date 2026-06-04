import React, { useState } from 'react';
import { Phone, Mail, ChevronDown, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <header className="w-full flex flex-col z-50 sticky top-0 font-sans bg-white shadow-md">
      
      {/* --- TOP BAR --- */}
      <div className="bg-blue-900 text-white py-2 px-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex gap-6">
          <span className="flex items-center gap-2"><Phone size={14} /> +62 123 456 789</span>
          <span className="flex items-center gap-2"><Mail size={14} /> info@dnyfilterindo.com</span>
        </div>
        <div className="flex gap-6 mt-2 md:mt-0">
          {/* Menggunakan Link agar berpindah halaman dengan mulus */}
          <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
          <Link to="/careers" className="hover:text-gray-300 transition-colors">Careers</Link>
          <HashLink smooth to="/#contact" className="hover:text-gray-300 transition-colors">
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <div className="py-4 px-8 flex justify-between items-center">
        {/* Logo Link ke Home */}
        <Link to="/" className="text-2xl font-bold text-blue-900 tracking-wide cursor-pointer">
          DNY FILTERINDO
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          
          {['Products', 'Industries', 'Solutions'].map((item) => (
            <div key={item} className="relative" onMouseLeave={() => setOpenMenu(null)}>
              <button 
                className="flex items-center gap-1 hover:text-blue-900 transition-colors group"
                onMouseEnter={() => setOpenMenu(item)}
              >
                {item}
                <ChevronDown size={16} className={`transition-transform duration-300 ${openMenu === item ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Content */}
              {openMenu === item && (
                <div className={`absolute top-full left-0 mt-2 bg-white shadow-xl border border-gray-100 rounded-lg p-8 grid gap-8 z-50 ${item === 'Products' ? 'w-[600px] grid-cols-2' : 'w-[400px] grid-cols-1'}`}>
                  
                  {item === 'Products' ? (
                    <>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-blue-900 font-bold mb-3">Oil Filtration</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-blue-900">Oil Purifiers</a></li>
                            <li><a href="#" className="hover:text-blue-900 font-semibold text-blue-900">Vacuum Oil Purifiers</a></li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-blue-900 font-bold mb-3">Dust Collection</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li><a href="#" className="hover:text-blue-900">Industrial Dust Collectors</a></li>
                          <li><a href="#" className="hover:text-blue-900">Cyclone Separators</a></li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <div className="space-y-4">
                      <h4 className="text-blue-900 font-bold mb-2">Engineering & Services</h4>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li><a href="#" className="block hover:text-blue-900 font-medium">System Design</a></li>
                        <li><a href="#" className="block hover:text-blue-900 font-medium">Maintenance</a></li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          
        </nav>

        <button className="text-gray-700 hover:text-blue-900 transition-colors">
          <Search size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;