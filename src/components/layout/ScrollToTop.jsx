// src/components/layout/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Rola para o topo sempre que a rota mudar
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}