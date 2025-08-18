'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Monitor, Smartphone, Euro, Settings, Headphones, Rocket } from 'lucide-react';
import ServiceCards from './components/ServiceCards';
import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function ReaSoftWebsite() {
  const [language, setLanguage] = useState<'sr' | 'en'>('sr');
  const [activeServiceCard, setActiveServiceCard] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

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
            answer: 'Vi dajete osnovne informacije. Tekst, slike i viziju kako želite da vas klijenti vide. Mi radimo sve ostalo: dizajn, razvoj, testiranje i lansiranje. Vodimo ceo proces i brinemo da ne trošite vreme na tehničke detalje. Ako nemate materijale ili jasnu ideju, nema problema. Naš tim će osmisliti ceo dizajn i sadržaj od koncepta do gotovog proizvoda.'
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
            answer: 'You provide basic information. Text, images and vision of how you want clients to see you. We do everything else: design, development, testing and launch. We manage the entire process and ensure you don\'t waste time on technical details. If you don\'t have materials or a clear idea, no problem. Our team will create the entire design and content from concept to finished product.'
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

  // Auto-rotate service cards
  useEffect(() => {
    if (isUserInteracting) return;
    
    const interval = setInterval(() => {
      setActiveServiceCard((prev) => (prev + 1) % 6);
    }, 5000);

    return () => clearInterval(interval);
  }, [isUserInteracting]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        t={t} 
        scrollToSection={scrollToSection} 
      />
      
      <Hero t={t} scrollToSection={scrollToSection} />

      {/* Services Section with Stacked Cards */}
      <section id="services" className="py-20 bg-slate-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-primary to-brand-highlight bg-clip-text text-transparent">
                {t.services.title}
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-4">
              {t.services.subtitle}
            </p>
          </div>

          {/* Desktop: Stacked Cards Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-12 gap-8 items-center min-h-[600px]">
              {/* Left Side - Text Content */}
              <div className="col-span-5">
                <div className="space-y-6 min-h-[400px] flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-4">
                    <div key={`icon-${activeServiceCard}`}>
                      {activeServiceCard === 0 && <Globe className="w-8 h-8 text-brand-primary" />}
                      {activeServiceCard === 1 && <Smartphone className="w-8 h-8 text-brand-secondary" />}
                      {activeServiceCard === 2 && <Euro className="w-8 h-8 text-brand-highlight" />}
                      {activeServiceCard === 3 && <Settings className="w-8 h-8 text-brand-accent" />}
                      {activeServiceCard === 4 && <Monitor className="w-8 h-8 text-brand-primary" />}
                      {activeServiceCard === 5 && <Headphones className="w-8 h-8 text-brand-secondary" />}
                    </div>
                    <span className="text-sm font-medium text-slate-400">0{activeServiceCard + 1}/06</span>
                  </div>
                  
                  <h3 className="text-4xl font-bold text-white mb-4 min-h-[120px] flex items-center">
                    {activeServiceCard === 0 && t.services.webApps.title}
                    {activeServiceCard === 1 && t.services.websites.title}
                    {activeServiceCard === 2 && t.services.ecommerce.title}
                    {activeServiceCard === 3 && t.services.automation.title}
                    {activeServiceCard === 4 && t.services.desktop.title}
                    {activeServiceCard === 5 && t.services.consulting.title}
                  </h3>
                  
                  <p className="text-xl text-slate-300 leading-relaxed min-h-[80px]">
                    {activeServiceCard === 0 && t.services.webApps.description}
                    {activeServiceCard === 1 && t.services.websites.description}
                    {activeServiceCard === 2 && t.services.ecommerce.description}
                    {activeServiceCard === 3 && t.services.automation.description}
                    {activeServiceCard === 4 && t.services.desktop.description}
                    {activeServiceCard === 5 && t.services.consulting.description}
                  </p>

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

      <Process t={t} />

      <Benefits t={t} />

      <FAQ t={t} />

      <Contact t={t} />

      <Footer language={language} />

      <BackToTop />
    </div>
  );
}
