"use client";

import { m } from "framer-motion";

const SocialProofSection = () => {
  return (
    <section id="section-5" className="relative z-30 bg-[#0a0a0a] w-full flex flex-col items-center justify-center py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto w-full text-center">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-4xl font-audiowide uppercase text-white tracking-widest mb-4">
            Negocios que dejaron de improvisar
          </h3>
          <p className="text-white/70 font-inter text-sm md:text-base max-w-2xl mx-auto">
            Resultados reales de empresas que sistematizaron su operación con Tupla Core.
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="p-8 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl"
        >
          <p className="text-white/40 font-inter text-sm italic">
            📌 Pendiente: insertar casos de proyectos reales con métricas &mdash; ej. &ldquo;40% menos tiempo en procesos manuales&rdquo;, &ldquo;duplicaron ventas en 3 meses&rdquo;, etc.
          </p>
        </m.div>
      </div>
    </section>
  );
};

SocialProofSection.displayName = "SocialProofSection";
export default SocialProofSection;