import './globals.css';
import type { Metadata } from 'next';
import { Inter, Audiowide } from 'next/font/google';

import AOSProvider from '@/components/atoms/aos/AOSProvider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import WhatsAppButton from '@/components/atoms/WhatsAppButton';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const audiowide = Audiowide({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-audiowide',
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
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${audiowide.variable}`}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AOSProvider>
            {children}
            <WhatsAppButton />
          </AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
