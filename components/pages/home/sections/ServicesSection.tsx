'use client';

import { forwardRef } from 'react';
import { Globe, Smartphone, ShoppingCart, Settings, Palette, Wrench } from 'lucide-react';
import SectionTitle from '@/components/atoms/SectionTitle';

const services = [
  {
    icon: Globe,
    title: 'Desarrollo Web',
    description: 'Sitios web de alto rendimiento con Next.js, React y arquitecturas modernas enfocadas en SEO y conversión.',
  },
  {
    icon: Smartphone,
    title: 'Apps Móviles',
    description: 'Aplicaciones nativas y multiplataforma robustas que ofrecen la mejor experiencia de usuario en iOS y Android.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Tiendas online escalables y seguras utilizando las mejores tecnologías para maximizar tus ventas.',
  },
  {
    icon: Settings,
    title: 'Software a Medida',
    description: 'Soluciones tecnológicas personalizadas para automatizar procesos y optimizar la gestión de tu empresa.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Interfaces intuitivas y atractivas diseñadas meticulosamente para conectar con tus usuarios.',
  },
  {
    icon: Wrench,
    title: 'Soporte & Mant.',
    description: 'Acompañamiento constante, actualizaciones de seguridad y optimización continua de tus productos digitales.',
  },
];

const ServicesSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      id="section-2"
      ref={ref}
      className="relative z-20 bg-[#F8F8F8] py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden font-inter"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          subtitle="Nuestra Experticia"
          title="Servicios"
          className="mb-16 md:mb-24"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="js-service-card group relative p-8 bg-white border border-black/5 hover:border-black/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
            >
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-black text-white group-hover:scale-110 transition-transform duration-500">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-audiowide font-bold uppercase mb-4 tracking-tight group-hover:text-black/70 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-black/50 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] rounded-full bg-black/[0.02] blur-[100px] pointer-events-none" />
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';
export default ServicesSection;
