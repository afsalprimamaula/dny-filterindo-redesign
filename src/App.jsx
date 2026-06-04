import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ClientsSection from './components/ClientsSection';
import FeaturesSection from './components/FeaturesSection';
import ProductCatalogSection from './components/ProductCatalogSection';
import ContactCTASection from './components/ContactCTASection';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Halaman Utama (Home) */}
            <Route path="/" element={
              <>
                <HeroSection />
                <ServicesSection />
                <ClientsSection />
                <FeaturesSection />
                <ProductCatalogSection />
                <ContactCTASection />
              </>
            } />
            
            {/* Halaman About */}
            <Route path="/about" element={<AboutSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;