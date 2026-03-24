'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { team, stats, capabilities, values } from '@/constants/aboutData';
import FlipCard from '../molecules/FlipCard';
import { Target, Eye } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  viewport: { once: false, amount: 0.15 },
});

/* ─── SUB-COMPONENTS ────────────────────────────────────────── */

const MisionVisionCard = ({ title, icon, gradient, delay, children }: { title: string, icon: React.ReactNode, gradient: string, delay: number, children: React.ReactNode }) => (
  <motion.div {...fadeUp(delay)} className="relative group h-full">
    <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-[28px] blur opacity-20 group-hover:opacity-50 transition duration-1000`} />
    <div className="relative h-full bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white dark:border-white/10 rounded-[28px] shadow-xl p-10">
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 bg-gradient-to-br ${gradient} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <h3 className="text-xl font-black text-tupla-dark dark:text-white uppercase tracking-tighter italic">
          {title}
        </h3>
      </div>
      <div className="text-gray-600 dark:text-gray-300 leading-relaxed text-base font-light">
        {children}
      </div>
    </div>
  </motion.div>
);

const ValueCard = ({ value, index }: { value: any, index: number }) => {
  const IconComponent = value.icon;
  return (
    <motion.div {...fadeUp(0.1 * index)} className="group h-full">
      <div className="h-full bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white dark:border-white/10 rounded-[24px] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-6 text-center flex flex-col">
        <div className="mb-6">
          <div className="inline-flex p-3 bg-gradient-to-br from-tupla-primary to-tupla-accent rounded-xl text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
            <IconComponent className="h-6 w-6" />
          </div>
        </div>
        <h4 className="text-sm font-black text-tupla-dark dark:text-white mb-2 uppercase tracking-tight italic">
          {value.title}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light mt-auto">
          {value.description}
        </p>
      </div>
    </motion.div>
  );
};

/* ─── MAIN COMPONENT ────────────────────────────────────────── */

const About = () => {
  return (
    <section id="nosotros" className="relative py-32 overflow-hidden bg-white dark:bg-tupla-dark transition-colors duration-500">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 -left-10 w-[500px] h-[500px] bg-tupla-primary rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 -right-10 w-[600px] h-[600px] bg-tupla-accent rounded-full blur-[150px] animate-pulse" />
      </div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── HEADER ── */}
        <motion.div className="text-center mb-24" {...fadeUp(0)}>
          <p className="text-[11px] uppercase tracking-[.18em] font-black text-gray-400 dark:text-gray-500 mb-4 px-3 py-1 bg-white/5 inline-block rounded-full border border-white/10">
            Quiénes somos
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-tupla-dark dark:text-white uppercase tracking-tighter italic leading-[1.05] mb-8">
            Fundadores.<br />
            <span className="text-tupla-accent font-normal not-italic">Ingenieros. Estrategas.</span>
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Un equipo de especialistas senior que combina ingeniería de producto, arquitectura de software
            y estrategia digital para construir soluciones que escalan.
          </p>
        </motion.div>

        {/* ── CAPABILITIES STRIP ── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 rounded-[20px] overflow-hidden mb-16 border border-white/20 dark:border-white/10 bg-white/5 backdrop-blur-md"
          style={{ gap: "1px" }}
          {...fadeUp(0.1)}
        >
          {capabilities.map((cap) => (
            <div key={cap.label} className="bg-white/70 dark:bg-white/5 backdrop-blur-xl px-5 py-5">
              <div className="w-9 h-9 rounded-md bg-gray-100 dark:bg-white/10 flex items-center justify-center mb-3 text-gray-500 dark:text-gray-400">
                {cap.icon}
              </div>
              <p className="text-xl font-medium text-tupla-dark dark:text-white mb-1">{cap.label}</p>
              <p className="text-[16px] text-gray-500 dark:text-gray-500 leading-snug">{cap.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* ── FLIP CARDS ── */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {team.map((member, i) => (
            <motion.div key={member.id} {...fadeUp(0.1 * i)}>
              <FlipCard member={member as any} />
            </motion.div>
          ))}
        </div>

        {/* ── STATS BAR ── */}
        <motion.div
          className="grid grid-cols-3 rounded-[24px] overflow-hidden mb-6 border border-white/20 dark:border-white/10 bg-white/5 backdrop-blur-md"
          style={{ gap: "1px" }}
          {...fadeUp(0.25)}
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white/70 dark:bg-white/5 backdrop-blur-xl px-6 py-6 flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-black text-tupla-dark dark:text-white tracking-tight mb-1">{s.number}</span>
              <span className="text-[10px] text-gray-500 dark:text-gray-500 uppercase tracking-[0.2em] font-bold">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* ── FOOTER NOTE ── */}
        <motion.div className="text-center mb-16" {...fadeUp(0.2)}>
          <p className="text-base text-gray-400 dark:text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Cada proyecto es gestionado directamente por los fundadores — sin intermediarios, sin delegación a juniors.
            Acceso directo a la experiencia técnica desde el día uno.
          </p>
        </motion.div>

        {/* ── MISIÓN & VISIÓN ── */}
        <motion.div className="text-center mb-16" {...fadeUp(0)}>
          <h3 className="text-3xl md:text-4xl font-black text-tupla-dark dark:text-white uppercase tracking-tighter italic">
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
        <motion.div className="text-center mb-14" {...fadeUp(0)}>
          <h3 className="text-3xl md:text-4xl font-black text-tupla-dark dark:text-white uppercase tracking-tighter italic">
            Nuestros <span className="text-tupla-primary">Valores</span>
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