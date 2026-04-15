"use client";
import type { MotionProps } from "framer-motion";
import { m } from "framer-motion";
import { Globe, Smartphone, Settings, ArrowRight, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";

const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.16, 1, 0.3, 1],
  },
  viewport: { once: true },
});

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Agentes de IA con n8n",
      description: "Automatización inteligente. Agentes de IA integrados con n8n que transforman flujos de trabajo repetitivos en sistemas autónomos.",
      features: ["Agentes Autónomos", "Integración n8n", "Automatización de Procesos", "IA Conversacional"],
      hoverBg: "group-hover:bg-white/[0.03]",
    },
    {
      icon: Globe,
      title: "Desarrollo Web a Medida",
      description: "Interfaces que respiran. Sitios web y plataformas personalizadas que fusionan estética editorial con rendimiento extremo.",
      features: ["Next.js & React", "SEO Arquitectónico", "UX Minimalista", "Cloud Solutions"],
      hoverBg: "group-hover:bg-white/[0.03]",
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description: "Experiencias nativas fluidas. Diseñamos apps para el pulgar y para la vista, priorizando simplicidad y rendimiento.",
      features: ["iOS & Android", "React Native", "Micro-interacciones", "Push Intelligence"],
      hoverBg: "group-hover:bg-white/[0.03]",
    },
  ];

  return (
    <section id="servicios" className="py-32 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-24 text-center lg:text-left">
          <m.h2
            {...fadeUp(0)}
            className="text-4xl md:text-6xl font-light text-white uppercase tracking-extrawide font-outfit mb-8"
          >
            Nuestros <span className="font-bold">Servicios</span>
          </m.h2>

          <m.p
            {...fadeUp(0.1)}
            className="text-gray-500 max-w-2xl text-[10px] uppercase tracking-widest leading-relaxed font-bold"
          >
            Llevamos la ingeniería al plano artístico. No entregamos código, 
            entregamos soluciones diseñadas para perdurar y destacar en el ecosistema digital moderno.
          </m.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <m.div key={index} {...fadeUp(0.1 * index)}>
                <Card className={`bg-transparent border-white/5 hover:border-white/20 transition-all duration-700 h-full flex flex-col group p-8 rounded-xl overflow-hidden relative ${service.hoverBg}`}>
                  <CardHeader className="p-0 mb-8 z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform duration-500">
                        <IconComponent size={20} strokeWidth={1.5} />
                      </div>
                      <CardTitle className="text-sm font-bold uppercase tracking-extrawide text-white font-outfit">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-gray-400 text-xs uppercase tracking-widest leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 space-y-10 z-10 flex-grow">
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <Check className="h-3 w-3 text-white/40" />
                          <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t border-white/5 mt-auto">
                      <button className="flex items-center space-x-3 text-white text-[10px] uppercase tracking-extrawide font-bold group/btn">
                        <span>Saber más</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
