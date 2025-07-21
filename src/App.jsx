import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Team from './components/Team';
import Machines from './components/Machines';
import Schedule from './components/Schedule';
import Location from './components/Location';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen text-gray-900">
        {/* Menú superior sticky, fondo gris oscuro */}
        <header className="w-full sticky top-0 z-50 bg-[#181818] shadow-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
            <span className="text-2xl font-extrabold text-dorado tracking-wide">Gym Barcelona</span>
            <nav className="flex items-center space-x-8">
              <Link to="/" className="text-lg font-semibold text-white hover:text-dorado transition">Inicio</Link>
              <Link to="/servicios" className="text-lg font-semibold text-white hover:text-dorado transition">Servicios</Link>
              <Link to="/equipo" className="text-lg font-semibold text-white hover:text-dorado transition">Equipo</Link>
              <Link to="/maquinas" className="text-lg font-semibold text-white hover:text-dorado transition">Máquinas</Link>
              <Link to="/horarios" className="text-lg font-semibold text-white hover:text-dorado transition">Horarios</Link>
              <Link to="/clases" className="text-lg font-semibold text-white hover:text-dorado transition">Clases</Link>
              <Link to="/contacto" className="text-lg font-semibold text-white hover:text-dorado transition">Contacto</Link>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/equipo" element={<Team />} />
          <Route path="/maquinas" element={<Machines />} />
          <Route path="/horarios" element={<Schedule />} />
          <Route path="/clases" element={<Location />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 