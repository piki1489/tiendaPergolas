import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Contacte con Nosotros</h2>
            <p className="text-gray-600 mb-8">
              Estamos aquí para ayudarle a crear el espacio exterior de sus sueños. 
              Contáctenos para una consulta gratuita.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-amber-600 mr-4" />
                <span>+34 900 123 456</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-amber-600 mr-4" />
                <span>info@elegantpergolas.es</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-amber-600 mr-4" />
                <span>Calle Principal 123, 28001 Madrid</span>
              </div>
            </div>
          </div>
          
          <form className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Mensaje</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-3 rounded-md hover:bg-amber-700 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}