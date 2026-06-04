import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero.png'; // Memanggil gambar dari folder assets

const Hero = () => {
  return (
    <section 
      className="relative w-full h-[500px] md:h-[600px] bg-cover bg-center flex items-center font-sans"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* --- Overlay Biru Transparan --- */}
      {/* Menggunakan warna utama dengan opasitas 80% agar teks tetap terbaca */}
      <div className="absolute inset-0 bg-[#0a3265]/80"></div>

      {/* --- Konten Teks & Tombol --- */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Industrial Filtration Solutions for Every Application
        </h1>
        
        <p className="text-base md:text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed">
          DNY FILTERINDO delivers cutting-edge oil purification and dust collection systems to optimize your industrial processes. Trusted by industry leaders across Southeast Asia.
        </p>

        {/* --- Area Tombol --- */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-[#0a3265] px-8 py-3 rounded font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors duration-300">
            Request a Quote <ArrowRight size={18} />
          </button>
          
          <button className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white/10 transition-colors duration-300">
            View Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;