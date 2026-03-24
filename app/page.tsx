"use client";

import Navbar from '@/components/organisms/Navbar';
import Hero from '@/components/organisms/Hero';
import EcommerceBanner from '@/components/organisms/EcommerceBanner';
import PromoBanner from '@/components/organisms/PromoBanner';
import { ShoppingBag } from 'lucide-react';

import N8nSalesBanner from '@/components/organisms/N8nSalesBanner';
import Footer from '@/components/organisms/Footer';
import { Toaster } from '@/components/atoms/toaster';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PromoBanner
        title="Lanza tu tienda"
        highlight="E-commerce Profesional"
        description="Aprovecha esta oportunidad única para digitalizar tu negocio con tecnología de punta y diseño de clase mundial."
        discount="20%"
        icon={ShoppingBag}
        buttonText="Obtener Descuento"
        variant="navy"
        onClick={() => {
          const waNumber = "573193142840";
          const waMessage = "Hola! Vi la promo del 20% para lanzar mi tienda online y me gustaría aprovecharla.";
          window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');
        }}
      />
      <EcommerceBanner 
        onClick={() => {
          const waNumber = "573193142840";
          const waMessage = "Hola! Me gustaría lanzar mi tienda online con Tupla Core.";
          window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');
        }}
      />
      <N8nSalesBanner />
      <Footer />
      <Toaster />
    </main>
  );
}