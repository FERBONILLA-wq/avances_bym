import React from 'react';
import { FaClock, FaCalendarAlt } from 'react-icons/fa';

export default function Schedule() {
  return (
    <div className="flex flex-col items-center py-16 bg-negro min-h-screen">
      <h2 className="text-4xl font-bold mb-4 text-dorado">Horarios de PowerFit</h2>
      <p className="text-lg text-center text-white mb-8 max-w-xl">
        <span className="font-semibold text-dorado">¡Entrena cuando más te convenga!</span> Nuestro gimnasio está abierto para ti con horarios flexibles y pensados para que nunca pierdas una sesión. ¡Haz del fitness tu mejor hábito!
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="bg-cafe rounded-2xl shadow-xl p-8 w-80 flex flex-col items-center border-4 border-dorado">
          <FaCalendarAlt className="text-dorado text-4xl mb-2" />
          <h3 className="text-2xl font-bold text-dorado mb-2">Lunes a Viernes</h3>
          <div className="flex items-center gap-2 mb-2">
            <FaClock className="text-yellow-400 text-xl" />
            <span className="text-white text-lg font-semibold">10:00 am - 10:00 pm</span>
          </div>
        </div>
        <div className="bg-cafe rounded-2xl shadow-xl p-8 w-80 flex flex-col items-center border-4 border-dorado">
          <FaCalendarAlt className="text-dorado text-4xl mb-2" />
          <h3 className="text-2xl font-bold text-dorado mb-2">Sábados</h3>
          <div className="flex items-center gap-2 mb-2">
            <FaClock className="text-yellow-400 text-xl" />
            <span className="text-white text-lg font-semibold">10:00 am - 2:00 pm</span>
          </div>
        </div>
      </div>
    </div>
  );
} 