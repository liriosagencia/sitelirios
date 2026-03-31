// src/pages/Contact.jsx
import { motion } from 'framer-motion';
import kwai from '../assets/kwai-icone.png';
import kwaisc from '../assets/kwaisc.png';
import tiktokshop from '../assets/tiktokshop.png';
import seta from '../assets/seta.png';
import mascotcel from '../assets/mascotcel.png';
import WhatsAppFloat from '../components/layout/WhatsAppFloat';

// ===== VARIANTES REUTILIZÁVEIS =====
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const viewportConfig = { once: true, amount: 0.2 };

export default function Contact() {
  const contacts = [
    {
      id: "kwai-criadores",
      title: "KWAI CRIADORES",
      desc: "Monetização em dólar com vídeos originais e estratégia de crescimento.",
      icon: kwai,
      link: "https://wa.me/5517991233100?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Ag%C3%AAncia%20L%C3%ADrios%20e%20quero%20saber%20mais%20sobre%20oportunidades%20no%20kwai%20criadores",
      phone: "5517991233100",
      message: "Olá, vim pelo site da Agência Lírios e quero saber mais sobre Kwai Criadores."
    },
    {
      id: "kwai-sc",
      title: "KWAI SC (Sistema de Cortes)",
      desc: "Sistema estruturado de cortes com foco em volume e performance.",
      icon: kwaisc,
      link: "https://chat.whatsapp.com/JLQHahHWv8N4qd3Ow8ZK2Z",
      phone: "group",
      message: "Olá, vim pelo site da Agência Lírios e quero saber mais sobre o Kwai SC.",
      isGroup: true
    },
    {
      id: "kwai-live",
      title: "KWAI LIVE",
      desc: "Transmissões ao vivo com metas estruturadas e monetização por presentes.",
      icon: kwai,
      link: "https://wa.me/5521983567895?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Ag%C3%AAncia%20L%C3%ADrios%20e%20quero%20saber%20mais%20sobre%20oportunidades%20no%20kwai%20live",
      phone: "5521983567895",
      message: "Olá, vim pelo site da Agência Lírios e quero saber mais sobre Kwai Live."
    },
    {
      id: "tiktok-shop",
      title: "TIKTOK SHOP",
      desc: "Ganhe comissões vendendo produtos no TikTok.",
      icon: tiktokshop,
      link: "https://wa.me/5516997241987?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Ag%C3%AAncia%20L%C3%ADrios%20e%20quero%20saber%20mais%20sobre%20oportunidades%20no%20Tiktok%20Shop",
      phone: "5516997241987",
      message: "Olá, vim pelo site da Agência Lírios e quero saber mais sobre TikTok Shop."
    }
  ];

  const fontExtraBold = { fontFamily: 'Poppins-ExtraBold, sans-serif' };
  const fontBold = { fontFamily: 'Poppins-Bold, sans-serif' };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      
      {/* 🔥 HERO */}
      <section className="relative py-10 sm:py-12 px-4 sm:px-6 text-center" style={{ backgroundColor: '#C00D5C' }}>
        <div className="relative max-w-4xl mx-auto space-y-4">
          
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-white"
            style={fontExtraBold}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            Fale Diretamente com o{' '}
            <span style={{ color: '#F93BA3' }}>Setor Responsável</span>
          </motion.h1>
          
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto"
            style={fontBold}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            transition={{ delay: 0.15 }}
          >
            Escolha a modalidade abaixo e fale direto com o líder da área.
          </motion.p>
        </div>
      </section>

      {/* 📲 BLOCO PRINCIPAL */}
      <section className="relative py-10 sm:py-12 pb-24 sm:pb-28 md:pb-32 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 overflow-visible" style={{ backgroundColor: '#C00D5C' }}>
        
        {/* 📱 Mascote Mobile */}
        <motion.div 
          className="absolute bottom-8 -right-2 sm:bottom-10 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 lg:hidden z-10 pointer-events-none"
          animate={{ y: [0, -10, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src={mascotcel} 
            alt="Mascote Lírios Mobile" 
            className="w-full h-auto object-contain drop-shadow-2xl"
            loading="lazy"
          />
        </motion.div>

        {/* 💻 Mascote Desktop */}
        <motion.div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[28%] sm:w-[24%] lg:w-[20%] max-w-[280px] lg:max-w-[400px] z-10 hidden lg:block pointer-events-none"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src={mascotcel} 
            alt="Mascote Lírios" 
            className="w-full h-auto object-contain drop-shadow-2xl"
            loading="lazy"
          />
        </motion.div>

        {/* 📦 CONTAINER DO CONTEÚDO */}
        <div className="relative max-w-2xl xl:max-w-3xl mx-auto z-20">
          
          {/* Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {contacts.map((item) => {
              // ✅ Usa o link pronto do objeto
              const whatsappLink = item.link;
              
              return (
                <motion.a
                  key={item.id}
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative p-4 sm:p-5 md:p-6 lg:p-8 rounded-2xl active:scale-[0.98]"
                  style={{ 
                    backgroundColor: '#DB1277',
                    boxShadow: '0 10px 40px rgba(219, 18, 119, 0.3)'
                  }}
                  variants={fadeInUp}
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ scale: 1.03, y: -5, boxShadow: '0 15px 50px rgba(219, 18, 119, 0.5)' }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <motion.img 
                      src={item.icon} 
                      alt={item.title} 
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.4 }}
                    />
                    <h3 
                      className="text-base sm:text-lg md:text-xl font-bold text-white flex-1 pr-2"
                      style={fontExtraBold}
                    >
                      {item.title}
                    </h3>
                  </div>
                  
                  <p 
                    className="text-white/90 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm md:text-base"
                    style={fontBold}
                  >
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-[#F93BA3] shadow-lg">
                    <motion.img 
                      src={seta} 
                      alt="" 
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain flex-shrink-0"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <span 
                      className="text-white font-bold text-xs sm:text-sm md:text-base"
                      style={fontExtraBold}
                    >
                      {item.isGroup ? 'Entrar no Grupo' : 'Falar com Responsável'}
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* ✅ Stats Section - TOTALMENTE CENTRALIZADO E ALINHADO */}
          <motion.div 
            className="relative w-full mx-auto rounded-2xl overflow-hidden"
            style={{ 
              backgroundColor: '#F93BA3',
              boxShadow: '0 10px 40px rgba(249, 59, 163, 0.4)'
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={scaleIn}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="p-5 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 md:gap-6">
                {[
                  { value: "+4.000", label: "Criadores ativos", sublabel: "" },
                  { value: "Estrutura Profissional", label: "Organizada por setores", sublabel: "" },
                  { value: "Atendimento Direcionado", label: "Especializado por área", sublabel: "" }
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex flex-col items-center justify-center text-center w-full"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div 
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2 leading-tight"
                      style={fontExtraBold}
                    >
                      {stat.value}
                    </div>
                    <p className="text-white/90 text-xs sm:text-sm md:text-base font-medium" style={fontBold}>
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>
      
      <WhatsAppFloat />
    </div>
  );
}