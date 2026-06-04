import React from 'react';
import * as Icons from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Who We Are Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Who We Are</h2>
          <div className="h-1 w-20 bg-blue-900 mb-8"></div>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
            DNY FILTERINDO stands at the forefront of industrial filtration solutions in Southeast Asia. 
            We specialize in advanced oil purification and dust collection systems designed to enhance 
            operational efficiency. By combining cutting-edge technology with deep industry expertise, 
            we empower our clients to optimize their processes, reduce downtime, and ensure environmental 
            compliance. We are trusted by industry leaders to deliver reliability, precision, and 
            high-performance results when it matters most.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-blue-900">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg text-blue-900">
                <Icons.Eye size={28} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 italic text-lg leading-relaxed">
              "To be the premier partner for industrial filtration and contamination control solutions across 
              Southeast Asia, recognized for our commitment to innovation, sustainability, and operational excellence."
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-gray-400">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gray-100 rounded-lg text-gray-800">
                <Icons.Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>To achieve our vision, we are dedicated to:</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Icons.Award size={20} className="text-blue-900 mt-1 flex-shrink-0" />
                  <span><strong>Technological Excellence:</strong> Delivering high-performance filtration technologies that maximize system efficiency.</span>
                </li>
                <li className="flex gap-3">
                  <Icons.Award size={20} className="text-blue-900 mt-1 flex-shrink-0" />
                  <span><strong>Customized Solutions:</strong> Providing expert technical guidance tailored to unique operational challenges.</span>
                </li>
                <li className="flex gap-3">
                  <Icons.Award size={20} className="text-blue-900 mt-1 flex-shrink-0" />
                  <span><strong>Enduring Partnerships:</strong> Fostering long-term relationships built on trust and uncompromising safety standards.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;