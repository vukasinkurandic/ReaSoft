'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

interface FAQProps {
  t: {
    faq: {
      title: string;
      subtitle: string;
      questions: Array<{
        question: string;
        answer: string;
      }>;
    };
  };
  language: 'sr' | 'en';
}

export default function FAQ({ t, language }: FAQProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const sectionId = language === 'sr' ? 'pitanja' : 'faq';

  return (
    <section id={sectionId} className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Rocket Launch Ramp Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute bottom-0 left-0 w-full h-full opacity-5" viewBox="0 0 1200 800" fill="none">
          <path d="M0 800 L200 600 L400 500 L600 400 L800 300 L1000 200 L1200 100" stroke="currentColor" strokeWidth="3" className="text-brand-primary"/>
          <path d="M0 780 L200 580 L400 480 L600 380 L800 280 L1000 180 L1200 80" stroke="currentColor" strokeWidth="2" className="text-brand-secondary"/>
          <path d="M0 760 L200 560 L400 460 L600 360 L800 260 L1000 160 L1200 60" stroke="currentColor" strokeWidth="1" className="text-brand-highlight"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-accent to-brand-secondary bg-clip-text text-transparent">
              {t.faq.title}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-4">
            {t.faq.subtitle}
          </p>
        </motion.div>

        {/* Desktop FAQ Steps Layout */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Rocket Path */}
            <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
              <motion.div
                className="absolute"
                initial={{ left: "2%", top: "90%" }}
                animate={{ 
                  left: ["2%", "98%"],
                  top: ["90%", "10%"]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  animate={{ rotate: [45, 60, 30, 45] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Rocket className="w-8 h-8 text-brand-highlight opacity-60" />
                </motion.div>
              </motion.div>
            </div>

            {/* FAQ Steps */}
            <div className="space-y-8">
              {t.faq.questions.map((faq: any, index: number) => {
                // Responsivni margin sistem
                const getResponsiveMarginClass = (index: number) => {
                  // Za velike ekrane (xl: 1280px+) - veliki stepenasti layout
                  const xlMargins = ['xl:ml-0', 'xl:ml-16', 'xl:ml-32', 'xl:ml-48', 'xl:ml-64', 'xl:ml-80', 'xl:ml-96', 'xl:ml-[28rem]', 'xl:ml-[32rem]'];
                  
                  // Za srednje ekrane (lg: 1024px-1279px) - manji stepenasti layout  
                  const lgMargins = ['lg:ml-0', 'lg:ml-8', 'lg:ml-16', 'lg:ml-24', 'lg:ml-32', 'lg:ml-40', 'lg:ml-48', 'lg:ml-56', 'lg:ml-64'];
                  
                  // Za manje ekrane (sve do lg) - obični layout
                  const baseMargin = 'ml-0';
                  
                  return `${baseMargin} ${lgMargins[index] || 'lg:ml-64'} ${xlMargins[index] || 'xl:ml-[32rem]'}`;
                };
                
                return (
                  <motion.div
                    key={index}
                    className={`${getResponsiveMarginClass(index)} max-w-2xl`}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                  <div 
                    className={`bg-slate-900/50 backdrop-blur-sm border border-slate-600 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-primary/50 cursor-pointer ${
                      openFaqIndex === index ? 'border-brand-primary' : ''
                    }`}
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  >
                    <div className="p-6 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          index % 4 === 0 ? 'bg-brand-primary/20 text-brand-primary' :
                          index % 4 === 1 ? 'bg-brand-secondary/20 text-brand-secondary' :
                          index % 4 === 2 ? 'bg-brand-highlight/20 text-brand-highlight' :
                          'bg-brand-accent/20 text-brand-accent'
                        }`}>
                          <span className="font-bold text-lg">{index + 1}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white">
                          {faq.question}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-brand-primary"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaqIndex === index ? "auto" : 0,
                        opacity: openFaqIndex === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-slate-300 leading-relaxed pl-16">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile FAQ Simple Layout */}
        <div className="lg:hidden max-w-3xl mx-auto">
          <div className="space-y-4">
            {t.faq.questions.map((faq: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div 
                  className={`bg-slate-900/50 backdrop-blur-sm border border-slate-600 rounded-xl overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? 'border-brand-primary' : ''
                  }`}
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        index % 4 === 0 ? 'bg-brand-primary/20 text-brand-primary' :
                        index % 4 === 1 ? 'bg-brand-secondary/20 text-brand-secondary' :
                        index % 4 === 2 ? 'bg-brand-highlight/20 text-brand-highlight' :
                        'bg-brand-accent/20 text-brand-accent'
                      }`}>
                        <span className="font-bold text-sm">{index + 1}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-white flex-1 pr-2">
                        {faq.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-brand-primary flex-shrink-0"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaqIndex === index ? "auto" : 0,
                      opacity: openFaqIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4">
                      <p className="text-slate-300 text-sm leading-relaxed pl-11">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
