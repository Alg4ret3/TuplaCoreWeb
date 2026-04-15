"use client";

import { m } from "framer-motion";
import { 
  Cpu, 
  ArrowRight, 
  Mail, 
  Database, 
  MessageSquare, 
  Globe, 
  Settings2,
  Share2
} from "lucide-react";
import { Button } from "@/components/atoms/button";
import Link from "next/link";

const N8nBanner = () => {
  const nodes = [
    { icon: Mail, label: "Marketing", delay: 0 },
    { icon: Database, label: "Data", delay: 1.5 },
    { icon: MessageSquare, label: "CRM", delay: 3 },
    { icon: Globe, label: "Web", delay: 4.5 },
  ];

  return (
    <section className="relative w-full min-h-[100vh] lg:min-h-[90vh] overflow-hidden flex items-center justify-center bg-transparent py-20 lg:py-40 border-y border-white/5">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Massive Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
          <span className="text-[30vw] lg:text-[25vw] font-black font-outfit uppercase tracking-tighter leading-none">
            Auto
          </span>
        </div>

        {/* Scanning Laser Line */}
        <m.div 
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[60px] lg:h-[100px] bg-gradient-to-b from-transparent via-white/[0.04] to-transparent z-10"
        />

        {/* Orbital System (Responsive Scale) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 lg:opacity-40 scale-75 lg:scale-100">
          {[300, 550, 800].map((size, i) => (
            <m.div
              key={i}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 15 + i * 8, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute border border-white/10 rounded-full"
              style={{ width: size, height: size }}
            />
          ))}
          
          {nodes.map((node, i) => (
            <m.div
              key={i}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: -node.delay }}
              className="absolute h-full flex items-start justify-center"
              style={{ width: 300 + i * 120 }}
            >
              <m.div 
                whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="p-3 lg:p-5 bg-black border border-white/20 rounded-xl backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all"
              >
                <node.icon size={18} className="text-white lg:w-5 lg:h-5" />
              </m.div>
            </m.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center space-y-12 lg:space-y-16">
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-6 lg:space-y-8"
        >
          <div className="inline-flex items-center space-x-3 px-4 lg:px-6 py-2 rounded-md border border-white/10 bg-white/[0.05] text-[8px] lg:text-[10px] font-bold tracking-[0.4em] lg:tracking-[0.6em] uppercase text-white">
            <Cpu size={12} className="animate-pulse lg:w-3.5 lg:h-3.5" />
            <span>Automatización de Siguiente Nivel</span>
          </div>

          <h2 className="text-5xl md:text-8xl lg:text-9xl font-light font-outfit leading-[0.9] tracking-[0.6em] text-white uppercase">
            <span className="opacity-10 block mb-2">n8n</span>
            <span className="font-bold">Flow.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-4xl mx-auto pt-10">
            {[
              { title: "Sincronización Total", desc: "Conecta más de 400 aplicaciones (Gmail, WhatsApp, Stripe, ChatGPT) en flujos de trabajo inteligentes." },
              { title: "Cero Errores", desc: "Sustituye tareas manuales por bots autónomos que trabajan 24/7 sin fallos humanos." }
            ].map((info, idx) => (
              <div key={idx} className="space-y-4 text-center md:text-left">
                <span className="text-[10px] font-bold tracking-[0.4em] text-white uppercase">{info.title}</span>
                <p className="text-[9px] lg:text-[11px] font-medium leading-relaxed tracking-[0.2em] uppercase text-white/30">
                  {info.desc}
                </p>
              </div>
            ))}
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center space-y-8 lg:space-y-12"
        >
          <p className="text-[10px] lg:text-xs max-w-2xl mx-auto font-bold leading-relaxed tracking-[0.4em] uppercase text-white/40 px-4">
            No es solo código. Es el sistema operativo de tu eficiencia.
          </p>

          <Link href="/n8n" prefetch={true}>
            <Button 
              className="group bg-white text-black hover:bg-gray-200 text-[10px] lg:text-[12px] font-bold uppercase tracking-[0.5em] px-10 lg:px-20 py-6 lg:py-10 rounded-md shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all hover:scale-105 w-full sm:w-auto"
            >
              Consultar con un Experto
              <ArrowRight className="ml-3 lg:ml-5 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </m.div>
      </div>

      {/* Decorative scanning line grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />

      {/* Decorative vertical lines */}
      <div className="absolute left-1/2 top-0 w-[1px] h-32 bg-gradient-to-b from-white/10 to-transparent" />
      <div className="absolute left-1/2 bottom-0 w-[1px] h-32 bg-gradient-to-t from-white/10 to-transparent" />
    </section>
  );
};

export default N8nBanner;
