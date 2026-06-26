"use client";

import { m } from "framer-motion";

const benefits = [
  {
    icon: "⚡",
    title: "Software que se adapta a ti",
    description: "No al revés. Analizamos cómo trabajas y construimos exactamente lo que tu operación necesita — sin funciones de relleno.",
  },
  {
    icon: "📈",
    title: "Procesos que generan dinero solos",
    description: "Automatizamos las tareas repetitivas de tu equipo para que ese tiempo se convierta en más clientes, más ventas, más crecimiento.",
  },
  {
    icon: "🔍",
    title: "Ves el avance cada semana",
    description: "Nada de \"ya casi está\" durante meses. Cada semana te mostramos lo que construimos y tú das feedback en tiempo real.",
  },
  {
    icon: "🔒",
    title: "El código es tuyo, siempre",
    description: "Al terminar, el repositorio completo es tuyo. Sin dependencias, sin candados, sin pagar eternamente por algo que ya es tuyo.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="section-3" className="relative z-30 bg-[#0a0a0a] w-full flex flex-col items-center justify-center py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto w-full">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl md:text-4xl font-audiowide uppercase text-white tracking-widest mb-4">
            Así es como tu negocio empieza a ganar con nosotros
          </h3>
          <p className="text-white/70 font-inter text-sm md:text-base max-w-2xl mx-auto">
            No vendemos software. Vendemos tiempo recuperado, errores eliminados e ingresos que escalan.
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <m.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#7F77DD]/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl">{benefit.icon}</span>
                <div>
                  <h4 className="text-white font-inter font-medium text-base md:text-lg mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-white/70 font-inter text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

BenefitsSection.displayName = "BenefitsSection";
export default BenefitsSection;