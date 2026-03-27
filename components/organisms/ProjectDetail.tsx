"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { MotionProps } from "framer-motion";
import { ExternalLink, Github, Play, FileText, Calendar, DollarSign, Code2, Users, Linkedin, X } from "lucide-react";
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

/**
 * Converts a YouTube or Vimeo watch URL into an embeddable iframe URL.
 * Returns null if the URL is not a recognized platform.
 */
function getEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);

    // YouTube — handles youtu.be/ID and youtube.com/watch?v=ID and /shorts/ID
    if (parsed.hostname.includes("youtube.com") || parsed.hostname.includes("youtu.be")) {
      let videoId: string | null = null;
      if (parsed.hostname === "youtu.be") {
        videoId = parsed.pathname.slice(1);
      } else if (parsed.pathname.includes("/shorts/")) {
        videoId = parsed.pathname.split("/shorts/")[1];
      } else {
        videoId = parsed.searchParams.get("v");
      }
      if (videoId) return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
    }

    // Vimeo — handles vimeo.com/ID
    if (parsed.hostname.includes("vimeo.com")) {
      const videoId = parsed.pathname.split("/").filter(Boolean).pop();
      if (videoId) return `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`;
    }

    return null;
  } catch {
    return null;
  }
}

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const images = [project.image, ...(project.gallery || [])];

  const hasLinks = project.demoUrl || project.githubUrl || project.videoUrl;
  const videoEmbedUrl = project.videoUrl ? getEmbedUrl(project.videoUrl) : null;

  // Auto-carousel effect
  useEffect(() => {
    if (images.length <= 1 || isLightboxOpen || isHovered) return;

    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, isLightboxOpen, isHovered]);

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
          <div className="max-w-4xl mx-auto relative group">
            {/* Efeito de luz ao redor — Purple Ambient Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-fuchsia-600/20 to-purple-600/20 rounded-[32px] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000 pointer-events-none" />
            <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/10 via-transparent to-fuchsia-500/10 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-white/5 bg-white dark:bg-tupla-dark shadow-purple-500/5 group-hover:shadow-purple-500/20 transition-all duration-700">
              <div 
                className="relative aspect-video bg-gray-200 dark:bg-gray-800 w-full cursor-zoom-in group/main overflow-hidden"
                onClick={() => setIsLightboxOpen(true)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={activeImageIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.16, 1, 0.3, 1],
                      opacity: { duration: 0.5 } 
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={images[activeImageIndex]}
                      alt={`${project.title} - Imagen ${activeImageIndex + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-transparent group-hover/main:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover/main:opacity-100 transition-all transform scale-90 group-hover/main:scale-100">
                    <Play className="w-6 h-6 text-white fill-white rotate-90" />
                  </div>
                </div>
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
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal mb-10">
            {project.fullDescription}
          </p>

          {/* Action Buttons — video button only shown when no embed is available */}
          {hasLinks && (
            <div className="flex flex-wrap gap-4 mb-12">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 overflow-hidden bg-tupla-primary text-white font-black uppercase tracking-widest text-sm px-8 py-4 rounded-2xl shadow-lg shadow-tupla-primary/20 hover:shadow-tupla-primary/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                  <ExternalLink className="w-4 h-4 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" />
                  Demo en Vivo
                  <span className="ml-1 flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 overflow-hidden bg-transparent text-black dark:text-white font-black uppercase tracking-widest text-sm px-8 py-4 rounded-2xl border-2 border-black/20 dark:border-white/20 hover:border-black/60 dark:hover:border-white/60 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <Github className="w-4 h-4 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" />
                  Ver Código
                </a>
              )}
              {/* Only show the external video button if we can't embed it */}
              {project.videoUrl && !videoEmbedUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 overflow-hidden bg-transparent text-black dark:text-white font-black uppercase tracking-widest text-sm px-8 py-4 rounded-2xl border-2 border-black/20 dark:border-white/20 hover:border-red-500/60 hover:text-red-500 dark:hover:border-red-400/60 dark:hover:text-red-400 hover:bg-red-500/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <Play className="w-4 h-4 fill-current flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  Ver Video
                </a>
              )}
            </div>
          )}

          {/* Inline Video Player */}
          {videoEmbedUrl && (
            <motion.div className="max-w-4xl mx-auto relative group" {...fadeUp(0.45)}>
              {/* Efeito de luz ao redor — Ambient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-tupla-primary to-tupla-accent rounded-[32px] opacity-10 blur-xl group-hover:opacity-30 transition-opacity duration-1000" />
              <div className="absolute -inset-2 bg-gradient-to-br from-tupla-primary/5 via-transparent to-tupla-accent/5 rounded-[40px] blur-3xl group-hover:opacity-100 opacity-0 transition-opacity duration-1000" />
              
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-white/10 bg-black shadow-tupla-primary/10 group-hover:shadow-tupla-primary/30 transition-all duration-700">
                <iframe
                  src={videoEmbedUrl}
                  title={`Video de ${project.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
            </motion.div>
          )}
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

      {/* Lightbox / Expanded View */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 md:p-12 cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-all bg-white/5 p-2 rounded-full backdrop-blur-xl border border-white/10 shadow-2xl z-[110]"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-7xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={images[activeImageIndex]}
                  alt={`${project.title} - Zoom`}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}