import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const contacts = [
  {
    icon: <FaMapMarkerAlt className="text-dorado text-3xl mb-2" />,
    title: 'Ubicación',
    value: 'Av. Ejemplo 123, Col. Centro, Ciudad, País',
  },
  {
    icon: <FaEnvelope className="text-dorado text-3xl mb-2" />,
    title: 'Email',
    value: 'contacto@gymbarcelona.com',
  },
  {
    icon: <FaPhoneAlt className="text-dorado text-3xl mb-2" />,
    title: 'Teléfono',
    value: '618 222 0246',
  },
  {
    icon: <FaWhatsapp className="text-dorado text-3xl mb-2" />,
    title: 'WhatsApp',
    value: '618 222 0246',
  },
];

const social = [
  { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
  { icon: <FaTwitter />, href: '#', label: 'Twitter' },
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
];

export default function Contact() {
  return (
    <div className="bg-[#181818] min-h-[60vh] flex flex-col items-center py-16 px-4">
      <h2 className="text-4xl font-bold text-dorado text-center mb-10">Contáctanos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full mb-8">
        {contacts.map((c, idx) => (
          <div
            key={c.title}
            className="bg-black bg-opacity-80 rounded-2xl p-8 flex flex-col items-center border-2 border-transparent shadow-lg transition-all duration-300 hover:border-dorado hover:shadow-[0_0_32px_0_rgba(255,215,0,0.4)] hover:bg-cafe/80"
          >
            {c.icon}
            <h3 className="text-xl font-bold text-dorado mb-2">{c.title}</h3>
            <p className="text-white text-center text-lg">{c.value}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-6 mt-4">
        {social.map((s, idx) => (
          <a
            key={s.label}
            href={s.href}
            className="text-dorado hover:text-yellow-400 text-2xl transition"
            aria-label={s.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  );
} 