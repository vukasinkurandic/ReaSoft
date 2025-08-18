import { Metadata } from 'next';
import AboutUsClient from './client';

// SEO metadata for About Us page - server component
export const metadata: Metadata = {
  title: 'O nama - ReaSoft | Profesionalni razvoj softvera i izrada sajtova Srbija',
  description: 'Saznajte više o ReaSoft timu. Specijalizovani smo za razvoj softvera po meri, izradu sajtova za firme u Srbiji, automatizaciju poslovanja. Pokrivamo Beograd, Novi Sad, Niš, Kragujevac, Kruševac, Kraljevo. Moderne tehnologije Python, Django, React, Next.js.',
  keywords: 'o nama ReaSoft, tim za razvoj softvera, izrada sajtova tim Srbija, automatizacija poslovanja eksperi, IT konsalting Beograd, web aplikacije developeri, Python Django programeri Srbija, React Next.js developers Belgrade, custom software development team Serbia',
  authors: [{ name: 'ReaSoft Team' }],
  creator: 'ReaSoft',
  publisher: 'ReaSoft',
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: 'https://reasoft.rs/about-us',
    title: 'O nama - ReaSoft | Profesionalni tim za razvoj softvera Srbija',
    description: 'Upoznajte ReaSoft tim koji kreira digitalna rešenja za firme u Srbiji. Specijalizovani za razvoj softvera po meri, automatizaciju poslovanja i IT konsalting.',
    siteName: 'ReaSoft',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O nama - ReaSoft | Razvoj softvera po meri',
    description: 'Profesionalni tim za razvoj softvera, izradu sajtova i automatizaciju poslovanja u Srbiji.',
  },
  alternates: {
    canonical: 'https://reasoft.rs/about-us',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// Server component wrapper with metadata
export default function AboutUsPage() {
  return <AboutUsClient />;
}
