// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-10 relative z-0" style={{ backgroundColor: '#DB1277' }}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
          <Link 
            to="/agencia-de-influenciadores" 
            className="text-white hover:text-white/70 transition text-sm"
            style={{ fontFamily: 'Poppins-Bold, sans-serif' }}
          >
            Home
          </Link>
          <Link 
            to="/ganhar-dinheiro-no-kwai" 
            className="text-white hover:text-white/70 transition text-sm"
            style={{ fontFamily: 'Poppins-Bold, sans-serif' }}
          >
            Kwai Criador
          </Link>
          <Link 
            to="/cortes-para-kwai-cut" 
            className="text-white hover:text-white/70 transition text-sm"
            style={{ fontFamily: 'Poppins-Bold, sans-serif' }}
          >
            Kwai Cortes
          </Link>
          <Link 
            to="/ganhar-dinheiro-kwai-live" 
            className="text-white hover:text-white/70 transition text-sm"
            style={{ fontFamily: 'Poppins-Bold, sans-serif' }}
          >
            Kwai Live
          </Link>
          <Link 
            to="/como-vender-no-tiktok-shop" 
            className="text-white hover:text-white/70 transition text-sm"
            style={{ fontFamily: 'Poppins-Bold, sans-serif' }}
          >
            TikTok Shop
          </Link>
          <Link 
            to="/top-10-lirios" 
            className="text-white hover:text-white/70 transition text-sm"
            style={{ fontFamily: 'Poppins-Bold, sans-serif' }}
          >
            Hall da Fama
          </Link>
          <Link 
            to="/entrar-na-agencia" 
            className="text-white hover:text-white/70 transition text-sm"
            style={{ fontFamily: 'Poppins-Bold, sans-serif' }}
          >
            Contato
          </Link>
        </div>
        <p 
          className="text-white/70 text-sm"
          style={{ fontFamily: 'Poppins-Bold, sans-serif' }}
        >
          © 2024 Agência Lírios. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}