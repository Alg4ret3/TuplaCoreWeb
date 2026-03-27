"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Clock, Zap } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { Badge } from "@/components/atoms/badge";
import { m } from "framer-motion";
import type { MotionProps } from "framer-motion";
import Link from "next/link";
import { projectsData } from "@/constants/portfolioData";

const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
  viewport: { once: true, amount: 0.2 },
});
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  // Función para obtener colores según la categoría
  const getCategoryColors = (category: string) => {
    switch (category) {
      case "web":
        return "border-green-500/30 dark:border-green-500/30 bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-tupla-dark/60";
      case "mobile":
        return "border-blue-500/30 dark:border-blue-500/30 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-tupla-dark/60";
      case "software":
        return "border-purple-500/30 dark:border-purple-500/30 bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-tupla-dark/60";
      case "ia":
        return "border-red-500/30 dark:border-red-500/30 bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-tupla-dark/60";
      default:
        return "bg-white dark:bg-tupla-dark/60";
    }
  };

  const getCategoryAccent = (category: string) => {
    switch (category) {
      case "web":
        return "text-green-600 dark:text-green-400";
      case "mobile":
        return "text-blue-600 dark:text-blue-400";
      case "software":
        return "text-purple-600 dark:text-purple-400";
      case "ia":
        return "text-red-600 dark:text-red-400";
      default:
        return "text-tupla-primary";
    }
  };

  const filters = [
    { id: "todos", label: "Todos los Proyectos" },
    { id: "web", label: "Desarrollo Web" },
    { id: "mobile", label: "Apps Móviles" },
    { id: "software", label: "Software a Medida" },
    { id: "ia", label: "Inteligencia Artificial" },
  ];

  const filteredProjects =
    activeFilter === "todos"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section id="portafolio" className="relative py-20 bg-white dark:bg-tupla-dark transition-colors duration-500 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-tupla-primary/5 rounded-full blur-[120px]" />
          <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] bg-tupla-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <m.div className="mb-20" {...fadeUp(0)}>
          <div className="w-20 h-1.5 bg-tupla-primary mb-10 rounded-full" />
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black dark:text-white leading-[0.85] mb-10 uppercase tracking-tighter italic text-left">
            Nuestros <br />
            <span className="text-tupla-primary lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-tupla-primary lg:to-tupla-accent pr-3">proyectos </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed font-normal">
            Mira nuestros trabajos. Una selección de ecosistemas digitales diseñados 
            para dominar mercados y escalar negocios con tecnología de vanguardia.
          </p>
        </m.div>
      </div>

      {/* Full-Width Conversion Banner - Premium Upgrade */}
      <m.div 
        {...fadeUp(0.1)} 
        className="w-full bg-[#080808] dark:bg-white/[0.02] border-y border-white/10 py-24 mb-32 relative overflow-hidden group"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-tupla-primary/20 rounded-full blur-[120px] group-hover:scale-110 transition-transform duration-[3s]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-tupla-accent/10 rounded-full blur-[100px] group-hover:translate-x-10 transition-transform duration-[4s]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/big-dot-grid.png')] opacity-[0.05] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="text-center lg:text-left space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-tupla-primary/10 border border-tupla-primary/20 text-[10px] font-black uppercase tracking-[0.2em] text-tupla-primary mb-2">
              <Zap className="w-3 h-3 fill-current" />
              <span>Consultoría técnica gratuita</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic leading-none">
              ¿Listo para <br />
              <span className="text-tupla-primary">escalar tu visión?</span>
            </h3>
            <p className="text-lg text-gray-400 font-normal leading-relaxed">
              Recibe una arquitectura técnica personalizada y un presupuesto detallado en menos de 24 horas.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-6">
            <Button
              size="lg"
              onClick={() => {
                const waNumber = "573193142840";
                const waMessage = "Hola! Estoy en el portafolio de Tupla Core y me gustaría solicitar una cotización para un nuevo proyecto.";
                window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`, '_blank');
              }}
              className="bg-white text-black hover:bg-tupla-primary hover:text-white font-black px-14 py-10 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-[0_20px_40px_-15px_rgba(255,255,255,0.2)] group uppercase tracking-widest text-sm relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Iniciar Cotización
                <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-tupla-primary to-tupla-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">Respuesta inmediata asegurada</p>
          </div>
        </div>
      </m.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Filters */}
        <m.div
          className="flex flex-wrap justify-start gap-3 mb-16"
          {...fadeUp(0.2)}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                activeFilter === filter.id
                  ? "bg-tupla-dark dark:bg-white text-white dark:text-black border-transparent shadow-lg scale-105"
                  : "bg-transparent text-gray-500 border-gray-200 dark:border-white/10 hover:border-tupla-primary hover:text-tupla-primary"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </m.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <m.div
              key={project.id}
              className={`group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${getCategoryColors(project.category)}`}
              {...fadeUp(index * 0.1)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tupla-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

                {/* Project Content */}
              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className={`text-2xl font-black text-black dark:text-white uppercase tracking-tight italic transition-colors duration-300 leading-tight ${getCategoryAccent(project.category)}`}>
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Tech & Duration Stats */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-100 dark:border-white/5">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Tecnologías</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className={`text-[10px] font-bold ${getCategoryAccent(project.category)}`}>
                          #{tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-right">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Desarrollo</span>
                    <span className="text-xs font-bold text-black dark:text-white mt-1 flex items-center justify-end gap-1.5">
                      <Clock className={`w-3 h-3 ${getCategoryAccent(project.category)}`} />
                      {project.duration}
                    </span>
                  </div>
                </div>

                <Link href={`/portafolio/${project.id}`} className="block">
                  <Button className={`w-full text-white font-black uppercase tracking-widest text-[10px] h-10 rounded-lg transition-all ${
                    project.category === "web" 
                      ? "bg-green-600 hover:bg-green-700" 
                      : project.category === "mobile" 
                      ? "bg-blue-600 hover:bg-blue-700" 
                      : project.category === "software"
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "bg-red-600 hover:bg-red-700"
                  }`}>
                    Ver Detalles
                  </Button>
                </Link>
              </div>
            </m.div>
          ))}
        </div>

        {/* Gallery Footer */}
        <m.div
          className="mt-32 text-center flex flex-col items-center"
          {...fadeUp(0.3)}
        >
          <div className="w-px h-24 bg-gradient-to-b from-tupla-primary to-transparent mb-8" />
          <h4 className="text-4xl md:text-6xl font-black text-black dark:text-white uppercase tracking-tighter italic leading-none mb-6">
            Tu próximo éxito <br />
            <span className="text-tupla-primary">empieza aquí.</span>
          </h4>
          <p className="text-gray-500 dark:text-gray-400 font-normal max-w-md mx-auto mb-10">
            Estamos listos para construir la arquitectura técnica que tu visión merece.
          </p>
          <Button 
            onClick={() => window.open('https://wa.me/573193142840', '_blank')}
            className="rounded-full px-12 py-7 bg-tupla-dark dark:bg-white text-white dark:text-black font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-2xl"
          >
            Lanzar proyecto
          </Button>
        </m.div>
      </div>
    </section>
  );
};

export default Portfolio;
