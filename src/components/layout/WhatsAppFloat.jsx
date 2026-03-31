// src/components/layout/WhatsAppFloat.jsx
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511974326781?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Ag%C3%AAncia%20L%C3%ADrios."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#C00D5C] to-[#DB1277] hover:from-[#a50b4f] hover:to-[#C00D5C] text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center gap-2"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="hidden md:inline font-bold">Fale Conosco</span>
    </a>
  );
}