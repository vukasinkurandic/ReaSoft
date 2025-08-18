'use client';

import { Zap, Clock, Euro, Headphones } from 'lucide-react';

interface BenefitsProps {
  t: {
    benefits: {
      title: string;
      subtitle: string;
      items: string[];
    };
  };
}

export default function Benefits({ t }: BenefitsProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-highlight to-brand-primary bg-clip-text text-transparent">
              {t.benefits.title}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-4">
            {t.benefits.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {t.benefits.items.map((item: string, index: number) => {
            const icons = [Zap, Clock, Euro, Headphones];
            const Icon = icons[index];
            return (
              <div key={index} className="text-center group px-4">
                <div className="w-20 sm:w-24 h-20 sm:h-24 mx-auto mb-4 sm:mb-6 bg-slate-800/50 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-slate-700 group-hover:border-brand-primary/50 transition-all duration-300">
                  <Icon className="w-8 sm:w-10 h-8 sm:h-10 text-brand-primary" />
                </div>
                <p className="text-base sm:text-lg font-semibold text-white group-hover:text-brand-primary transition-colors">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}