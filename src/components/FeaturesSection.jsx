import React from 'react';
import { Award, Shield, Wrench, Clock } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: Award,
      title: "Industry Expertise",
      description: "Over 25 years of experience delivering filtration solutions across Southeast Asia."
    },
    {
      id: 2,
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO 9001 certified processes and rigorous quality control on every product."
    },
    {
      id: 3,
      icon: Wrench,
      title: "Custom Engineering",
      description: "Tailored solutions designed specifically for your unique operational requirements."
    },
    {
      id: 4,
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance and emergency response services available."
    }
  ];

  return (
    <section className="bg-slate-50 py-16 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h3 className="text-sm text-blue-900 uppercase tracking-wider font-semibold mb-3">
            WHY CHOOSE DNY FILTERINDO
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Excellence in Every Solution
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Partnering with DNY FILTERINDO means working with a team dedicated to your success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.id} 
                className="bg-white rounded-xl shadow-md p-8 text-left hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon Badge */}
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="text-blue-900" size={24} />
                </div>
                
                {/* Content */}
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;