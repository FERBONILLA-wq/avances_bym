import React from "react";

const coaches = [
  {
    name: "Coach Juan Pérez",
    specialty: "Entrenamiento funcional y pesas",
    img: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png", // Ilustrativa
  },
  {
    name: "Coach Ana López",
    specialty: "Acondicionamiento físico y nutrición",
    img: "https://cdn-icons-png.flaticon.com/512/1995/1995566.png", // Ilustrativa
  },
];

export default function Coaches() {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
      {coaches.map((coach) => (
        <div key={coach.name} className="bg-gradient-to-br from-cafe via-cafe-oscuro to-negro rounded-2xl shadow-2xl border-4 border-dorado flex flex-col items-center w-72 p-8">
          <img src={coach.img} alt={coach.name} className="w-28 h-28 rounded-full mb-4 border-4 border-dorado shadow-lg bg-white" />
          <h4 className="text-xl font-bold text-dorado mb-2 uppercase tracking-wide drop-shadow">{coach.name}</h4>
          <p className="text-white text-center font-light">{coach.specialty}</p>
        </div>
      ))}
    </div>
  );
} 