import React from 'react';
import { Sun, Droplets, Shield, Ruler } from 'lucide-react';

const features = [
  {
    icon: Sun,
    title: 'Control Solar',
    description: 'Regulación perfecta de luz y sombra para su confort durante todo el año.'
  },
  {
    icon: Droplets,
    title: 'Protección Climática',
    description: 'Resistente al agua y adaptable a cualquier condición meteorológica.'
  },
  {
    icon: Shield,
    title: 'Máxima Calidad',
    description: 'Materiales premium y acabados de primera calidad garantizados.'
  },
  {
    icon: Ruler,
    title: 'Diseño a Medida',
    description: 'Soluciones personalizadas que se adaptan a su espacio y necesidades.'
  }
];

export function Features() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-xl text-gray-600">
            Innovación y calidad en cada proyecto
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <feature.icon className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}