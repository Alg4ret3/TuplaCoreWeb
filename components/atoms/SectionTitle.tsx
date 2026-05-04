'use client';

import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
}

const SectionTitle = ({ title, subtitle, dark = false, className = '' }: SectionTitleProps) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {subtitle && (
        <span className={`text-[10px] md:text-xs font-inter font-bold uppercase tracking-[0.4em] ${dark ? 'text-white/40' : 'text-black/30'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-5xl lg:text-6xl font-audiowide font-black uppercase leading-none ${dark ? 'text-white' : 'text-black'}`}>
        {title}
      </h2>
      <div className={`w-20 h-1.5 ${dark ? 'bg-white' : 'bg-black'}`} />
    </div>
  );
};

export default SectionTitle;
