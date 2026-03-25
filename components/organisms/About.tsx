'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { team, stats, values } from '@/constants/aboutData';
import FlipCard from '../molecules/FlipCard';
import { Target, Eye, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  viewport: { once: false, amount: 0.15 },
});

/* ─── SUB-COMPONENTS ────────────────────────────────────────── */

const MisionVisionCard = ({ title, icon, gradient, delay, children }: { title: string, icon: React.ReactNode, gradient: string, delay: number, children: React.ReactNode }) => (
  <motion.div {...fadeUp(delay)} className="relative h-full group">
    <div className="relative h-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
      {/* Accent corner */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${gradient} opacity-[0.03] rounded-tr-2xl`} />
      <div className={`absolute top-0 left-0 w-1.5 h-full rounded-l-2xl bg-gradient-to-b ${gradient}`} />
      
      <div className="flex flex-col gap-6 relative z-10">
        <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl text-white flex items-center justify-center shadow-lg`}>
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-black text-black dark:text-white uppercase tracking-tighter italic mb-4">
            {title}
          </h3>
          <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-base font-normal">
            {children}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const ValueCard = ({ value, index }: { value: any, index: number }) => {
  const IconComponent = value.icon;
  return (
    <motion.div {...fadeUp(0.1 * index)} className="group h-full">
      <div className="h-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-8 flex flex-col gap-6 hover:border-tupla-primary transition-all duration-300">
        <div className="inline-flex items-center gap-3">
          <div className="p-2.5 bg-gray-100 dark:bg-white/10 rounded-lg text-tupla-primary group-hover:bg-tupla-primary group-hover:text-white transition-all duration-300">
            <IconComponent className="h-5 w-5" />
          </div>
          <h4 className="text-sm font-black text-black dark:text-white uppercase tracking-wider italic">
            {value.title}
          </h4>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-normal">
          {value.description}
        </p>
      </div>
    </motion.div>
  );
};

/* ─── MAIN COMPONENT ────────────────────────────────────────── */

const About = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <section id="nosotros" className="relative py-32 overflow-hidden bg-white dark:bg-tupla-dark transition-colors duration-500">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 -left-10 w-[500px] h-[500px] bg-tupla-primary rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 -right-10 w-[600px] h-[600px] bg-tupla-accent rounded-full blur-[150px] animate-pulse" />
      </div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── BRANDING LOGO & DESC ── */}
        <motion.div className="flex flex-col items-center text-center mb-16" {...fadeUp(0)}>
          <div className="relative w-full max-w-[280px] md:max-w-[400px] aspect-[3/1] mb-10">
            {mounted && (
              <>
                <Image 
                  src={currentTheme === 'dark' ? "/LogoBlanco.svg" : "/logo.svg"} 
                  alt="Tupla Core Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </>
            )}
          </div>
          <p className="text-2xl md:text-3xl font-black text-black dark:text-gray-100 max-w-3xl leading-tight tracking-tight italic uppercase">
            Transformamos ideas en <span className="text-transparent bg-clip-text bg-gradient-to-r from-tupla-primary to-blue-500">realidades digitales</span> de alto impacto.
          </p>
        </motion.div>

        {/* ── HEADER (Fundadores) ── */}
        <motion.div className="text-center mb-16" {...fadeUp(0.1)}>
          <p className="text-[11px] uppercase tracking-[.18em] font-black text-gray-400 dark:text-gray-500 mb-4 px-3 py-1 bg-white/5 inline-block rounded-full border border-white/10">
            Quiénes somos
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black dark:text-white uppercase tracking-tighter italic leading-tight mb-8">
            Fundadores.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tupla-accent to-emerald-500">Ingenieros. Estrategas.</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Un equipo de especialistas senior que combina ingeniería de producto, arquitectura de software
            y estrategia digital para construir soluciones que escalan.
          </p>
        </motion.div>


        {/* ── FLIP CARDS ── */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {team.map((member, i) => (
            <motion.div key={member.id} {...fadeUp(0.1 * i)}>
              <FlipCard member={member as any} />
            </motion.div>
          ))}
        </div>

        {/* ── STATS CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((s, i) => (
            <motion.div 
              key={s.label} 
              {...fadeUp(0.1 * i)}
              className="relative group p-8 rounded-[32px] bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white dark:border-white/10 shadow-xl overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-tupla-primary/10 rounded-full blur-2xl group-hover:bg-tupla-accent/20 transition-colors" />
              <div className="relative flex flex-col items-center text-center">
                <span className="text-5xl font-black mb-2 tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-tupla-primary to-tupla-accent">
                  {s.number}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 dark:text-gray-400">
                  {s.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── FOUNDERS GUARANTEE NOTE ── */}
        <motion.div 
          className="relative mb-24" 
          {...fadeUp(0.25)}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-tupla-primary/30 to-tupla-accent/30 rounded-[32px] blur-xl opacity-50" />
          <div className="relative bg-white/70 dark:bg-tupla-dark/60 backdrop-blur-2xl border border-white dark:border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-tupla-primary/5 rounded-full -mr-20 -mt-20 blur-3xl" />
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-tupla-primary/20 to-tupla-accent/20 flex items-center justify-center border border-white/20">
                  <ShieldCheck className="w-10 h-10 text-tupla-primary" />
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <h4 className="text-xl md:text-2xl font-black text-black dark:text-white uppercase italic tracking-tight mb-4 leading-tight">
                  Compromiso de ejecución <span className="text-tupla-primary">Directa y Senior</span>
                </h4>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
                  Cada proyecto es <span className="text-black dark:text-white font-bold italic">gestionado directamente</span> por los fundadores. 
                  Operamos <span className="text-tupla-accent font-bold">sin intermediarios</span> y sin delegación a perfiles junior, 
                  garantizando acceso total a nuestra experiencia técnica senior desde el día uno.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── MISIÓN & VISIÓN ── */}
        <motion.div className="flex flex-col items-center text-center mb-16" {...fadeUp(0)}>
          <div className="w-12 h-1 bg-tupla-primary mb-6 rounded-full" />
          <h3 className="text-4xl md:text-5xl font-black text-black dark:text-white uppercase tracking-tighter italic">
            Propósito & <span className="text-tupla-primary">Dirección</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mb-24">
          <MisionVisionCard 
            title="Nuestra Misión" 
            icon={<Target className="h-5 w-5" />} 
            gradient="from-tupla-primary to-blue-600"
            delay={0.1}
          >
            Empoderar a empresas a través del acceso a la tecnología, ofreciendo soluciones digitales de
            vanguardia. Nos comprometemos a impulsar su transformación digital con herramientas innovadoras
            y profesionales, permitiendo competir con confianza, adaptarse al cambio y destacar en un
            mercado global.
          </MisionVisionCard>

          <MisionVisionCard 
            title="Nuestra Visión" 
            icon={<Eye className="h-6 w-6" />} 
            gradient="from-tupla-accent to-emerald-500"
            delay={0.2}
          >
            Convertirnos en el aliado tecnológico de confianza para las empresas que buscan innovar y liderar
            en el entorno digital. Aspiramos a ser reconocidos por nuestra excelencia técnica y capacidad para
            transformar ideas en soluciones digitales exitosas, sostenibles y con impacto real.
          </MisionVisionCard>
        </div>

        {/* ── VALORES ── */}
        <motion.div className="flex flex-col items-center text-center mb-16" {...fadeUp(0)}>
          <div className="w-12 h-1 bg-tupla-accent mb-6 rounded-full" />
          <h3 className="text-4xl md:text-5xl font-black text-black dark:text-white uppercase tracking-tighter italic">
            Nuestros <span className="text-tupla-accent text-transparent bg-clip-text bg-gradient-to-r from-tupla-accent to-emerald-500">Valores</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;