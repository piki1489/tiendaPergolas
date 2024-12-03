import React from 'react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
    title: 'Pérgola Bioclimática Moderna'
  },
  {
    url: 'https://images.unsplash.com/photo-1600573472591-ee6981cf35d1',
    title: 'Cerramiento de Cristal'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099',
    title: 'Terraza Cubierta'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    title: 'Pérgola para Jardín'
  }
];

export function Gallery() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Nuestros Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}