//src/pages/HallOfFame.jsx

import { Trophy, Eye, DollarSign, Users, Video, Play, TrendingUp, ShoppingCart, Star, MessageCircle, ChevronLeft, ChevronRight, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useState } from 'react';

export default function HallOfFame() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dados do mês atual (substituir por API/DB)
  const currentMonth = "Março 2026";
  
  // Métricas gerais Kwai
  const kwaiStats = {
    views: "45.2 Mi",
    paid: "US$ 12.4K",
    creators: "287",
    videos: "3.2K"
  };

  // Top 3 Kwai Criadores
  const top3Kwai = [
    { rank: 2, handle: "@mariaedits", views: "9.4M", prize: "R$ 400", photo: "https://i.pravatar.cc/150?img=5", profile: "https://kwai.com/@mariaedits" },
    { rank: 1, handle: "@joaoviral", views: "12.3M", prize: "R$ 700", photo: "https://i.pravatar.cc/150?img=12", profile: "https://kwai.com/@joaoviral", featured: true },
    { rank: 3, handle: "@anacortes", views: "7.8M", prize: "R$ 200", photo: "https://i.pravatar.cc/150?img=9", profile: "https://kwai.com/@anacortes" }
  ];

  // Ranking geral Kwai (Top 10)
  const kwaiRanking = [
    { pos: 1, handle: "@joaoviral", views: "12.3M", category: "Entretenimento" },
    { pos: 2, handle: "@mariaedits", views: "9.4M", category: "Cortes" },
    { pos: 3, handle: "@anacortes", views: "7.8M", category: "Humor" },
    { pos: 4, handle: "@pedroclips", views: "6.1M", category: "Games" },
    { pos: 5, handle: "@luizafashion", views: "5.3M", category: "Lifestyle" },
    { pos: 6, handle: "@rafaeldance", views: "4.9M", category: "Dança" },
    { pos: 7, handle: "@carolreceitas", views: "4.2M", category: "Culinária" },
    { pos: 8, handle: "@brunofit", views: "3.8M", category: "Fitness" },
    { pos: 9, handle: "@juliatrends", views: "3.5M", category: "Moda" },
    { pos: 10, handle: "@thiagotech", views: "3.1M", category: "Tech" }
  ];

  // Estatísticas gerais Kwai
  const kwaiMetrics = [
    { label: "Média de views por criador", value: "157K" },
    { label: "Média de vídeos publicados", value: "11/criador" },
    { label: "Criadores que monetizaram", value: "94%" },
    { label: "Taxa média de atividade", value: "87%" }
  ];

  // Métricas TikTok Shop
  const tiktokShopStats = {
    gmv: "R$ 342K",
    activeCreators: "45",
    productsSold: "1.8K"
  };

  // Top 10 TikTok Shop (carousel)
  const topTikTokShop = [
    { handle: "@lojadacarla", gmv: "R$ 85K", product: "Kit Skincare", photo: "https://i.pravatar.cc/150?img=23", profile: "https://tiktok.com/@lojadacarla" },
    { handle: "@techdealsoficial", gmv: "R$ 62K", product: "Fone Bluetooth", photo: "https://i.pravatar.cc/150?img=33", profile: "https://tiktok.com/@techdealsoficial" },
    { handle: "@modapronta", gmv: "R$ 51K", product: "Vestido Trending", photo: "https://i.pravatar.cc/150?img=27", profile: "https://tiktok.com/@modapronta" },
    { handle: "@casadecozinha", gmv: "R$ 44K", product: "Panela Elétrica", photo: "https://i.pravatar.cc/150?img=31", profile: "https://tiktok.com/@casadecozinha" },
    { handle: "@belezaexpress", gmv: "R$ 38K", product: "Paleta de Sombras", photo: "https://i.pravatar.cc/150?img=29", profile: "https://tiktok.com/@belezaexpress" }
  ];

  // Métricas estratégicas TikTok Shop
  const tiktokShopMetrics = [
    { label: "GMV total do mês", value: "R$ 342K" },
    { label: "Número total de pedidos", value: "1.8K" },
    { label: "Criadores que venderam", value: "42" },
    { label: "Média de GMV por criador", value: "R$ 8.1K" }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % topTikTokShop.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + topTikTokShop.length) % topTikTokShop.length);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      
      {/* 🔥 1️⃣ HERO */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-900/40 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-600/20 via-purple-700/20 to-transparent" />
        
        <div className="relative max-w-4xl mx-auto space-y-6 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 rounded-full border border-yellow-500/30 mb-4">
            <Trophy size={18} className="text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-200">Hall da Fama</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
            Hall da Fama da{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Agência Lírios
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Resultados reais dos criadores da nossa rede todos os meses.
          </p>
          
          <p className="text-gray-400 max-w-xl mx-auto">
            Transparência, reconhecimento e crescimento coletivo.
          </p>
        </div>
      </section>

      {/* 📊 2️⃣ RESULTADOS GERAIS KWAI */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              Resultados da Agência Lírios no Kwai – <span className="text-purple-400">{currentMonth}</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-colors">
              <Eye size={40} className="mx-auto mb-3 text-purple-400" />
              <div className="text-3xl md:text-4xl font-black text-white">{kwaiStats.views}</div>
              <p className="text-gray-400 text-sm mt-1">Visualizações totais</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-pink-500/30 transition-colors">
              <DollarSign size={40} className="mx-auto mb-3 text-green-400" />
              <div className="text-3xl md:text-4xl font-black text-white">{kwaiStats.paid}</div>
              <p className="text-gray-400 text-sm mt-1">Pago aos criadores</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-colors">
              <Users size={40} className="mx-auto mb-3 text-blue-400" />
              <div className="text-3xl md:text-4xl font-black text-white">{kwaiStats.creators}</div>
              <p className="text-gray-400 text-sm mt-1">Criadores ativos</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-colors">
              <Video size={40} className="mx-auto mb-3 text-cyan-400" />
              <div className="text-3xl md:text-4xl font-black text-white">{kwaiStats.videos}</div>
              <p className="text-gray-400 text-sm mt-1">Vídeos publicados</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🏆 3️⃣ TOP 3 KWAI CRIADORES (PODIUM) */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
            Top 3 Kwai Criadores do Mês
          </h2>
          
          <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-8">
            {/* Top 2 */}
            <div className="order-2 md:order-1 w-full md:w-auto">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all">
                <div className="text-5xl font-black text-gray-400 mb-2">🥈</div>
                <img src={top3Kwai[0].photo} alt={top3Kwai[0].handle} className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-purple-500/50" />
                <p className="font-bold text-lg text-white">{top3Kwai[0].handle}</p>
                <p className="text-gray-400 text-sm">{top3Kwai[0].views} views</p>
                <p className="text-green-400 font-semibold mt-2">{top3Kwai[0].prize}</p>
                <a href={top3Kwai[0].profile} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-purple-400 text-sm hover:text-purple-300 transition-colors">
                  Ver perfil →
                </a>
              </div>
            </div>
            
            {/* Top 1 - Destaque */}
            <div className="order-1 md:order-2 w-full md:w-auto">
              <div className="bg-gradient-to-b from-yellow-500/20 to-purple-900/40 border-2 border-yellow-500/50 rounded-2xl p-8 text-center relative hover:shadow-xl hover:shadow-yellow-500/10 transition-all">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Award size={32} className="text-yellow-400" />
                </div>
                <div className="text-6xl font-black text-yellow-400 mb-2 mt-4">🥇</div>
                <img src={top3Kwai[1].photo} alt={top3Kwai[1].handle} className="w-24 h-24 rounded-full mx-auto mb-3 border-4 border-yellow-500" />
                <p className="font-bold text-xl text-white">{top3Kwai[1].handle}</p>
                <p className="text-gray-300">{top3Kwai[1].views} views</p>
                <p className="text-green-400 font-bold text-lg mt-2">{top3Kwai[1].prize}</p>
                <a href={top3Kwai[1].profile} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-4 py-2 bg-yellow-500/20 rounded-full text-yellow-300 text-sm font-semibold hover:bg-yellow-500/30 transition-colors">
                  Ver perfil →
                </a>
              </div>
            </div>
            
            {/* Top 3 */}
            <div className="order-3 w-full md:w-auto">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all">
                <div className="text-5xl font-black text-orange-400 mb-2">🥉</div>
                <img src={top3Kwai[2].photo} alt={top3Kwai[2].handle} className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-orange-500/50" />
                <p className="font-bold text-lg text-white">{top3Kwai[2].handle}</p>
                <p className="text-gray-400 text-sm">{top3Kwai[2].views} views</p>
                <p className="text-green-400 font-semibold mt-2">{top3Kwai[2].prize}</p>
                <a href={top3Kwai[2].profile} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-purple-400 text-sm hover:text-purple-300 transition-colors">
                  Ver perfil →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎬 4️⃣ VÍDEO DO CRIADOR (PROVA SOCIAL) */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Criadores que se destacaram
          </h2>
          
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-white/10 flex flex-col items-center justify-center p-8 hover:border-purple-500/30 transition-colors group cursor-pointer">
            <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Play size={32} className="text-purple-400 ml-1" />
            </div>
            <p className="text-gray-300 font-medium">Vídeo de agradecimento do @joaoviral</p>
            <p className="text-gray-500 text-sm mt-2">Clique para assistir</p>
          </div>
          
          <p className="text-gray-400 text-sm mt-4">
            * Vídeos reais de criadores autorizados serão exibidos aqui
          </p>
        </div>
      </section>

      {/* 📋 5️⃣ RANKING GERAL KWAI */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Ranking Geral Kwai – Top 10
          </h2>
          
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            {/* Header da tabela */}
            <div className="grid grid-cols-12 gap-4 p-4 bg-white/5 border-b border-white/10 text-sm font-semibold text-gray-400">
              <div className="col-span-1 text-center">#</div>
              <div className="col-span-5">Perfil</div>
              <div className="col-span-3 text-center">Views</div>
              <div className="col-span-3 text-center">Categoria</div>
            </div>
            
            {/* Linhas do ranking */}
            {kwaiRanking.map((creator, idx) => (
              <div 
                key={idx}
                className={`grid grid-cols-12 gap-4 p-4 items-center border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors ${idx < 3 ? 'bg-purple-500/5' : ''}`}
              >
                <div className="col-span-1 text-center font-bold">
                  {idx === 0 && <span className="text-yellow-400">🥇</span>}
                  {idx === 1 && <span className="text-gray-300">🥈</span>}
                  {idx === 2 && <span className="text-orange-400">🥉</span>}
                  {idx > 2 && <span className="text-gray-500">#{creator.pos}</span>}
                </div>
                <div className="col-span-5 font-medium text-white">{creator.handle}</div>
                <div className="col-span-3 text-center text-purple-400 font-semibold">{creator.views}</div>
                <div className="col-span-3 text-center">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">{creator.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📈 6️⃣ ESTATÍSTICAS GERAIS KWAI */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">
            Métricas Kwai do Mês
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {kwaiMetrics.map((metric, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:border-purple-500/30 transition-colors">
                <div className="text-2xl md:text-3xl font-black text-purple-400">{metric.value}</div>
                <p className="text-gray-400 text-sm mt-1">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🛍️ 7️⃣ RESULTADOS TIKTOK SHOP */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 rounded-full border border-pink-500/30 mb-4">
              <ShoppingCart size={18} className="text-pink-400" />
              <span className="text-sm font-semibold text-pink-200">TikTok Shop</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              Resultados TikTok Shop – <span className="text-pink-400">{currentMonth}</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl p-6 text-center">
              <DollarSign size={40} className="mx-auto mb-3 text-green-400" />
              <div className="text-3xl md:text-4xl font-black text-white">{tiktokShopStats.gmv}</div>
              <p className="text-gray-400 text-sm mt-1">GMV total da agência</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl p-6 text-center">
              <Users size={40} className="mx-auto mb-3 text-blue-400" />
              <div className="text-3xl md:text-4xl font-black text-white">{tiktokShopStats.activeCreators}</div>
              <p className="text-gray-400 text-sm mt-1">Criadores ativos</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl p-6 text-center">
              <ShoppingCart size={40} className="mx-auto mb-3 text-purple-400" />
              <div className="text-3xl md:text-4xl font-black text-white">{tiktokShopStats.productsSold}</div>
              <p className="text-gray-400 text-sm mt-1">Produtos vendidos</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🎠 8️⃣ TOP 10 TIKTOK SHOP (CAROUSEL) */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Top Criadores TikTok Shop
          </h2>
          
          <div className="relative">
            {/* Botões de navegação */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
            
            {/* Cards do carousel */}
            <div className="overflow-hidden px-12">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {topTikTokShop.map((creator, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-pink-500/30 transition-all group">
                      <img src={creator.photo} alt={creator.handle} className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-pink-500/50" />
                      <p className="font-bold text-lg text-white group-hover:text-pink-400 transition-colors">{creator.handle}</p>
                      <p className="text-green-400 font-bold text-xl mt-2">{creator.gmv}</p>
                      <p className="text-gray-400 text-sm mt-1">Produto: {creator.product}</p>
                      <a href={creator.profile} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-4 py-2 bg-pink-500/20 rounded-full text-pink-300 text-sm font-semibold hover:bg-pink-500/30 transition-colors">
                        Ver perfil →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Indicadores de slide */}
            <div className="flex justify-center gap-2 mt-6">
              {topTikTokShop.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-pink-400 w-6' : 'bg-gray-600 hover:bg-gray-500'}`}
                  aria-label={`Ir para slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 📊 9️⃣ MÉTRICAS ESTRATÉGICAS TIKTOK SHOP */}
      <section className="py-16 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">
            Métricas TikTok Shop do Mês
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tiktokShopMetrics.map((metric, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:border-pink-500/30 transition-colors">
                <div className="text-2xl md:text-3xl font-black text-pink-400">{metric.value}</div>
                <p className="text-gray-400 text-sm mt-1">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏅 10️⃣ BLOCO DE CREDIBILIDADE */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-6">
            <Star size={18} className="text-purple-400" />
            <span className="text-sm font-semibold text-purple-200">Transparência</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Crescimento coletivo
          </h2>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            Na Agência Lírios acreditamos em transparência e reconhecimento.
            Todos os meses destacamos criadores que se dedicaram e geraram resultados.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
              <Target size={16} className="text-green-400" />
              <span className="text-sm text-gray-300">Metas claras</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
              <TrendingUp size={16} className="text-purple-400" />
              <span className="text-sm text-gray-300">Resultados reais</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
              <Users size={16} className="text-pink-400" />
              <span className="text-sm text-gray-300">Comunidade unida</span>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 11️⃣ CTA FINAL */}
      <section className="py-32 px-6 text-center bg-gradient-to-t from-gray-900 via-gray-950 to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-700/20 via-transparent to-transparent" />
        
        <div className="relative max-w-4xl mx-auto z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            Quer aparecer aqui no{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              próximo ranking?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Entre para a Agência Lírios e comece a gerar resultados reais.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/kwai">
              <Button size="xl" className="w-full md:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white border-0">
                🚀 Entrar no Kwai
              </Button>
            </Link>
            <Link to="/tiktok-shop">
              <Button size="xl" variant="secondary" className="w-full md:w-auto border-white/30 text-white hover:bg-white/10">
                🛍 Entrar no TikTok Shop
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 📱 Botão Flutuante de WhatsApp */}
      <a 
        href="https://wa.me/5500000000000?text=Olá,%20vim%20pelo%20Hall%20da%20Fama%20da%20Agência%20Lírios%20e%20quero%20saber%20mais."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl transition-all hover:scale-105 flex items-center gap-2"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={22} />
        <span className="hidden md:inline font-semibold">Falar agora</span>
      </a>

    </div>
  );
}