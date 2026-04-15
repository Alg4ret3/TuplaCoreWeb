import './globals.css';
import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';

import AOSProvider from '@/components/atoms/aos/AOSProvider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { FramerProvider } from '@/components/providers/framer-provider';

import WhatsAppButton from '@/components/atoms/WhatsAppButton';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Desarrollo Web en Pasto | Apps y Software a Medida - TUPLΛ CORE',
  description: 'Empresa de desarrollo web en Pasto. Creamos páginas web, apps móviles y software a medida para empresas.',
  keywords: 'desarrollo web Pasto, software a medida Colombia, aplicaciones móviles, tupla core, tuplla core, tupla core colombia, tupla core pasto',
  authors: [{ name: 'TUPLΛ CORE' }],
  metadataBase: new URL('https://tuplla-core.vercel.app'),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Desarrollo Web en Pasto | TUPLΛ CORE',
    description: 'Creamos páginas web, apps y software a medida.',
    url: 'https://tuplla-core.vercel.app',
    siteName: 'TUPLΛ CORE',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TUPLΛ CORE',
    description: 'Desarrollo web y software a medida',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className={`${inter.className} bg-black text-white relative`}>
        {/* Persistent Video Background - GLOBAL */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover brightness-[0.5] contrast-[1.1]"
          >
            <source 
              src="https://res.cloudinary.com/dqky6oqrd/video/upload/f_auto,q_auto/v1776289495/lcsg5tvt1nriu8ffr7tw.mp4" 
              type="video/mp4" 
            />
          </video>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
        </div>

        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-tupla-primary focus:text-white focus:rounded-md focus:outline-none"
        >
          Saltar al contenido principal
        </a>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <FramerProvider>
            <AOSProvider>
              <main id="main-content" className="relative z-10 font-outfit">
                {children}
              </main>
              <WhatsAppButton />
            </AOSProvider>
          </FramerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
