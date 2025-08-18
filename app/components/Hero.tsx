'use client';

import { motion } from 'framer-motion';
import { Rocket, Code } from 'lucide-react';

interface HeroProps {
  t: {
    hero: {
      headline: string;
      subheadline: string;
      description: string;
      cta: string;
      cta2: string;
    };
  };
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ t, scrollToSection }: HeroProps) {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Logo */}
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <motion.div 
              className="w-24 h-24 bg-gradient-to-br from-brand-primary to-brand-highlight rounded-2xl flex items-center justify-center"
              animate={{ 
                rotate: [0, 360],
                y: [0, -10, 0]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Rocket className="text-white w-12 h-12 transform rotate-45" />
            </motion.div>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-primary via-brand-highlight to-brand-primary-dark bg-clip-text text-transparent">
              {t.hero.headline}
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 text-brand-secondary">
            {t.hero.subheadline}
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-highlight text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-2xl"
            >
              <span className="text-lg">{t.hero.cta}</span>
              <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="group px-8 py-4 border-2 border-brand-accent text-brand-accent font-semibold rounded-xl hover:bg-brand-accent hover:text-slate-700 transition-all duration-300 flex items-center space-x-2"
            >
              <span className="text-lg">{t.hero.cta2}</span>
              <Code className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}