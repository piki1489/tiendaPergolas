import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ElegantPérgolas</h3>
            <p className="text-gray-400">
              Especialistas en pérgolas bioclimáticas y cerramientos de cristal a medida.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Inicio</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">Nosotros</a></li>
              <li><a href="/gallery" className="text-gray-400 hover:text-white">Galería</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Horario</h3>
            <p className="text-gray-400">
              Lunes a Viernes: 9:00 - 19:00<br />
              Sábados: 10:00 - 14:00<br />
              Domingos: Cerrado
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ElegantPérgolas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}