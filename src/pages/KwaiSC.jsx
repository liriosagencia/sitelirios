// src/pages/KwaiSC.jsx
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import kwaisc from '../assets/kwaisc.png';
import interr from '../assets/interr.png';
import raio from '../assets/raio.png';
import grafic from '../assets/grafic.png';
import cifrao from '../assets/cifrao.png';
import acao from '../assets/acao.png';
import tesour from '../assets/tesour.png';
import seta from '../assets/seta.png';
import pegadass from '../assets/pegadass.png';
import florDecoracao from '../assets/flor-decoracao.png';
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

export default function KwaiSC() {
  const steps = [
    { num: "1️⃣", title: "Estrutura", desc: "Criamos sua estrutura de perfil" },
    { num: "2️⃣", title: "Estratégia", desc: "Definimos estratégia de cortes" },
    { num: "3️⃣", title: "Execução", desc: "Você publica com frequência alta" },
    { num: "4️⃣", title: "Resultado", desc: "Monetiza conforme performance" }
  ];

  const benefits = [
    "Orientação sobre formatos que performam",
    "Acompanhamento de métricas",
    "Ajuste estratégico semanal",
    "Metas claras de crescimento",
    "Possibilidade de escalar rapidamente"
  ];

  const targetAudience = [
    "Pessoas disciplinadas",
    "Quem consegue postar alto volume",
    "Quem quer escalar rápido",
    "Quem entende que consistência gera resultado"
  ];

  const faqs = [
    {
      q: "Preciso aparecer nos vídeos?",
      a: "Não necessariamente. Trabalhamos com formatos variados."
    },
    {
      q: "Preciso ter experiência com edição?",
      a: "Não. Ensinamos o modelo estratégico."
    },
    {
      q: "É diferente do modelo criador original?",
      a: "Sim. Aqui o foco é volume estruturado."
    }
  ];

  // Fonts reutilizáveis
  const fontExtraBold = { fontFamily: 'Poppins-ExtraBold, sans-serif' };
  const fontBold = { fontFamily: 'Poppins-Bold, sans-serif' };
  const fontLightItalic = { fontFamily: 'Poppins-LightItalic, sans-serif' };

  // ✅ Função para scroll suave até uma seção
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      
      {/* 🔥 HERO – Primeira Dobra */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-visible" style={{ backgroundColor: '#C00D5C' }}>

        {/* 📱 Imagem de Ação - MOBILE - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 lg:hidden z-10 pointer-events-none"
          animate={{ y: [0, -8, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={acao} alt="Ação" className="w-full h-auto object-contain drop-shadow-2xl" />
        </motion.div>

        {/* 💻 Imagem de Ação - DESKTOP - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4 lg:w-[22%] xl:w-[20%] max-w-sm lg:max-w-md hidden lg:block pointer-events-none z-10"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={acao} alt="Ação" className="w-full h-auto object-contain drop-shadow-2xl" />
        </motion.div>

        {/* 📦 CONTEÚDO - z-20 */}
        <div className="relative max-w-7xl mx-auto text-center z-20">
          <div className="max-w-4xl mx-auto px-2">
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 sm:mb-6 text-white" 
              style={fontExtraBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              <span className="text-white">Ganhe em Dólar com</span>
              <br />
              <span style={{ color: '#F93BA3' }}>Cortes Estratégicos no Kwai</span>
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
              O Sistema de Cortes da Agência Lírios transforma volume de vídeos em monetização recorrente.
            </motion.p>
            
            {/* Bullets - STAGGER */}
            <motion.div 
              className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {[
                { icon: raio, text: "Alto volume de publicações" },
                { icon: grafic, text: "Estratégia validada" },
                { icon: cifrao, text: "Monetização por performance" }
              ].map((item, idx) => (
                <motion.span 
                  key={idx}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-sm font-medium text-white" 
                  style={{ backgroundColor: '#F93BA3', ...fontBold }}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <img src={item.icon} alt="" className="w-3 h-3 sm:w-4 sm:h-4 object-contain" /> 
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
              <Link to="/contato" className="w-full sm:w-auto">
                <motion.button 
                  className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-white font-bold flex items-center justify-center gap-2 sm:gap-3 hover:opacity-90 shadow-lg" 
                  style={{ backgroundColor: '#F93BA3', ...fontExtraBold, boxShadow: '0 10px 40px rgba(249, 59, 163, 0.4)' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img src={kwaisc} alt="Kwai SC" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain" />
                  <span className="text-xs sm:text-sm md:text-base">Quero Entrar no Kwai SC</span>
                </motion.button>
              </Link>
              
              {/* ✅ BOTÃO CORRIGIDO - Scroll suave para #como-funciona */}
              <a 
                href="#como-funciona" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('como-funciona');
                }}
                className="w-full sm:w-auto inline-block"
              >
                <motion.button 
                  className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-white font-bold flex items-center justify-center gap-2 sm:gap-3 hover:opacity-90 shadow-lg" 
                  style={{ backgroundColor: '#F93BA3', ...fontExtraBold, boxShadow: '0 10px 40px rgba(249, 59, 163, 0.4)' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img src={interr} alt="Interrogação" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain" />
                  <span className="text-xs sm:text-sm md:text-base">Como Funciona o Sistema</span>
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🏆 BLOCO 2 – O QUE É O KWAI SC? */}
      <section id="como-funciona" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-visible">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto px-2">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" 
              style={{ ...fontExtraBold, color: '#C00D5C' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              O que é o Sistema de Cortes?
            </motion.h2>
            
            <motion.p 
              className="text-sm sm:text-base md:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto" 
              style={{ ...fontBold, color: '#C00D5C' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.15 }}
            >
              O Kwai SC é uma modalidade focada em cortes estratégicos de vídeos com alto potencial de visualização.
              Trabalhamos com estrutura, orientação e metas claras para escalar resultados.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
              {[
                { icon: tesour, title: "Cortes Inteligentes", desc: "Conteúdo editado para retenção e viralização." },
                { icon: grafic, title: "Alto Volume", desc: "Publicação massiva para maximizar alcance." },
                { icon: cifrao, title: "Ganhos em Dólar", desc: "Receba por performance, não por sorte." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="p-5 sm:p-6 rounded-2xl text-center" 
                  style={{ backgroundColor: '#DB1277', boxShadow: '0 10px 40px rgba(219, 18, 119, 0.3)' }}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <motion.img 
                    src={item.icon} 
                    alt={item.title} 
                    className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 object-contain"
                    whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <h3 className="font-bold text-sm sm:text-lg mb-2 text-white" style={fontExtraBold}>{item.title}</h3>
                  <p className="text-white/90 text-[10px] sm:text-sm" style={fontBold}>{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ⚙ BLOCO 3 – COMO FUNCIONA */}
      {/* ✅ ADICIONADO id="como-funciona" AQUI */}
      <section  className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#C00D5C' }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto px-2">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-white" 
              style={fontExtraBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Passo a passo para começar.
            </motion.h2>
          </div>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                className="p-4 sm:p-6 rounded-2xl text-center" 
                style={{ backgroundColor: '#F93BA3', boxShadow: '0 10px 40px rgba(249, 59, 163, 0.3)' }}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-3 sm:mb-4" 
                  style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-lg sm:text-2xl font-black" style={{ ...fontExtraBold, color: '#C00D5C' }}>{idx + 1}</span>
                </motion.div>
                <h3 className="font-bold text-xs sm:text-lg mb-1 sm:mb-2 text-white" style={fontExtraBold}>{step.title}</h3>
                <p className="text-white/90 text-[10px] sm:text-sm" style={fontBold}>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-8 sm:mt-12 px-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <Link to="/contato">
              <motion.button 
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-bold flex items-center gap-2 sm:gap-3 hover:opacity-90 shadow-lg mx-auto" 
                style={{ backgroundColor: '#F93BA3', ...fontExtraBold, boxShadow: '0 10px 40px rgba(249, 59, 163, 0.4)' }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <img src={seta} alt="Seta" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                <span className="text-xs sm:text-sm md:text-base">Quero começar agora!</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 📈 BLOCO 4 – DIFERENCIAL LÍRIOS NO SC */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-visible" style={{ backgroundColor: '#C00D5C' }}>
        
        {/* 📱 Imagem Decorativa - MOBILE - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 lg:hidden z-10 pointer-events-none"
          animate={{ y: [0, -8, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={pegadass} alt="Decoração Mobile" className="w-full h-auto object-contain" />
        </motion.div>

        {/* 💻 Imagem Decorativa - DESKTOP - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4 lg:w-[22%] max-w-sm lg:max-w-md z-10 hidden lg:block pointer-events-none"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={pegadass} alt="Decoração" className="w-full h-auto object-contain" />
        </motion.div>

        {/* 📦 CONTEÚDO */}
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
              Não é só cortar. É cortar com estratégia.
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto"
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
          </div>
        </div>
      </section>

      {/* 💰 BLOCO 5 – POTENCIAL DE ESCALA */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-visible" style={{ backgroundColor: '#C00D5C' }}>
        
        {/* 📱 Flor Decorativa - MOBILE - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-28 sm:h-28 lg:hidden z-10 pointer-events-none"
          animate={{ y: [0, -8, 0], rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={florDecoracao} alt="Decoração Mobile" className="w-full h-auto object-contain" />
        </motion.div>

        {/* 💻 Flor Decorativa - DESKTOP - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/3 lg:w-[24%] max-w-sm lg:max-w-md z-10 hidden lg:block pointer-events-none"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={florDecoracao} alt="Decoração" className="w-full h-auto object-contain" />
        </motion.div>

        {/* 📦 CONTEÚDO */}
        <div className="relative max-w-7xl mx-auto text-center z-20">
          <div className="max-w-4xl mx-auto px-2">
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 sm:mb-6" 
              style={{ backgroundColor: '#F93BA3', boxShadow: '0 4px 15px rgba(192, 13, 92, 0.3)' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <img src={grafic} alt="Gráfico" className="w-4 h-4 object-contain" />
              <span className="text-[10px] sm:text-sm font-semibold text-white" style={fontBold}>Escala Acelerada</span>
            </motion.div>

            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white" 
              style={fontExtraBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Alta frequência = Alto potencial.
            </motion.h2>
            
            <motion.p 
              className="text-sm sm:text-base md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto" 
              style={fontBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.15 }}
            >
              O Sistema de Cortes permite trabalhar com <strong className="text-white">maior volume de publicações</strong>, 
              aumentando as chances de vídeos performarem e gerarem monetização.
            </motion.p>
            
            <motion.p 
              className="text-xs sm:text-base text-white/70 mt-3 sm:mt-4 font-medium" 
              style={fontLightItalic}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.25 }}
            >
              Não é sorte. É volume + estratégia.
            </motion.p>
            
            {/* Visual de escala */}
            <motion.div 
              className="mt-8 sm:mt-12 p-5 sm:p-8 rounded-2xl" 
              style={{ backgroundColor: '#F93BA3', boxShadow: '0 10px 40px rgba(192, 13, 92, 0.4)' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={scaleIn}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-2xl md:text-4xl font-black flex-wrap text-white" style={fontExtraBold}>
                <motion.span whileHover={{ scale: 1.1 }}>VOLUME</motion.span>
                <motion.img 
                  src={raio} 
                  alt="Raio" 
                  className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                  animate={{ rotate: [0, -15, 15, -15, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.span whileHover={{ scale: 1.1 }}>ESTRATÉGIA</motion.span>
                <span className="text-white/60">=</span>
                <motion.span whileHover={{ scale: 1.1 }}>RESULTADO</motion.span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🎯 BLOCO 6 – PARA QUEM É O KWAI SC */}
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
              Para quem é o Kwai SC?
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

      {/* 🔥 BLOCO 7 – FAQ E CTA FINAL */}
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

        {/* 📦 CONTEÚDO */}
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
                Pronto para escalar com o{' '}
                <span style={{ color: '#F93BA3' }}>Sistema de Cortes?</span>
              </motion.h2>
              
              <motion.p 
                className="text-sm sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto" 
                style={fontBold}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
              >
                Entre agora no Kwai SC e comece a monetizar com estratégia.
              </motion.p>
              
              <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
                <Link to="/contato">
                  <motion.button 
                    className="px-8 sm:px-10 py-4 sm:py-5 rounded-full text-white font-bold text-sm sm:text-lg inline-flex items-center gap-2 sm:gap-3 hover:opacity-90 shadow-2xl" 
                    style={{ backgroundColor: '#F93BA3', ...fontExtraBold, boxShadow: '0 10px 40px rgba(249, 59, 163, 0.4)' }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={seta} alt="Seta" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                    QUERO ENTRAR NO KWAI SC
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