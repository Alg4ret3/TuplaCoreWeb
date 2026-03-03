"use client";
import type { MotionProps } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Settings, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";

const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
  viewport: { once: false, amount: 0.2 },
});

const zoomIn = (delay = 0): MotionProps => ({
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
  viewport: { once: false, amount: 0.2 },
});
const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      title: "Desarrollo Web",
      description:
        "Sitios web modernos, responsivos y optimizados para SEO que impulsan tu presencia digital.",
      features: [
        "Diseño responsivo",
        "Optimización SEO",
        "Panel de administración",
        "Integración con redes sociales",
        "Analytics y métricas",
      ],
      technologies: ["React", "Next.js", "TailwindCSS", "Node.js"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description:
        "Apps nativas y multiplataforma que conectan con tus usuarios de manera efectiva.",
      features: [
        "iOS y Android",
        "UI/UX intuitivo",
        "Notificaciones push",
        "Integración con APIs",
        "Soporte offline",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Settings,
      title: "Software a Medida",
      description:
        "Soluciones personalizadas que se adaptan perfectamente a los procesos de tu empresa.",
      features: [
        "Análisis de requerimientos",
        "Arquitectura escalable",
        "Integración con sistemas",
        "Automatización de procesos",
        "Soporte técnico",
      ],
      technologies: ["Python", "Java", "C#", ".NET"],
      gradient: "from-green-500 to-teal-500",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicios" className="py-20 bg-tupla-light dark:bg-tupla-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            {...fadeUp(0)}
            className="text-4xl md:text-5xl font-bold text-tupla-dark dark:text-white mb-6"
          >
            Nuestros Servicios
          </motion.h2>

          <motion.p
            {...zoomIn(0.15)}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Ofrecemos soluciones tecnológicas integrales que transforman la
            manera en que tu empresa opera en el mundo digital.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          {...fadeUp(0.2)}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-500 cursor-pointer group bg-white dark:bg-tupla-dark/60 dark:border-white/10 ${
                  hoveredCard === index
                    ? "transform -translate-y-2 shadow-2xl"
                    : "hover:shadow-lg"
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${service.gradient} text-white`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-tupla-dark dark:text-white">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 space-y-6">
                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-tupla-dark dark:text-white">
                      Características:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-tupla-accent" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-tupla-dark dark:text-white">
                      Tecnologías:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-tupla-dark dark:text-gray-300 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-tupla-primary hover:bg-tupla-accent text-white transition-colors duration-300"
                  >
                    Solicitar Información
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        {/* Process Section */}
        <motion.div
          {...fadeUp(0.3)}
          className="bg-white dark:bg-tupla-dark/60 rounded-2xl p-8 md:p-12 shadow-lg dark:border dark:border-white/10"
        >
          <h3 className="text-3xl font-bold text-tupla-dark dark:text-white text-center mb-12">
            Nuestro Proceso de Trabajo
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Análisis",
                desc: "Entendemos tus necesidades y objetivos",
              },
              {
                step: "02",
                title: "Diseño",
                desc: "Creamos prototipos y wireframes",
              },
              {
                step: "03",
                title: "Desarrollo",
                desc: "Programamos con las mejores prácticas",
              },
              {
                step: "04",
                title: "Entrega",
                desc: "Desplegamos y brindamos soporte",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 flex justify-center">
                  <motion.div
                    whileHover={{
                      scale: [1, 1.15, 0.95, 1.05, 1],
                      transition: { duration: 0.8, ease: "easeOut" },
                    }}
                    className="w-16 h-16 bg-tupla-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto "
                    
                  >
                    {item.step}
                  </motion.div>

                  {index < 3 && (
                    <div className="hidden md:block absolute left-full top-1/2 transform -translate-y-1/2 w-16 h-0.5 bg-tupla-primary"></div>
                  )}
                </div>
                <h4 className="text-xl font-semibold text-tupla-dark dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
