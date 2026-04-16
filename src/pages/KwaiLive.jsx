// src/pages/KwaiLive.jsx
import { Video, Gift, Wallet, TrendingUp, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import camera from '../assets/camera.png';
import kwai from '../assets/kwai-icone.png';
import interr from '../assets/interr.png';
import grafic from '../assets/grafic.png';
import doisPesso from '../assets/2pesso.png';
import raio from '../assets/raio.png';
import liverosa from '../assets/liverosa.png';
import mascotduvid from '../assets/mascotduvid.png';
import WhatsAppFloat from '../components/layout/WhatsAppFloat';

// ===== VARIANTES REUTILIZÁVEIS =====
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const viewportConfig = { once: true, amount: 0.2 };

export default function KwaiLive() {
  const monetizationSteps = [
    { num: "1️⃣", icon: Video, text: "Você faz transmissões ao vivo", color: "text-purple-400" },
    { num: "2️⃣", icon: Gift, text: "Recebe presentes virtuais", color: "text-pink-400" },
    { num: "3️⃣", icon: TrendingUp, text: "Bate metas mensais", color: "text-green-400" },
    { num: "4️⃣", icon: Wallet, text: "Recebe pagamento direto na carteira do app", color: "text-yellow-400" }
  ];

  const benefits = [
    "Planejamento de metas",
    "Estratégia de retenção de público",
    "Orientação sobre horários",
    "Acompanhamento de desempenho",
    "Grupo exclusivo de streamers",
    "Suporte individual direto"
  ];

  const targetAudience = [
    "Pessoas comunicativas",
    "Quem gosta de interagir",
    "Quem quer transformar carisma em renda",
    "Quem pode manter frequência nas transmissões"
  ];

  const faqs = [
    {
      q: "Preciso ter muitos seguidores?",
      a: "Não. O crescimento acontece com consistência."
    },
    {
      q: "Preciso aparecer na câmera?",
      a: "Sim, o modelo é focado em presença ao vivo."
    },
    {
      q: "O pagamento é seguro?",
      a: "Sim. O valor é pago diretamente pelo aplicativo."
    }
  ];

  // Fonts reutilizáveis
  const fontExtraBold = { fontFamily: 'Poppins-ExtraBold, sans-serif' };
  const fontBold = { fontFamily: 'Poppins-Bold, sans-serif' };
  const fontLightItalic = { fontFamily: 'Poppins-LightItalic, sans-serif' };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      
      {/* 🔥 HERO – Primeira Dobra */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-visible" style={{ backgroundColor: '#C00D5C' }}>

        {/* 📱 Imagem da Câmera - MOBILE - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 lg:hidden z-10 pointer-events-none"
          animate={{ y: [0, -8, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={camera} alt="Câmera Mobile" className="w-full h-auto object-contain drop-shadow-2xl" />
        </motion.div>

        {/* 💻 Imagem da Câmera - DESKTOP - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4 lg:w-[22%] xl:w-[20%] max-w-sm lg:max-w-md hidden lg:block pointer-events-none z-10"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={camera} alt="Câmera" className="w-full h-auto object-contain drop-shadow-2xl" />
        </motion.div>

        {/* 📦 CONTEÚDO - z-20 */}
        <div className="relative max-w-7xl mx-auto text-center z-20">
          <div className="max-w-4xl mx-auto px-2">
            
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 sm:mb-6 text-white" 
              style={fontExtraBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              <span className="text-white">Ganhe em Dólar com</span>
              <br />
              <span className="text-white">seus vídeos no</span>{' '}
              <span style={{ color: '#F93BA3' }}>Kwai</span>
            </motion.h1>
            
            <motion.p 
              className="text-sm sm:text-base md:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8" 
              style={fontBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.15 }}
            >
              Transforme suas transmissões em renda real com suporte estratégico da Agência Lírios.
            </motion.p>
            
            {/* Bullets curtos - STAGGER */}
            <motion.div 
              className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {[
                { icon: Check, text: "Metas mensais estruturadas" },
                { icon: doisPesso, text: "Suporte individual", isImg: true },
                { icon: grafic, text: "Estratégia para crescer nas lives", isImg: true }
              ].map((item, idx) => (
                <motion.span 
                  key={idx}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-sm font-medium text-white" 
                  style={{ backgroundColor: '#F93BA3', ...fontBold }}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {item.isImg ? (
                    <img src={item.icon} alt="" className="w-3 h-3 sm:w-4 sm:h-4 object-contain" />
                  ) : (
                    <item.icon size={14} className="sm:size-4 text-white" />
                  )}
                  {item.text}
                </motion.span>
              ))}
            </motion.div>
            
            {/* Botões */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              {/* ✅ Path atualizado: /contato → /entrar-na-agencia */}
              <Link to="/entrar-na-agencia" className="w-full sm:w-auto">
                <motion.button 
                  className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-white font-bold flex items-center justify-center gap-2 sm:gap-3 hover:opacity-90 shadow-lg" 
                  style={{ backgroundColor: '#F93BA3', ...fontExtraBold, boxShadow: '0 10px 40px rgba(249, 59, 163, 0.4)' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img src={kwai} alt="Kwai" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain" />
                  <span className="text-xs sm:text-sm md:text-base">Quero Fazer Live no Kwai</span>
                </motion.button>
              </Link>
              
              {/* ✅ Anchor link interno - Mantido como está */}
              <a href="#como-funciona" className="w-full sm:w-auto">
                <motion.button 
                  className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-white font-bold flex items-center justify-center gap-2 sm:gap-3 hover:opacity-90 shadow-lg" 
                  style={{ backgroundColor: '#F93BA3', ...fontExtraBold, boxShadow: '0 10px 40px rgba(249, 59, 163, 0.4)' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img src={interr} alt="Interrogação" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain" />
                  <span className="text-xs sm:text-sm md:text-base">Ver Como Funciona</span>
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 💰 BLOCO 2 – COMO GANHA DINHEIRO NA LIVE */}
      <section id="como-funciona" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto px-2 text-center">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2" 
              style={{ ...fontExtraBold, color: '#C00D5C' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Como funciona a monetização:
            </motion.h2>
            <motion.p 
              className="text-sm sm:text-base md:text-xl mb-8 sm:mb-12" 
              style={{ ...fontBold, color: '#C00D5C' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              Sem enrolação.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {monetizationSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                className="p-4 sm:p-6 rounded-2xl text-center" 
                style={{ backgroundColor: '#F93BA3', boxShadow: '0 10px 40px rgba(249, 59, 163, 0.3)' }}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-3 sm:mb-4" 
                  style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-lg sm:text-2xl font-black" style={{ ...fontExtraBold, color: '#C00D5C' }}>{idx + 1}</span>
                </motion.div>
                <p className="text-white text-[10px] sm:text-sm" style={fontBold}>{step.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🚀 BLOCO 3 – DIFERENCIAL E CRESCIMENTO */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-visible" style={{ backgroundColor: '#C00D5C' }}>
        
        {/* 📱 Imagem LIVE - MOBILE - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-28 sm:h-28 lg:hidden z-10 pointer-events-none"
          animate={{ y: [0, -8, 0], rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={liverosa} alt="Live Mobile" className="w-full h-auto object-contain drop-shadow-2xl" />
        </motion.div>

        {/* 💻 Imagem LIVE - DESKTOP - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/5 lg:w-[20%] max-w-xs lg:max-w-sm z-10 hidden lg:block pointer-events-none"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={liverosa} alt="Live" className="w-full h-auto object-contain drop-shadow-2xl" />
        </motion.div>

        {/* 📦 CONTEÚDO - z-20 */}
        <div className="relative max-w-7xl mx-auto z-20">
          <div className="max-w-4xl mx-auto px-2">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-white" 
              style={fontExtraBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Você não faz live sozinho.
            </motion.h2>
            
            {/* Benefícios em grid - STAGGER */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto mb-12 sm:mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full" 
                  style={{ backgroundColor: '#F93BA3', boxShadow: '0 4px 15px rgba(249, 59, 163, 0.3)' }}
                  variants={fadeInLeft}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <Check size={16} className="sm:size-4 flex-shrink-0 text-white" />
                  <span className="text-white font-medium text-[10px] sm:text-sm" style={fontBold}>{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Badge Crescimento Acelerado */}
            <motion.div 
              className="text-center mb-4 sm:mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={scaleIn}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full" 
                style={{ backgroundColor: '#F93BA3', boxShadow: '0 4px 15px rgba(249, 59, 163, 0.4)' }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.img 
                  src={raio} 
                  alt="Raio" 
                  className="w-4 h-4 object-contain"
                  animate={{ rotate: [0, -15, 15, -15, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-[10px] sm:text-sm font-bold text-white" style={fontExtraBold}>Crescimento acelerado</span>
              </motion.div>
            </motion.div>

            {/* Título Carisma + Consistência */}
            <motion.h3 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4 text-white" 
              style={fontExtraBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              Carisma + Constância = Escala
            </motion.h3>
            
            <motion.p 
              className="text-center text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base" 
              style={fontBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Lives bem estruturadas crescem rápido. Com frequência e estratégia, você aumenta público, presentes e metas.
            </motion.p>

            {/* Box da fórmula */}
            <motion.div 
              className="p-5 sm:p-8 rounded-2xl text-center max-w-3xl mx-auto" 
              style={{ backgroundColor: '#F93BA3', boxShadow: '0 10px 40px rgba(249, 59, 163, 0.4)' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={scaleIn}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-lg sm:text-2xl md:text-4xl font-black text-white flex items-center justify-center gap-2 sm:gap-3 flex-wrap" style={fontExtraBold}>
                <motion.span whileHover={{ scale: 1.1 }}>CARISMA</motion.span>
                <span className="text-white/80">+</span>
                <motion.span whileHover={{ scale: 1.1 }}>CONSISTÊNCIA</motion.span>
                <span className="text-white/80">=</span>
                <motion.span whileHover={{ scale: 1.1 }}>ESCALA</motion.span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🎯 BLOCO 5 – PARA QUEM É */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto px-2">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12" 
              style={{ ...fontExtraBold, color: '#C00D5C' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Para quem é o Kwai Live?
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {targetAudience.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full" 
                  style={{ backgroundColor: '#F93BA3', boxShadow: '0 4px 15px rgba(249, 59, 163, 0.3)' }}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03, y: -3 }}
                >
                  <Check size={16} className="sm:size-4 flex-shrink-0 text-white" />
                  <span className="text-white font-medium text-[10px] sm:text-sm" style={fontBold}>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🔥 BLOCO 6 – FAQ E CTA FINAL */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-visible" style={{ backgroundColor: '#C00D5C' }}>
        
        {/* 📱 Mascote - MOBILE - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 lg:hidden z-10 pointer-events-none"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={mascotduvid} alt="Mascote Dúvidas Mobile" className="w-full h-auto object-contain drop-shadow-2xl" />
        </motion.div>

        {/* 💻 Mascote - DESKTOP - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4 lg:w-[22%] max-w-sm lg:max-w-md z-10 hidden lg:block pointer-events-none"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={mascotduvid} alt="Mascote Dúvidas" className="w-full h-auto object-contain drop-shadow-2xl" />
        </motion.div>

        {/* 📦 CONTEÚDO - z-20 */}
        <div className="relative max-w-7xl mx-auto z-20">
          <div className="max-w-4xl mx-auto px-2">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-white" 
              style={fontExtraBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Perguntas Frequentes
            </motion.h2>
            
            {/* FAQ Blocks - STAGGER */}
            <motion.div 
              className="space-y-3 sm:space-y-4 mb-12 sm:mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
              {faqs.map((faq, i) => (
                <motion.div 
                  key={i} 
                  className="p-4 sm:p-6 rounded-2xl" 
                  style={{ backgroundColor: '#F93BA3', boxShadow: '0 4px 15px rgba(249, 59, 163, 0.3)' }}
                  variants={fadeInUp}
                  whileHover={{ y: -3, boxShadow: '0 8px 25px rgba(249, 59, 163, 0.5)' }}
                >
                  <h4 className="text-sm sm:text-lg font-bold mb-2 flex items-start gap-2 sm:gap-3 text-white" style={fontExtraBold}>
                    <motion.img 
                      src={raio} 
                      alt="Raio" 
                      className="w-4 h-4 sm:w-5 sm:h-5 object-contain mt-0.5"
                      animate={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {faq.q}
                  </h4>
                  <p className="text-white/90 pl-6 sm:pl-8 text-[10px] sm:text-sm" style={fontBold}>{faq.a}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 text-white leading-tight" 
                style={fontExtraBold}
                variants={fadeInUp}
              >
                Pronto para transformar suas lives em{' '}
                <span style={{ color: '#F93BA3' }}>Renda Real?</span>
              </motion.h2>
              
              <motion.p 
                className="text-sm sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto" 
                style={fontBold}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
              >
                Entre agora para o Kwai Live com a Agência Lírios.
              </motion.p>
              
              <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
                {/* ✅ Path atualizado: /contato → /entrar-na-agencia */}
                <Link to="/entrar-na-agencia">
                  <motion.button 
                    className="px-8 sm:px-10 py-4 sm:py-5 rounded-full text-white font-bold text-sm sm:text-lg inline-flex items-center gap-2 sm:gap-3 hover:opacity-90 shadow-2xl" 
                    style={{ backgroundColor: '#F93BA3', ...fontExtraBold, boxShadow: '0 10px 40px rgba(249, 59, 163, 0.4)' }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.img 
                      src={raio} 
                      alt="Raio" 
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                      animate={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <span className="whitespace-nowrap">QUERO COMEÇAR MINHA LIVE</span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  );
}