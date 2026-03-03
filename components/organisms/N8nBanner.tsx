"use client";

import { Cpu, Zap, Settings2, Network, ArrowRight } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { motion } from "framer-motion";

const N8nBanner = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-tupla-dark text-white">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-tupla-accent/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tupla-primary/20 rounded-full blur-[100px] animate-pulse" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Visual Representation of Automation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative group">
              {/* Central Node */}
              <div className="relative w-48 h-48 mx-auto bg-tupla-primary rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(30,144,255,0.4)] z-20">
                <Cpu className="w-20 h-20 text-white animate-pulse" />
              </div>

              {/* Orbital Nodes */}
              {[
                { icon: Zap, pos: "-top-10 left-1/2 -translate-x-1/2", delay: 0 },
                { icon: Settings2, pos: "top-1/2 -right-10 -translate-y-1/2", delay: 0.2 },
                { icon: Network, pos: "-bottom-10 left-1/2 -translate-x-1/2", delay: 0.4 },
                { icon: Settings2, pos: "top-1/2 -left-10 -translate-y-1/2", delay: 0.6 },
              ].map((node, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: node.delay }}
                  className={`absolute ${node.pos} w-20 h-20 bg-tupla-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl z-10`}
                >
                  <node.icon className="w-8 h-8 text-tupla-accent" />
                </motion.div>
              ))}

              {/* Connecting Lines (Decorative) */}
              <div className="absolute inset-0 border-2 border-dashed border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-tupla-accent/20 border border-tupla-accent/30 text-tupla-accent text-sm font-semibold uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>Automatización con n8n</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-tight italic">
              AGENTE INTELIGENTE: <br />
              <span className="text-tupla-accent">TU EMPLEADO 24/7</span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed font-light">
              Desplegamos agentes de IA y flujos de trabajo con **n8n** que gestionan 
              tus ventas, atención al cliente y procesos internos de forma autónoma. 
              Reduce costes operativos y escala sin límites.
            </p>

            <ul className="space-y-4 inline-block text-left">
              {[
                "Atención al cliente automatizada",
                "Integración total con tus herramientas",
                "Gestión de leads en tiempo real",
                "Escalabilidad masiva y sin errores",
              ].map((feat, idx) => (
                <li key={idx} className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-tupla-accent rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-lg text-gray-200">{feat}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Button
                size="lg"
                className="bg-tupla-accent hover:bg-white hover:text-tupla-dark text-white px-10 py-8 rounded-full text-xl font-bold transition-all shadow-2xl shadow-tupla-accent/30"
              >
                Solicitar Consultoría Automatizada
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default N8nBanner;
