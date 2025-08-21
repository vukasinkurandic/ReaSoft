'use client';

import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

interface FooterProps {
  language: 'sr' | 'en';
}

export default function Footer({ language }: FooterProps) {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <motion.div 
            className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-highlight rounded-lg flex items-center justify-center"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <img src="/rocket.png" alt="ReaSoft Logo" className="w-4 h-4" />
          </motion.div>
          <span className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-highlight bg-clip-text text-transparent">
            ReaSoft
          </span>
        </div>
        <p className="text-slate-500 text-sm">
          © 2025 ReaSoft. {language === 'sr' ? 'Sva prava zadržana' : 'All rights reserved'}.
        </p>
      </div>
    </footer>
  );
}