"use client";

import { m } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
      }
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Background is now global in page.tsx */}


      <m.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
      >
        <header>
          {/* Minimalist Badge */}
          <m.div variants={itemVariants} className="mb-10">
            <span className="inline-block text-[10px] font-bold tracking-extrawide uppercase text-white border border-white/20 px-6 py-2 rounded-full backdrop-blur-md">
              Tupla Core Studio
            </span>
          </m.div>

          {/* Ultra-Minimalist Title */}
          <m.h1 
            variants={itemVariants} 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[110px] font-outfit font-light leading-[1.1] sm:leading-[0.9] lg:leading-[0.85] tracking-extrawide text-white uppercase text-center"
          >
            <span className="opacity-10 block mb-2 sm:mb-4">Diseñamos</span>
            <span className="opacity-30 block mb-2 sm:mb-4">El Futuro</span>
            <span className="text-white font-bold block">Digital</span>
          </m.h1>
        </header>

        {/* Subtitle */}
        <m.p 
          variants={itemVariants} 
          className="mt-8 sm:mt-12 text-gray-400 max-w-xs sm:max-w-2xl mx-auto text-[10px] md:text-sm font-outfit tracking-extrawide uppercase leading-relaxed px-4"
        >
          Creamos experiencias tecnológicas de alto impacto que fusionan arte,
          estratégia y software de vanguardia.
        </m.p>

        {/* CTA Actions */}
        <nav aria-label="CTA links">
          <m.div 
            variants={itemVariants} 
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <Button
              size="lg"
              aria-label="Solicitar cotización por WhatsApp"
              onClick={() => {
                const waNumber = "573193142840";
                const waMessage = "Hola! Quiero empezar un proyecto minimalista con Tupla Core.";
                window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');
              }}
              className="bg-white text-black hover:bg-gray-200 text-[11px] font-bold uppercase tracking-extrawide px-12 py-8 rounded-md transition-all duration-500 shadow-2xl shadow-white/5 hover:scale-105"
            >
              Empezar Ahora
            </Button>
            
            <button
              onClick={() => router.push("/portafolio")}
              aria-label="Ver portafolio de proyectos"
              className="group flex items-center space-x-4 text-white text-[11px] font-bold uppercase tracking-extrawide hover:opacity-70 transition-all"
            >
              <span>Ver Portafolio</span>
              <div className="w-12 h-12 rounded-md border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </div>
            </button>
          </m.div>
        </nav>

        {/* Stats Row */}
        <m.div 
          variants={itemVariants}
          className="mt-24 grid grid-cols-3 gap-8 md:gap-20 border-t border-white/10 pt-10 opacity-30"
          role="region"
          aria-label="Estadísticas de la empresa"
        >
          <div className="flex flex-col gap-2 text-white">
            <span className="text-xl md:text-3xl font-light font-outfit tracking-tighter">10+</span>
            <span className="text-[8px] uppercase tracking-extrawide font-bold">Proyectos</span>
          </div>
          <div className="flex flex-col gap-2 text-white">
            <span className="text-xl md:text-3xl font-light font-outfit tracking-tighter">94%</span>
            <span className="text-[8px] uppercase tracking-extrawide font-bold">Satisfacción</span>
          </div>
          <div className="flex flex-col gap-2 text-white">
            <span className="text-xl md:text-3xl font-light font-outfit tracking-tighter">24/7</span>
            <span className="text-[8px] uppercase tracking-extrawide font-bold">Soporte</span>
          </div>
        </m.div>
      </m.div>

      {/* Side Decorative line */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden xl:block" />
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden xl:block" />
    </section>
  );
};

export default Hero;
