import React from "react";

const classes = [
  {
    name: "Zumba",
    description: "Clases de zumba con una profesional certificada. ¡Diviértete y ponte en forma!",
    professional: "Lic. Mariana Torres",
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png", // Ilustrativa
  },
  {
    name: "Boxeo",
    description: "Clases de boxeo para todas las edades y niveles, guiadas por un profesional del deporte.",
    professional: "Prof. Carlos Ramírez",
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048927.png", // Ilustrativa
  },
];

export default function Classes() {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
      {classes.map((cls) => (
        <div key={cls.name} className="bg-gradient-to-br from-cafe via-cafe-oscuro to-negro rounded-2xl shadow-2xl border-4 border-dorado flex flex-col items-center w-72 p-8">
          <img src={cls.icon} alt={cls.name} className="w-24 h-24 mb-4 drop-shadow-lg" />
          <h4 className="text-xl font-bold text-dorado mb-2 uppercase tracking-wide drop-shadow">{cls.name}</h4>
          <p className="text-white text-center mb-2 font-light">{cls.description}</p>
          <span className="text-cafe font-semibold">{cls.professional}</span>
        </div>
      ))}
    </div>
  );
} 