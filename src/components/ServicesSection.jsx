import React from 'react';
import { Droplets, Wind, Settings } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Oil Purification",
      icon: Droplets,
      description: "Advanced oil treatment for hydraulic, turbine, and transformer systems to ensure equipment longevity and peak operational performance."
    },
    {
      title: "Dust Collection",
      icon: Wind,
      description: "High-efficiency dust collection systems engineered to improve air quality, ensure worker safety, and maintain environmental compliance in industrial environments."
    },
    {
      title: "Technical Consulting",
      icon: Settings,
      description: "Expert engineering consultations to optimize your filtration infrastructure, reduce maintenance costs, and implement sustainable long-term practices."
    }
  ];

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
          <div className="h-1 w-20 bg-blue-900 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            DNY Filterindo provides comprehensive industrial filtration solutions designed to optimize your processes and increase efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group bg-gray-50">
              <div className="w-14 h-14 bg-blue-900 text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-800 transition-colors">
                <service.icon size={30} />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;