import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#001529] text-gray-300 py-16 px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Kolom 1: Brand */}
        <div className="space-y-4">
          <h2 className="text-white font-bold text-xl">DNY FILTERINDO</h2>
          <p className="text-sm leading-relaxed">
            Leading provider of industrial filtration solutions in Southeast Asia. Quality products, expert service, trusted partnerships.
          </p>
        </div>

        {/* Kolom 2: Products */}
        <div>
          <h3 className="text-white font-bold mb-6">Products</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Oil Purifiers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Dust Collectors</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Air Filtration</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Custom Solutions</a></li>
          </ul>
        </div>

        {/* Kolom 3: Services */}
        <div>
          <h3 className="text-white font-bold mb-6">Services</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">System Design</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Installation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Maintenance</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Technical Support</a></li>
          </ul>
        </div>

        {/* Kolom 4: Contact Us */}
        <div className="space-y-4 text-sm">
          <h3 className="text-white font-bold mb-6">Contact Us</h3>
          <p>Jl. Industri Raya No. 123</p>
          <p>Jakarta 12345, Indonesia</p>
          <p>+62 123 456 789</p>
          <p>info@dnyfilterindo.com</p>
        </div>
      </div>

      {/* Footer Bawah */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-blue-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>© 2026 DNY FILTERINDO. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;