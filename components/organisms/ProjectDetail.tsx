"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import { ExternalLink, Github, Play, FileText, Calendar, DollarSign, Code2, Users, Linkedin } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { Badge } from "@/components/atoms/badge";
import { Separator } from "@/components/atoms/separator";
import type { Project } from "@/constants/portfolioData";

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

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = [project.image, ...(project.gallery || [])];

  return (
    <main className="min-h-screen bg-white dark:bg-tupla-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Title Section */}
        <motion.div className="mb-20 space-y-8" {...fadeUp(0.1)}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight uppercase tracking-tighter italic text-black dark:text-white">
            {project.title}
            <br />
            <span className="text-tupla-accent relative min-h-[1em] inline-block">
              {project.category === "web" && "Desarrollo Web"}
              {project.category === "mobile" && "App Móvil"}
              {project.category === "software" && "Software a Medida"}
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            {project.description}
          </p>
          <div>
            <Badge variant="outline" className="text-xs font-bold uppercase">
              {project.year}
            </Badge>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.section className="mb-20" {...fadeUp(0.2)}>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-white/5 max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gray-200 dark:bg-gray-800 w-full">
              <Image
                src={images[activeImageIndex]}
                alt={`${project.title} - Imagen ${activeImageIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Thumbnail Gallery */}
            {images.length > 1 && (
              <div className="bg-gray-50 dark:bg-tupla-dark/50 p-4 flex gap-3 overflow-x-auto">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeImageIndex === idx ? "border-tupla-primary" : "border-gray-300 dark:border-white/10"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.section>

        {/* Quick Stats */}
        <motion.section className="grid md:grid-cols-4 gap-6 mb-20" {...fadeUp(0.3)}>
          <div className="bg-gradient-to-br from-tupla-primary/10 to-tupla-accent/10 rounded-xl p-6 border border-tupla-primary/20">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-tupla-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 tracking-widest mb-1">Duración</p>
                <p className="text-lg font-black text-black dark:text-white">{project.duration}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-tupla-primary/10 to-tupla-accent/10 rounded-xl p-6 border border-tupla-primary/20">
            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-tupla-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 tracking-widest mb-1">Presupuesto</p>
                <p className="text-lg font-black text-black dark:text-white">{project.cost}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-tupla-primary/10 to-tupla-accent/10 rounded-xl p-6 border border-tupla-primary/20">
            <div className="flex items-start gap-3">
              <Code2 className="w-5 h-5 text-tupla-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 tracking-widest mb-1">Tecnologías</p>
                <p className="text-sm font-black text-black dark:text-white">{project.technologies.length} Herramientas</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-tupla-primary/10 to-tupla-accent/10 rounded-xl p-6 border border-tupla-primary/20">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-tupla-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 tracking-widest mb-1">Equipo</p>
                <p className="text-sm font-black text-black dark:text-white">{project.engineers.length} Ingenieros</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Description Section */}
        <motion.section className="mb-20" {...fadeUp(0.4)}>
          <h2 className="text-3xl font-black text-black dark:text-white uppercase italic mb-6">Descripción del Proyecto</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
            {project.fullDescription}
          </p>
        </motion.section>

        <Separator className="my-20" />

        {/* Modules Section */}
        <motion.section className="mb-20" {...fadeUp(0.5)}>
          <h2 className="text-3xl font-black text-black dark:text-white uppercase italic mb-12">Módulos del Proyecto</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.modules.map((module, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-tupla-dark/50 dark:to-tupla-dark/30 border border-gray-200 dark:border-white/10 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                {...fadeUp(0.5 + index * 0.1)}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-tupla-primary text-white rounded-lg flex items-center justify-center font-black text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-tight italic">
                    {module.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                  {module.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <Separator className="my-20" />

        {/* Technologies Section */}
        <motion.section className="mb-20" {...fadeUp(0.6)}>
          <h2 className="text-3xl md:text-4xl font-black text-black dark:text-white uppercase italic mb-12">Stack Tecnológico</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="group bg-gradient-to-br from-tupla-primary/15 to-tupla-accent/15 border border-tupla-primary/30 rounded-xl p-4 text-center hover:shadow-lg hover:border-tupla-primary/60 transition-all duration-300 cursor-default">
                  <p className="font-black uppercase text-black dark:text-white text-sm tracking-widest group-hover:text-tupla-primary transition-colors">
                    {tech}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <Separator className="my-20" />

        {/* Engineers Section */}
        <motion.section className="mb-20" {...fadeUp(0.7)}>
          <h2 className="text-3xl md:text-4xl font-black text-black dark:text-white uppercase italic mb-12">Equipo de Desarrollo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.engineers.map((engineer, index) => (
              <motion.div
                key={index}
                className="group relative bg-white dark:bg-tupla-dark/40 border border-gray-200 dark:border-tupla-primary/20 rounded-2xl p-6 hover:shadow-2xl hover:border-tupla-primary/50 transition-all duration-300 overflow-hidden"
                {...fadeUp(0.7 + index * 0.1)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-tupla-primary/0 to-tupla-accent/0 group-hover:from-tupla-primary/5 group-hover:to-tupla-accent/5 transition-all duration-300" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-tupla-primary to-tupla-accent rounded-xl flex items-center justify-center text-white font-black text-lg flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {engineer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  
                  <h3 className="font-black text-black dark:text-white uppercase italic text-base mb-1 tracking-tight line-clamp-2">
                    {engineer.name}
                  </h3>
                  
                  <div className="flex-1">
                    <p className="text-xs font-bold text-tupla-primary mb-4 uppercase tracking-widest leading-relaxed">
                      {engineer.role}
                    </p>
                  </div>
                  
                  {(engineer.github || engineer.linkedin) && (
                    <div className="flex gap-2">
                      {engineer.github && (
                        <a
                          href={engineer.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 text-white bg-gray-700 hover:bg-gray-900 rounded-lg px-3 py-2.5 transition-all font-bold text-xs uppercase tracking-wider border border-gray-600 hover:shadow-lg"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      )}
                      {engineer.linkedin && (
                        <a
                          href={engineer.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 text-white bg-[#0077B5] hover:bg-[#005885] rounded-lg px-3 py-2.5 transition-all font-bold text-xs uppercase tracking-wider border border-[#0077B5] hover:shadow-lg"
                        >
                          <Linkedin className="w-4 h-4" />
                          LinkedIn
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>


      </div>
    </main>
  );
}
