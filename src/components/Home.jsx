import React, { useEffect, useRef, useState } from 'react';
import { FaUsers, FaDumbbell, FaChalkboardTeacher, FaClipboardList, FaQuoteLeft, FaBicycle, FaSpa, FaFistRaised, FaRunning, FaMusic, FaHeartbeat, FaLeaf, FaGripHorizontal } from 'react-icons/fa';

const carouselImages = [
  'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
];

const stats = [
  { icon: <FaUsers className="text-dorado text-4xl" />, label: 'Inscritos', value: 120 },
  { icon: <FaChalkboardTeacher className="text-dorado text-4xl" />, label: 'Coaches', value: 2 },
  { icon: <FaDumbbell className="text-dorado text-4xl" />, label: 'Máquinas', value: 9 },
  { icon: <FaClipboardList className="text-dorado text-4xl" />, label: 'Clases', value: 8 },
];

const reviews = [
  {
    name: 'Andrea López',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    message: 'Excelente ambiente, entrenadores profesionales y resultados garantizados. ¡Recomendado!'
  },
  {
    name: 'Carlos Méndez',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    message: 'Las instalaciones siempre limpias y el trato es muy amable. Me siento motivado cada día.'
  },
  {
    name: 'Sofía Ramírez',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    message: 'Me encanta la variedad de clases y la atención personalizada. ¡El mejor gym de la ciudad!'
  },
];

const policies = [
  'Respeto y cordialidad entre todos los miembros.',
  'Limpieza y desinfección constante de áreas y equipos.',
  'Puntualidad en clases y entrenamientos.',
  'Ambiente seguro e inclusivo para todos.',
  'Entrenadores certificados y atención profesional.',
];

const classes = [
  {
    name: 'Spinning',
    icon: <FaBicycle className="text-dorado text-4xl mb-2" />,
    description: 'Entrenamiento cardiovascular intenso sobre bicicleta fija, ideal para quemar calorías y mejorar resistencia.'
  },
  {
    name: 'Yoga',
    icon: <FaSpa className="text-dorado text-4xl mb-2" />,
    description: 'Mejora tu flexibilidad, equilibrio y bienestar mental con sesiones de yoga guiadas.'
  },
  {
    name: 'Boxeo',
    icon: <FaFistRaised className="text-dorado text-4xl mb-2" />,
    description: 'Clases de boxeo para todos los niveles, mejora tu fuerza, coordinación y confianza.'
  },
  {
    name: 'Crossfit',
    icon: <FaRunning className="text-dorado text-4xl mb-2" />,
    description: 'Entrenamiento funcional de alta intensidad para desarrollar fuerza y condición física.'
  },
  {
    name: 'Zumba',
    icon: <FaMusic className="text-dorado text-4xl mb-2" />,
    description: 'Clases de baile fitness llenas de energía y diversión para quemar calorías.'
  },
  {
    name: 'HIIT',
    icon: <FaHeartbeat className="text-dorado text-4xl mb-2" />,
    description: 'Entrenamientos cortos e intensos para maximizar la quema de grasa y mejorar tu resistencia.'
  },
  {
    name: 'Pilates',
    icon: <FaLeaf className="text-dorado text-4xl mb-2" />,
    description: 'Fortalece tu core, mejora tu postura y flexibilidad con pilates.'
  },
  {
    name: 'TRX',
    icon: <FaGripHorizontal className="text-dorado text-4xl mb-2" />,
    description: 'Entrenamiento en suspensión para trabajar todo el cuerpo usando tu propio peso.'
  },
];

function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let incrementTime = 1500 / end;
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{count}+</span>;
}

export default function Home() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 2000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="bg-negro text-white min-h-screen flex flex-col">
      {/* Hero con carrousel */}
      <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {carouselImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="Hero Gym"
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ transition: 'opacity 1s' }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-20 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center mb-4 drop-shadow-lg">
            ¡Tu mejor versión empieza aquí!
          </h1>
          <p className="text-xl md:text-2xl text-dorado text-center max-w-2xl mb-8">
            Somos una comunidad fitness profesional, motivada y enfocada en resultados.
          </p>
          <a href="#stats" className="bg-dorado text-negro font-bold py-3 px-8 rounded-full shadow-lg text-lg hover:bg-yellow-400 transition">Descubre más</a>
        </div>
      </div>

      {/* Estadísticas animadas */}
      <section id="stats" className="w-full py-16 flex flex-col items-center bg-negro">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {stats.map((stat, idx) => (
            <div key={stat.label} className="flex flex-col items-center bg-cafe rounded-xl p-6 shadow-lg border-4 border-dorado w-44">
              {stat.icon}
              <span className="text-3xl font-bold text-dorado mt-2">
                <AnimatedCounter value={stat.value} />
              </span>
              <span className="text-white text-lg mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Reseñas */}
      <section className="w-full py-16 flex flex-col items-center bg-[#181818]">
        <h2 className="text-3xl font-bold text-dorado mb-8">Lo que opinan nuestros clientes</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-cafe rounded-2xl shadow-xl p-8 flex flex-col items-center w-80 border-4 border-dorado relative">
              <FaQuoteLeft className="absolute top-4 left-4 text-dorado text-2xl" />
              <img src={review.photo} alt={review.name} className="w-20 h-20 object-cover rounded-full mb-4 border-4 border-dorado" />
              <p className="text-white text-center mb-4">{review.message}</p>
              <span className="text-dorado font-bold">{review.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Políticas y profesionalismo */}
      <section className="w-full py-16 flex flex-col items-center bg-negro">
        <h2 className="text-3xl font-bold text-dorado mb-8">Políticas y Profesionalismo</h2>
        <ul className="max-w-2xl text-white text-lg space-y-3 list-disc list-inside">
          {policies.map((policy, idx) => (
            <li key={idx}>{policy}</li>
          ))}
        </ul>
      </section>

      {/* Clases adicionales */}
      <section className="w-full py-16 flex flex-col items-center bg-[#181818]">
        <h2 className="text-3xl font-bold text-dorado mb-8">Clases Adicionales</h2>
        <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-stretch">
          {classes.map((clase, idx) => (
            <div
              key={clase.name}
              className="bg-black bg-opacity-80 rounded-2xl p-8 flex flex-col items-center border-2 border-transparent shadow-lg transition-all duration-300 hover:border-dorado hover:shadow-[0_0_32px_0_rgba(255,215,0,0.4)] hover:bg-cafe/80 w-72"
            >
              {clase.icon}
              <h3 className="text-xl font-bold text-dorado mb-2 text-center">{clase.name}</h3>
              <p className="text-white text-center text-base">{clase.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 