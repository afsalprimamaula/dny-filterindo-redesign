import React from 'react';
import { Facebook, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a2540] text-gray-300 py-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Kolom 1 */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xl">DNY FILTERINDO</h3>
            <p className="text-sm leading-relaxed">
              Leading provider of industrial filtration solutions in Southeast Asia.
            </p>
            <div className="flex gap-4 pt-2">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"><Facebook size={18} /></div>
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"><Linkedin size={18} /></div>
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"><Twitter size={18} /></div>
            </div>
          </div>

          {/* Kolom 2 */}
          <div className="space-y-4">
            <h4 className="text-white font-bold">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Oil Purifiers</a></li>
              <li><a href="#" className="hover:text-white">Dust Collectors</a></li>
            </ul>
          </div>

          {/* Kolom 3 */}
          <div className="space-y-4">
            <h4 className="text-white font-bold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">System Design</a></li>
              <li><a href="#" className="hover:text-white">Technical Support</a></li>
            </ul>
          </div>

          {/* Kolom 4 */}
          <div className="space-y-4 text-sm">
            <h4 className="text-white font-bold">Contact Us</h4>
            <div className="flex items-center gap-3"><MapPin size={18} /> <p>Jakarta, Indonesia</p></div>
            <div className="flex items-center gap-3"><Phone size={18} /> <p>+62 21 555 0199</p></div>
          </div>
        </div>

        {/* Footer Bawah */}
        <div className="border-t border-white/10 pt-8 text-center text-sm">
          <p>© 2026 DNY FILTERINDO. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;