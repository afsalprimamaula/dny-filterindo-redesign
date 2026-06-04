import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32 bg-[#0a3265]/80 bg-blend-overlay font-sans"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl text-left">
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Industrial Filtration Solutions for Every Application
          </h1>
          
          <p className="text-base md:text-lg text-white mb-8 leading-relaxed">
            DNY FILTERINDO delivers cutting-edge oil purification and dust collection systems to optimize your industrial processes. Trusted by industry leaders across Southeast Asia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-white text-[#0a3265] font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
              Request a Quote
              <ArrowRight size={18} />
            </button>
            
            <button className="flex items-center justify-center bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white/10 transition-colors">
              View Products
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;