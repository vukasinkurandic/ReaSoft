'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Menu, X, Zap, Code, Rocket, Monitor, Smartphone, Clock, Euro, Headphones, Send, Mail, Settings } from 'lucide-react';
import ServiceCards from './components/ServiceCards';

export default function ReaSoftWebsite() {
  const [language, setLanguage] = useState<'sr' | 'en'>('sr');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const content = {
    sr: {
      nav: { home: 'Početna', services: 'Usluge', contact: 'Kontakt' },
      hero: {
        headline: 'Imate dosadan posao?',
        subheadline: 'Mi ga činimo jednostavnim u nekoliko klikova!',
        description: 'Zašto gubiti vreme na dosadne zadatke kada možete raditi nešto korisno za sebe?',
        cta: 'Kontaktirajte nas',
        cta2: 'Saznajte više'
      },
      services: {
        title: 'Naše usluge',
        subtitle: 'Profesionalna rešenja za sve vaše potrebe',
        webApps: { title: 'Web aplikacije', description: 'Kreiramo moderne web aplikacije koje automatizuju vaše procese' },
        websites: { title: 'Web sajtovi', description: 'Dizajniramo i razvijamo profesionalne web sajtove' },
        desktop: { title: 'Desktop aplikacije', description: 'Razvijamo Windows desktop aplikacije za vaše potrebe' },
        automation: { title: 'Automatizacija', description: 'Potpuna automatizacija dosadnih zadataka u vašoj kompaniji' }
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
      nav: { home: 'Home', services: 'Services', contact: 'Contact' },
      hero: {
        headline: 'You have a boring job?',
        subheadline: 'We make it easy in a few clicks!',
        description: 'Why waste time on annoying tasks when you can do something awesome and useful for yourself?',
        cta: 'Contact Us',
        cta2: 'Learn More'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Professional solutions for all your needs',
        webApps: { title: 'Web Applications', description: 'We create modern web applications that automate your processes' },
        websites: { title: 'Websites', description: 'We design and develop professional websites' },
        desktop: { title: 'Desktop Applications', description: 'We develop Windows desktop applications for your needs' },
        automation: { title: 'Process Automation', description: 'Complete automation of boring tasks in your company' }
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
              <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-highlight rounded-lg flex items-center justify-center animate-pulse">
                <span className="text-white font-bold text-sm">RS</span>
              </div>
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
              <div className="w-24 h-24 bg-gradient-to-br from-brand-primary to-brand-highlight rounded-2xl flex items-center justify-center animate-bounce">
                <span className="text-white font-bold text-2xl">RS</span>
              </div>
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
                icon: Monitor, 
                title: t.services.desktop.title, 
                description: t.services.desktop.description,
                color: 'accent',
                bgGradient: 'bg-gradient-to-br from-brand-accent to-brand-accent-dark'
              },
              { 
                icon: Settings, 
                title: t.services.automation.title, 
                description: t.services.automation.description,
                color: 'highlight',
                bgGradient: 'bg-gradient-to-br from-brand-highlight to-brand-highlight-dark'
              }
            ]}
          />
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
            <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-highlight rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">RS</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-highlight bg-clip-text text-transparent">
              ReaSoft
            </span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2025 ReaSoft. {language === 'sr' ? 'Sva prava zadržana' : 'All rights reserved'}.
          </p>
        </div>
      </footer>
    </div>
  );
}
