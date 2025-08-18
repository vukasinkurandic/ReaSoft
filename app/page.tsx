'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Menu, X, Zap, Code, Rocket, Monitor, Smartphone, Clock, Euro, Headphones, Send, Mail, Settings, ChevronDown } from 'lucide-react';
import ServiceCards from './components/ServiceCards';

export default function ReaSoftWebsite() {
  const [language, setLanguage] = useState<'sr' | 'en'>('sr');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeServiceCard, setActiveServiceCard] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const content = {
    sr: {
      nav: { home: 'Početna', services: 'Usluge', process: 'Kako radimo', faq: 'Pitanja', contact: 'Kontakt' },
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
      faq: {
        title: 'Često postavljana pitanja',
        subtitle: 'Odgovori na sve što vas zanima o našoj saradnji',
        questions: [
          {
            question: 'Koliko košta izrada sajta ili aplikacije?',
            answer: 'Cena zavisi od složenosti projekta. Jednostavan sajt može biti povoljan i brzo gotov, dok ozbiljnije aplikacije i webshopovi zahtevaju više rada i planiranja. Mi uvek radimo realnu procenu prema vašim potrebama, da dobijete najbolji odnos cena, kvalitet i trajnost.'
          },
          {
            question: 'Koliko traje izrada?',
            answer: 'Svi žele da posao bude gotov "za juče", ali da bi projekat radio besprekorno, potrebno je vreme. Manji sajtovi mogu biti gotovi u roku od par nedelja, dok aplikacije zahtevaju mesec i više. Naš cilj je da budete zadovoljni rešenjem, a ne da žurimo po svaku cenu.'
          },
          {
            question: 'Šta je potrebno da vi obezbedite, a šta radimo mi?',
            answer: 'Vi dajete osnovne informacije: tekstove, slike i ideju kako želite da vas vide klijenti. Mi radimo sve ostalo: dizajn, razvoj, testiranje i lansiranje. Vodimo ceo proces i vodimo računa da ne gubite vreme na tehničke detalje.'
          },
          {
            question: 'Da li mi samo kupujemo uslugu ili smo partneri?',
            answer: 'Mi nismo "prodavci sajtova". Radimo rame uz rame sa vama i zajedno donosimo odluke. Na ovaj način, dobijate rešenje koje odgovara baš vašem biznisu, a ne nešto generičko. Na nas uvek možete računati i posle isporuke.'
          },
          {
            question: 'Da li se naša saradnja završava kada sajt ili aplikacija bude gotova?',
            answer: 'Ne. Formalno jeste, ali u praksi ostajemo uz vas. Nudimo podršku, održavanje, dodatni razvoj i unapređenja. Prava vrednost nije samo u isporuci, već u partnerstvu koje traje.'
          },
          {
            question: 'Šta ako nisam zadovoljan ili želim da odustanem?',
            answer: 'U ranoj fazi, ako rad nije odmakao, moguće je obustaviti projekat. Ako je već uloženo vreme, dogovaramo se fer i transparentno. Nama je važnije da gradimo poverenje nego da "po svaku cenu" završimo posao.'
          },
          {
            question: 'Kako izgleda sam proces saradnje?',
            answer: 'Proces je jasan i pregledan: Razgovaramo i definišemo potrebe. Napravimo plan i okvirnu cenu. Radimo prototip/dizajn i uključujemo vas u komentare. Razvijamo i testiramo. Pokrećemo projekat online. Po želji, ostajemo uz vas kroz podršku i dalji razvoj.'
          },
          {
            question: 'Zašto nije moguće da bude "brzo i jeftino"?',
            answer: 'Razumemo da svako voli da prođe što povoljnije i da posao bude gotov odmah. Međutim, kvalitetan softver zahteva planiranje, razvoj i testiranje. Ako želite rešenje koje će zaista raditi, donositi klijente i trajati godinama, ulaže se i vreme i znanje. Na kraju, to se uvek isplati više nego "najbrže i najjeftinije" rešenje.'
          }
        ]
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
      nav: { home: 'Home', services: 'Services', process: 'How We Work', faq: 'FAQ', contact: 'Contact' },
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
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Answers to everything you want to know about our collaboration',
        questions: [
          {
            question: 'How much does website or app development cost?',
            answer: 'The price depends on project complexity. A simple website can be affordable and quick to complete, while serious applications and webshops require more work and planning. We always provide realistic estimates based on your needs to get the best price, quality and durability ratio.'
          },
          {
            question: 'How long does development take?',
            answer: 'Everyone wants the job done "yesterday", but for a project to work flawlessly, time is needed. Smaller websites can be ready in a few weeks, while applications require a month or more. Our goal is for you to be satisfied with the solution, not to rush at any cost.'
          },
          {
            question: 'What do you need to provide, and what do we do?',
            answer: 'You provide basic information: texts, images and the idea of how you want clients to see you. We do everything else: design, development, testing and launch. We manage the entire process and make sure you don\'t waste time on technical details.'
          },
          {
            question: 'Are we just buying a service or are we partners?',
            answer: 'We are not "website sellers". We work side by side with you and make decisions together. This way, you get a solution that fits your business exactly, not something generic. You can always count on us even after delivery.'
          },
          {
            question: 'Does our collaboration end when the website or app is ready?',
            answer: 'No. Formally yes, but in practice we stay with you. We offer support, maintenance, additional development and improvements. The real value is not just in delivery, but in a partnership that lasts.'
          },
          {
            question: 'What if I\'m not satisfied or want to quit?',
            answer: 'In the early stage, if work hasn\'t progressed much, it\'s possible to stop the project. If time has already been invested, we negotiate fairly and transparently. Building trust is more important to us than finishing the job "at any cost".'
          },
          {
            question: 'What does the collaboration process look like?',
            answer: 'The process is clear and transparent: We talk and define needs. We make a plan and rough price. We create prototype/design and include you in feedback. We develop and test. We launch the project online. If desired, we stay with you through support and further development.'
          },
          {
            question: 'Why can\'t it be "fast and cheap"?',
            answer: 'We understand that everyone likes to get the best deal and have the job done immediately. However, quality software requires planning, development and testing. If you want a solution that will actually work, bring clients and last for years, both time and knowledge are invested. In the end, it always pays off more than the "fastest and cheapest" solution.'
          }
        ]
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

  // Auto-rotate service cards
  useEffect(() => {
    if (isUserInteracting) return;
    
    const interval = setInterval(() => {
      setActiveServiceCard((prev) => (prev + 1) % 6);
    }, 5000);

    return () => clearInterval(interval);
  }, [isUserInteracting]);

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
                onClick={() => scrollToSection('faq')} 
                className="block w-full text-left py-2 text-slate-300 hover:text-brand-primary transition-colors"
              >
                {t.nav.faq}
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
      <section id="services" className="py-20 bg-slate-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8 sm:mb-16"
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

          {/* Desktop: Stacked Cards Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-12 gap-8 items-center min-h-[600px]">
              {/* Left Side - Text Content */}
              <div className="col-span-5">
                <div className="space-y-6 min-h-[400px] flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-4">
                    <motion.div
                      key={`icon-${activeServiceCard}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeServiceCard === 0 && <Globe className="w-8 h-8 text-brand-primary" />}
                      {activeServiceCard === 1 && <Smartphone className="w-8 h-8 text-brand-secondary" />}
                      {activeServiceCard === 2 && <Euro className="w-8 h-8 text-brand-highlight" />}
                      {activeServiceCard === 3 && <Settings className="w-8 h-8 text-brand-accent" />}
                      {activeServiceCard === 4 && <Monitor className="w-8 h-8 text-brand-primary" />}
                      {activeServiceCard === 5 && <Headphones className="w-8 h-8 text-brand-secondary" />}
                    </motion.div>
                    <span className="text-sm font-medium text-slate-400">0{activeServiceCard + 1}/06</span>
                  </div>
                  
                  <motion.h3 
                    key={`title-${activeServiceCard}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-white mb-4 min-h-[120px] flex items-center"
                  >
                    {activeServiceCard === 0 && t.services.webApps.title}
                    {activeServiceCard === 1 && t.services.websites.title}
                    {activeServiceCard === 2 && t.services.ecommerce.title}
                    {activeServiceCard === 3 && t.services.automation.title}
                    {activeServiceCard === 4 && t.services.desktop.title}
                    {activeServiceCard === 5 && t.services.consulting.title}
                  </motion.h3>
                  
                  <motion.p 
                    key={`desc-${activeServiceCard}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-xl text-slate-300 leading-relaxed min-h-[80px]"
                  >
                    {activeServiceCard === 0 && t.services.webApps.description}
                    {activeServiceCard === 1 && t.services.websites.description}
                    {activeServiceCard === 2 && t.services.ecommerce.description}
                    {activeServiceCard === 3 && t.services.automation.description}
                    {activeServiceCard === 4 && t.services.desktop.description}
                    {activeServiceCard === 5 && t.services.consulting.description}
                  </motion.p>

                  {/* Navigation Dots */}
                  <div className="flex space-x-3 pt-6">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveServiceCard(index);
                          setIsUserInteracting(true);
                          setTimeout(() => setIsUserInteracting(false), 8000);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === activeServiceCard 
                            ? 'bg-brand-primary scale-125' 
                            : 'bg-slate-600 hover:bg-slate-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Stacked Cards */}
              <div className="col-span-7 relative h-[600px]">
                <div 
                  className="relative w-full h-full flex items-center justify-center"
                  onMouseEnter={() => setIsUserInteracting(true)}
                  onMouseLeave={() => {
                    setTimeout(() => setIsUserInteracting(false), 3000);
                  }}
                >
                  {[0, 1, 2, 3, 4, 5].map((index) => {
                    const isActive = index === activeServiceCard;
                    const offset = index - activeServiceCard;
                    const bgColors = [
                      'from-brand-primary to-brand-primary-dark',
                      'from-brand-secondary to-brand-secondary-dark', 
                      'from-brand-highlight to-brand-highlight-dark',
                      'from-brand-accent to-brand-accent-dark',
                      'from-brand-primary-dark to-brand-primary',
                      'from-brand-secondary-dark to-brand-secondary'
                    ];

                    // Definišemo različite pozicije za neaktivne kartice
                    const getCardPosition = () => {
                      if (isActive) {
                        return {
                          x: 0,
                          y: 0,
                          rotateZ: 0,
                          rotateY: 0,
                          rotateX: 0,
                          scale: 1,
                          opacity: 1,
                          zIndex: 10
                        };
                      }

                      // Kartice iza aktivne (pozitivni offset)
                      if (offset > 0) {
                        const positions = [
                          { x: 60, y: 35, rotateZ: 8, rotateY: 15, rotateX: 5 },    // kartica 1 pozicija iza
                          { x: 45, y: 65, rotateZ: -18, rotateY: 25, rotateX: 8 },  // kartica 2 pozicije iza - rotirana levo
                          { x: 85, y: 50, rotateZ: 15, rotateY: 35, rotateX: 10 },  // kartica 3 pozicije iza
                          { x: 75, y: 80, rotateZ: -12, rotateY: 40, rotateX: 12 }, // kartica 4 pozicije iza
                          { x: 95, y: 60, rotateZ: 20, rotateY: 45, rotateX: 15 }   // kartica 5 pozicija iza
                        ];
                        const pos = positions[offset - 1] || positions[4];
                        
                        return {
                          x: pos.x,
                          y: pos.y,
                          rotateZ: pos.rotateZ,
                          rotateY: pos.rotateY,
                          rotateX: pos.rotateX,
                          scale: 0.85 - (offset * 0.05),
                          opacity: 0.6,
                          zIndex: 10 - offset
                        };
                      }

                      // Kartice ispred aktivne (negativni offset)
                      if (offset < 0) {
                        const positions = [
                          { x: -60, y: 35, rotateZ: -8, rotateY: -15, rotateX: 5 },   // kartica 1 pozicija ispred
                          { x: -45, y: 65, rotateZ: 18, rotateY: -25, rotateX: 8 },   // kartica 2 pozicije ispred - rotirana desno
                          { x: -85, y: 50, rotateZ: -15, rotateY: -35, rotateX: 10 }, // kartica 3 pozicije ispred
                          { x: -75, y: 80, rotateZ: 12, rotateY: -40, rotateX: 12 },  // kartica 4 pozicije ispred
                          { x: -95, y: 60, rotateZ: -20, rotateY: -45, rotateX: 15 }  // kartica 5 pozicija ispred
                        ];
                        const pos = positions[Math.abs(offset) - 1] || positions[4];
                        
                        return {
                          x: pos.x,
                          y: pos.y,
                          rotateZ: pos.rotateZ,
                          rotateY: pos.rotateY,
                          rotateX: pos.rotateX,
                          scale: 0.85 - (Math.abs(offset) * 0.05),
                          opacity: 0.6,
                          zIndex: 10 - Math.abs(offset)
                        };
                      }

                      return { x: 0, y: 0, rotateZ: 0, rotateY: 0, rotateX: 0, scale: 1, opacity: 1, zIndex: 10 };
                    };

                    const position = getCardPosition();

                    return (
                      <motion.div
                        key={index}
                        className={`absolute w-96 h-[450px] rounded-2xl bg-gradient-to-br ${bgColors[index]} shadow-2xl cursor-pointer border border-white/10`}
                        initial={false}
                        animate={{
                          x: position.x,
                          y: position.y,
                          rotateZ: position.rotateZ,
                          rotateY: position.rotateY,
                          rotateX: position.rotateX,
                          scale: position.scale,
                          opacity: position.opacity,
                        }}
                        transition={{
                          duration: 1.2,
                          ease: [0.23, 1, 0.32, 1], // easeOutQuart za glatku animaciju
                          type: "spring",
                          stiffness: 100,
                          damping: 20
                        }}
                        style={{
                          zIndex: position.zIndex,
                          transformStyle: 'preserve-3d',
                          transformOrigin: 'center center'
                        }}
                        drag="x"
                        dragConstraints={{ left: -150, right: 150 }}
                        onDragStart={() => {
                          setIsUserInteracting(true);
                        }}
                        onDragEnd={(event, info) => {
                          if (info.offset.x > 40) {
                            setActiveServiceCard((prev) => (prev - 1 + 6) % 6);
                          } else if (info.offset.x < -40) {
                            setActiveServiceCard((prev) => (prev + 1) % 6);
                          }
                          setTimeout(() => setIsUserInteracting(false), 8000);
                        }}
                        onClick={() => {
                          setActiveServiceCard(index);
                          setIsUserInteracting(true);
                          setTimeout(() => setIsUserInteracting(false), 8000);
                        }}
                        whileHover={{ 
                          scale: isActive ? 1.02 : position.scale * 1.05,
                          rotateZ: isActive ? 0 : position.rotateZ * 0.8,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <div className="w-full h-full p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
                          {/* Background Pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
                          </div>
                          
                          {/* Service Icon */}
                          <div className={`w-28 h-28 rounded-3xl flex items-center justify-center mb-8 backdrop-blur-sm transition-all duration-300 ${
                            index === 1 || index === 3 ? 'bg-slate-800/70' : 'bg-white/25'
                          }`}>
                            {index === 0 && <Globe className="w-14 h-14 text-white drop-shadow-lg" />}
                            {index === 1 && <Smartphone className="w-14 h-14 text-slate-700 drop-shadow-lg" />}
                            {index === 2 && <Euro className="w-14 h-14 text-white drop-shadow-lg" />}
                            {index === 3 && <Settings className="w-14 h-14 text-slate-700 drop-shadow-lg" />}
                            {index === 4 && <Monitor className="w-14 h-14 text-white drop-shadow-lg" />}
                            {index === 5 && <Headphones className="w-14 h-14 text-slate-700 drop-shadow-lg" />}
                          </div>
                          
                          {/* Service Title */}
                          <h4 className={`text-3xl font-bold mb-6 leading-tight ${
                            index === 1 || index === 3 || index === 5 ? 'text-slate-800' : 'text-white'
                          } drop-shadow-md`}>
                            {index === 0 && t.services.webApps.title}
                            {index === 1 && t.services.websites.title}
                            {index === 2 && t.services.ecommerce.title}
                            {index === 3 && t.services.automation.title}
                            {index === 4 && t.services.desktop.title}
                            {index === 5 && t.services.consulting.title}
                          </h4>

                          {/* Rocket Icon in top right corner */}
                          <motion.div 
                            className={`absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center ${
                              index === 1 || index === 3 || index === 5 ? 'bg-slate-800/25' : 'bg-white/15'
                            }`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Rocket className={`w-5 h-5 ${
                              index === 1 || index === 3 || index === 5 ? 'text-slate-700' : 'text-white'
                            }`} />
                          </motion.div>
                          {/* Decorative Element bottom left */}
                          <div className={`absolute bottom-6 left-6 w-16 h-16 rounded-full ${
                            index === 1 || index === 3 || index === 5 ? 'bg-slate-800/15' : 'bg-white/10'
                          }`}></div>
                          
                          {/* Active indicator */}
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 rounded-2xl border-2 border-white/30"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Original Grid Layout */}
          <div className="lg:hidden">
            <ServiceCards
              language={language}
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
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
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

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-800 relative overflow-hidden">
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
                  const marginClasses = [
                    'ml-0', 'ml-12', 'ml-24', 'ml-36', 'ml-48', 'ml-60', 'ml-72', 'ml-96'
                  ];
                  
                  return (
                    <motion.div
                      key={index}
                      className={`${marginClasses[index] || 'ml-96'} max-w-2xl`}
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
