'use client';

import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/atoms/SectionTitle';

const projects = [
  {
    title: 'Fintech Dashboard',
    category: 'Web App',
    image: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Next.js', 'Tailwind', 'Recharts'],
  },
  {
    title: 'HealthCare Mobile',
    category: 'Mobile App',
    image: 'https://images.pexels.com/photos/4050312/pexels-photo-4050312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React Native', 'Firebase'],
  },
  {
    title: 'E-Commerce Platform',
    category: 'E-Commerce',
    image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['MedusaJS', 'Stripe', 'Next.js'],
  },
  {
    title: 'AI Analytics Tool',
    category: 'Software a Medida',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Python', 'OpenAI', 'Node.js'],
  },
];

const PortfolioSection = () => {
  return (
    <section className="relative z-20 bg-black py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden font-inter">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          dark
          subtitle="Casos de Éxito"
          title="Portafolio"
          className="mb-16 md:mb-24"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="js-portfolio-item group relative aspect-[16/10] overflow-hidden bg-white/5 cursor-pointer"
            >
              <Image 
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/50 mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-4xl font-audiowide font-bold uppercase text-white mb-6">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-widest text-white font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Border Reveal */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* View More Button Placeholder */}
        <div className="mt-20 flex justify-center">
          <button className="px-12 py-4 border border-white/20 text-white font-inter text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500">
            Ver más proyectos
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
