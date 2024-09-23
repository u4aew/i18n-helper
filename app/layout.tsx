import { Open_Sans } from 'next/font/google';
import { Metadata } from 'next';
import type { Viewport } from 'next';
import { Header } from '@/components/Header';
import styles from './layout.module.scss';
import './globals.css';

const roboto = Open_Sans({
  weight: '400',
  subsets: ['latin'],
});

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={roboto.className}>
      <body className={styles.layout}>
      <Header />
        <main className={styles.main}>
          <div className={styles.content}>{children}</div>
        </main>
        <footer className={styles.footer}></footer>
      </body>
    </html>
  );
};

export default RootLayout;

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: '#2196f3',
};

export const metadata: Metadata = {
  title: {
    default: 'My Localizer',
    template: '%s | My Localizer',
  },
  description:
    'An intuitive tool for JSON localization and length analysis across languages.',
  applicationName: 'My Localizer',
  authors: [
    {
      name: 'My Localizer Team',
      url: 'https://mylocalizer.example.com',
    },
  ],
  metadataBase: new URL('https://mylocalizer.example.com'),
  generator: 'Next.js',
  keywords: ['localization', 'JSON', 'translation', 'language', 'length analysis'],
  referrer: 'origin',
  creator: 'My Localizer Team',
  publisher: 'My Localizer Inc.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://mylocalizer.example.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'My Localizer',
    description:
      'An intuitive tool for JSON localization and length analysis across languages.',
    type: 'website',
    url: 'https://localizer.fancyapp.site/',
    siteName: 'My Localizer',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'My Localizer',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: 'My Localizer',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
  },
  abstract: 'An intuitive tool for JSON localization and length analysis.',
  category: 'Software',
  classification: 'Localization Tools',
  other: {
    'msapplication-TileColor': '#0a74da',
  },
};
