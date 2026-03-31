// src/components/layout/VideoTestimonialCard.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

const VideoTestimonialCard = ({ 
  videoId, 
  title, 
  aspectRatio = '9/16',      // '9/16' para Shorts, '16/9' para horizontal
  showTitle = false,          // exibe título dentro do card?
  fontBold = {},              // estilo da fonte do título
  showHoverScale = true,      // aplica efeito de scale no hover?
  controls = 0                // 0 = esconde controles, 1 = mostra
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  // Mapeia aspectRatio para classe Tailwind válida
  const getAspectRatioClass = (ratio) => {
    if (ratio === '16/9') return 'aspect-video';
    if (ratio === '4/3') return 'aspect-[4/3]';
    if (ratio === '1/1') return 'aspect-square';
    return 'aspect-[9/16]'; // default para Shorts
  };

  return (
    <motion.div 
      className={`${getAspectRatioClass(aspectRatio)} rounded-2xl overflow-hidden relative ${showHoverScale ? 'cursor-pointer' : ''}`} 
      style={{ backgroundColor: '#F93BA3', boxShadow: '0 10px 40px rgba(249, 59, 163, 0.3)' }}
      variants={scaleIn}
      whileHover={showHoverScale ? { scale: 1.03 } : undefined}
    >
      {!isPlaying ? (
        <>
          {/* Thumbnail do YouTube */}
          <img 
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }}
          />
          
          {/* Overlay para melhor contraste */}
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Botão Play Personalizado - Cor #C00D5C */}
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex flex-col items-center justify-center group"
            aria-label={`Play ${title}`}
          >
            <div 
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xl"
              style={{ backgroundColor: '#C00D5C' }}
            >
              <svg 
                className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
            
            {/* Título opcional dentro do card */}
            {showTitle && title && (
              <>
                <p className="text-white font-bold text-sm sm:text-lg mt-4 px-4 text-center" style={fontBold}>
                  {title}
                </p>
                <p className="text-white/80 text-[10px] sm:text-sm mt-2" style={fontBold}>
                  Clique para assistir
                </p>
              </>
            )}
          </button>
        </>
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=${controls}&modestbranding=1&rel=0&playsinline=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </motion.div>
  );
};

export default VideoTestimonialCard;