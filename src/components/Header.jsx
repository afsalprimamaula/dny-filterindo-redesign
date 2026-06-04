import React, { useState } from 'react';
import { Phone, Mail, ChevronDown, Search } from 'lucide-react';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <header className="w-full flex flex-col z-50 sticky top-0 font-sans">
      
      {/* --- TOP BAR --- */}
      <div className="bg-blue-900 text-white py-2 px-8 flex flex-col md:flex-row justify-between items-center text-sm">
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

      {/* --- MAIN NAVBAR --- */}
      <div className="bg-white py-4 px-8 flex justify-between items-center shadow-md">
        <div className="text-2xl font-bold text-blue-900 tracking-wide cursor-pointer">
          DNY FILTERINDO
        </div>

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
                <div className={`absolute top-full left-0 mt-2 bg-white shadow-xl border border-gray-100 rounded-lg p-8 grid gap-8 ${item === 'Products' ? 'w-[600px] grid-cols-2' : item === 'Industries' ? 'w-[400px] grid-cols-1' : 'w-[400px] grid-cols-1'}`}>
                  
                  {item === 'Products' ? (
                    <>
                      {/* Products Content (Tetap) */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-blue-900 font-bold mb-3">Oil Filtration</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-blue-900">Oil Purifiers</a></li>
                            <li><a href="#" className="hover:text-blue-900 font-semibold text-blue-900">Vacuum Oil Purifiers</a></li>
                            <li><a href="#" className="hover:text-blue-900">Transformer Oil Filtration</a></li>
                            <li><a href="#" className="hover:text-blue-900">Hydraulic Oil Filtration</a></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-blue-900 font-bold mb-3">Air Filtration</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-blue-900">HEPA Filters</a></li>
                            <li><a href="#" className="hover:text-blue-900">Carbon Filters</a></li>
                            <li><a href="#" className="hover:text-blue-900">Pre-Filters</a></li>
                            <li><a href="#" className="hover:text-blue-900">Custom Solutions</a></li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-blue-900 font-bold mb-3">Dust Collection</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li><a href="#" className="hover:text-blue-900">Industrial Dust Collectors</a></li>
                          <li><a href="#" className="hover:text-blue-900">Cartridge Dust Collectors</a></li>
                          <li><a href="#" className="hover:text-blue-900">Baghouse Filters</a></li>
                          <li><a href="#" className="hover:text-blue-900">Cyclone Separators</a></li>
                        </ul>
                      </div>
                    </>
                  ) : item === 'Industries' ? (
                    /* Industries Content (Tetap) */
                    <div className="space-y-4">
                      <h4 className="text-blue-900 font-bold mb-2">Targeted Industries</h4>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li><a href="#" className="block hover:text-blue-900 font-medium">Power Generation & Energy</a></li>
                        <li><a href="#" className="block hover:text-blue-900 font-medium">Oil & Gas Processing</a></li>
                        <li><a href="#" className="block hover:text-blue-900 font-medium">Manufacturing & Automotive</a></li>
                        <li><a href="#" className="block hover:text-blue-900 font-medium">Mining & Heavy Machinery</a></li>
                        <li><a href="#" className="block hover:text-blue-900 font-medium">Chemical & Pharmaceutical</a></li>
                      </ul>
                    </div>
                  ) : (
                    /* Solutions Content (Baru) */
                    <div className="space-y-4">
                      <h4 className="text-blue-900 font-bold mb-2">Engineering & Services</h4>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li><a href="#" className="block hover:text-blue-900 font-medium">System Design & Integration</a></li>
                        <li><a href="#" className="block hover:text-blue-900 font-medium">On-Site Installation</a></li>
                        <li><a href="#" className="block hover:text-blue-900 font-medium">Preventive Maintenance</a></li>
                        <li><a href="#" className="block hover:text-blue-900 font-medium">Laboratory Oil Analysis</a></li>
                        <li><a href="#" className="block hover:text-blue-900 font-medium">Technical Training & Consulting</a></li>
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