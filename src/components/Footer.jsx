import React from 'react';
import { Facebook, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a2540] text-gray-300 py-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Kolom 1: Brand */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xl">DNY FILTERINDO</h3>
            <p className="text-sm leading-relaxed">
              Leading provider of industrial filtration solutions in Southeast Asia. Quality products, expert service, trusted partnerships.
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Linkedin, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-[#0a2540] transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Kolom 2: Products */}
          <div className="space-y-4">
            <h4 className="text-white font-bold">Products</h4>
            <ul className="space-y-2 text-sm">
              {['Oil Purifiers', 'Dust Collectors', 'Air Filtration', 'Custom Solutions'].map((link) => (
                <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Services */}
          <div className="space-y-4">
            <h4 className="text-white font-bold">Services</h4>
            <ul className="space-y-2 text-sm">
              {['System Design', 'Installation', 'Maintenance', 'Technical Support'].map((link) => (
                <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Contact Us */}
          <div className="space-y-4 text-sm">
            <h4 className="text-white font-bold">Contact Us</h4>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="flex-shrink-0" />
              <p>Jl. Industri Utama No. 123, Jakarta, Indonesia</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="flex-shrink-0" />
              <p>+62 21 555 0199</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="flex-shrink-0" />
              <p>info@dnyfilterindo.com</p>
            </div>
          </div>
        </div>

        {/* Footer Bawah */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2026 DNY FILTERINDO. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((link) => (
              <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;