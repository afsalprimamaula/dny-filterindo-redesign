import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* Cukup panggil Header saja karena Top Bar biru sudah menyatu di dalamnya */}
      <Header />
      
      {/* Panggil komponen HeroSection yang baru dibuat */}
      <main className="flex-grow">
        <HeroSection />
      </main>
      
    </div>
  );
}

export default App;