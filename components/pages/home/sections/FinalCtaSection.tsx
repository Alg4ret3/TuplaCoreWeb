"use client";

import { m } from "framer-motion";

const FinalCtaSection = () => {
  return (
    <section id="section-7" className="relative z-30 bg-[#0a0a0a] w-full flex flex-col items-center justify-center py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto w-full text-center">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-4xl font-audiowide uppercase text-white tracking-widest mb-6">
            Tu negocio puede estar funcionando mejor — la próxima semana
          </h3>
          <p className="text-white/70 font-inter text-sm md:text-base mb-10">
            El diagnóstico es gratis. La conversación es hoy.
          </p>

          <m.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              const waUrl = `https://wa.me/573193142840?text=${encodeURIComponent("Hola! Vi el sitio web de Tupla Core y quiero mi diagnóstico gratis.")}`;
              window.open(waUrl, "_blank");
            }}
            className="px-10 py-4 bg-[#7F77DD] text-white font-inter font-medium uppercase tracking-wider text-sm rounded-full hover:bg-[#6a63c2] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(127,119,221,0.5)]"
          >
            Quiero mi diagnóstico gratis
          </m.button>
        </m.div>
      </div>
    </section>
  );
};

FinalCtaSection.displayName = "FinalCtaSection";
export default FinalCtaSection;