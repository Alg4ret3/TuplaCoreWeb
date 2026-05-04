'use client';

import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/atoms/SectionTitle';
import developersData from '@/context/developers.json';
import { Linkedin, Github, Send as Telegram } from 'lucide-react';

const TeamSection = () => {
  return (
    <section className="relative z-20 bg-[#F8F8F8] py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden font-inter">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          subtitle="Quiénes Somos"
          title="Los Fundadores"
          className="mb-16 md:mb-24"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {developersData.developers.map((dev, index) => (
            <div key={dev.id} className="js-team-member flex flex-col md:flex-row gap-8 items-center md:items-start group">
              {/* Image Container */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 flex-none overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 bg-black">
                <Image 
                  src={dev.image}
                  alt={dev.name}
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
                {/* Decorative Frame */}
                <div className="absolute inset-0 border-[12px] border-white/10 group-hover:border-white/0 transition-all duration-500" />
              </div>

              {/* Info Container */}
              <div className="flex flex-col">
                <h3 className="text-2xl md:text-3xl font-audiowide font-bold uppercase mb-2">
                  {dev.name}
                </h3>
                <span className="text-black/30 font-bold uppercase tracking-widest text-[10px] mb-6">
                  {dev.skills.join(' • ')}
                </span>
                
                <p className="text-black/60 leading-relaxed mb-8 max-w-md">
                  Ingeniero experto en soluciones tecnológicas de alto impacto, enfocado en crear productos digitales que definen el futuro del software.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-5">
                  <a href={dev.social.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                    <Linkedin size={18} />
                  </a>
                  <a href={dev.social.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                    <Github size={18} />
                  </a>
                  <a href={dev.social.telegram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                    <Telegram size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
