// src/pages/TikTokShop.jsx
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import seta from '../assets/seta.png';
import tiksho from '../assets/tiksho.png';
import tiktokshop from '../assets/tiktokshop.png';
import florDecoracao from '../assets/flor-decoracao.png';
import raio from '../assets/raio.png';
import mascotduvid from '../assets/mascotduvid.png';
import WhatsAppFloat from '../components/layout/WhatsAppFloat';
import VideoTestimonialCard from "../components/layout/VideoTestimonialCard";

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

export default function TikTokShop() {
  const steps = [
    { num: "1️⃣", title: "Comissões Maiores", desc: "Negociamos comissões maiores para você" },
    { num: "2️⃣", title: "Produtos Certos", desc: "Treinamos você a escolher produtos que vendem" },
    { num: "3️⃣", title: "Conteúdo que Converte", desc: "Publicamos conteúdo que gera compra" },
    { num: "4️⃣", title: "Ganhos Reais", desc: "Você ganha comissão e bônus por performance" }
  ];

  const benefits = [
    "Suporte individual via WhatsApp",
    "Ajuda para configurar sua vitrine e produtos",
    "Estratégias de conteúdo que geram vendas",
    "Acesso a campanhas e testes com marcas",
    "Relatórios de desempenho e metas personalizadas",
    "Bônus extras por performance"
  ];

  const faqs = [
    {
      q: "Preciso ter seguidores?",
      a: "Não. Resultados vêm de estratégia e conteúdo certo."
    },
    {
      q: "É seguro?",
      a: "Sim — ganhos vão diretamente para sua conta."
    },
    {
      q: "E se eu nunca vendi antes?",
      a: "Nós te ensinamos passo a passo."
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

        {/* 📱 Imagem TikTok Shop - MOBILE - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 lg:hidden z-10 pointer-events-none"
          animate={{ y: [0, -8, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={tiksho} alt="TikTok Shop Mobile" className="w-full h-auto object-contain drop-shadow-2xl" />
        </motion.div>

        {/* 💻 Imagem TikTok Shop - DESKTOP - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4 lg:w-[22%] xl:w-[20%] max-w-sm lg:max-w-md hidden lg:block pointer-events-none z-10"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={tiksho} alt="TikTok Shop" className="w-full h-auto object-contain drop-shadow-2xl" />
        </motion.div>

        {/* 📦 CONTEÚDO - z-20 */}
        <div className="relative max-w-7xl mx-auto text-center z-20">
          <div className="max-w-4xl mx-auto px-2">
            
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 sm:mb-6 text-white" 
              style={fontExtraBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              <span className="text-white">Ganhe comissões reais no</span>{' '}
              <span style={{ color: '#F93BA3' }}>TikTok Shop</span>
              <br />
              <motion.span 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white/90 mt-2 block" 
                style={fontBold}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Mesmo sem milhões de seguidores
              </motion.span>
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
              A Agência Lírios transforma criadores em parceiros lucrativos no TikTok Shop com suporte estratégico e resultados concretos.
            </motion.p>
            
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
                  <img src={tiktokshop} alt="TikTok Shop" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain" />
                  <span className="text-xs sm:text-sm md:text-base">Quero Vender no TikTok Shop</span>
                </motion.button>
              </Link>
              
              {/* ✅ Path atualizado: /hall-da-fama → /top-10-lirios */}
              <Link to="/top-10-lirios" className="w-full sm:w-auto">
                <motion.button 
                  className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-white font-bold flex items-center justify-center gap-2 sm:gap-3 hover:opacity-90 shadow-lg" 
                  style={{ backgroundColor: '#F93BA3', ...fontExtraBold, boxShadow: '0 10px 40px rgba(249, 59, 163, 0.4)' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img src={seta} alt="Seta" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain" />
                  <span className="text-xs sm:text-sm md:text-base">Ver Provas Reais</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🏆 BLOCO 2 – AUTORIDADE */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-visible">
        
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
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[30%] lg:w-[24%] max-w-[320px] lg:max-w-[400px] z-10 hidden lg:block pointer-events-none"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={florDecoracao} alt="Decoração" className="w-full h-auto object-contain" />
        </motion.div>

        {/* 📦 CONTEÚDO - z-20 */}
        <div className="relative max-w-7xl mx-auto z-20">
          <div className="max-w-4xl mx-auto px-2 text-center">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12" 
              style={{ ...fontExtraBold, color: '#C00D5C' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Onde criadores viram vendedores de sucesso.
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
              {[
                { value: "+120", label: "Criadores ativos" },
                { value: "+10 milhões", label: "de vendas realizadas" },
                { value: "Estratégias Validadas", label: "Que aumentam conversões e comissões", isText: true }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="p-5 sm:p-6 md:p-8 rounded-2xl text-center" 
                  style={{ backgroundColor: '#C00D5C', boxShadow: '0 10px 40px rgba(192, 13, 92, 0.3)' }}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className={`font-black text-white mb-2 ${item.isText ? 'text-lg sm:text-xl md:text-2xl' : 'text-3xl sm:text-4xl md:text-5xl'}`} style={fontExtraBold}>
                    {item.value}
                  </div>
                  <p className="text-white/90 text-[10px] sm:text-sm" style={fontBold}>{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 📈 BLOCO 3 – COMO FUNCIONA */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#C00D5C' }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto px-2 text-center">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-white" 
              style={fontExtraBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Como você começa e cresce:
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
                <h3 className="font-bold text-[10px] sm:text-sm md:text-base mb-1 sm:mb-2 text-white" style={fontExtraBold}>{step.title}</h3>
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
            {/* ✅ Path atualizado: /contato → /entrar-na-agencia */}
            <Link to="/entrar-na-agencia" className="w-full sm:w-auto">
              <motion.button 
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-bold flex items-center justify-center gap-2 sm:gap-3 hover:opacity-90 shadow-lg mx-auto" 
                style={{ backgroundColor: '#F93BA3', ...fontExtraBold, boxShadow: '0 10px 40px rgba(249, 59, 163, 0.4)' }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <img src={tiktokshop} alt="TikTok Shop" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain" />
                <span className="text-xs sm:text-sm md:text-base">Quero Vender agora</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 💡 BLOCO 4 – DIFERENCIAIS EXCLUSIVOS */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto px-2 text-center">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12" 
              style={{ ...fontExtraBold, color: '#C00D5C' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Você não faz isso sozinho.
            </motion.h2>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto px-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {benefits.map((benefit, idx) => {
              const bgColor = (idx % 2 === 0) ? '#DB1277' : '#C00D5C';
              return (
                <motion.div 
                  key={idx} 
                  className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full" 
                  style={{ backgroundColor: bgColor, boxShadow: '0 4px 15px rgba(219, 18, 119, 0.3)' }}
                  variants={fadeInLeft}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <Check size={16} className="sm:size-4 flex-shrink-0 text-white" />
                  <span className="text-white font-medium text-[10px] sm:text-sm" style={fontBold}>{benefit}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 💸 BLOCO 5 – PROVAS REAIS */}
      <section id="provas" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto px-2 text-center">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12" 
              style={{ ...fontExtraBold, color: '#C00D5C' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Aqui, resultado não é promessa. É padrão.
            </motion.h2>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto px-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {[
              { id: 'S7mBLg8qYKU', title: 'Depoimento 1' },
              { id: '_uJseadFUho', title: 'Depoimento 2' },
              { id: 'gXqyu6TUxrE', title: 'Depoimento 3' },
              { id: 'vC0I_rU1UAk', title: 'Depoimento 4' },
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

      {/* 🎯 BLOCO 6 – FAQ E CTA FINAL */}
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
              Dúvidas que criadores sempre têm
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
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 sm:mb-4 text-white leading-tight" 
                style={fontExtraBold}
                variants={fadeInUp}
              >
                Pronto para transformar seu TikTok em{' '}
                <span style={{ color: '#F93BA3' }}>renda real?</span>
              </motion.h2>
              
              <motion.p 
                className="text-sm sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto" 
                style={fontBold}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
              >
                Entre agora para a Agência Lírios e comece a vender de verdade no TikTok Shop.
              </motion.p>
              
              <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
                {/* ✅ Path atualizado: /contato → /entrar-na-agencia */}
                <Link to="/entrar-na-agencia" className="w-full sm:w-auto">
                  <motion.button 
                    className="px-8 sm:px-10 py-4 sm:py-5 rounded-full text-white font-bold text-sm sm:text-lg inline-flex items-center gap-2 sm:gap-3 hover:opacity-90 shadow-2xl" 
                    style={{ backgroundColor: '#F93BA3', ...fontExtraBold, boxShadow: '0 10px 40px rgba(249, 59, 163, 0.4)' }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.img 
                      src={seta} 
                      alt="Seta" 
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <span className="whitespace-nowrap">QUERO GANHAR COM TIKTOK SHOP</span>
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