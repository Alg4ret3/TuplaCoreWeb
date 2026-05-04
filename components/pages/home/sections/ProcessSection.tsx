'use client';

import { forwardRef } from 'react';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

interface ProcessSectionProps {
  panelClass: string;
}

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Descubre',
    description: 'Analizamos a fondo tu modelo de negocio, objetivos y audiencia para trazar la ruta tecnológica ideal.',
    details: ['Investigación de mercado', 'Definición de alcance', 'Propuesta técnica'],
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Diseña',
    description: 'Creamos interfaces intuitivas y prototipos interactivos que validan la experiencia antes de escribir código.',
    details: ['Wireframes & mockups', 'Prototipado interactivo', 'Validación con usuario'],
  },
  {
    number: '03',
    icon: Code2,
    title: 'Desarrolla',
    description: 'Codificamos con estándares de industria, priorizando la escalabilidad, seguridad y el rendimiento extremo.',
    details: ['Arquitectura limpia', 'Testing automatizado', 'Code reviews'],
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Lanza',
    description: 'Desplegamos tu producto en entornos optimizados y te acompañamos en su crecimiento y evolución continua.',
    details: ['Deploy automatizado', 'Monitoreo 24/7', 'Soporte continuo'],
  },
];

const ProcessSection = forwardRef<HTMLDivElement, ProcessSectionProps>(({ panelClass }, ref) => {
  return (
    <div id="horizontal-container" className="relative z-30 bg-black overflow-hidden min-h-[100dvh]">
      <div 
        ref={ref} 
        className="flex flex-nowrap h-[100dvh] items-center will-change-transform"
        style={{ width: `${steps.length * 100}vw` }}
      >
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="w-[100vw] flex-none h-[100dvh] flex items-center justify-center relative bg-black"
          >
            {/* Giant Background Number */}
            <span className="absolute top-1/2 right-[10%] -translate-y-1/2 text-[20rem] md:text-[28rem] lg:text-[36rem] font-audiowide font-black text-white/[0.03] select-none pointer-events-none leading-none">
              {step.number}
            </span>

            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-20">
              
              {/* Left: Number + Icon */}
              <div className="flex flex-col items-center gap-6 flex-none">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/10 flex items-center justify-center">
                  <step.icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.2} />
                </div>
                <span className="text-[10px] font-inter font-bold uppercase tracking-[0.4em] text-white/30">
                  Paso {step.number}
                </span>
              </div>

              {/* Right: Text Content */}
              <div className="flex flex-col gap-6">
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-audiowide font-black uppercase text-white leading-none">
                  {step.title}
                </h3>
                
                <p className="text-white/50 text-base md:text-lg font-inter leading-relaxed max-w-lg">
                  {step.description}
                </p>

                {/* Detail Tags */}
                <div className="flex flex-wrap gap-3 mt-2">
                  {step.details.map((detail, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 border border-white/10 text-[10px] md:text-[11px] font-inter uppercase tracking-[0.2em] text-white/40"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-16 left-8 md:left-16 lg:left-24 right-8 md:right-16 lg:right-24">
              <div className="flex items-center justify-between mb-4">
                {steps.map((_, i) => (
                  <span 
                    key={i}
                    className={`text-[9px] font-inter font-bold uppercase tracking-[0.3em] transition-colors ${
                      i <= index ? 'text-white/60' : 'text-white/15'
                    }`}
                  >
                    {steps[i].title}
                  </span>
                ))}
              </div>
              <div className="h-px bg-white/10 w-full">
                <div 
                  className="h-full bg-white transition-all duration-700 ease-out"
                  style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

ProcessSection.displayName = 'ProcessSection';
export default ProcessSection;
