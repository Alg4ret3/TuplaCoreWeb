"use client";

import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import Services from '@/components/organisms/Services';
import PromoBanner from '@/components/organisms/PromoBanner';
import { Globe, Smartphone, BrainCircuit } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="p-0">
        <Services />
        
        {/* Promotional Banners Section */}
        <div className="space-y-0 pb-0">
          <PromoBanner
            title="Lleva tu empresa al"
            highlight="Siguiente Nivel Web"
            description="Desarrollamos ecosistemas digitales ultra-veloces, optimizados para SEO y diseñados para maximizar tus conversiones desde el primer día."
            icon={Globe}
            buttonText="Iniciar Proyecto Web"
            variant="slate"
          />
          
          <PromoBanner
            title="Conecta en cualquier"
            highlight="Dispositivo Móvil"
            description="Apps nativas y multiplataforma con interfaces fluidas que garantizan una experiencia de usuario superior en iOS y Android."
            icon={Smartphone}
            buttonText="Cotizar mi App"
            variant="navy"
          />

          <PromoBanner
            title="Automatiza con"
            highlight="Agentes de IA"
            description="Implementamos flujos inteligentes con n8n y modelos de IA para que tu negocio funcione 24/7 sin errores humanos."
            icon={BrainCircuit}
            buttonText="Consultar sobre IA"
            variant="charcoal"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
