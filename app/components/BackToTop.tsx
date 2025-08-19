'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Back to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Override browser's smooth scroll with CSS
    document.documentElement.style.scrollBehavior = 'auto';
    const start = window.pageYOffset;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad for slower, smoother scroll
      const easeOutQuad = 1 - Math.pow(1 - progress, 2);
      
      window.scrollTo(0, start * (1 - easeOutQuad));
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        document.documentElement.style.scrollBehavior = 'smooth'; // Restore
      }
    };

    requestAnimationFrame(animateScroll);
  };

  if (!showBackToTop) return null;

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-highlight rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ 
        scale: 0.9,
        y: -50,
        transition: { 
          type: "spring", 
          stiffness: 400, 
          damping: 10,
          duration: 2 
        }
      }}
    >
      <motion.div
        animate={{ 
          y: [0, -3, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Rocket className="w-6 h-6 text-white transform -rotate-45 group-hover:scale-110 transition-transform" />
      </motion.div>
      
      {/* Enhanced Rocket Trail */}
      <motion.div
        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full"
        animate={{
          scale: [0.5, 1.2, 0.5],
          opacity: [0.3, 1, 0.3],
          height: [8, 16, 8]
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-gradient-to-t from-red-500 to-orange-400 rounded-full"
        animate={{
          scale: [0.3, 1, 0.3],
          opacity: [0.5, 1, 0.5],
          height: [6, 12, 6]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2
        }}
      />
      
      {/* Sparkle Effects */}
      <motion.div
        className="absolute -top-1 -right-1 w-2 h-2 bg-brand-accent rounded-full"
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: 0.2
        }}
      />
      <motion.div
        className="absolute -top-2 -left-1 w-1.5 h-1.5 bg-brand-secondary rounded-full"
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          delay: 0.5
        }}
      />
    </motion.button>
  );
}
