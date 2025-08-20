import { ReactNode } from 'react';
import { Metadata } from 'next';
import './globals.css';

// SEO optimized metadata with Serbian keywords for local search
export const metadata: Metadata = {
  title: 'ReaSoft - Razvoj softvera po meri i izrada sajtova za firme u Srbiji | Beograd, Niš, Novi Sad',
  description: 'Profesionalni razvoj softvera po meri, izrada sajtova Beograd, Niš, Novi Sad, Kragujevac, Kruševac, Kraljevo. Sajt za firmu, sajt za biznis, automatizacija poslovanja softver za male firme Srbija. Poboljšajte poslovanje sa našim rešenjima.',
  keywords: 'razvoj softvera po meri, izrada sajtova Beograd, izrada sajtova Niš, izrada sajtova Novi Sad, izrada sajtova Kragujevac, izrada sajtova Kruševac, izrada sajtova Kraljevo, sajt za firmu, sajt za biznis, sajt za poboljšanje poslovanja, automatizacija poslovanja softver, softver za male firme Srbija, web aplikacije, mobilne aplikacije, e-commerce, custom software development Serbia, website development Belgrade',
  authors: [{ name: 'ReaSoft' }],
  creator: 'ReaSoft',
  publisher: 'ReaSoft',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: 'https://reasoft.rs',
    title: 'ReaSoft - Razvoj softvera po meri i izrada sajtova za firme u Srbiji',
    description: 'Profesionalni razvoj softvera po meri, izrada sajtova Beograd, Niš, Novi Sad, Kragujevac, Kruševac, Kraljevo. Sajt za firmu, automatizacija poslovanja, softver za male firme Srbija.',
    siteName: 'ReaSoft',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReaSoft - Razvoj softvera po meri i izrada sajtova',
    description: 'Profesionalni razvoj softvera po meri, izrada sajtova za firme u Srbiji. Automatizacija poslovanja i IT rešenja.',
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
      },
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        url: '/favicon.svg',
      },
    ],
  },
  alternates: {
    canonical: 'https://reasoft.rs',
    languages: {
      'sr': 'https://reasoft.rs',
      'en': 'https://reasoft.rs?lang=en',
      'x-default': 'https://reasoft.rs'
    }
  },
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="sr" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        {/* Favicon and icons for all devices */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.svg" type="image/svg+xml" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme colors for different devices */}
        <meta name="theme-color" content="#334155" />
        <meta name="msapplication-TileColor" content="#334155" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Preload critical resources for Core Web Vitals */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CN2D28V8LE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CN2D28V8LE');
            `
          }}
        />
        
        {/* Hreflang links for multilingual SEO */}
        <link rel="alternate" hrefLang="sr" href="https://reasoft.rs" />
        <link rel="alternate" hrefLang="en" href="https://reasoft.rs?lang=en" />
        <link rel="alternate" hrefLang="x-default" href="https://reasoft.rs" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://reasoft.rs/#organization',
              name: 'ReaSoft',
              alternateName: 'ReaSoft - Razvoj softvera',
              description: 'Profesionalni razvoj softvera po meri, izrada sajtova za firme u Srbiji, automatizacija poslovanja i IT konsalting usluge. Professional custom software development, website creation for companies in Serbia, business automation and IT consulting services.',
              url: 'https://reasoft.rs',
              logo: 'https://reasoft.rs/favicon.svg',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+381659210912',
                contactType: 'customer service',
                areaServed: 'RS',
                availableLanguage: ['Serbian', 'English']
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Vaša adresa',
                addressLocality: 'Beograd',
                addressRegion: 'Beograd',
                postalCode: '11000',
                addressCountry: 'RS'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 44.7866,
                longitude: 20.4489
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Beograd',
                  addressCountry: 'RS'
                },
                {
                  '@type': 'City', 
                  name: 'Novi Sad',
                  addressCountry: 'RS'
                },
                {
                  '@type': 'City',
                  name: 'Niš', 
                  addressCountry: 'RS'
                },
                {
                  '@type': 'City',
                  name: 'Kragujevac',
                  addressCountry: 'RS'
                },
                {
                  '@type': 'City',
                  name: 'Kruševac',
                  addressCountry: 'RS'
                },
                {
                  '@type': 'City',
                  name: 'Kraljevo',
                  addressCountry: 'RS'
                }
              ],
              priceRange: '$$',
              telephone: '+381659210912',
              email: 'info@reasoft.rs',
              foundingDate: '2024',
              numberOfEmployees: '1-10',
              slogan: 'Mi ga činimo jednostavnim u nekoliko klikova! / We make it simple in just a few clicks!',
              serviceArea: {
                '@type': 'Country',
                name: 'Serbia'
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'IT usluge',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Razvoj softvera po meri',
                      description: 'Kreiramo moderne web aplikacije koje automatizuju vaše procese i povećavaju efikasnost'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service', 
                      name: 'Izrada sajtova za firme',
                      description: 'Dizajniramo i razvijamo profesionalne web sajtove koji privlače klijente'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Automatizacija poslovanja', 
                      description: 'Kompletna automatizacija dosadnih zadataka i poslovnih procesa'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'IT konsalting',
                      description: 'Stručno savetovanje za digitalizaciju i optimizaciju poslovanja'
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
