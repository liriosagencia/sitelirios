// src/pages/Kwai.jsx
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import kwaiIcone from '../assets/kwai-icone.png';
import grafic from '../assets/grafic.png';
import mascotf from '../assets/medalhao.png';
import graficcolor from '../assets/graficcolor.png';
import mascotduvid from '../assets/mascotduvid.png';
import camerag from '../assets/cameragra.png';
import raios from '../assets/raio.png'; 
import WhatsAppFloat from '../components/layout/WhatsAppFloat';
import VideoTestimonialCard from '../components/layout/VideoTestimonialCard';

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

export default function Kwai() {
  const steps = [
    { num: "1️⃣", text: "Você publica normalmente" },
    { num: "2️⃣", text: "Recebe incentivo por atividade" },
    { num: "3️⃣", text: "Monetiza em dólar por performance" },
    { num: "4️⃣", text: "Recebe direto na carteira do aplicativo" },
    { num: "5️⃣", text: "Não cobramos porcentagem" }
  ];

  const benefits = [
    "Suporte individual 1-a-1",
    "Grupo exclusivo de criadores",
    "Estratégia para aumentar visualizações",
    "Acompanhamento de métricas reais",
    "Premiações mensais",
    "Orientação para crescimento consistente"
  ];

  const faqs = [
    {
      q: "Preciso ter muitos seguidores?",
      a: "Não. Performance e consistência são mais importantes."
    },
    {
      q: "O pagamento é seguro?",
      a: "Sim. Pago diretamente pelo aplicativo."
    },
    {
      q: "Posso sair quando quiser?",
      a: "Sim. Sem burocracia."
    },
    {
      q: "É cobrado algum valor?",
      a: "Não. Recebemos pagamentos diretamente do aplicativo."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      
      {/* 🔥 HERO – Primeira Dobra */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-24 overflow-visible" style={{ backgroundColor: '#C00D5C' }}>

        {/* Mascote/Flor na esquerda - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute left-0 top-[50%] w-[28%] sm:w-[24%] lg:w-[22%] xl:w-[20%] max-w-[220px] sm:max-w-[280px] lg:max-w-[360px] xl:max-w-[420px] z-10 pointer-events-none hidden sm:block"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src={mascotf} 
            alt="Mascote Lírios" 
            loading="lazy"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Mascote mobile - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute -bottom-4 -left-4 w-20 h-20 sm:hidden z-20 pointer-events-none"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src={mascotf} 
            alt="" 
            loading="lazy"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Conteúdo CENTRALIZADO */}
        <div className="relative max-w-4xl xl:max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 z-20">
          <div className="text-center">
            
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-white mb-4 sm:mb-6"
              style={{ fontFamily: 'Poppins-ExtraBold, sans-serif' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Ganhe em Dólar com seus vídeos no{' '}
              <span style={{ color: '#F93BA3' }}>Kwai</span>
            </motion.h1>
            
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto"
              style={{ fontFamily: 'Poppins-Bold, sans-serif' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.15 }}
            >
              A Agência Lírios acelera criadores que querem transformar visualizações em renda real.
            </motion.p>
            
            {/* Bullet curto - STAGGER */}
            <motion.ul 
              className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base text-white/80 mb-6 sm:mb-8"
              style={{ fontFamily: 'Poppins-Bold, sans-serif' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {['Suporte estratégico', 'Metas com bônus em dólar', 'Acompanhamento individual'].map((text, idx) => (
                <motion.li 
                  key={idx} 
                  className="flex items-center gap-1.5 sm:gap-2"
                  variants={fadeInUp}
                >
                  <Check size={14} className="sm:size-4 text-white" /> 
                  <span>{text}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            {/* Botões */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <Link to="/contato">
                <motion.button 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-bold flex items-center justify-center gap-2 sm:gap-3 hover:opacity-90 shadow-lg"
                  style={{ 
                    backgroundColor: '#F93BA3',
                    fontFamily: 'Poppins-ExtraBold, sans-serif',
                    boxShadow: '0 10px 40px rgba(249, 59, 163, 0.4)'
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img src={kwaiIcone} alt="Kwai" loading="lazy" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                  <span className="text-sm sm:text-base">Quero monetizar no Kwai</span>
                </motion.button>
              </Link>
              
              <Link to="/hall-da-fama">
                <motion.button 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-bold flex items-center justify-center gap-2 sm:gap-3 hover:opacity-90 shadow-lg"
                  style={{ 
                    backgroundColor: '#F93BA3',
                    fontFamily: 'Poppins-ExtraBold, sans-serif',
                    boxShadow: '0 10px 40px rgba(249, 59, 163, 0.4)'
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img src={grafic} alt="Gráfico" loading="lazy" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                  <span className="text-sm sm:text-base">Ver resultados reais</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🏆 BLOCO 2 – AUTORIDADE */}
      <section className="relative py-12 sm:py-16 md:py-20 px-12 sm:px-16 lg:px-20 xl:px-24 2xl:px-32 bg-white">
        <div className="relative max-w-4xl xl:max-w-5xl mx-auto z-10">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12"
            style={{ fontFamily: 'Poppins-ExtraBold, sans-serif', color: '#C00D5C' }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            Somos referência nacional em gestão de criadores no Kwai.
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {[
              { value: '+500', label: 'Criadores ativos' },
              { value: '+350 milhões', label: 'Visualizações mensais' },
              { value: '100% em Dólar', label: 'Pagamentos recorrentes' },
              { value: 'Top Nacional', label: 'Agência referência' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="p-2.5 sm:p-3 md:p-4 lg:p-6 rounded-xl sm:rounded-2xl text-center flex flex-col justify-center min-h-[100px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[160px]"
                style={{ 
                  backgroundColor: '#C00D5C',
                  boxShadow: '0 4px 20px rgba(192, 13, 92, 0.25)'
                }}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-white mb-0.5 sm:mb-1 md:mb-2 leading-none px-1" style={{ fontFamily: 'Poppins-ExtraBold, sans-serif' }}>
                  {item.value}
                </div>
                <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm leading-tight px-1.5 sm:px-2 text-white/90" style={{ fontFamily: 'Poppins-Bold, sans-serif' }}>
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 💰 BLOCO 3 – COMO FUNCIONA */}
      <section className="relative py-12 sm:py-16 md:py-20 px-12 sm:px-16 lg:px-20 xl:px-24 2xl:px-32" style={{ backgroundColor: '#C00D5C' }}>
        <div className="relative max-w-4xl xl:max-w-5xl mx-auto z-10">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-white"
            style={{ fontFamily: 'Poppins-ExtraBold, sans-serif' }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            Simples. Estratégico. Lucrativo.
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                className="p-4 sm:p-6 rounded-2xl text-center relative"
                style={{ 
                  backgroundColor: '#F93BA3',
                  boxShadow: '0 10px 40px rgba(249, 59, 163, 0.3)'
                }}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {/* Número do passo */}
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-3 sm:mb-4"
                  style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span 
                    className="text-xl sm:text-2xl font-black"
                    style={{ fontFamily: 'Poppins-ExtraBold, sans-serif', color: '#C00D5C' }}
                  >
                    {idx + 1}
                  </span>
                </motion.div>
                
                <p 
                  className="text-white text-xs sm:text-sm font-medium"
                  style={{ fontFamily: 'Poppins-Bold, sans-serif' }}
                >
                  {step.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-8 sm:mt-10 md:mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <Link to="/contato">
              <motion.button 
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-bold inline-flex items-center gap-2 sm:gap-3 hover:opacity-90 shadow-lg"
                style={{ 
                  backgroundColor: '#F93BA3',
                  fontFamily: 'Poppins-ExtraBold, sans-serif',
                  boxShadow: '0 10px 40px rgba(249, 59, 163, 0.4)'
                }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Quero começar agora!
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 🚀 BLOCO 4 – DIFERENCIAL LÍRIOS */}
      <section className="relative py-20 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-visible">
        {/* Gráfico/escada na direita - COM ANIMAÇÃO */}
        <motion.div 
          className="absolute right-2 bottom-4 lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 w-[80px] sm:w-[100px] lg:w-1/2 sm:lg:w-1/3 sm:lg:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] z-10 pointer-events-none block"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={graficcolor} 
            alt="Crescimento" 
            loading="lazy"
            className="w-full h-auto object-contain drop-shadow-lg lg:drop-shadow-2xl"
          />
        </motion.div>

        <div className="relative max-w-7xl mx-auto z-20">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 px-2"
            style={{ fontFamily: 'Poppins-ExtraBold, sans-serif', color: '#C00D5C' }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            Você não entra sozinho. Entra estruturado!
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto px-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {benefits.map((benefit, idx) => {
              const bgColor = (idx === 0 || idx === 3 || idx === 4) ? '#DB1277' : '#C00D5C';
              return (
                <motion.div 
                  key={idx} 
                  className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 text-white font-semibold shadow-lg"
                  style={{ 
                    backgroundColor: bgColor,
                    fontFamily: 'Poppins-Bold, sans-serif',
                    borderRadius: '16px',
                    boxShadow: '0 4px 15px rgba(219, 18, 119, 0.3)'
                  }}
                  variants={fadeInLeft}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <Check size={18} className="sm:size-5 flex-shrink-0 text-white" />
                  <span className="flex-1 text-sm sm:text-base">{benefit}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 📈 BLOCO 5 – PROVAS REAIS */}
      <section id="provas" className="relative py-12 sm:py-16 md:py-20 px-12 sm:px-16 lg:px-20 xl:px-24 2xl:px-32 z-0" style={{ backgroundColor: '#C00D5C' }}>
        <div className="max-w-4xl xl:max-w-5xl mx-auto relative z-20">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-white"
            style={{ fontFamily: 'Poppins-ExtraBold, sans-serif' }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            Resultados reais de quem decidiu crescer.
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {[
              { id: 'HLOSQT9xG20', title: 'Resultado 1' },
              { id: '1AmvyunL_WI', title: 'Resultado 2' },
              { id: 'Ty_wNoBJOpE', title: 'Resultado 3' },
            ].map((video) => (
              <VideoTestimonialCard 
                key={video.id} 
                videoId={video.id} 
                title={video.title} 
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🎯 BLOCO 6 – PARA QUEM É */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-visible">
        {/* Mascote na esquerda - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute left-0 bottom-[-50px] lg:left-0 lg:bottom-0 w-[60px] sm:w-[80px] lg:w-1/3 sm:lg:w-1/4 lg:max-w-[200px] sm:lg:max-w-[250px] lg:max-w-[300px] z-10 pointer-events-none block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src={camerag} 
            alt="Mascote Lírios" 
            loading="lazy"
            className="w-full h-auto object-contain drop-shadow-md lg:drop-shadow-xl"
          />
        </motion.div>

        <div className="relative max-w-7xl mx-auto text-center z-10 ml-auto">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 px-2"
            style={{ fontFamily: 'Poppins-ExtraBold, sans-serif', color: '#C00D5C' }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            Você pode entrar se:
          </motion.h2>
          
          <motion.div 
            className="space-y-3 sm:space-y-4 md:space-y-5 text-base sm:text-xl font-medium px-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {[
              "Produz conteúdo original",
              "Publica com frequência",
              "Quer transformar seu perfil em renda"
            ].map((item, idx) => (
              <motion.p 
                key={idx} 
                className="flex items-center justify-center gap-3 sm:gap-4"
                style={{ fontFamily: 'Poppins-Bold, sans-serif', color: '#C00D5C' }}
                variants={fadeInUp}
              >
                <Check className="flex-shrink-0" size={20} style={{ color: '#C00D5C' }} /> 
                <span className="text-sm sm:text-base md:text-xl">{item}</span>
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🔥 BLOCO 7 – QUEBRA DE OBJEÇÃO (FAQ) */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-visible z-0" style={{ backgroundColor: '#C00D5C' }}>
        {/* Mascote na direita - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute right-0 bottom-0 w-1/3 sm:w-1/4 max-w-[250px] sm:max-w-[300px] lg:max-w-[350px] z-0 pointer-events-none hidden lg:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src={mascotduvid} 
            alt="Mascote Dúvidas" 
            loading="lazy"
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </motion.div>

        <div className="relative max-w-7xl mx-auto z-10">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-white px-2"
            style={{ fontFamily: 'Poppins-ExtraBold, sans-serif' }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            Perguntas Frequentes
          </motion.h2>
          
          <motion.div 
            className="space-y-4 sm:space-y-6 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {faqs.map((faq, i) => (
              <motion.div 
                key={i} 
                className="rounded-2xl p-4 sm:p-6 transition-all hover:shadow-lg"
                style={{ 
                  backgroundColor: '#F93BA3',
                  boxShadow: '0 4px 15px rgba(249, 59, 163, 0.3)'
                }}
                variants={fadeInUp}
                whileHover={{ y: -3, boxShadow: '0 8px 25px rgba(249, 59, 163, 0.5)' }}
              >
                <h4 
                  className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 flex items-start gap-2 sm:gap-3 text-white"
                  style={{ fontFamily: 'Poppins-ExtraBold, sans-serif' }}
                >
                  <motion.img 
                    src={raios} 
                    alt="Raio" 
                    loading="lazy"
                    className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0 object-contain"
                    animate={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {faq.q}
                </h4>
                <p 
                  className="text-white/90 pl-6 sm:pl-7 text-xs sm:text-sm md:text-base"
                  style={{ fontFamily: 'Poppins-Bold, sans-serif' }}
                >
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ⚡ BLOCO FINAL – CTA AGRESSIVO */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-12 sm:px-16 lg:px-20 xl:px-24 2xl:px-32 text-center overflow-visible" style={{ backgroundColor: '#C00D5C' }}>
        {/* Mascote no canto inferior direito - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute right-0 bottom-[-0px] lg:right-4 lg:bottom-0 w-[70px] sm:w-[90px] lg:w-1/4 lg:max-w-[250px] z-0 pointer-events-none block"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src={mascotduvid} 
            alt="Mascote Dúvidas" 
            loading="lazy"
            className="w-full h-auto object-contain drop-shadow-md lg:drop-shadow-xl"
          />
        </motion.div>

        <div className="relative max-w-4xl xl:max-w-5xl mx-auto z-10">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 text-white leading-tight"
            style={{ fontFamily: 'Poppins-ExtraBold, sans-serif' }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            Está pronto para transformar seus vídeos em{' '}
            <span style={{ color: '#F93BA3' }}>renda real?</span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins-Bold, sans-serif' }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            transition={{ delay: 0.15 }}
          >
            Entre agora para a Agência Lírios e acelere seu crescimento no Kwai.
          </motion.p>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            transition={{ delay: 0.25 }}
          >
            <Link to="/contato">
              <motion.button 
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-white font-bold text-sm sm:text-base md:text-lg inline-flex items-center gap-2 sm:gap-3 hover:opacity-90 shadow-2xl"
                style={{ 
                  backgroundColor: '#F93BA3',
                  fontFamily: 'Poppins-ExtraBold, sans-serif',
                  boxShadow: '0 10px 40px rgba(249, 59, 163, 0.4)'
                }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Quero monetizar agora!
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      <WhatsAppFloat />
    </div>
  );
}