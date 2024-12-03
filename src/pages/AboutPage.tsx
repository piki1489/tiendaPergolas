import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Clock, Wrench } from 'lucide-react';

export function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { icon: Award, value: '+500', label: 'Proyectos Completados' },
    { icon: Users, value: '+1000', label: 'Clientes Satisfechos' },
    { icon: Clock, value: '15', label: 'Años de Experiencia' },
    { icon: Wrench, value: '100%', label: 'Garantía de Calidad' }
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestra Historia</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde 2009, hemos estado transformando espacios exteriores en toda España,
            combinando innovación, calidad y diseño en cada proyecto.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <stat.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
            <p className="text-gray-600 mb-8">
              Nos dedicamos a crear espacios exteriores excepcionales que mejoran la calidad de vida
              de nuestros clientes. Cada proyecto es una oportunidad para innovar y superar expectativas.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                Diseños personalizados y únicos
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                Materiales de primera calidad
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                Servicio integral y profesional
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Nuestro equipo"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}