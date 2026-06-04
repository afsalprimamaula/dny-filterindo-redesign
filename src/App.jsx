import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import ClientsSection from './components/ClientsSection';
import FeaturesSection from './components/FeaturesSection';
import ProductCatalogSection from './components/ProductCatalogSection';
import ContactCTASection from './components/ContactCTASection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ClientsSection />
        <FeaturesSection />
        <ProductCatalogSection />
        <ContactCTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;