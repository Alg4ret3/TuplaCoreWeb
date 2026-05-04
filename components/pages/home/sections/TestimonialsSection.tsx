'use client';

import React from 'react';
import SectionTitle from '@/components/atoms/SectionTitle';

const testimonials = [
  {
    quote: "Tupla Core transformó nuestra visión en una realidad digital impactante. Su atención al detalle y capacidad técnica son inigualables.",
    author: "Elena Rodríguez",
    role: "CEO en TechFlow",
  },
  {
    quote: "La mejor decisión para nuestro e-commerce. La plataforma es rápida, segura y escala sin problemas con nuestro crecimiento.",
    author: "Marcos García",
    role: "Director de Operaciones en ModaVirtual",
  },
  {
    quote: "Un equipo que no solo programa, sino que entiende el negocio. Entregaron un software a medida que superó nuestras expectativas.",
    author: "Claudia López",
    role: "Fundadora de InnovaSoft",
  }
];

const TestimonialsSection = () => {
  return (
    <section className="relative z-20 bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden font-inter">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          subtitle="Opiniones de Clientes"
          title="Testimonios"
          className="mb-16 md:mb-24"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="js-testimonial-card p-10 bg-[#F8F8F8] border border-black/5 relative group hover:bg-black transition-all duration-500">
              {/* Quote Icon */}
              <span className="text-6xl font-audiowide text-black/5 absolute top-4 right-8 group-hover:text-white/5 transition-colors">
                "
              </span>

              <p className="text-black/70 italic leading-relaxed mb-8 relative z-10 group-hover:text-white/80 transition-colors">
                {t.quote}
              </p>

              <div className="flex flex-col relative z-10">
                <span className="font-audiowide font-bold uppercase text-sm group-hover:text-white transition-colors">
                  {t.author}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-black/30 group-hover:text-white/40 transition-colors">
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
