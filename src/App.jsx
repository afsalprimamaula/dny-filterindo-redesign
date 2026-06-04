import React from 'react';
import Header from './components/Header';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Memanggil komponen Header */}
      <Header />
      
      {/* Area untuk Hero Section selanjutnya */}
      <main className="flex-grow flex items-center justify-center">
        <p className="text-gray-500">Area Hero Section akan dibuat di sini...</p>
      </main>
    </div>
  );
}

export default App;