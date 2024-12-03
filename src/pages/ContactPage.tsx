import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacte con Nosotros</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarle a crear el espacio exterior de sus sueños.
            Contáctenos para una consulta gratuita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-8">
                <div className="flex items-center">
                  <Phone className="w-8 h-8 text-amber-600 mr-6" />
                  <div>
                    <h3 className="font-semibold mb-1">Teléfono</h3>
                    <p className="text-gray-600">+34 900 123 456</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-8 h-8 text-amber-600 mr-6" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info@elegantpergolas.es</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-8 h-8 text-amber-600 mr-6" />
                  <div>
                    <h3 className="font-semibold mb-1">Dirección</h3>
                    <p className="text-gray-600">Calle Principal 123, 28001 Madrid</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-8 h-8 text-amber-600 mr-6" />
                  <div>
                    <h3 className="font-semibold mb-1">Horario</h3>
                    <p className="text-gray-600">Lun - Vie: 9:00 - 19:00</p>
                    <p className="text-gray-600">Sáb: 10:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                    placeholder="Su nombre"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Apellidos</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                    placeholder="Sus apellidos"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="su@email.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Teléfono</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="+34 600 000 000"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="¿En qué podemos ayudarle?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}