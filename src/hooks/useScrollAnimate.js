// src/hooks/useScrollAnimate.js
import { useEffect, useRef } from 'react';

export const useScrollAnimate = (options = {}) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Se já estiver visível, ativa imediatamente
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
          observer.unobserve(element); // anima só uma vez
        }
      },
      {
        threshold: 0.15, // ativa quando 15% do elemento estiver visível
        rootMargin: '0px 0px -50px 0px', // ativa um pouco antes de entrar
        ...options
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return ref;
};