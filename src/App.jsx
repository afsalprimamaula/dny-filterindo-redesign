import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ClientsSection from './components/ClientsSection';
import FeaturesSection from './components/FeaturesSection';
import ProductCatalogSection from './components/ProductCatalogSection';
import ContactCTASection from './components/ContactCTASection';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ClientsSection />
        <FeaturesSection />
        <ProductCatalogSection />
        <ContactCTASection />
      </main>
    </div>
  );
}

export default App;