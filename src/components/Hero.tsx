import React from 'react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
          alt="Pérgola bioclimática"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforme su espacio exterior
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Pérgolas bioclimáticas y cerramientos de cristal a medida para crear espacios únicos
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </div>
    </div>
  );
}