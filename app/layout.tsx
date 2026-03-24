import './globals.css';
import type { Metadata } from 'next';
import { Inter, Audiowide } from 'next/font/google';

import AOSProvider from '@/components/atoms/aos/AOSProvider';
import { ThemeProvider } from '@/components/providers/theme-provider';

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
  title: 'TUPLΛ CΩRE - Soluciones Tecnológicas Innovadoras',
  description: 'Desarrollo de páginas web, aplicaciones móviles y software a medida para empresas que buscan digitalizar sus operaciones. Tecnología moderna, confiable y profesional.',
  keywords: 'desarrollo web, aplicaciones móviles, software a medida, tecnología, digitalización, TUPLΛ CΩRE',
  authors: [{ name: 'TUPLΛ CΩRE' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.svg',
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
          </AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
