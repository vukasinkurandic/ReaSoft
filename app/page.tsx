'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Menu, X, Zap, Code, Rocket, Monitor, Smartphone, Clock, Euro, Headphones, Send, Mail, Settings } from 'lucide-react';
import ServiceCards from './components/ServiceCards';

export default function ReaSoftWebsite() {
  const [language, setLanguage] = useState<'sr' | 'en'>('sr');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const content = {
    sr: {
      nav: { home: 'Početna', services: 'Usluge', process: 'Kako radimo', contact: 'Kontakt' },
      hero: {
        headline: 'Imate dosadan posao?',
        subheadline: 'Mi ga činimo jednostavnim u nekoliko klikova!',
        description: 'Zašto gubiti vreme na dosadne zadatke kada možete raditi nešto korisno za sebe?',
        cta: 'Kontaktirajte nas',
        cta2: 'Saznajte više'
      },
      process: {
        title: 'Kako radimo?',
        subtitle: 'Jednostavan proces od ideje do implementacije',
        steps: [
          {
            number: '01',
            title: 'Konsultacija',
            description: 'Analiziramo vaše potrebe i definišemo ciljeve projekta'
          },
          {
            number: '02',
            title: 'Planiranje',
            description: 'Kreiramo detaljnu strategiju i tehnički plan izvršavanja'
          },
          {
            number: '03',
            title: 'Razvoj',
            description: 'Razvijamo rešenje koristeći najnovije tehnologije'
          },
          {
            number: '04',
            title: 'Testiranje',
            description: 'Temeljno testiramo funkcionalnost i performanse'
          },
          {
            number: '05',
            title: 'Isporuka',
            description: 'Implementiramo rešenje i pružamo obuku korisnicima'
          }
        ]
      },
      services: {
        title: 'Naše usluge',
        subtitle: 'Kompletna digitalna rešenja za razvoj vašeg poslovanja',
        webApps: { title: 'Web aplikacije', description: 'Kreiramo moderne web aplikacije koje automatizuju vaše procese i povećavaju efikasnost' },
        websites: { title: 'Poslovni web sajtovi', description: 'Dizajniramo i razvijamo profesionalne web sajtove koji privlače klijente' },
        ecommerce: { title: 'Web prodavnice', description: 'Svilhjamo e-commerce platforme koje povećavaju online prodaju' },
        automation: { title: 'Automatizacija procesa', description: 'Kompletna automatizacija dosadnih zadataka i poslovnih procesa' },
        desktop: { title: 'Desktop aplikacije', description: 'Razvijamo Windows desktop aplikacije za specifične potrebe' },
        consulting: { title: 'IT konsalting', description: 'Stručno savetovanje za digitalizaciju i optimizaciju poslovanja' }
      },
      benefits: {
        title: 'Zašto ReaSoft?',
        subtitle: 'Vaš partner za digitalne inovacije',
        items: ['Automatizujemo dosadne zadatke', 'Štedimo vaše vreme i novac', 'Jednostavna rešenja u nekoliko klikova', 'Podrška 24/7']
      },
      contact: {
        title: 'Kontaktirajte nas',
        subtitle: 'Spremni smo da realizujemo vaš projekat',
        form: {
          name: 'Ime i prezime',
          email: 'Email adresa',
          message: 'Poruka',
          submit: 'Pošaljite zahtev',
          success: 'Poruka je uspešno poslana!',
          error: 'Greška pri slanju. Pokušajte ponovo.'
        }
      }
    },
    en: {
      nav: { home: 'Home', services: 'Services', process: 'How We Work', contact: 'Contact' },
      hero: {
        headline: 'You have a boring job?',
        subheadline: 'We make it easy in a few clicks!',
        description: 'Why waste time on annoying tasks when you can do something awesome and useful for yourself?',
        cta: 'Contact Us',
        cta2: 'Learn More'
      },
      process: {
        title: 'How We Work?',
        subtitle: 'Simple process from idea to implementation',
        steps: [
          {
            number: '01',
            title: 'Consultation',
            description: 'We analyze your needs and define project goals'
          },
          {
            number: '02',
            title: 'Planning',
            description: 'We create detailed strategy and technical execution plan'
          },
          {
            number: '03',
            title: 'Development',
            description: 'We develop solutions using the latest technologies'
          },
          {
            number: '04',
            title: 'Testing',
            description: 'We thoroughly test functionality and performance'
          },
          {
            number: '05',
            title: 'Delivery',
            description: 'We implement the solution and provide user training'
          }
        ]
      },
      services: {
        title: 'Our Services',
        subtitle: 'Complete digital solutions for your business growth',
        webApps: { title: 'Web Applications', description: 'We create modern web applications that automate your processes and increase efficiency' },
        websites: { title: 'Business Websites', description: 'We design and develop professional websites that attract customers' },
        ecommerce: { title: 'E-commerce Stores', description: 'We develop e-commerce platforms that boost online sales' },
        automation: { title: 'Process Automation', description: 'Complete automation of boring tasks and business processes' },
        desktop: { title: 'Desktop Applications', description: 'We develop Windows desktop applications for specific needs' },
        consulting: { title: 'IT Consulting', description: 'Expert advice for digitalization and business optimization' }
      },
      benefits: {
        title: 'Why ReaSoft?',
        subtitle: 'Your partner for digital innovations',
        items: ['We automate boring tasks', 'We save your time and money', 'Simple solutions in a few clicks', '24/7 Support']
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'We\'re ready to realize your project',
        form: {
          name: 'Full Name',
          email: 'Email Address',
          message: 'Message',
          submit: 'Send Request',
          success: 'Message sent successfully!',
          error: 'Error sending message. Please try again.'
        }
      }
    }
  };

  const t = content[language];

  // Back to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollDuration = 1500; // 1.5 sekundi
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Header */}
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
              <button onClick={() => scrollToSection('home')} className="text-slate-300 hover:text-brand-primary transition-colors">
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-brand-primary transition-colors">
                {t.nav.services}
              </button>
              <button onClick={() => scrollToSection('process')} className="text-slate-300 hover:text-brand-primary transition-colors">
                {t.nav.process}
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
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-slate-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block w-full text-left py-2 text-slate-300 hover:text-brand-primary transition-colors"
              >
                {t.nav.home}
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block w-full text-left py-2 text-slate-300 hover:text-brand-primary transition-colors"
              >
                {t.nav.services}
              </button>
              <button 
                onClick={() => scrollToSection('process')} 
                className="block w-full text-left py-2 text-slate-300 hover:text-brand-primary transition-colors"
              >
                {t.nav.process}
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left py-2 text-slate-300 hover:text-brand-primary transition-colors"
              >
                {t.nav.contact}
              </button>
              <button
                onClick={() => setLanguage(language === 'sr' ? 'en' : 'sr')}
                className="flex items-center space-x-2 py-2 text-slate-300 hover:text-brand-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-primary to-brand-highlight bg-clip-text text-transparent">
                {t.services.title}
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-4">
              {t.services.subtitle}
            </p>
          </motion.div>

          <ServiceCards
            services={[
              { 
                icon: Globe, 
                title: t.services.webApps.title, 
                description: t.services.webApps.description,
                color: 'primary',
                bgGradient: 'bg-gradient-to-br from-brand-primary to-brand-primary-dark'
              },
              { 
                icon: Smartphone, 
                title: t.services.websites.title, 
                description: t.services.websites.description,
                color: 'secondary',
                bgGradient: 'bg-gradient-to-br from-brand-secondary to-brand-secondary-dark'
              },
              { 
                icon: Euro, 
                title: t.services.ecommerce.title, 
                description: t.services.ecommerce.description,
                color: 'highlight',
                bgGradient: 'bg-gradient-to-br from-brand-highlight to-brand-highlight-dark'
              },
              { 
                icon: Settings, 
                title: t.services.automation.title, 
                description: t.services.automation.description,
                color: 'accent',
                bgGradient: 'bg-gradient-to-br from-brand-accent to-brand-accent-dark'
              },
              { 
                icon: Monitor, 
                title: t.services.desktop.title, 
                description: t.services.desktop.description,
                color: 'primary',
                bgGradient: 'bg-gradient-to-br from-brand-primary-dark to-brand-primary'
              },
              { 
                icon: Headphones, 
                title: t.services.consulting.title, 
                description: t.services.consulting.description,
                color: 'secondary',
                bgGradient: 'bg-gradient-to-br from-brand-secondary-dark to-brand-secondary'
              }
            ]}
          />
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Animated Stars Background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
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
                  <Rocket className="w-10 h-10" />
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
                  
                  {/* Planet Number */}
                  <motion.span 
                    className="text-3xl font-bold text-white z-10 relative drop-shadow-lg"
                    animate={{
                      scale: [1, 1.1, 1],
                      textShadow: [
                        "0 0 0 rgba(255, 255, 255, 0)",
                        "0 0 20px rgba(255, 255, 255, 0.8)",
                        "0 0 0 rgba(255, 255, 255, 0)"
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 4,
                      ease: "easeInOut"
                    }}
                  >
                    {step.number}
                  </motion.span>
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

      {/* Benefits Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-accent to-brand-highlight bg-clip-text text-transparent">
                {t.contact.title}
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-4">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="max-w-2xl mx-auto px-4">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="text"
                  placeholder={t.contact.form.name}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder={t.contact.form.email}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all duration-300"
                />
              </div>
              <textarea
                placeholder={t.contact.form.message}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows={6}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all duration-300"
              />
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-highlight text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto shadow-lg hover:shadow-2xl"
                >
                  <Send className="w-5 h-5" />
                  <span>{t.contact.form.submit}</span>
                </button>
              </div>
              {submitStatus === 'success' && (
                <div className="text-center text-green-400">
                  {t.contact.form.success}
                </div>
              )}
            </form>

            <div className="mt-8 text-center">
              <div className="flex items-center justify-center space-x-2 text-slate-300">
                <Mail className="w-5 h-5 text-brand-primary" />
                <span>info@reasoft.rs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <motion.div 
              className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-highlight rounded-lg flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <Rocket className="text-white w-4 h-4 transform rotate-45" />
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

      {/* Back to Top Button */}
      {showBackToTop && (
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
      )}
    </div>
  );
}
