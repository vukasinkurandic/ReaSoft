'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Lightbulb, MapPin, Phone, Mail, ArrowLeft, Users, Target, Award, Heart, Eye, Zap } from 'lucide-react';
import Link from 'next/link';

export default function AboutUsPage() {
  const [language, setLanguage] = useState<'sr' | 'en'>('sr');

  const content = {
    sr: {
      title: 'O nama - ReaSoft',
      subtitle: 'Profesionalni razvoj softvera po meri i izrada sajtova za firme u Srbiji',
      description1: 'ReaSoft je kompanija specializovana za <strong>razvoj softvera po meri</strong> i <strong>izradu sajtova za firme</strong> u Srbiji. Osnovali smo kompaniju sa jasnom vizijom - kreiranje digitalnih rešenja koja stvarno poboljšavaju poslovanje naših klijenata.',
      description2: 'Koristimo moderne tehnologije kao što su <strong>Python, Django, React i Next.js</strong> kako bismo kreirali rešenja koja su ne samo funkcionalna, već i skalabilna za budući rast vašeg poslovanja.',
      description3: 'Specijalizovani smo za <strong>automatizaciju poslovanja</strong> kroz prilagođene web aplikacije koje štede vreme i povećavaju efikasnost. Bez obzira da li vam je potreban jednostavan sajt za firmu ili kompleksna aplikacija za upravljanje podacima, mi imamo iskustvo i znanje da realizujemo vaš projekat.',
      ourStory: {
        title: 'Naša priča',
        description: 'Započeli smo sa idejom da digitalna transformacija ne mora biti komplikovana. Svaki biznis zaslužuje alate koji mu omogućavaju da se fokusira na ono što najbolje radi, umesto da se bori sa tehnologijama. Zato kreiramo rešenja koja "jednostavno rade".'
      },
      ourMission: {
        title: 'Naša misija',
        description: 'Jednostavno - činimo složene zadatke jednostavnim. Verujemo da dobra tehnologija treba da rešava probleme, a ne da ih stvara. Zato se fokusiramo na kreiranje intuitivnih rešenja koja vaši zaposleni mogu lako da koriste.'
      },
      ourVision: {
        title: 'Naša vizija',
        description: 'Biti vodeći partner za digitalno poslovanje malih i srednjih preduzeća u Srbiji. Želimo da budemo poznati po tome što svaki naš klijent dobija rešenje koje prevazilazi očekivanja.'
      },
      whyUs: {
        title: 'Zašto ReaSoft?',
        experience: {
          title: 'Iskustvo koje se računa',
          description: 'Godinama rada na projektima različitih veličina - od manjih sajtova do kompleksnih desktop aplikacija. Svaki projekat je učinio naš tim iskusnijim.'
        },
        technology: {
          title: 'Moderne tehnologije',
          description: 'Python, Django, React, Next.js, Node.js, PostgreSQL - koristimo alate koji garantuju kvalitet, performanse i dugoročnu održivost.'
        },
        approach: {
          title: 'Partnerski pristup',
          description: 'Ne samo da isporučujemo projekat - gradimo dugoročno partnerstvo. Naši klijenti mogu uvek da računaju na nas za podršku, unapređenja i nova rešenja.'
        }
      },
      ourValues: {
        title: 'Naše vrednosti',
        quality: {
          title: 'Kvalitet pre brzine',
          description: 'Radije ćemo uložiti dodatno vreme da nešto uradimo kako treba, nego da žurimo i pravimo kompromise.'
        },
        transparency: {
          title: 'Transparentnost',
          description: 'Jasna komunikacija, realne procene vremena i budžeta. Bez skrivenih troškova ili nejasnoća.'
        },
        innovation: {
          title: 'Inovativnost',
          description: 'Konstantno učimo nove tehnologije i pristupe kako bismo našim klijentima pružili najbolja rešenja.'
        }
      },
      services: {
        title: 'Naše specijalizacije',
        webApps: 'Razvoj web aplikacija po meri',
        websites: 'Izrada profesionalnih sajtova za firme',
        automation: 'Automatizacija poslovnih procesa',
        ecommerce: 'E-commerce i web prodavnice',
        consulting: 'IT konsalting i optimizacija poslovanja',
        support: 'Tehnička podrška i održavanje'
      },
      coverage: {
        title: 'Pokrivamo celu Srbiju',
        description: 'Radimo sa klijentima iz svih većih gradova u Srbiji - <strong>Beograd, Novi Sad, Niš, Kragujevac, Kruševac, Kraljevo</strong> i ostali. Većinu komunikacije obavljamo online, ali organizujemo i lične sastanke kada je to potrebno.',
        cities: ['Beograd', 'Novi Sad', 'Niš', 'Kragujevac', 'Kruševac', 'Kraljevo', 'Subotica', 'Pančevo', 'Čačak', 'Leskovac']
      },
      contact: {
        title: 'Kontaktirajte nas',
        description: 'Spremni smo da razgovaramo o vašem sledećem projektu',
        phone: '+381659210912',
        email: 'info@reasoft.rs',
        location: 'Srbija (radimo remote sa celom zemljom)'
      },
      backToHome: 'Nazad na početnu'
    },
    en: {
      title: 'About Us - ReaSoft',
      subtitle: 'Professional custom software development and website creation for companies in Serbia',
      description1: 'ReaSoft is a company specialized in <strong>custom software development</strong> and <strong>website creation for companies</strong> in Serbia. We founded the company with a clear vision - creating digital solutions that truly improve our clients\' business operations.',
      description2: 'We use modern technologies such as <strong>Python, Django, React and Next.js</strong> to create solutions that are not only functional, but also scalable for the future growth of your business.',
      description3: 'We specialize in <strong>business automation</strong> through custom web applications that save time and increase efficiency. Whether you need a simple business website or a complex data management application, we have the experience and knowledge to realize your project.',
      ourStory: {
        title: 'Our Story',
        description: 'We started with the idea that digital transformation doesn\'t have to be complicated. Every business deserves tools that allow them to focus on what they do best, instead of struggling with technology. That\'s why we create solutions that "just work".'
      },
      ourMission: {
        title: 'Our Mission',
        description: 'Simple - we make complex tasks simple. We believe that good technology should solve problems, not create them. That\'s why we focus on creating intuitive solutions that your employees can easily use.'
      },
      ourVision: {
        title: 'Our Vision',
        description: 'To be the leading partner for digital business of small and medium enterprises in Serbia. We want to be known for ensuring every client gets a solution that exceeds expectations.'
      },
      whyUs: {
        title: 'Why ReaSoft?',
        experience: {
          title: 'Experience that counts',
          description: 'Years of work on projects of various sizes - from smaller websites to complex desktop applications. Each project has made our team more experienced.'
        },
        technology: {
          title: 'Modern technologies',
          description: 'Python, Django, React, Next.js, Node.js, PostgreSQL - we use tools that guarantee quality, performance and long-term maintainability.'
        },
        approach: {
          title: 'Partnership approach',
          description: 'We don\'t just deliver the project - we build long-term partnerships. Our clients can always count on us for support, improvements and new solutions.'
        }
      },
      ourValues: {
        title: 'Our Values',
        quality: {
          title: 'Quality before speed',
          description: 'We\'d rather invest extra time to do something right than rush and make compromises.'
        },
        transparency: {
          title: 'Transparency',
          description: 'Clear communication, realistic time and budget estimates. No hidden costs or ambiguities.'
        },
        innovation: {
          title: 'Innovation',
          description: 'We constantly learn new technologies and approaches to provide our clients with the best solutions.'
        }
      },
      services: {
        title: 'Our specializations',
        webApps: 'Custom web application development',
        websites: 'Professional business website creation',
        automation: 'Business process automation',
        ecommerce: 'E-commerce and online stores',
        consulting: 'IT consulting and business optimization',
        support: 'Technical support and maintenance'
      },
      coverage: {
        title: 'We cover all of Serbia',
        description: 'We work with clients from all major cities in Serbia - <strong>Belgrade, Novi Sad, Niš, Kragujevac, Kruševac, Kraljevo</strong> and others. We handle most communication online, but we also organize face-to-face meetings when needed.',
        cities: ['Belgrade', 'Novi Sad', 'Niš', 'Kragujevac', 'Kruševac', 'Kraljevo', 'Subotica', 'Pančevo', 'Čačak', 'Leskovac']
      },
      contact: {
        title: 'Contact Us',
        description: 'We\'re ready to discuss your next project',
        phone: '+381659210912',
        email: 'info@reasoft.rs',
        location: 'Serbia (we work remotely throughout the country)'
      },
      backToHome: 'Back to Home'
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header with language toggle */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 text-brand-primary hover:text-brand-highlight transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>{t.backToHome}</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'sr' ? 'en' : 'sr')}
              className="px-3 py-1 rounded bg-slate-700 hover:bg-slate-600 transition-colors"
            >
              {language === 'sr' ? 'EN' : 'SR'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-brand-primary to-brand-highlight bg-clip-text text-transparent">
              {t.title}
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* About Description */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.description1 }}></p>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.description2 }}></p>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.description3 }}></p>
            </motion.div>

            {/* Our Story */}
            <motion.div 
              className="mb-16 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-brand-primary mr-4" />
                <h2 className="text-3xl font-bold text-white">{t.ourStory.title}</h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">{t.ourStory.description}</p>
            </motion.div>

            {/* Mission, Vision & Values Grid */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Mission */}
                <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                  <div className="flex items-center mb-6">
                    <Target className="w-8 h-8 text-brand-secondary mr-4" />
                    <h3 className="text-2xl font-bold text-white">{t.ourMission.title}</h3>
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed">{t.ourMission.description}</p>
                </div>

                {/* Vision */}
                <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                  <div className="flex items-center mb-6">
                    <Eye className="w-8 h-8 text-brand-highlight mr-4" />
                    <h3 className="text-2xl font-bold text-white">{t.ourVision.title}</h3>
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed">{t.ourVision.description}</p>
                </div>
              </div>

              {/* Values */}
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-3xl font-bold mb-8 text-center">
                  <span className="bg-gradient-to-r from-brand-accent to-brand-primary bg-clip-text text-transparent">
                    {t.ourValues.title}
                  </span>
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Heart className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-3">{t.ourValues.quality.title}</h4>
                    <p className="text-slate-300">{t.ourValues.quality.description}</p>
                  </div>
                  <div className="text-center">
                    <Eye className="w-12 h-12 text-brand-secondary mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-3">{t.ourValues.transparency.title}</h4>
                    <p className="text-slate-300">{t.ourValues.transparency.description}</p>
                  </div>
                  <div className="text-center">
                    <Zap className="w-12 h-12 text-brand-highlight mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-3">{t.ourValues.innovation.title}</h4>
                    <p className="text-slate-300">{t.ourValues.innovation.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Why Us */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="bg-gradient-to-r from-brand-secondary to-brand-accent bg-clip-text text-transparent">
                  {t.whyUs.title}
                </span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-brand-primary transition-colors">
                  <Code2 className="w-12 h-12 text-brand-primary mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{t.whyUs.experience.title}</h3>
                  <p className="text-slate-300">{t.whyUs.experience.description}</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-brand-secondary transition-colors">
                  <Globe className="w-12 h-12 text-brand-secondary mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{t.whyUs.technology.title}</h3>
                  <p className="text-slate-300">{t.whyUs.technology.description}</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-brand-highlight transition-colors">
                  <Lightbulb className="w-12 h-12 text-brand-highlight mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{t.whyUs.approach.title}</h3>
                  <p className="text-slate-300">{t.whyUs.approach.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-brand-accent to-brand-primary bg-clip-text text-transparent">
                  {t.services.title}
                </span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 bg-slate-800 rounded-lg p-4 hover:bg-slate-750 transition-colors">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span className="text-slate-300">{t.services.webApps}</span>
                </div>
                <div className="flex items-center space-x-3 bg-slate-800 rounded-lg p-4 hover:bg-slate-750 transition-colors">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                  <span className="text-slate-300">{t.services.websites}</span>
                </div>
                <div className="flex items-center space-x-3 bg-slate-800 rounded-lg p-4 hover:bg-slate-750 transition-colors">
                  <div className="w-2 h-2 bg-brand-highlight rounded-full"></div>
                  <span className="text-slate-300">{t.services.automation}</span>
                </div>
                <div className="flex items-center space-x-3 bg-slate-800 rounded-lg p-4 hover:bg-slate-750 transition-colors">
                  <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                  <span className="text-slate-300">{t.services.ecommerce}</span>
                </div>
                <div className="flex items-center space-x-3 bg-slate-800 rounded-lg p-4 hover:bg-slate-750 transition-colors">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span className="text-slate-300">{t.services.consulting}</span>
                </div>
                <div className="flex items-center space-x-3 bg-slate-800 rounded-lg p-4 hover:bg-slate-750 transition-colors">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                  <span className="text-slate-300">{t.services.support}</span>
                </div>
              </div>
            </motion.div>

            {/* Coverage */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-brand-secondary mr-4" />
                  <h2 className="text-3xl font-bold text-white">{t.coverage.title}</h2>
                </div>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.coverage.description }}></p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {t.coverage.cities.map((city, index) => (
                    <div key={index} className="bg-slate-900 rounded-lg px-3 py-2 text-center hover:bg-slate-800 transition-colors">
                      <span className="text-sm text-slate-300">{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div 
              className="text-center bg-slate-800 rounded-2xl p-8 border border-slate-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                  {t.contact.title}
                </span>
              </h2>
              <p className="text-lg text-slate-300 mb-8">{t.contact.description}</p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-brand-primary" />
                  <span className="text-slate-300">{t.contact.phone}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-brand-secondary" />
                  <span className="text-slate-300">{t.contact.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-5 h-5 text-brand-highlight" />
                  <span className="text-slate-300">{t.contact.location}</span>
                </div>
              </div>
              
              <Link 
                href="/#kontakt"
                className="inline-block px-8 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full text-white font-semibold hover:from-brand-primary-dark hover:to-brand-secondary-dark transition-all duration-300 transform hover:scale-105"
              >
                {language === 'sr' ? 'Kontaktirajte nas' : 'Contact Us'}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
