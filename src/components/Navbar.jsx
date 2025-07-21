import React from "react";

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Planes", href: "#planes" },
  { name: "Horarios", href: "#horarios" },
  { name: "Máquinas", href: "#maquinas" },
  { name: "Coaches", href: "#coaches" },
  { name: "Clases", href: "#clases" },
];

const socialLinks = [
  { name: "Facebook", icon: <i className="fab fa-facebook-f" />, href: "#" },
  { name: "Instagram", icon: <i className="fab fa-instagram" />, href: "#" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-negro bg-opacity-95 border-b-2 border-dorado shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <span className="text-2xl font-extrabold text-dorado tracking-widest uppercase select-none">Gimnasio Barcelona</span>
        {/* Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-semibold text-white hover:text-dorado transition tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Social */}
        <div className="flex items-center gap-4 ml-6">
          <a href="#" className="text-dorado hover:text-yellow-400 text-xl transition"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
          <a href="#" className="text-dorado hover:text-yellow-400 text-xl transition"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344 2.697 2.325 2.465 3.437 2.406 4.718.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.291-2.393-1.272-3.374-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0z"/><circle cx="12" cy="12" r="3.5"/><circle cx="18.406" cy="5.594" r="1.44"/></svg></a>
        </div>
      </div>
    </nav>
  );
} 