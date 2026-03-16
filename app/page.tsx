"use client";

import Navbar from '@/components/organisms/Navbar';
import Hero from '@/components/organisms/Hero';
import EcommerceBanner from '@/components/organisms/EcommerceBanner';
import PromoBanner from '@/components/organisms/PromoBanner';
import { ShoppingBag } from 'lucide-react';
import VideoShowcase from '@/components/organisms/VideoShowcase';
import N8nBanner from '@/components/organisms/N8nBanner';
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
      />
      <EcommerceBanner />
      <VideoShowcase />
      <N8nBanner />
      <Footer />
      <Toaster />
    </main>
  );
}