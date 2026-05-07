// src/pages/HallOfFame.jsx
import { Trophy, Eye, DollarSign, Users, Video, Play, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import trofeu from '../assets/trofeu.png';
import florDecoracao from '../assets/flor-decoracao.png';
import raio from '../assets/raio.png';
import grafic from '../assets/grafic.png';
import doisPesso from '../assets/2pesso.png';
import kwai from '../assets/kwai-icone.png';
import tiktokshop from '../assets/tiktokshop.png';
import mascot3 from '../assets/mascot3.png';
import mascot4 from '../assets/mascot4.png';
import WhatsAppFloat from '../components/layout/WhatsAppFloat';
import rank1Photo from '../assets/kwai-rank-3/1.png';
import rank2Photo from '../assets/kwai-rank-3/2.png';
import rank3Photo from '../assets/kwai-rank-3/3.png';
import tiktokRank1 from '../assets/tiktok-3-rank/1.png';
import tiktokRank2 from '../assets/tiktok-3-rank/2.png';
import tiktokRank3 from '../assets/tiktok-3-rank/3.png';
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

export default function HallOfFame() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ============================================
  // 📅 ATUALIZAR DADOS AQUI TODO MÊS
  // ============================================
  
  const currentMonth = "Março 2026";

  const kwaiStats = {
    views: "+422 Milhões",
    paid: "+R$ 320 Mil",
    creators: "+536",
    videos: "+24.737 mil"
  };

  const top3Kwai = [
    { 
      rank: 2, 
      handle: "@pintamagaofc", 
      views: "15,28M", 
      photo: rank1Photo, 
      profile: "https://kwai.com/@pintamagaofc", 
      featured: true,
      prize: "Bônus de Performance" // ✅ Adicionado: propriedade prize
    },
    { 
      rank: 1, 
      handle: "@NEGODOCOENTRO", 
      views: "16,16M", 
      photo: rank2Photo, 
      profile: "https://kwai.com/@NEGODOCOENTRO",
      prize: "Premiação Ouro + Bônus" // ✅ Adicionado: propriedade prize
    },
    { 
      rank: 3, 
      handle: "@adrielson074l", 
      views: "13,84M", 
      photo: rank3Photo, 
      profile: "https://kwai.com/@adrielson074l",
      prize: "Bônus de Destaque" // ✅ Adicionado: propriedade prize
    }
  ];

const kwaiRanking = [
    { pos: 1, handle: "@NEGODOCOENTRO", views: "16,16M", category: "Comedy & Funny" },
    { pos: 2, handle: "@pintamagaofc", views: "15,28M", category: "Comedy & Funny" },
    { pos: 3, handle: "@adrielson074l", views: "13,84M", category: "Life Records" },
    { pos: 4, handle: "@MANOFLIXX999", views: "10,90M", category: "Life Records" },
    { pos: 5, handle: "@roniel.603.", views: "8,96M", category: "Life Records" },
    { pos: 6, handle: "@Eiiiriba", views: "7,90M", category: "Life Records" },
    { pos: 7, handle: "@kellynhasilva323", views: "7,86M", category: "Life Records" },
    { pos: 8, handle: "@thiagorafaelwaack", views: "7,82M", category: "Life Records" },
    { pos: 9, handle: "@raquelcilhau", views: "6,58M", category: "Life Records" },
    { pos: 10, handle: "@vaquirromotos", views: "6,42M", category: "Life Records" }
];

  const kwaiMetrics = [
    { label: "Média de views por criador", value: "690,7k" },
    { label: "Média de vídeos publicados", value: "43/criador" },
    { label: "Criadores que monetizaram", value: "439" },
    { label: "Taxa média de atividade", value: "75,8%" }
  ];

  const tiktokShopStats = {
    gmv: "R$ 1.4M",
    activeCreators: "131",
    productsSold: "27.857K"
  };

  const tiktokStatsConfig = [
    { label: "GMV total da agência", value: tiktokShopStats.gmv },
    { label: "Criadores ativos", value: tiktokShopStats.activeCreators },
    { label: "Produtos vendidos", value: tiktokShopStats.productsSold }
  ];

  const topTikTokShop = [
    { 
      handle: "@xandy3601", 
      gmv: "R$ 121.382,52", 
      product: "1998", 
      photo: tiktokRank1, 
      profile: "https://www.tiktok.com/@xandy3601" 
    },
    { 
      handle: "@resenharecomenda", 
      gmv: "R$ 120.975,14", 
      product: "4265", 
      photo: tiktokRank2, 
      profile: "https://www.tiktok.com/@resenharecomenda" 
    },
    { 
      handle: "@shopdoalmeida", 
      gmv: "R$ 112.520,38", 
      product: "1028", 
      photo: tiktokRank3, 
      profile: "https://www.tiktok.com/@shopdoalmeida" 
    },
  ];

  const tiktokShopMetrics = [
    { label: "Número total de pedidos", value: "27857" },
    { label: "Taxa de vendas", value: "75%" },
    { label: "Criadores que venderam", value: "91" },
    { label: "Média de GMV por criador", value: "R$ 19.437K" }
  ];

const tiktokShopRanking = [
    { pos: 1, handle: "@xandy3601", gmv: "R$ 121.382,52", itemsSold: 1998 },
    { pos: 2, handle: "@resenharecomenda", gmv: "R$ 120.975,14", itemsSold: 4265 },
    { pos: 3, handle: "@shopdoalmeida", gmv: "R$ 112.520,38", itemsSold: 1028 },
    { pos: 4, handle: "@araraazul60", gmv: "R$ 100.046,16", itemsSold: 883 },
    { pos: 5, handle: "@acaciamarquess", gmv: "R$ 97.912,81", itemsSold: 2798 },
    { pos: 6, handle: "@cortes.da.constru", gmv: "R$ 89.760,88", itemsSold: 358 },
    { pos: 7, handle: "@realidadedaama", gmv: "R$ 78.168,97", itemsSold: 2636 },
    { pos: 8, handle: "@alicinhaebianca", gmv: "R$ 53.738,33", itemsSold: 1181 },
    { pos: 9, handle: "@jesca.limma", gmv: "R$ 46.923,43", itemsSold: 1438 },
    { pos: 10, handle: "@valeriiasza", gmv: "R$ 44.890,92", itemsSold: 581 }
];

  // Fonts reutilizáveis
  const fontExtraBold = { fontFamily: 'Poppins-ExtraBold, sans-serif' };
  const fontBold = { fontFamily: 'Poppins-Bold, sans-serif' };
  const fontLightItalic = { fontFamily: 'Poppins-LightItalic, sans-serif' };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % topTikTokShop.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + topTikTokShop.length) % topTikTokShop.length);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      
      {/* 🔥 1️⃣ HERO */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-visible" style={{ backgroundColor: '#C00D5C' }}>
        
        {/* 📱 Troféu - MOBILE - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 lg:hidden z-10 pointer-events-none"
          animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={trofeu} alt="Troféu Mobile" className="w-full h-auto object-contain drop-shadow-2xl" />
        </motion.div>

        {/* 💻 Troféu - DESKTOP - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4 lg:w-[22%] xl:w-[20%] max-w-sm lg:max-w-md hidden lg:block pointer-events-none z-10"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={trofeu} alt="Troféu" className="w-full h-auto object-contain drop-shadow-2xl" />
        </motion.div>

        {/* 📦 CONTEÚDO - z-20 */}
        <div className="relative max-w-7xl mx-auto text-center z-20">
          <div className="max-w-4xl mx-auto px-2">
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4 sm:mb-6 text-white" 
              style={fontExtraBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Hall da Fama da{' '}
              <span style={{ color: '#F93BA3' }}>Agência Lírios</span>
            </motion.h1>
            
            <motion.p 
              className="text-sm sm:text-base md:text-xl text-white/90 max-w-2xl mx-auto mb-3 sm:mb-4" 
              style={fontBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              Resultados reais dos criadores da nossa rede todos os meses.
            </motion.p>
            
            <motion.p 
              className="text-white/70 max-w-xl mx-auto text-xs sm:text-sm" 
              style={fontLightItalic}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Transparência, reconhecimento e crescimento coletivo.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 📊 RESULTADOS GERAIS + TOP 3 */}
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
          className="absolute left-0 bottom-0 w-1/4 max-w-md z-10 hidden lg:block pointer-events-none"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={florDecoracao} alt="Decoração" className="w-full h-auto object-contain" />
        </motion.div>

        {/* 📦 CONTEÚDO - z-20 */}
        <div className="relative max-w-7xl mx-auto z-20">
          {/* Título */}
          <motion.div 
            className="text-center mb-8 sm:mb-12 px-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold" style={{ ...fontExtraBold, color: '#C00D5C' }}>
              Resultados da Agência Lírios no Kwai – <span style={{ color: '#DB1277' }}>{currentMonth}</span>
            </h2>
          </motion.div>
          
          {/* Stats - 4 blocos - STAGGER */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 max-w-5xl mx-auto px-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {[
              { icon: Eye, value: kwaiStats.views, label: "Visualizações totais" },
              { icon: DollarSign, value: kwaiStats.paid, label: "Pago aos criadores" },
              { icon: Users, value: kwaiStats.creators, label: "Criadores ativos" },
              { icon: Video, value: kwaiStats.videos, label: "Vídeos publicados" }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={idx} 
                  className="p-4 sm:p-6 rounded-2xl text-center" 
                  style={{ backgroundColor: '#DB1277', boxShadow: '0 10px 40px rgba(219, 18, 119, 0.3)' }}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Icon size={32} className="sm:size-10 mx-auto mb-2 sm:mb-3 text-white" />
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1" style={fontExtraBold}>{stat.value}</div>
                  <p className="text-white/90 text-[10px] sm:text-sm" style={fontBold}>{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Top 3 */}
          <motion.h3 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 sm:mb-12 px-2" 
            style={{ ...fontExtraBold, color: '#C00D5C' }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            Top 3 Kwai Criadores do Mês
          </motion.h3>
          
          <motion.div 
            className="flex flex-col md:flex-row items-end justify-center gap-3 sm:gap-4 md:gap-8 max-w-4xl mx-auto px-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {/* Top 2 */}
            <motion.div 
              className="order-2 md:order-1 w-full md:w-auto"
              variants={fadeInUp}
            >
              <motion.div 
                className="p-4 sm:p-6 rounded-2xl text-center" 
                style={{ backgroundColor: '#F93BA3', boxShadow: '0 10px 40px rgba(249, 59, 163, 0.3)' }}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="text-4xl sm:text-5xl font-black text-white mb-2">🥈</div>
                <motion.img 
                  src={top3Kwai[0].photo} 
                  alt={top3Kwai[0].handle} 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-2 sm:mb-3 border-4 border-white"
                  whileHover={{ scale: 1.1 }}
                />
                <p className="font-bold text-sm sm:text-lg text-white mb-1" style={fontExtraBold}>{top3Kwai[0].handle}</p>
                <p className="text-white/90 text-[10px] sm:text-sm">{top3Kwai[0].views} views</p>
                <p className="text-white font-semibold mt-2 text-xs sm:text-sm" style={fontBold}>{top3Kwai[0].prize}</p>
                <a href={top3Kwai[0].profile} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 sm:mt-3 text-white text-[10px] sm:text-sm hover:text-white/70 transition-colors" style={fontBold}>Ver perfil →</a>
              </motion.div>
            </motion.div>
            
            {/* Top 1 - Destaque */}
            <motion.div 
              className="order-1 md:order-2 w-full md:w-auto"
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <motion.div 
                className="p-6 sm:p-8 rounded-2xl text-center relative" 
                style={{ backgroundColor: '#F93BA3', boxShadow: '0 15px 50px rgba(249, 59, 163, 0.5)' }}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div 
                  className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2"
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Award size={24} className="sm:size-32 text-white" />
                </motion.div>
                <div className="text-5xl sm:text-6xl font-black text-white mb-2 mt-3 sm:mt-4">🥇</div>
                <motion.img 
                  src={top3Kwai[1].photo} 
                  alt={top3Kwai[1].handle} 
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-2 sm:mb-3 border-4 border-white"
                  whileHover={{ scale: 1.1 }}
                />
                <p className="font-bold text-base sm:text-xl text-white mb-1" style={fontExtraBold}>{top3Kwai[1].handle}</p>
                <p className="text-white/90 text-xs sm:text-sm">{top3Kwai[1].views} views</p>
                <p className="text-white font-bold text-sm sm:text-lg mt-2" style={fontExtraBold}>{top3Kwai[1].prize}</p>
                <a href={top3Kwai[1].profile} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 sm:mt-4 px-3 sm:px-4 py-2 bg-white/20 rounded-full text-white text-[10px] sm:text-sm font-semibold hover:bg-white/30 transition-colors" style={fontBold}>Ver perfil →</a>
              </motion.div>
            </motion.div>
            
            {/* Top 3 */}
            <motion.div 
              className="order-3 w-full md:w-auto"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className="p-4 sm:p-6 rounded-2xl text-center" 
                style={{ backgroundColor: '#F93BA3', boxShadow: '0 10px 40px rgba(249, 59, 163, 0.3)' }}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="text-4xl sm:text-5xl font-black text-white mb-2">🥉</div>
                <motion.img 
                  src={top3Kwai[2].photo} 
                  alt={top3Kwai[2].handle} 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-2 sm:mb-3 border-4 border-white"
                  whileHover={{ scale: 1.1 }}
                />
                <p className="font-bold text-sm sm:text-lg text-white mb-1" style={fontExtraBold}>{top3Kwai[2].handle}</p>
                <p className="text-white/90 text-[10px] sm:text-sm">{top3Kwai[2].views} views</p>
                <p className="text-white font-semibold mt-2 text-xs sm:text-sm" style={fontBold}>{top3Kwai[2].prize}</p>
                <a href={top3Kwai[2].profile} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 sm:mt-3 text-white text-[10px] sm:text-sm hover:text-white/70 transition-colors" style={fontBold}>Ver perfil →</a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 🎬 4️⃣ VÍDEO DO CRIADOR (PROVA SOCIAL) */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#C00D5C' }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto px-2">
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-white" 
              style={fontExtraBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Criadores que se destacaram
            </motion.h2>
            
            {/* Vídeo em destaque - formato VERTICAL 9/16 */}
            <div className="max-w-md mx-auto">
              <VideoTestimonialCard 
                videoId="lb6vOY1dNBQ"
                title=""
                aspectRatio="9/16"
                showTitle={true}
                fontBold={fontBold}
                showHoverScale={true}
                controls={0}
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* 📋 5️⃣ RANKING GERAL KWAI */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#C00D5C' }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto px-2">
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-white" 
              style={fontExtraBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Ranking Geral Kwai – Top 10
            </motion.h2>
            
            <motion.div 
              className="rounded-2xl p-4 sm:p-6 md:p-8" 
              style={{ backgroundColor: '#F93BA3', boxShadow: '0 10px 40px rgba(249, 59, 163, 0.4)' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              <div className="space-y-2 sm:space-y-3">
                {kwaiRanking.map((creator, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.25)' }}
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl w-10 sm:w-12 text-center">
                      {idx === 0 && '🥇'}{idx === 1 && '🥈'}{idx === 2 && '🥉'}
                      {idx > 2 && <span className="text-white font-bold" style={fontExtraBold}>#{idx + 1}</span>}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold text-[10px] sm:text-sm md:text-base truncate" style={fontBold}>{creator.handle}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold text-[10px] sm:text-sm md:text-base" style={fontBold}>{creator.views}</p>
                      <p className="text-white/70 text-[8px] sm:text-xs hidden md:block" style={fontBold}>{creator.category}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 📈 6️⃣ ESTATÍSTICAS GERAIS KWAI */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-visible bg-white">
        
        {/* 📱 Flor Decorativa - MOBILE - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 lg:hidden z-10 pointer-events-none"
          animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={florDecoracao} alt="Decoração Mobile" className="w-full h-auto object-contain" />
        </motion.div>

        {/* 💻 Flor Decorativa - DESKTOP - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[26%] sm:w-[22%] lg:w-[20%] max-w-[260px] lg:max-w-[420px] z-10 hidden lg:block pointer-events-none"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={florDecoracao} alt="Decoração" className="w-full h-auto object-contain" />
        </motion.div>

        {/* 📦 CONTEÚDO - z-20 */}
        <div className="relative max-w-7xl mx-auto z-20">
          <motion.div 
            className="max-w-4xl mx-auto px-2 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-10" style={{ ...fontExtraBold, color: '#C00D5C' }}>
              Métricas Kwai do Mês
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto px-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {kwaiMetrics.map((metric, idx) => (
              <motion.div 
                key={idx} 
                className="p-4 sm:p-5 rounded-xl text-center" 
                style={{ backgroundColor: '#DB1277', boxShadow: '0 10px 40px rgba(219, 18, 119, 0.3)' }}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-1" style={fontExtraBold}>{metric.value}</div>
                <p className="text-white/90 text-[10px] sm:text-sm" style={fontBold}>{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🛍️ 7️⃣ RESULTADOS TIKTOK SHOP */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#C00D5C' }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto px-2 text-center">
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-white" 
              style={fontExtraBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Resultados TikTok Shop – <span style={{ color: '#F93BA3' }}>{currentMonth}</span>
            </motion.h2>
          </div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto px-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {tiktokStatsConfig.map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="p-4 sm:p-6 rounded-2xl text-center" 
                style={{ backgroundColor: '#F93BA3', boxShadow: '0 10px 40px rgba(249, 59, 163, 0.3)' }}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2" style={fontExtraBold}>
                  {stat.value}
                </div>
                <p className="text-white/90 text-[10px] sm:text-sm" style={fontBold}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🎠 8️⃣ TOP 10 TIKTOK SHOP (CAROUSEL) */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto px-2 text-center">
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12" 
              style={{ ...fontExtraBold, color: '#C00D5C' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Top Criadores TikTok Shop
            </motion.h2>
          </div>
          
          <div className="relative px-2 sm:px-4">
            {/* Botões de navegação */}
            <motion.button 
              onClick={prevSlide} 
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full transition-all hidden sm:block" 
              style={{ backgroundColor: '#C00D5C' }}
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Anterior"
            >
              <ChevronLeft size={20} className="sm:size-24 text-white" />
            </motion.button>
            <motion.button 
              onClick={nextSlide} 
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full transition-all hidden sm:block" 
              style={{ backgroundColor: '#C00D5C' }}
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Próximo"
            >
              <ChevronRight size={20} className="sm:size-24 text-white" />
            </motion.button>
            
            {/* Cards do carousel - COM ANIMAÇÃO DE SLIDE */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentSlide}
                  className="w-full"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="px-2 sm:px-4">
                    <motion.div 
                      className="rounded-2xl p-4 sm:p-6 text-center" 
                      style={{ backgroundColor: '#F93BA3', boxShadow: '0 10px 40px rgba(249, 59, 163, 0.3)' }}
                      initial={{ scale: 0.98, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                    >
                      <motion.img 
                        src={topTikTokShop[currentSlide].photo} 
                        alt={topTikTokShop[currentSlide].handle} 
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4 border-4 border-white"
                        whileHover={{ scale: 1.1 }}
                      />
                      <p className="font-bold text-sm sm:text-lg text-white mb-1 sm:mb-2" style={fontExtraBold}>{topTikTokShop[currentSlide].handle}</p>
                      <p className="text-white font-bold text-lg sm:text-xl mb-1" style={fontBold}>{topTikTokShop[currentSlide].gmv}</p>
                      <p className="text-white/90 text-[10px] sm:text-sm" style={fontBold}>Itens vendidos: {topTikTokShop[currentSlide].product}</p>
                      <a href={topTikTokShop[currentSlide].profile} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 sm:mt-4 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white text-[10px] sm:text-sm font-semibold hover:opacity-90 transition-all" style={{ backgroundColor: '#C00D5C', ...fontBold }}>Ver perfil →</a>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Indicadores de slide */}
            <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
              {topTikTokShop.map((_, idx) => (
                <motion.button 
                  key={idx} 
                  onClick={() => setCurrentSlide(idx)} 
                  className="rounded-full transition-all" 
                  style={{ height: '8px', backgroundColor: '#C00D5C' }}
                  animate={{ 
                    width: idx === currentSlide ? '20px' : '8px',
                    backgroundColor: idx === currentSlide ? '#F93BA3' : '#C00D5C'
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Ir para slide ${idx + 1}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🏆 RANKING GERAL TIKTOK SHOP - TOP 10 */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto px-2">
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12" 
              style={{ ...fontExtraBold, color: '#C00D5C' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Ranking Geral TikTok Shop – Top 10
            </motion.h2>
            
            <motion.div 
              className="rounded-2xl p-4 sm:p-6 md:p-8" 
              style={{ backgroundColor: '#F93BA3', boxShadow: '0 10px 40px rgba(249, 59, 163, 0.4)' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              <div className="space-y-2 sm:space-y-3">
                {tiktokShopRanking.map((creator, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.25)' }}
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl w-10 sm:w-12 text-center">
                      {idx === 0 && '🥇'}{idx === 1 && '🥈'}{idx === 2 && '🥉'}
                      {idx > 2 && <span className="text-white font-bold" style={fontExtraBold}>#{idx + 1}</span>}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold text-[10px] sm:text-sm md:text-base truncate" style={fontBold}>
                        {creator.handle}
                      </p>
                    </div>
                    <div className="text-right min-w-[80px] sm:min-w-[100px]">
                      <p className="text-white font-bold text-[10px] sm:text-sm md:text-base leading-tight" style={fontBold}>
                        {creator.gmv}
                      </p>
                      <p className="text-white/70 text-[8px] sm:text-xs leading-tight" style={fontBold}>
                        {creator.itemsSold?.toLocaleString('pt-BR')} itens vendidos
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 📊 9️⃣ MÉTRICAS ESTRATÉGICAS TIKTOK SHOP */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto px-2 text-center">
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-10" 
              style={{ ...fontExtraBold, color: '#C00D5C' }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Métricas TikTok Shop do Mês
            </motion.h2>
          </div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto px-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {tiktokShopMetrics.map((metric, idx) => (
              <motion.div 
                key={idx} 
                className="rounded-xl p-4 sm:p-5 text-center" 
                style={{ backgroundColor: '#DB1277', boxShadow: '0 4px 15px rgba(219, 18, 119, 0.3)' }}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-1" style={fontExtraBold}>{metric.value}</div>
                <p className="text-white/90 text-[10px] sm:text-sm" style={fontBold}>{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🏅 10️⃣ CREDIBILIDADE E CTA FINAL */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-visible" style={{ backgroundColor: '#C00D5C' }}>
        
        {/* 📱 Mascotes - MOBILE - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-28 sm:h-28 lg:hidden z-10 pointer-events-none"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={mascot3} alt="Mascote Lírios Mobile" className="w-full h-auto object-contain drop-shadow-2xl" />
        </motion.div>
        <motion.div 
          className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 lg:hidden z-10 pointer-events-none"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={mascot4} alt="Mascote Lírios Mobile" className="w-full h-auto object-contain drop-shadow-2xl" />
        </motion.div>

        {/* 💻 Mascotes - DESKTOP - COM FLUTUAÇÃO */}
        <motion.div 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/6 max-w-xs z-10 hidden lg:block pointer-events-none"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={mascot3} alt="Mascote Lírios" className="w-full h-auto object-contain drop-shadow-2xl" />
        </motion.div>
        <motion.div 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/6 max-w-xs z-10 hidden lg:block pointer-events-none"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={mascot4} alt="Mascote Lírios" className="w-full h-auto object-contain drop-shadow-2xl" />
        </motion.div>

        {/* 📦 CONTEÚDO - z-20 */}
        <div className="relative max-w-7xl mx-auto text-center z-20">
          <div className="max-w-4xl mx-auto px-2">
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-white" 
              style={fontExtraBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              Crescimento coletivo
            </motion.h2>
            
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8" 
              style={fontBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              Na Agência Lírios acreditamos em transparência e reconhecimento.
              Todos os meses destacamos criadores que se dedicaram e geraram resultados.
            </motion.p>

            {/* Badges - STAGGER */}
            <motion.div 
              className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {[
                { icon: raio, text: "Metas claras" },
                { icon: grafic, text: "Resultados reais" },
                { icon: doisPesso, text: "Comunidade unida" }
              ].map((badge, idx) => (
                <motion.div 
                  key={idx} 
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 rounded-full" 
                  style={{ backgroundColor: '#F93BA3', boxShadow: '0 4px 15px rgba(249, 59, 163, 0.3)' }}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <motion.img 
                    src={badge.icon} 
                    alt="" 
                    className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
                    animate={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="text-[10px] sm:text-sm font-bold text-white" style={fontBold}>{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Título principal */}
            <motion.h3 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-3 sm:mb-4 text-white leading-tight" 
              style={fontExtraBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Ganhe comissões reais no{' '}
              <span style={{ color: '#F93BA3' }}>TikTok Shop</span>
            </motion.h3>
            
            <motion.p 
              className="text-sm sm:text-base md:text-xl text-white/90 mb-6 sm:mb-10 max-w-2xl mx-auto" 
              style={fontBold}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              Entre para a Agência Lírios e comece a gerar resultados reais.
            </motion.p>
            
            {/* Botões */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              {/* ✅ Path atualizado: /kwai → /ganhar-dinheiro-no-kwai */}
              <Link to="/ganhar-dinheiro-no-kwai" className="w-full sm:w-auto">
                <motion.button 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-bold flex items-center justify-center gap-2 sm:gap-3 hover:opacity-90 shadow-lg" 
                  style={{ backgroundColor: '#F93BA3', ...fontExtraBold, boxShadow: '0 10px 40px rgba(249, 59, 163, 0.4)' }}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img src={kwai} alt="Kwai" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain" />
                  <span className="text-xs sm:text-sm md:text-base">Entrar no Kwai</span>
                </motion.button>
              </Link>
              
              {/* ✅ Path atualizado: /tiktok-shop → /como-vender-no-tiktok-shop */}
              <Link to="/como-vender-no-tiktok-shop" className="w-full sm:w-auto">
                <motion.button 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-bold flex items-center justify-center gap-2 sm:gap-3 hover:opacity-90 shadow-lg" 
                  style={{ backgroundColor: '#F93BA3', ...fontExtraBold, boxShadow: '0 10px 40px rgba(249, 59, 163, 0.4)' }}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img src={tiktokshop} alt="TikTok Shop" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain" />
                  <span className="text-xs sm:text-sm md:text-base">Entrar no TikTok Shop</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  );
}