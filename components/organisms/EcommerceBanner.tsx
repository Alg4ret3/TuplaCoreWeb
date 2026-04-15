"use client";

import { m } from "framer-motion";
import { ShoppingBag, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/atoms/button";

const EcommerceBanner = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-transparent border-y border-white/5 py-32 lg:py-48 px-8 overflow-hidden">
      {/* Background is now global in page.tsx */}


      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-16 lg:space-y-24">
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-10 lg:space-y-14"
        >
          <div className="inline-flex items-center px-0 text-[9px] lg:text-[11px] font-bold tracking-[0.6em] uppercase text-white/30">
            <span>Engineering Conversion</span>
          </div>

          <h2 className="text-5xl md:text-8xl lg:text-[140px] font-light font-outfit leading-none tracking-[0.2em] text-white uppercase italic">
            Sales<span className="font-bold not-italic tracking-normal text-white/10">.</span>
          </h2>

          <p className="text-[10px] md:text-sm max-w-xl mx-auto font-bold leading-relaxed tracking-[0.3em] uppercase text-white/20">
            Diseñamos arquitecturas de venta que trascienden lo visual. Alto rendimiento. Conversión absoluta.
          </p>

          <div className="pt-10 lg:pt-16">
            <Button 
              onClick={() => {
                const waNumber = "573193142840";
                const waMessage = "Hola! Quiero cotizar una tienda online premium.";
                window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');
              }}
              className="group bg-white text-black hover:bg-gray-200 text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.6em] px-14 lg:px-24 py-8 lg:py-10 rounded-md transition-all hover:scale-105 shadow-2xl"
            >
              Comenzar
              <ArrowRight className="ml-6 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default EcommerceBanner;
