import React from 'react';
import { FaUserTie } from 'react-icons/fa';

const coaches = [
  {
    name: 'Claudia Vanessa Ramírez Meléndez',
    specialty: 'Entrenadora profesional en entrenamiento personal',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Ulises Soto Graciano',
    specialty: 'Entrenador profesional y especialista en boxeo.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
];

export default function Team() {
  return (
    <div className="bg-[#181818] min-h-screen flex flex-col items-center py-16 px-4">
      <h2 className="text-4xl font-bold mb-12 text-dorado text-center">Nuestro Equipo</h2>
      <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
        {coaches.map((coach) => (
          <div
            key={coach.name}
            className="relative group rounded-2xl overflow-hidden w-96 h-96 flex flex-col justify-end p-8 m-2 bg-black border-2 border-transparent shadow-lg transition-all duration-300 hover:border-dorado hover:shadow-[0_0_32px_0_rgba(255,215,0,0.4)] hover:bg-cafe/80"
            style={{ backgroundImage: `url(${coach.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-60 transition-all duration-300"></div>
            <div className="relative z-10 flex flex-col items-start">
              <FaUserTie className="text-dorado text-4xl mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{coach.name}</h3>
              <p className="text-white mb-2">{coach.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 