import React from 'react';
import { FaBicycle, FaSpa, FaFistRaised, FaRunning, FaMusic, FaHeartbeat, FaLeaf, FaGripHorizontal } from 'react-icons/fa';

const classes = [
  {
    name: 'Spinning',
    icon: <FaBicycle className="text-dorado text-4xl mb-2" />,
    description: 'Entrenamiento cardiovascular intenso sobre bicicleta fija, ideal para quemar calorías y mejorar resistencia.',
    bg: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Yoga',
    icon: <FaSpa className="text-dorado text-4xl mb-2" />,
    description: 'Mejora tu flexibilidad, equilibrio y bienestar mental con sesiones de yoga guiadas.',
    bg: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Boxeo',
    icon: <FaFistRaised className="text-dorado text-4xl mb-2" />,
    description: 'Clases de boxeo para todos los niveles, mejora tu fuerza, coordinación y confianza.',
    bg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Crossfit',
    icon: <FaRunning className="text-dorado text-4xl mb-2" />,
    description: 'Entrenamiento funcional de alta intensidad para desarrollar fuerza y condición física.',
    bg: 'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Zumba',
    icon: <FaMusic className="text-dorado text-4xl mb-2" />,
    description: 'Clases de baile fitness llenas de energía y diversión para quemar calorías.',
    bg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'HIIT',
    icon: <FaHeartbeat className="text-dorado text-4xl mb-2" />,
    description: 'Entrenamientos cortos e intensos para maximizar la quema de grasa y mejorar tu resistencia.',
    bg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Pilates',
    icon: <FaLeaf className="text-dorado text-4xl mb-2" />,
    description: 'Fortalece tu core, mejora tu postura y flexibilidad con pilates.',
    bg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'TRX',
    icon: <FaGripHorizontal className="text-dorado text-4xl mb-2" />,
    description: 'Entrenamiento en suspensión para trabajar todo el cuerpo usando tu propio peso.',
    bg: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80',
  },
];

export default function Location() {
  return (
    <div className="bg-[#181818] min-h-screen flex flex-col items-center py-16 px-4">
      <h2 className="text-4xl font-bold mb-12 text-dorado text-center">Clases Adicionales</h2>
      <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-stretch">
        {classes.map((clase, idx) => (
          <div
            key={clase.name}
            className="relative group rounded-2xl overflow-hidden w-80 h-96 flex flex-col justify-end p-8 m-2 bg-black border-2 border-transparent shadow-lg transition-all duration-300 hover:border-dorado hover:shadow-[0_0_32px_0_rgba(255,215,0,0.4)] hover:bg-cafe/80"
            style={{ backgroundImage: `url(${clase.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-60 transition-all duration-300"></div>
            <div className="relative z-10 flex flex-col items-start">
              {clase.icon}
              <h3 className="text-xl font-bold text-white mb-2">{clase.name}</h3>
              <p className="text-white mb-2">{clase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 