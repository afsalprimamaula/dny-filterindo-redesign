import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const ContactCTASection = () => {
  const benefits = [
    "Free initial consultation",
    "Custom system design",
    "24/7 technical support",
    "Nationwide installation service"
  ];

  return (
    <section className="bg-[#0a2540] py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Kolom Kiri: Teks & Informasi */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Optimize Your Filtration System?
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Our team of filtration experts is ready to analyze your requirements and design a custom solution that maximizes efficiency and reduces operational costs.
            </p>
            
            <ul className="flex flex-col space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-white">
                  <CheckCircle2 className="text-white mr-3 flex-shrink-0" size={24} />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <button className="bg-white text-[#0a2540] hover:bg-gray-100 font-semibold px-8 py-3 rounded-md flex items-center justify-center gap-2 transition-colors duration-300 w-max">
              Request a Quote
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Kolom Kanan: Formulir Kontak */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Contact Form
            </h3>
            
            <form className="space-y-5">
              {/* Area 1: Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-white mb-2">
                  Company Name
                </label>
                <input 
                  type="text" 
                  id="companyName"
                  placeholder="Your company name" 
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>

              {/* Area 2: Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="your@email.com" 
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>

              {/* Area 3: Product Interest */}
              <div>
                <label htmlFor="product" className="block text-sm font-medium text-white mb-2">
                  Product Interest
                </label>
                <select 
                  id="product"
                  className="w-full bg-white/10 border border-white/20 text-white rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all [&>option]:text-gray-900"
                >
                  <option value="oil-purifiers">Oil Purifiers</option>
                  <option value="dust-collectors">Dust Collectors</option>
                  <option value="filter-elements">Filter Elements</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              {/* Area 4: Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="Tell us about your requirements..." 
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-white text-[#0a2540] hover:bg-gray-100 font-bold px-6 py-3 rounded-md mt-2 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;