"use client";

import { useState, useEffect, useMemo } from "react";
import { ArrowRight, Zap, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/atoms/button";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const rotatingTexts = useMemo(
    () => [
      "Software a Medida",
      "Web Modernas",
      "Apps Móviles",
    ],
    [],
  );

  useEffect(() => {
    const fullText = rotatingTexts[textIndex];
    const speed = isDeleting ? 50 : 100; // velocidad de escritura y borrado

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1),
      );

      // Si terminó de escribir, espera antes de borrar
      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      // Si terminó de borrar, pasa al siguiente texto
      if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, rotatingTexts]);

  useEffect(() => {
    // Al recargar la página, desplaza suavemente al inicio
    const element = document.querySelector("#inicio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-white transition-colors duration-500 dark:bg-gradient-to-br dark:from-tupla-dark dark:via-tupla-dark dark:to-gray-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-tupla-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-tupla-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-tupla-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 min-h-screen flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
          {/* Left Column - Text Content */}
          <div className="text-tupla-dark dark:text-white space-y-8 animate-fade-in text-center lg:text-left w-full">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight uppercase tracking-tighter italic">
                Transformamos Ideas en <br />
                <span className="text-tupla-accent relative min-h-[1em] inline-block">
                  {displayedText}
                  <span className="animate-pulse">|</span>{" "}
                  {/* cursor parpadeante */}
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Desarrollamos soluciones tecnológicas innovadoras para empresas
                que buscan digitalizar sus operaciones y alcanzar el éxito
                digital.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Globe className="h-6 w-6 text-tupla-accent" />
                <span className="text-sm font-medium text-tupla-dark dark:text-white">
                  Web Responsivo
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Smartphone className="h-6 w-6 text-tupla-accent" />
                <span className="text-sm font-medium text-tupla-dark dark:text-white">
                  Apps Nativas
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Zap className="h-6 w-6 text-tupla-accent" />
                <span className="text-sm font-medium text-tupla-dark dark:text-white">
                  Alta Performance
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("#contacto")}
                size="lg"
                className="bg-tupla-accent hover:bg-tupla-accent/80 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("#portafolio")}
                size="lg"
                className="bg-tupla-primary hover:bg-tupla-primary/80 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Ver Proyectos
              </Button>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="w-full max-w-md lg:max-w-lg animate-slide-up">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                {/* Mock Code Editor */}
                <div className="bg-tupla-dark rounded-lg p-4 overflow-x-auto">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <pre className="text-white bg-gray-900 p-4 rounded-md text-sm">
                    <code>
                      {`const solution = {
  web: 'responsive',
  mobile: 'native',
  software: 'custom'
};`}
                    </code>
                  </pre>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-tupla-accent">
                      10+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Proyectos
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-tupla-accent">
                      94%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Satisfacción
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-tupla-primary rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-tupla-accent rounded-full opacity-20 animate-bounce animation-delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-tupla-dark/30 dark:border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-tupla-dark/50 dark:bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
