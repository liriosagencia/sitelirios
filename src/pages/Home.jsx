// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import WhatsAppFloat from '../components/layout/WhatsAppFloat';

// Imports das imagens
import kwaiIcone from '../assets/kwai-icone.png';
import tiktokshopIcone from '../assets/tiktokshop.png';
import mascote from '../assets/mascote.png';
import mascotef from '../assets/mascote-feminina.png';
import florDecoracao from '../assets/flor-decoracao.png';
import logoRosa from '../assets/logo-rosa.png';
import cifrao from '../assets/cifrao.png';
import coroa from '../assets/coroa.png';
import kwaiscIcone from '../assets/kwaisc.png';
import seta from '../assets/seta.png';

// Variantes reutilizáveis para animações
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const viewportConfig = { once: true, amount: 0.2 };

export default function Home() {
  const targetAudience = ["Criadores", "Streamers", "Editores", "Vendedores digitais"];
  
  const benefits = [
    "Suporte individual estratégico",
    "Acompanhamento real de desempenho",
    "Estrutura profissional",
    "Comunidade exclusiva",
    "Premiações mensais",
    "Crescimento estruturado"
  ];

  const fontExtraBold = { fontFamily: 'Poppins-ExtraBold, sans-serif' };
  const fontLightItalic = { fontFamily: 'Poppins-LightItalic, sans-serif' };
  const fontSemiBold = { fontFamily: 'Poppins-Bold, sans-serif' };

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: '#C00D5C' }}>
      
      {/* 🔥 HERO – Primeira dobra */}
      <section className="relative py-12 sm:py-16 md:py-24 overflow-visible" style={{ backgroundColor: '#C00D5C' }}>
        
        {/* ✨ Elementos decorativos mobile */}
        <div className="absolute top-6 left-2 sm:top-8 sm:left-4 w-12 h-12 sm:w-16 sm:h-16 md:hidden opacity-20 pointer-events-none z-0">
          <motion.div 
            className="w-full h-full rounded-full bg-gradient-to-br from-pink-300 to-purple-400 blur-xl"
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="absolute bottom-6 right-2 sm:bottom-8 sm:right-4 w-10 h-10 sm:w-14 sm:h-14 md:hidden opacity-15 pointer-events-none z-0">
          <motion.div 
            className="w-full h-full rounded-full bg-gradient-to-br from-pink-200 to-white blur-lg"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* 🌸 Mascote desktop - COM FLUTUAÇÃO */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4 lg:w-[22%] xl:w-[20%] 2xl:w-[18%] max-w-sm lg:max-w-md 2xl:max-w-lg hidden lg:block z-10 pointer-events-none">
          <motion.img 
            src={mascote} 
            alt="Mascote Lírios" 
            loading="lazy"
            className="w-full h-auto object-contain drop-shadow-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* 🌸 Mascote mobile - COM FLUTUAÇÃO */}
        <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 lg:hidden z-10 pointer-events-none">
          <motion.img 
            src={mascote} 
            alt="Mascote Lírios" 
            loading="lazy"
            className="w-full h-auto object-contain drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* 📦 CONTAINER DO CONTEÚDO */}
        <div className="relative max-w-7xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
          <div className="max-w-4xl mx-auto">
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-4 sm:mb-5 md:mb-6 px-2"
              style={fontExtraBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Transformamos Criadores em{' '}
              <span style={{ color: '#F93BA3' }}>Resultados Reais!</span>
            </motion.h1>
            
            <motion.p 
              className="text-sm sm:text-base md:text-xl text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2"
              style={fontLightItalic}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.15 }}
            >
              A Agência Lírios é referência nacional em gestão estratégica para monetização no Kwai e TikTok.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-4 sm:mb-6 px-2"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.25 }}
            >
              {/* ✅ Path atualizado: /kwai → /ganhar-dinheiro-no-kwai */}
              <Link to="/ganhar-dinheiro-no-kwai" className="w-full sm:w-auto">
                <motion.button 
                  className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 rounded-full text-white flex items-center justify-center gap-2 sm:gap-2 md:gap-3 hover:opacity-90 shadow-lg"
                  style={{ backgroundColor: '#F93BA3', ...fontExtraBold }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img src={kwaiIcone} alt="Kwai" loading="lazy" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain" />
                  <span className="text-xs sm:text-sm md:text-base">Quero Monetizar no Kwai</span>
                </motion.button>
              </Link>
              
              {/* ✅ Path atualizado: /tiktok-shop → /como-vender-no-tiktok-shop */}
              <Link to="/como-vender-no-tiktok-shop" className="w-full sm:w-auto">
                <motion.button 
                  className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 rounded-full text-white flex items-center justify-center gap-2 sm:gap-2 md:gap-3 hover:opacity-90 shadow-lg"
                  style={{ backgroundColor: '#F93BA3', ...fontExtraBold }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img src={tiktokshopIcone} alt="TikTok Shop" loading="lazy" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain" />
                  <span className="text-xs sm:text-sm md:text-base">Quero Vender no TikTok Shop</span>
                </motion.button>
              </Link>
            </motion.div>

            <Link to="#modalidades">
              <motion.p 
                className="text-white/80 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm"
                style={{ ...fontLightItalic, fontWeight: '700' }}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={fadeInUp}
                transition={{ delay: 0.35 }}
                whileHover={{ x: 5 }}
              >
                <img src={seta} alt="Seta" loading="lazy" className="w-3 h-3 sm:w-4 sm:h-4 object-contain" />
                <span>Conheça Nossas Modalidades</span>
              </motion.p>
            </Link>
          </div>
        </div>
      </section>

      {/* 🌸 Seção "Por que a Agência Lírios?" */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-white overflow-visible">
        {/* ✨ Flor decorativa mobile */}
        <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-20 h-20 sm:w-12 sm:h-12 md:hidden pointer-events-none z-10">
          <motion.img 
            src={florDecoracao} 
            alt="" 
            loading="lazy" 
            className="w-full h-auto object-contain -rotate-12"
            animate={{ y: [0, -8, 0], rotate: [-12, -8, -12] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* 🌸 Flor desktop */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[28%] lg:w-[24%] xl:w-[22%] 2xl:w-[20%] max-w-sm lg:max-w-md 2xl:max-w-lg hidden sm:block z-10 pointer-events-none">
          <motion.img 
            src={florDecoracao} 
            alt="Decoração" 
            loading="lazy"
            className="w-full h-auto object-contain"
            style={{ filter: 'drop-shadow(0 0 20px rgba(219, 18, 119, 0.3))' }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* 📦 CONTAINER DO CONTEÚDO */}
        <div className="relative max-w-7xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 px-2"
              style={{ fontFamily: 'Poppins-ExtraBold, sans-serif', color: '#C00D5C' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Por que a Agência Lírios?
            </motion.h2>
            
            {/* ✅ BENEFÍCIOS COM STAGGER */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto px-2"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {benefits.map((benefit, idx) => {
                const bgColor = (idx === 2 || idx === 3) ? '#C00D5C' : '#DB1277';
                return (
                  <motion.div 
                    key={idx} 
                    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                    style={{ 
                      backgroundColor: bgColor,
                      fontFamily: 'Poppins-Bold, sans-serif',
                      borderRadius: '16px',
                      boxShadow: '0 4px 15px rgba(219, 18, 119, 0.3)'
                    }}
                    variants={fadeInLeft}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <Check size={16} className="sm:size-4 flex-shrink-0 text-white" />
                    <span className="flex-1 text-xs sm:text-sm md:text-base">{benefit}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div 
              className="text-center mt-6 sm:mt-8 md:mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <img 
                src={logoRosa} 
                alt="LÍRIOS" 
                loading="lazy"
                className="h-8 sm:h-10 md:h-12 w-auto mx-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🏆 BLOCO 2 – AUTORIDADE */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative z-5" style={{ backgroundColor: '#DB1277' }}>
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{
              visible: { transition: { staggerChildren: 0.12 } }
            }}
          >
            {[
              { value: '+4 mil', label: 'Criadores ativos' },
              { value: '+350 milhões', label: 'Visualizações mensais' },
              { 
                value: <img src={cifrao} alt="Dólar" loading="lazy" className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 mx-auto mb-1 object-contain" />, 
                label: 'Pagamentos em dólar', 
                isIcon: true 
              },
              { 
                value: <img src={coroa} alt="Coroa" loading="lazy" className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 mx-auto mb-1 object-contain" />, 
                label: 'Top Agência Nacional', 
                isIcon: true 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="space-y-1 sm:space-y-2"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-white" style={{ fontFamily: 'Poppins-ExtraBold, sans-serif' }}>
                  {item.value}
                </div>
                <p className="text-white/90 text-[10px] sm:text-xs md:text-base lg:text-lg" style={{ fontFamily: 'Poppins-Bold, sans-serif' }}>
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🎯 BLOCO 3 – NOSSAS MODALIDADES */}
      <section id="modalidades" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10" style={{ backgroundColor: '#C00D5C' }}>
        <div className="max-w-7xl xl:max-w-7xl 2xl:max-w-7xl mx-auto">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-white px-2"
            style={{ fontFamily: 'Poppins-ExtraBold, sans-serif' }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            Nossas Modalidades
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 relative z-10 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            {/* ✅ Todos os paths atualizados conforme Navbar.jsx */}
            {[
              { to: "/ganhar-dinheiro-no-kwai", icon: kwaiIcone, title: "KWAI CRIADORES", desc: "Monetização em dólar por vídeos originais.", btn: "Acessar Página Kwai" },
              { to: "/cortes-para-kwai-cut", icon: kwaiscIcone, title: "KWAI SC (Sistema de Cortes)", desc: "Ganhe com cortes estratégicos e alto volume de visualizações.", btn: "Acessar Página Kwai SC" },
              { to: "/ganhar-dinheiro-kwai-live", icon: kwaiIcone, title: "KWAI LIVE", desc: "Monetize transmissões ao vivo com suporte e metas estruturadas.", btn: "Acessar Página Kwai Live" },
              { to: "/como-vender-no-tiktok-shop", icon: tiktokshopIcone, title: "TIKTOK SHOP", desc: "Ganhe comissões vendendo produtos no TikTok.", btn: "Acessar Página TikTok Shop" }
            ].map((service, idx) => (
              <Link to={service.to} key={idx} className="group block">
                <motion.div 
                  className="p-5 sm:p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl relative z-10"
                  style={{ 
                    backgroundColor: '#DB1277',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                  }}
                  variants={fadeInUp}
                  whileHover={{ y: -5, boxShadow: '0 20px 50px rgba(219, 18, 119, 0.4)' }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <img 
                      src={service.icon} 
                      alt={service.title} 
                      loading="lazy"
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain" 
                    />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-2xl font-bold mb-2 text-white" style={{ fontFamily: 'Poppins-ExtraBold, sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-white/80 mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm md:text-base lg:text-lg" style={{ fontFamily: 'Poppins-Bold, sans-serif' }}>
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-white font-semibold" style={{ fontFamily: 'Poppins-Bold, sans-serif' }}>
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg">{service.btn}</span>
                    <span className="text-white/60">→</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 📊 BLOCO 5 – RESULTADOS REAIS 
      <section className="relative py-12 sm:py-16 md:py-20 bg-white overflow-visible px-4 sm:px-6 lg:px-8">
       

      
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 sm:w-28 sm:h-28 sm:hidden opacity-5 pointer-events-none z-0">
          <motion.div 
            className="w-full h-full rounded-full bg-gradient-to-br from-pink-400 to-purple-500 blur-2xl"
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative max-w-7xl xl:max-w-7xl 2xl:max-w-7xl mx-auto z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 px-2"
              style={{ fontFamily: 'Poppins-ExtraBold, sans-serif', color: '#C00D5C' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Resultados Reais
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 max-w-3xl mx-auto px-2"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              {[1, 2, 3].map((item, idx) => (
                <motion.div 
                  key={item} 
                  className="aspect-video rounded-2xl flex items-center justify-center p-3 sm:p-4 md:p-5"
                  style={{ 
                    backgroundColor: '#DB1277',
                    boxShadow: '0 10px 40px rgba(219, 18, 119, 0.3)'
                  }}
                  variants={scaleIn}
                  whileHover={{ scale: 1.03 }}
                >
                  <span 
                    className="text-white text-center font-bold text-[9px] sm:text-[10px] md:text-xs lg:text-sm"
                    style={{ fontFamily: 'Poppins-ExtraBold, sans-serif' }}
                  >
                    AINDA EM<br />PROCESSO
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>  */}

      {/* 👥 BLOCO 6 – QUEM PODE ENTRAR */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-visible px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#DB1277' }}>
        
        {/* 🌸 Flor decorativa mobile */}
        <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 md:hidden pointer-events-none z-10">
          <motion.img 
            src={florDecoracao} 
            alt="" 
            loading="lazy"
            className="w-full h-auto object-contain rotate-12"
            animate={{ y: [0, -8, 0], rotate: [12, 8, 12] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* 🌸 Flor decorativa desktop */}
        <div className="absolute -top-32 sm:-top-36 md:-top-40 right-0 sm:right-4 md:right-8 w-[30%] sm:w-[28%] md:w-[25%] lg:w-[22%] xl:w-[20%] 2xl:w-[18%] max-w-sm sm:max-w-md lg:max-w-lg 2xl:max-w-xl hidden sm:block z-10 pointer-events-none">
          <motion.img 
            src={florDecoracao} 
            alt="Decoração" 
            loading="lazy"
            className="w-full h-auto object-contain"
            style={{ filter: 'drop-shadow(0 0 20px rgba(219, 18, 119, 0.3))' }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* 📦 CONTEÚDO */}
        <div className="relative max-w-7xl xl:max-w-7xl 2xl:max-w-7xl mx-auto text-center z-20">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6 md:mb-8 text-white px-2"
              style={{ fontFamily: 'Poppins-ExtraBold, sans-serif' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Quem pode entrar?
            </motion.h2>
            
            {/* ✅ TAGS COM STAGGER */}
            <motion.div 
              className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 px-2"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {targetAudience.map((audience, idx) => (
                <motion.span 
                  key={idx}
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-2 md:py-3 rounded-full text-[10px] sm:text-xs md:text-base lg:text-lg font-semibold text-white"
                  style={{ 
                    backgroundColor: '#F93BA3',
                    fontFamily: 'Poppins-Bold, sans-serif',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                  }}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.08, y: -3 }}
                >
                  {audience}
                </motion.span>
              ))}
            </motion.div>
            
            {/* ✅ Path atualizado: /contato → /entrar-na-agencia */}
            <Link to="/entrar-na-agencia" className="inline-block">
              <motion.button 
                className="px-5 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 rounded-full text-white font-semibold inline-flex items-center gap-2 sm:gap-2 md:gap-3 hover:opacity-90 shadow-lg w-full sm:w-auto justify-center"
                style={{ 
                  backgroundColor: '#F93BA3',
                  fontFamily: 'Poppins-ExtraBold, sans-serif',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                }}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <img src={seta} alt="Seta" loading="lazy" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 object-contain" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg">Entrar em contato</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

{/* 🔥 BLOCO FINAL – CTA FORTE */}
<section className="relative py-16 sm:py-20 md:py-32 bg-white overflow-hidden px-4 sm:px-6 lg:px-8">
  {/* ✨ Elementos decorativos mobile */}
  <div className="absolute top-6 right-2 sm:top-8 sm:right-4 w-14 h-16 sm:w-18 sm:h-18 md:hidden opacity-10 pointer-events-none z-0">
    <motion.div 
      className="w-full h-full rounded-full bg-gradient-to-br from-pink-300 to-purple-400 blur-xl"
      animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
  
  {/* 🌸 Mascote feminino desktop - COM FLUTUAÇÃO */}
  <div className="absolute left-0 bottom-0 w-[28%] lg:w-[24%] xl:w-[22%] 2xl:w-[20%] max-w-sm lg:max-w-md 2xl:max-w-lg hidden lg:block z-0 pointer-events-none">
    <motion.img 
      src={mascotef} 
      alt="Mascote Lírios" 
      loading="lazy"
      className="w-full h-auto object-contain drop-shadow-2xl"
      style={{ filter: 'drop-shadow(0 10px 40px rgba(219, 18, 119, 0.2))' }}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>

  {/* 🌸 Mascote mobile */}
  <div className="absolute -bottom-3 sm:-bottom-5 -left-3 sm:-left-5 w-14 h-20 sm:w-18 sm:h-18 lg:hidden z-50 pointer-events-none">
    <motion.img 
      src={mascotef} 
      alt="" 
      loading="lazy"
      className="w-full h-auto object-contain rotate-0"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>

  {/* 📦 CONTEÚDO */}
  <div className="relative max-w-7xl xl:max-w-7xl 2xl:max-w-7xl mx-auto text-center z-10">
    <div className="max-w-4xl mx-auto">
      <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 md:mb-6 leading-tight px-2"
        style={{ fontFamily: 'Poppins-ExtraBold, sans-serif', color: '#C00D5C' }}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeInUp}
      >
        Pronto para transformar seu perfil em{' '}
        <span style={{ color: '#DB1277' }}>renda real?</span>
      </motion.h2>
      
      <motion.p 
        className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto px-2"
        style={{ fontFamily: 'Poppins-Bold, sans-serif', color: '#C00D5C' }}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeInUp}
        transition={{ delay: 0.15 }}
      >
        Escolha sua modalidade e comece agora.
      </motion.p>
      
      <motion.div 
        className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6 justify-center items-center px-2"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeInUp}
        transition={{ delay: 0.25 }}
      >
        {/* ✅ Path atualizado: /kwai → /ganhar-dinheiro-no-kwai */}
        <Link to="/ganhar-dinheiro-no-kwai" className="w-full md:w-auto">
          <motion.button 
            className="w-full px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl flex items-center justify-center gap-2 sm:gap-2 md:gap-3 hover:opacity-90 shadow-2xl"
            style={{ 
              backgroundColor: '#DB1277',
              fontFamily: 'Poppins-ExtraBold, sans-serif',
              boxShadow: '0 10px 40px rgba(219, 18, 119, 0.4)'
            }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src={kwaiIcone} alt="Kwai" loading="lazy" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain" />
            <span className="whitespace-nowrap">Monetizar no Kwai</span>
          </motion.button>
        </Link>
        
        {/* ✅ Path atualizado: /tiktok-shop → /como-vender-no-tiktok-shop */}
        <Link to="/como-vender-no-tiktok-shop" className="w-full md:w-auto">
          <motion.button 
            className="w-full px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl flex items-center justify-center gap-2 sm:gap-2 md:gap-3 hover:opacity-90 shadow-2xl"
            style={{ 
              backgroundColor: '#F93BA3',
              fontFamily: 'Poppins-ExtraBold, sans-serif',
              boxShadow: '0 10px 40px rgba(249, 59, 163, 0.4)'
            }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src={tiktokshopIcone} alt="TikTok Shop" loading="lazy" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain" />
            <span className="whitespace-nowrap">Vender no TikTok Shop</span>
          </motion.button>
        </Link>
      </motion.div>

      {/* ✅ Parágrafo final com coração SVG na cor #C00D5C */}
      <motion.p 
        className="mt-6 sm:mt-8 md:mt-10 text-[10px] sm:text-xs md:text-sm lg:text-base px-2 flex items-center justify-center gap-1 flex-wrap"
        style={{ fontFamily: 'Poppins-LightItalic, sans-serif', color: '#C00D5C' }}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeInUp}
        transition={{ delay: 0.4 }}
      >
        Junte-se a milhares de criadores que já estão faturando com a gente!{' '}
        <motion.svg 
          className="w-3 h-3 sm:w-4 sm:h-4 inline-block flex-shrink-0"
          viewBox="0 0 24 24"
          fill="#C00D5C"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </motion.svg>
      </motion.p>

    </div>
  </div>
</section>
      
      <WhatsAppFloat />
    </div>
  );
}