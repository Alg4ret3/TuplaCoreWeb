"use client";

import { m } from "framer-motion";

const phases = [
  {
    number: "1",
    title: "Diagnóstico",
    subtitle: "(gratis)",
    description: "Antes de escribir una línea de código, mapeamos tu operación, identificamos qué automatizar y te decimos exactamente qué construir y cuánto va a costar. Tú apruebas todo antes de empezar.",
  },
  {
    number: "2",
    title: "Construcción",
    subtitle: "semana a semana",
    description: "Desarrollamos en sprints cortos. Cada viernes ves avances reales. Si algo no está bien, lo corregimos en días — no en meses.",
  },
  {
    number: "3",
    title: "Lanzamiento",
    subtitle: "y acompañamiento",
    description: "Desplegamos tu sistema, capacitamos a tu equipo y nos quedamos contigo el primer mes. No desaparecemos al entregar.",
  },
];

const MethodSection = () => {
  return (
    <section id="section-4" className="relative z-30 bg-[#0a0a0a] w-full flex flex-col items-center justify-center py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto w-full">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl md:text-4xl font-audiowide uppercase text-white tracking-widest">
            De tu idea a un sistema funcionando — sin sorpresas
          </h3>
        </m.div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <m.div
              key={phase.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex items-center gap-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#7F77DD]/30 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7F77DD]/20 border border-[#7F77DD]/40 flex items-center justify-center">
                <span className="text-[#7F77DD] font-audiowide text-xl font-bold">
                  {phase.number}
                </span>
              </div>
              <div>
                <h4 className="text-white font-inter font-medium text-base md:text-lg">
                  {phase.title}<span className="text-white/60 text-sm ml-1">{phase.subtitle}</span>
                </h4>
                <p className="text-white/70 font-inter text-sm mt-1 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

MethodSection.displayName = "MethodSection";
export default MethodSection;