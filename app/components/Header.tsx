'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X, Rocket } from 'lucide-react';

interface HeaderProps {
  language: 'sr' | 'en';
  setLanguage: (lang: 'sr' | 'en') => void;
  t: {
    nav: {
      home: string;
      services: string;
      process: string;
      faq: string;
      contact: string;
    };
  };
  scrollToSection: (sectionId: string) => void;
}

export default function Header({ language, setLanguage, t, scrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-highlight rounded-lg flex items-center justify-center"
            >
              <Rocket className="w-6 h-6 text-white transform rotate-45" />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-highlight bg-clip-text text-transparent">
              ReaSoft
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-brand-primary transition-colors">
              {t.nav.services}
            </button>
            <button onClick={() => scrollToSection('process')} className="text-slate-300 hover:text-brand-primary transition-colors">
              {t.nav.process}
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-slate-300 hover:text-brand-primary transition-colors">
              {t.nav.faq}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-brand-primary transition-colors">
              {t.nav.contact}
            </button>
            
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'sr' ? 'en' : 'sr')}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-slate-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button 
                onClick={() => handleMenuItemClick('services')} 
                className="block w-full text-left py-2 text-slate-300 hover:text-brand-primary transition-colors"
              >
                {t.nav.services}
              </button>
              <button 
                onClick={() => handleMenuItemClick('process')} 
                className="block w-full text-left py-2 text-slate-300 hover:text-brand-primary transition-colors"
              >
                {t.nav.process}
              </button>
              <button 
                onClick={() => handleMenuItemClick('faq')} 
                className="block w-full text-left py-2 text-slate-300 hover:text-brand-primary transition-colors"
              >
                {t.nav.faq}
              </button>
              <button 
                onClick={() => handleMenuItemClick('contact')} 
                className="block w-full text-left py-2 text-slate-300 hover:text-brand-primary transition-colors"
              >
                {t.nav.contact}
              </button>
              <button
                onClick={() => {
                  setLanguage(language === 'sr' ? 'en' : 'sr');
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 py-2 text-slate-300 hover:text-brand-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}