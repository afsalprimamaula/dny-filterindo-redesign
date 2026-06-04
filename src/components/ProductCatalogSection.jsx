import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductCatalogSection = () => {
  // Data Array Produk (Sekarang berjumlah 6)
  const products = [
    {
      id: 1,
      category: "OIL PURIFICATION",
      title: "High-Flow Vacuum Purifier",
      description: "Advanced vacuum dehydration system designed to remove water, gas, and particulate contamination from industrial oils efficiently.",
      features: [
        "Flow rate capacity up to 100 L/min",
        "Removes 100% of free & emulsified water",
        "Achieves ISO 14/12/9 cleanliness levels"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      category: "DUST COLLECTION",
      title: "Industrial Cartridge Collector",
      description: "High-efficiency cartridge dust collector engineered for continuous operation in heavy dust load environments.",
      features: [
        "99.9% filtration efficiency down to 0.5 microns",
        "Automatic pulse-jet cleaning system",
        "Heavy-duty carbon steel construction"
      ],
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      category: "MOBILE FILTRATION",
      title: "Portable Filter Cart",
      description: "Versatile off-line filtration unit ideal for transferring fluids, polishing existing oil, and cleaning up targeted systems.",
      features: [
        "Dual-stage high-capacity filtration",
        "Compact and highly mobile design",
        "Optional built-in laser particle counter"
      ],
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      category: "OIL PURIFICATION",
      title: "Coalescence Separation Purifier",
      description: "Highly effective for removing large amounts of free water and particulate matter from turbine and lubricating oils without affecting additives.",
      features: [
        "Continuous unattended operation",
        "High dirt-holding capacity",
        "Low operational maintenance cost"
      ],
      image: "https://images.unsplash.com/photo-1611075677053-157945d8b809?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      category: "DUST COLLECTION",
      title: "Heavy-Duty Baghouse Filter",
      description: "Robust baghouse filtration system designed to capture large volumes of hazardous industrial dust and chemical fumes.",
      features: [
        "High-temperature gas resistance",
        "Advanced sequential cleaning timer",
        "Customizable filter media options"
      ],
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      category: "SYSTEM COMPONENTS",
      title: "Replacement Filter Elements",
      description: "Premium replacement filter cartridges, bags, and housing units engineered to fit and upgrade all major industrial filtration brands.",
      features: [
        "Micro-glass and synthetic media",
        "High collapse pressure rating",
        "Extended service life guarantees"
      ],
      image: "https://images.unsplash.com/photo-1570733857597-9e63ce820712?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Text */}
        <div className="text-center mb-16">
          <h3 className="text-sm text-slate-500 uppercase tracking-widest font-semibold mb-3">
            OUR SOLUTIONS
          </h3>
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-4">
            Product Catalog
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive range of industrial filtration equipment designed to meet the most demanding applications.
          </p>
        </div>

        {/* Grid Layout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden text-left flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              {/* Gambar & Badge */}
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                  {product.category}
                </div>
              </div>

              {/* Area Konten Card */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  {product.title}
                </h4>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Daftar Fitur (Bullet Points biru gelap) */}
                <ul className="list-disc list-outside pl-5 mb-8 space-y-2 marker:text-blue-900 flex-grow">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-600 text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link Learn More */}
                <a 
                  href={`#product-${product.id}`} 
                  className="inline-flex items-center text-blue-900 font-semibold text-sm hover:text-blue-700 transition-colors mt-auto group w-max"
                >
                  Learn More 
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-16 flex justify-center">
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-md font-semibold flex items-center justify-center gap-2 transition-colors duration-300 shadow-md hover:shadow-lg">
            View Full Catalog 
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductCatalogSection;