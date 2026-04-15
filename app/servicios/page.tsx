'use client';

import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import { m } from 'framer-motion';
import { Globe, Smartphone, Bot, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/atoms/button';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 80 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 1.2,
    delay,
    ease: [0.16, 1, 0.3, 1] as const,
  },
  viewport: { once: true, margin: "-100px" },
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Video Background específico para Servicios */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover brightness-[0.3] contrast-[1.2]"
        >
          <source 
            src="https://res.cloudinary.com/dqky6oqrd/video/upload/v1776293360/w0j24ooz1q3qw7jbbvql.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-black/82 backdrop-blur-[3px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
      </div>

      <div className="relative z-10">
        <Navbar />
        
        {/* Hero de Servicios */}
        <section className="min-h-[85vh] flex items-center justify-center px-4 md:px-8 relative overflow-hidden">
          {/* Lineas decorativas mobile */}
          <div className="absolute left-6 top-0 w-[1px] h-32 bg-gradient-to-b from-white/10 to-transparent" />
          <div className="absolute right-6 bottom-0 w-[1px] h-32 bg-gradient-to-t from-white/10 to-transparent" />
          
          {/* Texto fondo gigante */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02]">
            <span className="text-[50vw] sm:text-[40vw] font-black font-outfit uppercase tracking-tighter leading-none">
              Serve
            </span>
          </div>

          <div className="relative z-10 text-center max-w-7xl mx-auto">
            <m.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <div className="inline-flex items-center space-x-3 px-4 sm:px-6 py-2 rounded-md border border-white/10 bg-white/[0.03] text-[7px] sm:text-[8px] lg:text-[10px] font-bold tracking-[0.5em] sm:tracking-[0.6em] uppercase text-white/50 mb-8 sm:mb-12">
                <Zap size={10} className="sm:hidden" />
                <span>SOLUCIONES ESPECIALIZADAS</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-8xl lg:text-[120px] font-light font-outfit leading-[0.85] tracking-[0.3em] sm:tracking-[0.4em] text-white uppercase mb-8 sm:mb-12">
                <span className="opacity-10 block mb-2 sm:mb-4">Nuestros</span>
                <span className="font-bold">Servicios</span>
              </h1>

              <p className="text-[9px] sm:text-[10px] md:text-xs max-w-xl sm:max-w-2xl mx-auto font-bold leading-relaxed tracking-[0.3em] sm:tracking-[0.4em] uppercase text-white/30 px-2">
                Tres verticales. Una filosofía. Tecnología invisible que funciona.
              </p>
            </m.div>
          </div>
        </section>

        {/* Servicio 1 - AGENTES IA N8N */}
        <section className="relative w-full min-h-[85vh] flex items-center justify-center border-y border-white/5 py-16 sm:py-24 lg:py-40 px-4 md:px-8 overflow-hidden">
          {/* Efectos fondo */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none">
              <span className="text-[45vw] sm:text-[35vw] font-black font-outfit uppercase tracking-tighter">n8n</span>
            </div>
            <m.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[80px] bg-gradient-to-b from-transparent via-blue-500/[0.03] to-transparent"
            />
            {/* Lineas decorativas */}
            <div className="absolute left-0 top-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto w-full">
            <m.div {...fadeUp(0)}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
                <div className="p-3 sm:p-4 lg:p-6 rounded-xl bg-white/5 border border-white/10 text-white">
                  <Bot size={20} className="sm:size-6" strokeWidth={1.5} />
                </div>
                <span className="text-[7px] sm:text-[8px] lg:text-[10px] font-bold tracking-[0.5em] sm:tracking-[0.6em] uppercase text-white/40">
                  AUTOMATIZACIÓN INTELIGENTE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-8xl lg:text-[100px] font-light font-outfit leading-[0.85] tracking-[0.2em] sm:tracking-[0.3em] text-white uppercase mb-10 sm:mb-16">
                <span className="opacity-10">Agentes</span> <span className="font-bold">IA + n8n</span>
              </h2>

              <div className="space-y-8 sm:space-y-0 sm:grid md:grid-cols-2 gap-12 lg:gap-20 mb-12 sm:mb-20">
                <div>
                  <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.4em] text-white uppercase block mb-3 sm:mb-4">Que hace</span>
                  <p className="text-[9px] sm:text-[10px] lg:text-xs font-medium leading-relaxed tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/30">
                    Transformamos flujos de trabajo repetitivos en sistemas autónomos que trabajan por ti 24/7. Conectamos inteligencia artificial con todas tus herramientas.
                  </p>
                </div>
                <div className="bg-white/[0.02] rounded-xl border border-white/5 p-4 sm:p-6">
                  <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.4em] text-white uppercase block mb-4">Incluye</span>
                  <div className="space-y-3">
                    {["Agentes Autónomos personalizados", "Integración completa n8n", "IA Conversacional y RAG", "Conexión multi-sistema"].map((f, i) => (
                      <div key={i} className="flex items-center space-x-3 py-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
                        <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-gray-500 font-bold">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => {
                  const waNumber = "573193142840";
                  const waMessage = "Hola! Quiero información sobre Agentes de IA con n8n.";
                  window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');
                }}
                className="group bg-white text-black hover:bg-gray-200 text-[9px] sm:text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.5em] sm:tracking-[0.6em] px-8 sm:px-12 lg:px-20 py-5 sm:py-6 lg:py-8 rounded-md transition-all hover:scale-105 w-full sm:w-auto"
              >
                Consultar IA + n8n
                <ArrowRight className="ml-3 w-3 h-3 sm:size-4 group-hover:translate-x-2 transition-transform" />
              </Button>
            </m.div>
          </div>
        </section>

        {/* Servicio 2 - DESARROLLO WEB */}
        <section className="relative w-full min-h-[85vh] flex items-center justify-center border-b border-white/5 py-16 sm:py-24 lg:py-40 px-4 md:px-8 overflow-hidden bg-white/[0.01]">
          {/* Efectos fondo */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none">
              <span className="text-[40vw] sm:text-[30vw] font-black font-outfit uppercase tracking-tighter italic">Web</span>
            </div>
            <m.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-[80px] bg-gradient-to-r from-transparent via-purple-500/[0.03] to-transparent"
            />
            <div className="absolute left-0 top-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto w-full">
            <m.div {...fadeUp(0)} className="md:text-right">
              <div className="flex flex-col sm:flex-row-reverse items-start sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
                <div className="p-3 sm:p-4 lg:p-6 rounded-xl bg-white/5 border border-white/10 text-white">
                  <Globe size={20} className="sm:size-6" strokeWidth={1.5} />
                </div>
                <span className="text-[7px] sm:text-[8px] lg:text-[10px] font-bold tracking-[0.5em] sm:tracking-[0.6em] uppercase text-white/40">
                  PLATAFORMAS EMPRESARIALES
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-8xl lg:text-[100px] font-light font-outfit leading-[0.85] tracking-[0.2em] sm:tracking-[0.3em] text-white uppercase mb-10 sm:mb-16 italic">
                Desarrollo <span className="font-bold not-italic">Web</span>
              </h2>

              <div className="space-y-8 sm:space-y-0 sm:grid md:grid-cols-2 gap-12 lg:gap-20 mb-12 sm:mb-20">
                <div className="md:order-2">
                  <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.4em] text-white uppercase block mb-3 sm:mb-4">Que hace</span>
                  <p className="text-[9px] sm:text-[10px] lg:text-xs font-medium leading-relaxed tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/30">
                    Sitios web y plataformas completamente personalizadas que fusionan estética editorial minimalista con rendimiento extremo. Diseñados para perdurar.
                  </p>
                </div>
                <div className="md:order-1 md:text-right bg-white/[0.02] rounded-xl border border-white/5 p-4 sm:p-6">
                  <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.4em] text-white uppercase block mb-4">Incluye</span>
                  <div className="space-y-3">
                    {["Next.js 15 & React 19", "SEO Arquitectónico avanzado", "Performance 99+ Lighthouse", "Cloud escalable"].map((f, i) => (
                      <div key={i} className="flex items-center justify-end space-x-3 py-1">
                        <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-gray-500 font-bold">{f}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => {
                  const waNumber = "573193142840";
                  const waMessage = "Hola! Quiero información sobre Desarrollo Web a medida.";
                  window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');
                }}
                className="group bg-white text-black hover:bg-gray-200 text-[9px] sm:text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.5em] sm:tracking-[0.6em] px-8 sm:px-12 lg:px-20 py-5 sm:py-6 lg:py-8 rounded-md transition-all hover:scale-105 w-full sm:w-auto md:ml-auto"
              >
                Cotizar Proyecto Web
                <ArrowRight className="ml-3 w-3 h-3 sm:size-4 group-hover:translate-x-2 transition-transform" />
              </Button>
            </m.div>
          </div>
        </section>

        {/* Servicio 3 - APPS MÓVILES */}
        <section className="relative w-full min-h-[85vh] flex items-center justify-center border-b border-white/5 py-16 sm:py-24 lg:py-40 px-4 md:px-8 overflow-hidden">
          {/* Efectos fondo */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none">
              <span className="text-[45vw] sm:text-[35vw] font-black font-outfit uppercase tracking-tighter">APP</span>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 scale-75 sm:scale-100">
              {[150, 250, 350].map((size, i) => (
                <m.div
                  key={i}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20 + i * 10, repeat: Infinity, ease: "linear" }}
                  className="absolute border border-white/10 rounded-full"
                  style={{ width: size, height: size, marginLeft: -size/2, marginTop: -size/2 }}
                />
              ))}
            </div>
            <div className="absolute left-0 top-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
            <m.div {...fadeUp(0)}>
              <div className="flex flex-col items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
                <div className="p-3 sm:p-4 lg:p-6 rounded-xl bg-white/5 border border-white/10 text-white">
                  <Smartphone size={20} className="sm:size-6" strokeWidth={1.5} />
                </div>
                <span className="text-[7px] sm:text-[8px] lg:text-[10px] font-bold tracking-[0.5em] sm:tracking-[0.6em] uppercase text-white/40">
                  EXPERIENCIAS NATIVAS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-8xl lg:text-[100px] font-light font-outfit leading-[0.85] tracking-[0.2em] sm:tracking-[0.3em] text-white uppercase mb-10 sm:mb-16">
                Aplicaciones <span className="font-bold">Móviles</span>
              </h2>

              <div className="max-w-3xl mx-auto mb-12 sm:mb-20">
                <p className="text-[9px] sm:text-[10px] lg:text-xs font-medium leading-relaxed tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/30 mb-8 sm:mb-16">
                  Diseñamos aplicaciones para el pulgar y para la vista. Priorizando simplicidad absoluta, rendimiento y usabilidad real por encima de todo.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
                  {["iOS & Android Nativos", "React Native Expo", "Micro-interacciones", "Push Intelligence", "Offline First", "Actualizaciones OTA"].map((f, i) => (
                    <div key={i} className="flex flex-col items-center space-y-2 bg-white/[0.02] rounded-xl border border-white/5 p-3 sm:p-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/40" />
                      <span className="text-[7px] sm:text-[9px] uppercase tracking-widest text-gray-500 font-bold">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                onClick={() => {
                  const waNumber = "573193142840";
                  const waMessage = "Hola! Quiero información sobre Aplicaciones Móviles.";
                  window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');
                }}
                className="group bg-white text-black hover:bg-gray-200 text-[9px] sm:text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.5em] sm:tracking-[0.6em] px-8 sm:px-12 lg:px-20 py-5 sm:py-6 lg:py-8 rounded-md transition-all hover:scale-105 w-full sm:w-auto"
              >
                Cotizar App Móvil
                <ArrowRight className="ml-3 w-3 h-3 sm:size-4 group-hover:translate-x-2 transition-transform" />
              </Button>
            </m.div>
          </div>
        </section>
        
        <Footer />
      </div>
    </main>
  );
}