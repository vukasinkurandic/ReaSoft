'use client';

import { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';

interface Service {
  icon: any;
  title: string;
  description: string;
  color: string;
  bgGradient: string;
}

interface ServiceCardsProps {
  services: Service[];
}

export default function ServiceCards({ services }: ServiceCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at middle card
  
  const handleDragEnd = (_event: any, info: PanInfo) => {
    const threshold = 50;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (offset > threshold || velocity > 300) {
      // Swipe right - previous card
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    } else if (offset < -threshold || velocity < -300) {
      // Swipe left - next card  
      if (currentIndex < services.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
  };


  // Function to get contrasting colors for better visibility
  const getContrastColors = (colorName: string) => {
    switch(colorName) {
      case 'primary':
        return {
          text: 'text-white',
          textSecondary: 'text-white/90',
          textTertiary: 'text-white/70',
          icon: 'text-white',
          overlay: 'from-black/20 via-transparent to-black/30'
        };
      case 'secondary':
        return {
          text: 'text-slate-800',
          textSecondary: 'text-slate-700',
          textTertiary: 'text-slate-600',
          icon: 'text-slate-800',
          overlay: 'from-black/10 via-transparent to-black/20'
        };
      case 'accent':
        return {
          text: 'text-slate-800',
          textSecondary: 'text-slate-700',
          textTertiary: 'text-slate-600',
          icon: 'text-slate-800',
          overlay: 'from-black/15 via-transparent to-black/25'
        };
      case 'highlight':
        return {
          text: 'text-white',
          textSecondary: 'text-white/90',
          textTertiary: 'text-white/70',
          icon: 'text-white',
          overlay: 'from-black/20 via-transparent to-black/30'
        };
      default:
        return {
          text: 'text-white',
          textSecondary: 'text-white/90',
          textTertiary: 'text-white/70',
          icon: 'text-white',
          overlay: 'from-black/20 via-transparent to-black/30'
        };
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-8 sm:py-12 px-4">
      {/* Cards container - Spotify style drag layout */}
      <div className="relative h-[28rem] sm:h-[32rem] overflow-hidden">
        <div className="flex items-center justify-center h-full">
          {services.map((service, index) => {
            const isActive = index === currentIndex;
            const isLeft = index < currentIndex;
            const isRight = index > currentIndex;
            
            const colors = getContrastColors(service.color);
            
            // Calculate positioning - Spotify style with mobile responsiveness
            let translateX = 0;
            let scale = 0.85;
            let opacity = 0.6;
            let zIndex = 1;
            
            // Mobile positioning (much smaller gaps and cards)
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
            const spacing = isMobile ? 50 : 120;
            
            if (isActive) {
              translateX = 0;
              scale = 1;
              opacity = 1;
              zIndex = 10;
            } else if (isLeft) {
              translateX = -spacing;
              scale = 0.85;
              opacity = 0.7;
              zIndex = 5;
            } else if (isRight) {
              translateX = spacing;
              scale = 0.85;
              opacity = 0.7;
              zIndex = 5;
            }

            return (
              <motion.div
                key={index}
                className="absolute cursor-grab active:cursor-grabbing select-none"
                style={{ 
                  zIndex,
                  touchAction: 'none',
                  willChange: 'transform'
                }}
                animate={{
                  x: translateX,
                  scale,
                  opacity,
                  rotateY: isActive ? 0 : (isLeft ? 15 : -15),
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.6
                }}
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                onDragEnd={handleDragEnd}
                onClick={() => handleCardClick(index)}
                whileHover={isActive ? { scale: 1.02 } : { scale: 0.87 }}
                whileTap={{ scale: isActive ? 0.98 : 0.83 }}
              >
                <div className={`w-64 sm:w-80 h-80 sm:h-96 rounded-3xl ${service.bgGradient} relative overflow-hidden shadow-2xl`}>
                  {/* Enhanced background overlay for better contrast */}
                  <div className="absolute inset-0">
                    <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${colors.overlay}`}></div>
                    <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-black/5 blur-xl"></div>
                    <div className="absolute bottom-8 left-8 w-32 h-32 rounded-full bg-black/5 blur-2xl"></div>
                    
                    {/* Geometric patterns with proper contrast */}
                    <div className={`absolute top-12 left-12 w-1 h-16 bg-current opacity-20 rotate-45 ${colors.text}`}></div>
                    <div className={`absolute bottom-16 right-16 w-1 h-12 bg-current opacity-20 rotate-12 ${colors.text}`}></div>
                  </div>

                  {/* Card content with proper contrast */}
                  <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between">
                    <div>
                      {/* Icon with enhanced contrast */}
                      <motion.div
                        className="w-14 sm:w-16 h-14 sm:h-16 bg-black/15 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 sm:mb-6 border border-black/20"
                        whileHover={{ rotate: 8, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <service.icon className={`w-7 sm:w-8 h-7 sm:h-8 ${colors.icon} drop-shadow-sm`} />
                      </motion.div>
                      
                      <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 leading-tight ${colors.text} drop-shadow-sm`}>
                        {service.title}
                      </h3>
                      
                      <p className={`text-sm sm:text-base leading-relaxed font-medium ${colors.textSecondary}`}>
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom section with better contrast */}
                    <div className="flex items-center justify-between mt-4 sm:mt-8">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${colors.textTertiary.replace('text-', 'bg-')}`}></div>
                        <div className={`text-xs font-semibold tracking-wider uppercase ${colors.textTertiary} hidden sm:block`}>
                          {String(index + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                        </div>
                      </div>
                      
                      {/* Action indicator */}
                      <motion.div
                        className="w-8 sm:w-10 h-8 sm:h-10 bg-black/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-black/20"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.2)' }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.textTertiary.replace('text-', 'bg-')}`}></div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Subtle border glow */}
                  <div className="absolute inset-0 rounded-3xl border border-black/10 pointer-events-none"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation dots - Spotify style */}
      <div className="flex justify-center mt-8 space-x-3">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="group relative"
          >
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-brand-primary' 
                : 'bg-white/30 group-hover:bg-white/50'
            }`} />
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 w-2 h-2 rounded-full bg-brand-primary"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Instructions */}
      <div className="text-center mt-6">
        <p className="text-slate-400 text-sm">
          Drag cards or click to explore our services
        </p>
      </div>
    </div>
  );
}