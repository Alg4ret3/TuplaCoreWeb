"use client";

import { Zap, Cpu, ArrowRight, Layers, Bot, Network, Settings } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { m } from "framer-motion";
import Link from "next/link";

const N8nSalesBanner = () => {
  const nodes = [
    { icon: Bot, x: "20%", y: "20%", delay: 0 },
    { icon: Zap, x: "80%", y: "30%", delay: 0.2 },
    { icon: Network, x: "50%", y: "50%", delay: 0.4 },
    { icon: Settings, x: "30%", y: "80%", delay: 0.6 },
    { icon: Layers, x: "70%", y: "85%", delay: 0.8 },
  ];

  const [isMobile, setIsMobile] = (require("react")).useState(false);
  (require("react")).useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden bg-white dark:bg-[#050510] text-tupla-dark dark:text-white transition-colors duration-500">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-tupla-primary/5 dark:bg-tupla-primary/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-tupla-accent/5 dark:bg-tupla-accent/20 rounded-full blur-[130px] animate-pulse transition-delay-3000" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/big-dot-grid.png')] opacity-[0.05] dark:opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <m.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-tupla-primary/5 dark:bg-white/5 border border-tupla-primary/10 dark:border-white/10 backdrop-blur-md">
              <Zap className="w-4 h-4 text-tupla-primary dark:text-tupla-accent" />
              <span className="text-sm font-bold tracking-widest uppercase text-tupla-primary/60 dark:text-gray-300">
                Automatización Inteligente
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tighter uppercase italic text-tupla-dark dark:text-white mb-8">
              Tu Negocio en <br />
              <span className="text-tupla-accent">
                Piloto Automático
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light max-w-xl">
              Implementamos flujos de trabajo avanzados con **n8n** y Agentes de IA 
              que trabajan por ti 24/7. Elimina tareas repetitivas y escala tu 
              productividad al infinito.
            </p>

            <div className="hidden lg:flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/planes">
                <Button
                  size="lg"
                  className="bg-tupla-accent hover:bg-tupla-primary text-white font-bold px-10 py-7 rounded-xl transition-all hover:scale-105 shadow-[0_15px_30px_-5px_rgba(30,144,255,0.3)] group"
                >
                  CONOCE NUESTROS PLANES
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </m.div>

          {/* Right Column - Visual Illustration */}
          <m.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative mt-12 lg:mt-0"
          >
            {/* Simple Mobile Flow (3 nodes) */}
            <div className="lg:hidden flex flex-col items-center space-y-4">
              {[
                { icon: Bot, label: "CAPTURA DE DATOS", color: "text-tupla-primary" },
                { icon: Zap, label: "PROCESAMIENTO IA", color: "text-tupla-accent", active: true },
                { icon: Layers, label: "RESULTADO FINAL", color: "text-emerald-500" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`p-6 rounded-2xl bg-white dark:bg-white/5 border border-tupla-primary/10 dark:border-white/10 shadow-xl ${item.active ? 'ring-2 ring-tupla-accent/50' : ''}`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <span className="text-[10px] font-bold mt-2 tracking-widest opacity-60">{item.label}</span>
                  {i < 2 && (
                    <m.div 
                      animate={isMobile ? { y: 0 } : { y: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="my-2 text-tupla-primary/30"
                    >
                      <ArrowRight className="w-5 h-5 rotate-90" />
                    </m.div>
                  )}
                </div>
              ))}
            </div>

            {/* Complex Desktop Orbital Nodes */}
            <div className="hidden lg:block relative h-[600px]">
              {/* Central glowing core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tupla-primary/30 rounded-full blur-[80px] animate-pulse" />
              
              <div className="relative w-full h-full">
                {/* Animated Nodes */}
                {nodes.map((node, i) => (
                  <m.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isMobile ? { opacity: 1, y: 0, x: 0 } : { 
                      opacity: 1, 
                      y: [0, -20, 0],
                      x: [0, 10, 0]
                    }}
                    transition={{ 
                      opacity: { delay: node.delay, duration: 0.5 },
                      y: { repeat: Infinity, duration: 4 + i, ease: "easeInOut" },
                      x: { repeat: Infinity, duration: 5 + i, ease: "easeInOut" }
                    }}
                    className={`absolute p-6 bg-white dark:bg-white/5 backdrop-blur-2xl border border-tupla-primary/10 dark:border-white/10 rounded-3xl shadow-2xl z-20 group`}
                    style={{ top: node.y, left: node.x }}
                  >
                    <node.icon className="w-10 h-10 text-tupla-primary dark:text-tupla-accent group-hover:scale-110 transition-transform" />
                    
                    {/* Connecting lines (pseudo) */}
                    <div className="absolute top-1/2 left-full w-32 h-[1px] bg-gradient-to-r from-tupla-primary/30 dark:from-tupla-accent/50 to-transparent -translate-y-1/2 origin-left rotate-45 opacity-20" />
                  </m.div>
                ))}

                {/* Orbiting circles */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full ${isMobile ? '' : 'animate-[spin_20s_linear_infinite]'}`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-white/5 rounded-full ${isMobile ? '' : 'animate-[spin_30s_linear_infinite_reverse]'}`} />
              </div>
              
              {/* Visual labels */}
              <m.div 
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute top-[10%] right-[10%] px-4 py-2 border border-tupla-primary/10 dark:border-white/10 rounded-lg bg-white/40 dark:bg-black/40 text-[10px] text-tupla-dark dark:text-white font-mono tracking-tighter"
              >
                  AUTO_FLOW_v2.0
              </m.div>
            </div>
          </m.div>
        </div>

        {/* Mobile Buttons - Staged at the end */}
        <div className="lg:hidden flex flex-col gap-4 mt-12 px-2">
          <Link href="/planes">
            <Button
              size="lg"
              className="bg-tupla-accent hover:bg-tupla-primary text-white font-bold px-8 py-7 rounded-xl transition-all shadow-[0_15px_30px_-5px_rgba(30,144,255,0.3)] w-full group"
            >
              CONOCE NUESTROS PLANES
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default N8nSalesBanner;
