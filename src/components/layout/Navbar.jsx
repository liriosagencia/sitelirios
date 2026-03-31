// src/components/layout/Navbar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Trophy } from 'lucide-react';
import logoBranca from '../../assets/logo-branca.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/kwai', label: 'Kwai Criador' },
    { path: '/kwai-cortes', label: 'Kwai Cortes' },
    { path: '/kwai-live', label: 'Kwai Live' },
    { path: '/tiktok-shop', label: 'TikTok Shop' },
    { path: '/hall-da-fama', label: 'Hall da Fama' },
    { path: '/contato', label: 'Contato' },
  ];

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md" style={{ backgroundColor: '#DB1277' }}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoBranca} 
              alt="LÍRIOS" 
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center" style={{ fontFamily: 'Poppins-Bold, sans-serif' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                  location.pathname === link.path
                    ? 'text-white/70'
                    : 'text-white hover:text-white/80'
                }`}
              >
                {link.icon && <link.icon size={14} className={location.pathname === link.path ? 'text-white/70' : 'text-white/60'} />}
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4" style={{ fontFamily: 'Poppins-Bold, sans-serif' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 py-3 text-sm font-semibold ${
                  location.pathname === link.path
                    ? 'text-white/70'
                    : 'text-white hover:text-white/80'
                }`}
              >
                {link.icon && <link.icon size={16} />}
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}