import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
    title: 'Pérgola Bioclimática Moderna',
    description: 'Diseño contemporáneo con control solar automatizado'
  },
  {
    url: 'https://images.unsplash.com/photo-1600573472591-ee6981cf35d1',
    title: 'Cerramiento de Cristal',
    description: 'Elegante solución para espacios exteriores'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099',
    title: 'Terraza Cubierta',
    description: 'Máximo aprovechamiento del espacio exterior'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    title: 'Pérgola para Jardín',
    description: 'Integración perfecta con el entorno natural'
  },
  {
    url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea',
    title: 'Pérgola Minimalista',
    description: 'Diseño limpio y funcional'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154',
    title: 'Espacio Exterior Premium',
    description: 'Acabados de lujo y máximo confort'
  }
];

export function GalleryPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Nuestra Galería de Proyectos
        </motion.h1>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}