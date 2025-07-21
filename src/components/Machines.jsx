import React from 'react';
import { FaDumbbell, FaCogs, FaArrowUp, FaArrowDown, FaGripHorizontal, FaHandRock, FaUserFriends, FaWeightHanging, FaArrowsAltH } from 'react-icons/fa';

const machines = [
  {
    name: 'Extensión',
    icon: <FaArrowUp className="text-dorado text-4xl mb-2" />,
    description: 'Fortalece cuádriceps mediante extensión de piernas.',
    bg: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Prensa',
    icon: <FaArrowDown className="text-dorado text-4xl mb-2" />,
    description: 'Ejercicio compuesto para piernas y glúteos.',
    bg: 'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Polea',
    icon: <FaGripHorizontal className="text-dorado text-4xl mb-2" />,
    description: 'Versátil para ejercicios de brazos y espalda.',
    bg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Máquina de Pecho',
    icon: <FaHandRock className="text-dorado text-4xl mb-2" />,
    description: 'Aísla y fortalece el pectoral mayor.',
    bg: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Máquina de Sentadilla',
    icon: <FaArrowDown className="text-dorado text-4xl mb-2" />,
    description: 'Sentadillas guiadas para piernas y glúteos.',
    bg: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Libre',
    icon: <FaUserFriends className="text-dorado text-4xl mb-2" />,
    description: 'Zona de peso libre para ejercicios funcionales.',
    bg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Máquina Espalda',
    icon: <FaArrowsAltH className="text-dorado text-4xl mb-2" />,
    description: 'Fortalece dorsales y zona media.',
    bg: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Polea de Brazo',
    icon: <FaCogs className="text-dorado text-4xl mb-2" />,
    description: 'Aísla bíceps y tríceps.',
    bg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Pesas de Mano y para Máquinas',
    icon: <FaWeightHanging className="text-dorado text-4xl mb-2" />,
    description: 'Variedad de pesas para todos los niveles.',
    bg: 'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=600&q=80',
  },
];

export default function Machines() {
  return (
    <div className="bg-[#181818] min-h-screen flex flex-col items-center py-16 px-4">
      <h2 className="text-4xl font-bold mb-12 text-dorado text-center">Nuestras Máquinas</h2>
      <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-stretch">
        {machines.map((machine, idx) => (
          <div
            key={machine.name}
            className="relative group rounded-2xl overflow-hidden w-80 h-96 flex flex-col justify-end p-8 m-2 bg-black border-2 border-transparent shadow-lg transition-all duration-300 hover:border-dorado hover:shadow-[0_0_32px_0_rgba(255,215,0,0.4)] hover:bg-cafe/80"
            style={{ backgroundImage: `url(${machine.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-60 transition-all duration-300"></div>
            <div className="relative z-10 flex flex-col items-start">
              {machine.icon}
              <h3 className="text-xl font-bold text-white mb-2">{machine.name}</h3>
              <p className="text-white mb-2">{machine.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 