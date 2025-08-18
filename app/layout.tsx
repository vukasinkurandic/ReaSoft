import { ReactNode } from 'react';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ReaSoft - Automatizacija i Web Razvoj',
  description: 'Mi ga činimo jednostavnim u nekoliko klikova! Automatizacija procesa, web aplikacije, e-commerce rešenja i IT konsalting.',
  keywords: 'automatizacija, web development, e-commerce, IT konsalting, web aplikacije, ReaSoft',
  authors: [{ name: 'ReaSoft' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
  },
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="sr">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#D6A99D" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
