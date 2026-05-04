'use client';

import { forwardRef } from 'react';
import SectionTitle from '@/components/atoms/SectionTitle';

interface ProcessSectionProps {
  panelClass: string;
}

const steps = [
  {
    number: '01',
    title: 'Descubre',
    description: 'Analizamos a fondo tu modelo de negocio, objetivos y audiencia para trazar la ruta tecnológica ideal.',
  },
  {
    number: '02',
    title: 'Diseña',
    description: 'Creamos interfaces intuitivas y prototipos interactivos que validan la experiencia antes de escribir código.',
  },
  {
    number: '03',
    title: 'Desarrolla',
    description: 'Codificamos con estándares de industria, priorizando la escalabilidad, seguridad y el rendimiento extremo.',
  },
  {
    number: '04',
    title: 'Lanza',
    description: 'Desplegamos tu producto en entornos optimizados y te acompañamos en su crecimiento y evolución continua.',
  },
];

const ProcessSection = forwardRef<HTMLDivElement, ProcessSectionProps>(({ panelClass }, ref) => {
  return (
    <div id="horizontal-container" className="relative z-30 bg-black overflow-hidden min-h-[100dvh]">
      <div 
        ref={ref} 
        className="flex flex-nowrap h-[100dvh] items-center will-change-transform"
        style={{ width: "400vw" }}
      >
        {steps.map((step, index) => (
          <div key={index} className={`${panelClass} relative flex flex-col items-start text-left px-12 md:px-24 lg:px-48 bg-black`}>
            {/* Background Number */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25rem] md:text-[40rem] font-audiowide font-black text-white/[0.03] select-none pointer-events-none">
              {step.number}
            </span>

            <div className="relative z-10 max-w-2xl">
              <SectionTitle 
                dark
                subtitle={`Paso ${step.number}`}
                title={step.title}
                className="mb-8"
              />
              <p className="text-white/60 text-lg md:text-xl font-inter leading-relaxed max-w-xl lowercase first-letter:uppercase">
                {step.description}
              </p>
            </div>

            {/* Step Indicator Bar */}
            <div className="absolute bottom-24 left-12 md:left-24 lg:left-48 right-12 md:right-24 lg:right-48 h-px bg-white/10">
               <div 
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${((index + 1) / steps.length) * 100}%` }}
               />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

ProcessSection.displayName = 'ProcessSection';
export default ProcessSection;
