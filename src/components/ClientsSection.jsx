import React from 'react';

const ClientsSection = () => {
  const clients = [
    "PERTAMINA",
    "PLN",
    "CHEVRON",
    "TOTAL ENERGIES",
    "KRAKATAU STEEL",
    "FREEPORT"
  ];

  return (
    <section className="bg-gray-50 py-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Header Text */}
        <h3 className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">
          TRUSTED BY INDUSTRY LEADERS
        </h3>
        <h2 className="text-3xl font-semibold text-blue-900 mb-10">
          Our Clients
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center py-8 px-4"
            >
              <span className="text-gray-400 font-bold text-center text-sm">
                {client}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ClientsSection;