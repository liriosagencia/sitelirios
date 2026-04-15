import { MessageCircle } from 'lucide-react';
import iconeInsta from '../../assets/icone-botao/icone-insta.png';
import iconeTiktok from '../../assets/icone-botao/icone-tiktok.png';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 sm:gap-4">
      
      {/* Instagram - ícone responsivo */}
      <a
        href="https://www.instagram.com/agencialiriosreserva"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all transform hover:scale-110 flex items-center justify-center p-2 -m-2"
        aria-label="Siga-nos no Instagram"
      >
        <img 
          src={iconeInsta} 
          alt="Instagram" 
          className="w-5 h-5 sm:w-6 sm:h-6 object-contain drop-shadow-md" 
        />
      </a>

      {/* TikTok - ícone responsivo */}
      <a
        href="https://www.tiktok.com/@agencialirios"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all transform hover:scale-110 flex items-center justify-center p-2 -m-2"
        aria-label="Siga-nos no TikTok"
      >
        <img 
          src={iconeTiktok} 
          alt="TikTok" 
          className="w-5 h-5 sm:w-6 sm:h-6 object-contain drop-shadow-md" 
        />
      </a>

      {/* WhatsApp - botão principal responsivo */}
      <a
        href="https://wa.me/5511974326781?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Ag%C3%AAncia%20L%C3%ADrios."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-[#C00D5C] to-[#DB1277] hover:from-[#a50b4f] hover:to-[#C00D5C] text-white p-3 sm:p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center gap-2"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={20} className="sm:size-6" />
        <span className="hidden sm:inline font-bold text-sm sm:text-base">Fale Conosco</span>
      </a>
      
    </div>
  );
}