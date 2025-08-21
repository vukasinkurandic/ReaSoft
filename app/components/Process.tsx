'use client';

import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

interface ProcessProps {
  t: {
    process: {
      title: string;
      subtitle: string;
      steps: Array<{
        number: string;
        title: string;
        description: string;
      }>;
    };
  };
  language: 'sr' | 'en';
}

export default function Process({ t, language }: ProcessProps) {
  const sectionId = language === 'sr' ? 'razvoj' : 'process';
  
  return (
    <section id={sectionId} className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[16.04, 58.03, 19.97, 21.23, 11.26, 20.73, 75.02, 28.47, 49.63, 59.99, 21.12, 66.59, 44.72, 58.27, 94.73].map((leftPos, i) => {
          const topPositions = [41.48, 2.82, 19.41, 47.22, 63.25, 91.54, 68.59, 44.68, 7.07, 61.85, 70.12, 35.46, 66.15, 78.89, 65.28];
          const durations = [2.5, 3.2, 4.1, 2.8, 3.7, 2.3, 4.5, 3.0, 2.9, 3.8, 2.6, 4.2, 3.3, 2.7, 3.9];
          const delays = [0.2, 1.1, 0.7, 1.5, 0.3, 1.8, 0.9, 1.2, 0.5, 1.7, 0.8, 1.3, 0.4, 1.6, 1.0];
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${leftPos}%`,
                top: `${topPositions[i]}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: durations[i],
                repeat: Infinity,
                delay: delays[i]
              }}
            />
          );
        })}
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
            <span className="bg-gradient-to-r from-brand-secondary to-brand-accent bg-clip-text text-transparent">
              {t.process.title}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-4">
            {t.process.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
          {/* Floating Rocket Animation - Desktop Only */}
          <motion.div
            className="hidden lg:block absolute top-16 z-20 pointer-events-none"
            initial={{ left: "10%", opacity: 0 }}
            whileInView={{ 
              left: ["10%", "10%", "30%", "30%", "50%", "50%", "70%", "70%", "90%", "90%"],
              opacity: 1
            }}
            transition={{
              left: {
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1]
              },
              opacity: {
                duration: 0.8,
                ease: "easeOut"
              }
            }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative -translate-x-1/2"
              initial={{ y: 0, rotate: 45 }}
              whileInView={{
                y: [0, -15, 10, -20, 5, -10, 15, -25, 0, 0],
                rotate: [45, 50, 40, 55, 35, 60, 40, 50, 45, 45]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-brand-highlight opacity-90 hover:opacity-100 transition-opacity"
                initial={{ 
                  filter: "drop-shadow(0 0 5px rgba(156, 175, 170, 0.5))",
                  scale: 1
                }}
                whileInView={{
                  filter: [
                    "drop-shadow(0 0 5px rgba(156, 175, 170, 0.5))",
                    "drop-shadow(0 0 15px rgba(156, 175, 170, 1))",
                    "drop-shadow(0 0 5px rgba(156, 175, 170, 0.5))"
                  ],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                viewport={{ once: true }}
              >
                <img src="/rocket.png" alt="Rocket" className="w-10 h-10" />
              </motion.div>
              
              {/* Enhanced Sparkle Trail with Planet Colors */}
              <motion.div
                className="absolute -top-2 -right-2 w-3 h-3 rounded-full"
                style={{
                  background: "linear-gradient(45deg, #3b82f6, #10b981, #8b5cf6, #f97316, #ef4444)"
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                  background: [
                    "linear-gradient(45deg, #3b82f6, #10b981)",
                    "linear-gradient(45deg, #10b981, #8b5cf6)",
                    "linear-gradient(45deg, #8b5cf6, #f97316)",
                    "linear-gradient(45deg, #f97316, #ef4444)",
                    "linear-gradient(45deg, #ef4444, #3b82f6)"
                  ]
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  delay: 0.1
                }}
                viewport={{ once: true }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-2 h-2 rounded-full"
                style={{
                  background: "linear-gradient(45deg, #d6a99d, #fbf3d5)"
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  scale: [0, 1.2, 0],
                  opacity: [0, 1, 0],
                  background: [
                    "linear-gradient(45deg, #d6a99d, #fbf3d5)",
                    "linear-gradient(45deg, #fbf3d5, #d6dac8)",
                    "linear-gradient(45deg, #d6dac8, #9cafaa)",
                    "linear-gradient(45deg, #9cafaa, #d6a99d)"
                  ]
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  delay: 0.3
                }}
                viewport={{ once: true }}
              />
              <motion.div
                className="absolute top-1 left-3 w-1.5 h-1.5 bg-white rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: 0.6
                }}
                viewport={{ once: true }}
              />
            </motion.div>
          </motion.div>

          {t.process.steps.map((step: any, index: number) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Planet Step Circle */}
              <motion.div 
                className={`w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center backdrop-blur-sm border-2 transition-all duration-300 group-hover:scale-105 relative overflow-hidden ${
                  index === 0 ? 'bg-gradient-to-br from-brand-primary to-brand-primary-dark border-brand-primary' :
                  index === 1 ? 'bg-gradient-to-br from-brand-secondary to-brand-secondary-dark border-brand-secondary' :
                  index === 2 ? 'bg-gradient-to-br from-brand-highlight to-brand-highlight-dark border-brand-highlight' :
                  index === 3 ? 'bg-gradient-to-br from-brand-accent to-brand-accent-dark border-brand-accent' :
                  'bg-gradient-to-br from-brand-primary-dark to-brand-primary border-brand-primary'
                }`}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(214, 169, 157, 0)",
                    "0 0 0 15px rgba(214, 169, 157, 0.1)",
                    "0 0 0 0 rgba(214, 169, 157, 0)"
                  ],
                  rotate: [0, 360],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  boxShadow: {
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 4,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 120 + index * 20,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  scale: {
                    duration: 5,
                    repeat: Infinity,
                    delay: index * 2.5,
                    ease: "easeInOut"
                  }
                }}
              >
                {/* Planet Surface Pattern */}
                <div className="absolute inset-0 rounded-full opacity-30">
                  {index === 0 && (
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
                  )}
                  {index === 1 && (
                    <>
                      <div className="absolute top-2 left-4 w-6 h-6 bg-brand-secondary-light rounded-full opacity-40"></div>
                      <div className="absolute bottom-3 right-5 w-4 h-4 bg-brand-secondary-light rounded-full opacity-40"></div>
                    </>
                  )}
                  {index === 2 && (
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-highlight-light to-transparent opacity-30 rounded-full"></div>
                  )}
                  {index === 3 && (
                    <>
                      <div className="absolute top-1 left-2 w-8 h-2 bg-brand-accent-light rounded-full opacity-50"></div>
                      <div className="absolute bottom-4 right-3 w-6 h-2 bg-brand-accent-light rounded-full opacity-50"></div>
                    </>
                  )}
                  {index === 4 && (
                    <div className="absolute inset-2 border border-brand-primary-light rounded-full opacity-40"></div>
                  )}
                </div>
                
                {/* Planet SVG */}
                <motion.div 
                  className="w-16 h-16 z-10 relative drop-shadow-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                    filter: [
                      "drop-shadow(0 0 0 rgba(255, 255, 255, 0))",
                      "drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))",
                      "drop-shadow(0 0 0 rgba(255, 255, 255, 0))"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 4,
                    ease: "easeInOut"
                  }}
                >
                  {/* Planet 1 - Mercury (Konsultacija) */}
                  {index === 0 && (
                    <svg viewBox="0 0 64 64" className="w-full h-full">
                      <defs>
                        <radialGradient id="mercury-grad" cx="0.3" cy="0.3" r="0.8">
                          <stop offset="0%" stopColor="#fbbf24" />
                          <stop offset="50%" stopColor="#f59e0b" />
                          <stop offset="100%" stopColor="#d97706" />
                        </radialGradient>
                      </defs>
                      <circle cx="32" cy="32" r="28" fill="url(#mercury-grad)" />
                      <ellipse cx="24" cy="28" rx="3" ry="2" fill="#f59e0b" opacity="0.6" />
                      <ellipse cx="42" cy="36" rx="4" ry="2.5" fill="#f59e0b" opacity="0.6" />
                      <ellipse cx="28" cy="42" rx="2.5" ry="1.5" fill="#f59e0b" opacity="0.6" />
                      <circle cx="20" cy="20" r="1.5" fill="#fef3c7" opacity="0.8" />
                      <circle cx="45" cy="25" r="1" fill="#fef3c7" opacity="0.8" />
                    </svg>
                  )}

                  {/* Planet 2 - Venus (Planiranje) */}
                  {index === 1 && (
                    <svg viewBox="0 0 64 64" className="w-full h-full">
                      <defs>
                        <radialGradient id="venus-grad" cx="0.3" cy="0.3" r="0.8">
                          <stop offset="0%" stopColor="#fb7185" />
                          <stop offset="50%" stopColor="#f43f5e" />
                          <stop offset="100%" stopColor="#e11d48" />
                        </radialGradient>
                      </defs>
                      <circle cx="32" cy="32" r="28" fill="url(#venus-grad)" />
                      <path d="M 15 25 Q 32 15 45 28 Q 32 35 20 30" fill="#fda4af" opacity="0.5" />
                      <path d="M 20 40 Q 35 38 48 45 Q 35 48 25 45" fill="#fda4af" opacity="0.5" />
                      <circle cx="38" cy="22" r="2" fill="#fecdd3" opacity="0.7" />
                      <circle cx="25" cy="38" r="1.5" fill="#fecdd3" opacity="0.7" />
                    </svg>
                  )}

                  {/* Planet 3 - Earth (Razvoj) */}
                  {index === 2 && (
                    <svg viewBox="0 0 64 64" className="w-full h-full">
                      <defs>
                        <radialGradient id="earth-grad" cx="0.3" cy="0.3" r="0.8">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="50%" stopColor="#1d4ed8" />
                          <stop offset="100%" stopColor="#1e40af" />
                        </radialGradient>
                      </defs>
                      <circle cx="32" cy="32" r="28" fill="url(#earth-grad)" />
                      <path d="M 12 30 Q 20 25 28 28 Q 35 30 40 25 Q 48 28 52 35" fill="#10b981" opacity="0.8" />
                      <path d="M 8 45 Q 18 42 25 45 Q 32 47 38 44 Q 45 42 55 48" fill="#10b981" opacity="0.8" />
                      <ellipse cx="22" cy="20" rx="6" ry="4" fill="#10b981" opacity="0.8" />
                      <ellipse cx="45" cy="38" rx="4" ry="3" fill="#10b981" opacity="0.8" />
                      <circle cx="28" cy="35" r="2" fill="#fef3c7" opacity="0.6" />
                      <circle cx="42" cy="25" r="1.5" fill="#f3f4f6" opacity="0.9" />
                    </svg>
                  )}

                  {/* Planet 4 - Mars (Testiranje) */}
                  {index === 3 && (
                    <svg viewBox="0 0 64 64" className="w-full h-full">
                      <defs>
                        <radialGradient id="mars-grad" cx="0.3" cy="0.3" r="0.8">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="50%" stopColor="#ea580c" />
                          <stop offset="100%" stopColor="#c2410c" />
                        </radialGradient>
                      </defs>
                      <circle cx="32" cy="32" r="28" fill="url(#mars-grad)" />
                      <circle cx="20" cy="25" r="4" fill="#dc2626" opacity="0.7" />
                      <circle cx="42" cy="35" r="5" fill="#dc2626" opacity="0.7" />
                      <circle cx="35" cy="18" r="2.5" fill="#dc2626" opacity="0.7" />
                      <circle cx="18" cy="45" r="3" fill="#dc2626" opacity="0.7" />
                      <ellipse cx="48" cy="48" rx="3" ry="2" fill="#dc2626" opacity="0.7" />
                      <path d="M 25 40 L 35 38 L 30 45 Z" fill="#fed7aa" opacity="0.8" />
                    </svg>
                  )}

                  {/* Planet 5 - Jupiter (Isporuka) */}
                  {index === 4 && (
                    <svg viewBox="0 0 64 64" className="w-full h-full">
                      <defs>
                        <radialGradient id="jupiter-grad" cx="0.3" cy="0.3" r="0.8">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="50%" stopColor="#7c3aed" />
                          <stop offset="100%" stopColor="#6d28d9" />
                        </radialGradient>
                      </defs>
                      <circle cx="32" cy="32" r="28" fill="url(#jupiter-grad)" />
                      <ellipse cx="32" cy="20" rx="25" ry="3" fill="#a78bfa" opacity="0.6" />
                      <ellipse cx="32" cy="28" rx="25" ry="2.5" fill="#c4b5fd" opacity="0.5" />
                      <ellipse cx="32" cy="36" rx="25" ry="3" fill="#a78bfa" opacity="0.6" />
                      <ellipse cx="32" cy="44" rx="25" ry="2.5" fill="#c4b5fd" opacity="0.5" />
                      <circle cx="45" cy="32" r="6" fill="#f43f5e" opacity="0.8" />
                      <circle cx="45" cy="32" r="3" fill="#dc2626" opacity="0.9" />
                    </svg>
                  )}
                </motion.div>
              </motion.div>
              
              {/* Step Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
