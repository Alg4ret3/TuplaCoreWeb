"use client";

import { Play, Monitor } from "lucide-react";
import { m } from "framer-motion";

const VideoShowcase = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-tupla-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="p-3 bg-tupla-accent/20 rounded-2xl text-tupla-accent">
              <Monitor className="w-8 h-8" />
            </div>
          </m.div>
          
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-tupla-dark dark:text-white"
          >
            Nuestra Tecnología en Acción
          </m.h2>
          
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Descubre cómo transformamos procesos complejos en experiencias digitales 
            fluidas y eficientes a través de nuestras soluciones personalizadas.
          </m.p>
        </div>

        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Video Placeholder / Frame */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] bg-tupla-dark group cursor-pointer">
            {/* Background image placeholder */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-tupla-primary rounded-full blur-2xl opacity-40 animate-pulse" />
                <button className="relative w-24 h-24 bg-white dark:bg-white text-tupla-primary rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 group">
                  <Play className="w-10 h-10 ml-1 fill-current" />
                </button>
              </div>
            </div>

            {/* Bottom info bar */}
            <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-tupla-accent font-semibold text-sm">Demo de Producto</p>
                  <h3 className="text-white text-2xl font-bold">Ecosistema Tupla Core</h3>
                </div>
                <div className="text-white/60 text-sm font-mono">
                  01:45 / 03:00
                </div>
              </div>
            </div>
          </div>

          {/* Decorative accents */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-tupla-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-tupla-accent/20 rounded-full blur-3xl" />
        </m.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
