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
      about: string;
      projects: string;
      process: string;
      faq: string;
      contact: string;
    };
  };
}

export default function Header({ language, setLanguage, t }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Section ID mapping for localized URLs
  const sectionIds = {
    sr: {
      services: 'usluge',
      about: 'o-nama', 
      projects: 'projekti',
      process: 'proces',
      faq: 'pitanja',
      contact: 'kontakt'
    },
    en: {
      services: 'services',
      about: 'about',
      projects: 'projects', 
      process: 'process',
      faq: 'faq',
      contact: 'contact'
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="/"
            className="flex items-center space-x-2 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-highlight rounded-lg flex items-center justify-center"
            >
              <Rocket className="w-6 h-6 text-white transform rotate-45" />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-highlight bg-clip-text text-transparent">
              ReaSoft
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href={`/#${sectionIds[language].services}`} className="text-slate-300 hover:text-brand-primary transition-colors">
              {t.nav.services}
            </a>
            <a href={`/#${sectionIds[language].about}`} className="text-slate-300 hover:text-brand-primary transition-colors">
              {t.nav.about}
            </a>
            <a href={`/#${sectionIds[language].projects}`} className="text-slate-300 hover:text-brand-primary transition-colors">
              {t.nav.projects}
            </a>
            <a href={`/#${sectionIds[language].process}`} className="text-slate-300 hover:text-brand-primary transition-colors">
              {t.nav.process}
            </a>
            <a href={`/#${sectionIds[language].faq}`} className="text-slate-300 hover:text-brand-primary transition-colors">
              {t.nav.faq}
            </a>
            <a href={`/#${sectionIds[language].contact}`} className="text-slate-300 hover:text-brand-primary transition-colors">
              {t.nav.contact}
            </a>
            
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
              <a 
                href={`/#${sectionIds[language].services}`}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left py-2 text-slate-300 hover:text-brand-primary transition-colors"
              >
                {t.nav.services}
              </a>
              <a 
                href={`/#${sectionIds[language].about}`}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left py-2 text-slate-300 hover:text-brand-primary transition-colors"
              >
                {t.nav.about}
              </a>
              <a 
                href={`/#${sectionIds[language].projects}`}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left py-2 text-slate-300 hover:text-brand-primary transition-colors"
              >
                {t.nav.projects}
              </a>
              <a 
                href={`/#${sectionIds[language].process}`}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left py-2 text-slate-300 hover:text-brand-primary transition-colors"
              >
                {t.nav.process}
              </a>
              <a 
                href={`/#${sectionIds[language].faq}`}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left py-2 text-slate-300 hover:text-brand-primary transition-colors"
              >
                {t.nav.faq}
              </a>
              <a 
                href={`/#${sectionIds[language].contact}`}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left py-2 text-slate-300 hover:text-brand-primary transition-colors"
              >
                {t.nav.contact}
              </a>
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
