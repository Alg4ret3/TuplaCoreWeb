"use client";

import { forwardRef } from "react";
import dynamic from "next/dynamic";
import { m } from "framer-motion";
import WhatsAppButton from "@/components/atoms/WhatsAppButton";

// Import Antigravity dynamically to prevent SSR/hydration mismatch errors in Next.js
const Antigravity = dynamic(() => import("@/components/organisms/Antigravity"), {
  ssr: false,
});

const painPoints = [
  {
    id: "01",
    title: "Pierdo horas haciendo a mano lo que un sistema haría en segundos",
    description: "Tu equipo gasta el día en Excel, WhatsApp y correos coordinando cosas que deberían ocurrir solas. Eso no es operar — eso es sobrevivir.",
  },
  {
    id: "02",
    title: "Pagué por software y terminé con algo que nadie usa",
    description: "Contrataste a alguien, esperaste meses, y al final el sistema no encaja con tu operación. Dinero perdido, equipo frustrado, problema sin resolver.",
  },
  {
    id: "03",
    title: "Uso herramientas genéricas que me obligan a adaptarme a ellas",
    description: "Pagas licencias de software que hace el 40% de lo que necesitas. El resto lo sigues haciendo a mano. Y el sistema manda — no tú.",
  },
  {
    id: "04",
    title: "Sé exactamente qué necesito, pero no sé cómo hacerlo realidad",
    description: "Tienes la visión clara. Pero no tienes el equipo técnico, el tiempo, ni la confianza en a quién entregarle tu idea sin que te fallen.",
  },
];

const VerticalSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      id="section-2"
      ref={ref}
      className="relative z-20 bg-[#111111] min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden font-inter border-y border-white/5 pb-20"
    >
      {/* 3D Antigravity Background – wrapper must have explicit dimensions for R3F */}
      <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
        <Antigravity
          count={300}
          magnetRadius={10}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#5227FF"
          autoAnimate={true}
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      {/* Foreground Overlay Content - centered vertically */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-16 md:pt-20 lg:pt-24 flex flex-col items-center">
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-[10px] md:text-xs tracking-[0.8em] uppercase text-white/30 font-bold font-inter">
            DISEÑO INTERACTIVO
          </h2>
          <h3 className="mt-2 text-2xl md:text-4xl font-audiowide uppercase text-white tracking-widest opacity-85">
            ¿Te suena familiar alguna de estas situaciones?
          </h3>
        </m.div>

        <div className="w-full pointer-events-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pointer-events-none">
            {painPoints.map((point, index) => (
              <m.div
                key={point.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#7F77DD]/30 transition-colors pointer-events-none"
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#7F77DD] font-audiowide text-sm font-bold">
                    {point.id}
                  </span>
                  <div>
                    <h4 className="text-white font-inter text-sm md:text-base font-medium mb-2 leading-tight">
                      {point.title}
                    </h4>
                    <p className="text-white/70 font-inter text-xs md:text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </m.div>
            ))}
          </div>

          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-white/60 text-center mt-8 md:mt-12 font-inter text-sm pointer-events-none"
          >
            Si te identificaste, no estás solo. Y tiene solución.
          </m.p>
        </div>

        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8 pointer-events-auto"
        >
          <button
            onClick={() => {
              const waUrl = `https://wa.me/573193142840?text=${encodeURIComponent("Hola! Vi el sitio web de Tupla Core y me gustaría hablar con un experto.")}`;
              window.open(waUrl, "_blank");
            }}
            className="px-8 py-3 bg-[#7F77DD] text-white font-inter font-medium uppercase tracking-wider text-sm rounded-full hover:bg-[#6a63c2] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(127,119,221,0.4)]"
          >
            Hablar con un experto
          </button>
        </m.div>
      </div>
      <WhatsAppButton />
    </section>
  );
});

VerticalSection.displayName = "VerticalSection";
export default VerticalSection;