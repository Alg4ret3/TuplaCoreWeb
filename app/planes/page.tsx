"use client";

import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import { m } from "framer-motion";
import { Check, Zap, Bot, Crown, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/atoms/button";

const plans = [
  {
    name: "Starter",
    price: "$1.200.000",
    description: "Ideal para pequeñas empresas que inician su viaje hacia la eficiencia.",
    icon: Zap,
    features: [
      "2 Flujos de trabajo automatizados",
      "1 Agente de IA Estándar",
      "Integración con 1 CRM",
      "Soporte vía Email",
      "Panel de control básico"
    ],
    color: "emerald",
    cta: "Comenzar ahora",
    waMessage: "Hola! Estoy interesado en el plan Starter ($1.200.000 COP) de Automatización."
  },
  {
    name: "Business",
    price: "$3.200.000",
    description: "La solución completa para escalar operaciones con inteligencia artificial.",
    icon: Bot,
    popular: true,
    features: [
      "10 Flujos de trabajo complejos",
      "5 Agentes de IA Colaborativos",
      "Sincronización CRM & ERP",
      "Soporte Prioritario 12/5",
      "Dashboard de Analítica Avanzada",
      "Capacitación para el equipo"
    ],
    color: "tupla-accent",
    cta: "Elegir plan Pro",
    waMessage: "Hola! Estoy interesado en el plan Business ($3.200.000 COP) de Automatización."
  },
  {
    name: "Elite",
    price: "Custom",
    description: "Ecosistemas de IA a medida para empresas de alto impacto global.",
    icon: Crown,
    features: [
      "Automatizaciones Ilimitadas",
      "Enjambre de Agentes de IA (Multi-rol)",
      "Infraestructura Dedicada",
      "Soporte 24/7 & Consultoría",
      "Seguridad de Grado Empresarial",
      "Desarrollo de integraciones custom"
    ],
    color: "purple",
    cta: "Contactar Ventas",
    waMessage: "Hola! Estoy interesado en el plan Elite de Automatización."
  }
];

export default function PlanesPage() {
  const waNumber = "573193142840";

  return (
    <main className="min-h-screen bg-white dark:bg-[#050510] text-tupla-dark dark:text-white overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-tupla-primary/10 via-transparent to-transparent opacity-50" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-tupla-accent/10 border border-tupla-accent/20 text-[0.65rem] font-black tracking-[0.3em] text-tupla-accent uppercase mb-6">
              <Sparkles size={12} className="animate-pulse" />
              <span>Inversión en Eficiencia</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black italic uppercase tracking-tighter mb-6">
              Escala tu negocio con <br />
              <span className="text-tupla-accent">Planes Inteligentes</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed">
              Elige el nivel de automatización que tu empresa necesita para eliminar 
              el trabajo manual y multiplicar la productividad.
            </p>
          </m.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <m.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.5 }}
              className={`relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 group
                ${plan.popular 
                  ? "bg-tupla-dark dark:bg-tupla-dark/90 text-white border-tupla-accent shadow-[0_20px_50px_rgba(30,144,255,0.2)] lg:scale-105 z-20" 
                  : "bg-white/70 dark:bg-white/5 border-black/10 dark:border-white/10 hover:border-tupla-primary/30 z-10 text-tupla-dark dark:text-white"
                } backdrop-blur-xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-tupla-accent text-[10px] font-black px-4 py-1.5 rounded-full tracking-[0.2em] shadow-lg uppercase">
                  Más Popular
                </div>
              )}

              <div className="mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 
                  ${plan.popular ? 'bg-tupla-accent/20' : 'bg-gray-100 dark:bg-white/5'} transition-transform group-hover:scale-110`}>
                  <plan.icon className={plan.popular ? "text-tupla-accent" : "text-tupla-primary"} size={28} />
                </div>
                <h3 className="text-2xl font-black italic uppercase tracking-tight mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black tracking-tighter">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-sm opacity-60">COP/mes</span>}
                </div>
                <p className="mt-4 text-sm opacity-70 leading-relaxed min-h-[3rem]">
                  {plan.description}
                </p>
              </div>

              <div className="flex-1 space-y-4 mb-10">
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`mt-1 p-0.5 rounded-full ${plan.popular ? 'bg-tupla-accent' : 'bg-tupla-primary'} text-white`}>
                      <Check size={10} />
                    </div>
                    <span className="text-sm font-medium tracking-tight opacity-90">{feat}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(plan.waMessage)}`, '_blank')}
                className={`w-full py-7 rounded-2xl font-black text-sm uppercase tracking-widest transition-all group/btn 
                  ${plan.popular 
                    ? 'bg-tupla-accent hover:bg-white hover:text-tupla-dark text-white' 
                    : 'bg-black dark:bg-white text-white dark:text-tupla-dark hover:bg-tupla-primary hover:text-white dark:hover:bg-tupla-accent dark:hover:text-white'
                  }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </m.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
