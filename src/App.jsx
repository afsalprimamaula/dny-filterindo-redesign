import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ClientsSection from './components/ClientsSection';
import FeaturesSection from './components/FeaturesSection';
import ProductCatalogSection from './components/ProductCatalogSection'; // 👈 1. Import komponen katalog

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* Bagian Navigasi Atas */}
      <Header />
      
      {/* Area Konten Utama */}
      <main className="flex-grow">
        <HeroSection />
        <ClientsSection />
        <FeaturesSection />
        
        {/* 2. Panggil komponen katalog di bawah fitur */}
        <ProductCatalogSection /> 
      </main>
      
    </div>
  );
}

export default App;