"use client";

import dynamic from 'next/dynamic';
import Navbar from '@/components/organisms/Navbar';
import Hero from '@/components/organisms/Hero';
import EcommerceBanner from '@/components/organisms/EcommerceBanner';
import N8nBanner from '@/components/organisms/N8nBanner';
import PromoBanner from '@/components/organisms/PromoBanner';
import { Rocket } from 'lucide-react';

const Footer = dynamic(() => import('@/components/organisms/Footer'), { ssr: false });
const Toaster = dynamic(() => import('@/components/atoms/toaster').then(mod => mod.Toaster), { ssr: false });

export default function Home() {
  return (
    <main>
      <Navbar />
      
      <Hero />
      <PromoBanner 
        title="Lanza tu proyecto"
        highlight="Este Mes"
        description="Estamos reservando espacios exclusivos para proyectos disruptivos. Obtén una auditoría técnica gratuita de tu idea."
        buttonText="Me Interesa"
        icon={Rocket}
        discount="20%"
        onClick={() => {
          const waNumber = "573193142840";
          const waMessage = "Hola Tupla Core! Me interesa la oferta para lanzar mi proyecto este mes.";
          window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');
        }}
      />
      <N8nBanner />

      <Footer />
      <Toaster />
    </main>
  );
}