"use client";

import { useState } from "react";
import { m } from "framer-motion";

const faqs = [
  {
    question: "¿Cuánto cuesta?",
    answer: "Depende de la complejidad, pero te damos precio fijo después del diagnóstico gratuito. Sin sorpresas durante el proyecto.",
  },
  {
    question: "¿Cuánto tiempo toma?",
    answer: "La mayoría de nuestros proyectos están listos en 4 a 8 semanas. Nunca te decimos \"6 meses\" y luego pedimos 3 más.",
  },
  {
    question: "¿El código es mío al terminar?",
    answer: "Sí, 100%. Te entregamos el repositorio completo, documentado, listo para que cualquier desarrollador continúe si lo necesitas.",
  },
  {
    question: "¿Y si no quedo satisfecho?",
    answer: "Si después del diagnóstico sientes que no somos el equipo indicado, no pagas nada. Así de simple.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="section-6" className="relative z-30 bg-[#0a0a0a] w-full flex flex-col items-center justify-center py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto w-full">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl md:text-4xl font-audiowide uppercase text-white tracking-widest">
            Lo que siempre nos preguntan
          </h3>
        </m.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <m.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#7F77DD] font-inter text-sm">?</span>
                  <span className="text-white font-inter font-medium text-sm md:text-base">
                    {faq.question}
                  </span>
                </div>
                <m.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white/60"
                >
                  ▼
                </m.span>
              </button>
              <m.div
                initial={false}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-white/70 font-inter text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </m.div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

FaqSection.displayName = "FaqSection";
export default FaqSection;