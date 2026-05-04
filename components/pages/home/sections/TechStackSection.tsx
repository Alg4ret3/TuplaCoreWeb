'use client';

import React from 'react';
import SectionTitle from '@/components/atoms/SectionTitle';

const technologies = [
  'Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Node.js', 
  'PostgreSQL', 'MongoDB', 'AWS', 'Vercel', 'Docker',
  'Framer Motion', 'GSAP', 'Prisma', 'Supabase', 'Python'
];

const TechStackSection = () => {
  return (
    <section className="relative z-20 bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden font-inter">
      <div className="max-w-7xl mx-auto mb-16 md:mb-24">
        <SectionTitle 
          subtitle="Nuestras Herramientas"
          title="Tecnologías"
        />
      </div>

      {/* Marquee Row 1 */}
      <div className="flex overflow-hidden select-none gap-10 py-4 group">
        <div className="flex flex-none justify-around items-center gap-10 animate-marquee min-w-full">
          {technologies.map((tech, i) => (
            <span key={i} className="text-4xl md:text-6xl font-audiowide font-bold uppercase text-black/10 hover:text-black transition-colors cursor-default whitespace-nowrap">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-none justify-around items-center gap-10 animate-marquee min-w-full">
          {technologies.map((tech, i) => (
            <span key={i + 'copy'} className="text-4xl md:text-6xl font-audiowide font-bold uppercase text-black/10 hover:text-black transition-colors cursor-default whitespace-nowrap">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="flex overflow-hidden select-none gap-10 py-4 mt-8 group">
        <div className="flex flex-none justify-around items-center gap-10 animate-marquee-reverse min-w-full">
          {[...technologies].reverse().map((tech, i) => (
            <span key={i} className="text-4xl md:text-6xl font-audiowide font-bold uppercase text-black/10 hover:text-black transition-colors cursor-default whitespace-nowrap">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-none justify-around items-center gap-10 animate-marquee-reverse min-w-full">
          {[...technologies].reverse().map((tech, i) => (
            <span key={i + 'copy'} className="text-4xl md:text-6xl font-audiowide font-bold uppercase text-black/10 hover:text-black transition-colors cursor-default whitespace-nowrap">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TechStackSection;
