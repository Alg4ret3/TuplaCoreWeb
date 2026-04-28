"use client";

import { useRef } from "react";
import dynamic from 'next/dynamic';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Navbar from '@/components/organisms/Navbar';
import HeroSection from './sections/HeroSection';
import VerticalSection from './sections/VerticalSection';
import HorizontalSection from './sections/HorizontalSection';

gsap.registerPlugin(ScrollTrigger);

const Footer = dynamic(() => import('@/components/organisms/Footer'), { ssr: false });
const Toaster = dynamic(() => import('@/components/atoms/toaster').then(mod => mod.Toaster), { ssr: false });

const HomeView = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // 1. Animación Rotativa 3D Vertical (TUPLA CORE)
    if (heroTextRef.current) {
      const letters = heroTextRef.current.querySelectorAll(".hero-letter");
      
      gsap.fromTo(
        letters,
        {
          opacity: 0,
          scale: 0,
          filter: "blur(20px)",
          rotationX: -180, // Giro vertical inicial
          x: (i) => {
            const mod = i % 4;
            if (mod === 0) return -300; // Izquierda
            if (mod === 2) return 300;  // Derecha
            return 0;
          },
          y: (i) => {
            const mod = i % 4;
            if (mod === 1) return -300; // Arriba
            if (mod === 3) return 300;  // Abajo
            return 0;
          }
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotationX: 360, // Giro vertical completo
          filter: "blur(0px)",
          duration: 1.8,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.5,
          onComplete: () => {
            // Loop infinito vertical solo para la "A" (índice 4)
            if (letters[4]) {
              gsap.to(letters[4], {
                rotationX: "+=360",
                duration: 4,
                repeat: -1,
                ease: "none",
              });
            }
          }
        }
      );
    }

    // 2. Subtitle - Spiral In
    const subtitleLetters = document.querySelectorAll(".js-subtitle .hero-letter");
    if (subtitleLetters.length > 0) {
      gsap.fromTo(subtitleLetters, 
        {
          x: (i) => Math.cos(i) * 100,
          y: (i) => Math.sin(i) * 100,
          rotation: 360,
          scale: 0,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          stagger: 0.02,
          duration: 1,
          ease: "power3.out",
          delay: 1.2,
        }
      );
    }

    // 3. Description paragraph - Reveal Wipe
    const description = document.querySelector(".js-description");
    if (description) {
      gsap.fromTo(description, 
        {
          clipPath: "inset(0 100% 0 0)",
          opacity: 0,
          x: -30
        },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          x: 0,
          duration: 2,
          ease: "power4.inOut",
          delay: 1.6
        }
      );
    }

    // 4. Animación FadeUpWords (KEYWORDS)
    const pinballWords = document.querySelectorAll(".js-pinball-word");
    if (pinballWords.length > 0) {
      gsap.fromTo(pinballWords, 
        {
          opacity: 0,
          y: 40,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.5,
          stagger: 0.2,
          ease: "power4.out",
          delay: 2.5,
        }
      );
    }

    // 5. Scroll Indicator - Fade in with bounce
    gsap.fromTo(
      ".js-scroll-indicator",
      { opacity: 0, y: -10 },
      {
        opacity: 0.6,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.8,
      }
    );

    // 5. Hero Pinning
    ScrollTrigger.create({
      trigger: "#hero-section",
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    });

    // 6. Parallax de Salida del Hero (Desenfoque)
    if (heroTextRef.current) {
      gsap.to(heroTextRef.current, {
        opacity: 0,
        filter: "blur(20px)",
        scale: 0.8,
        yPercent: -20,
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // 7. Parallax Sección 2 (Entrada) - Simple fade
    gsap.fromTo(
      "#s2-text",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#section-2",
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      }
    );

    // 8. Horizontal Scroll
    const horizontalContainer = document.getElementById("horizontal-container");
    const horizontalFlex = horizontalRef.current;

    if (horizontalContainer && horizontalFlex) {
      const getScrollDistance = () => horizontalFlex.scrollWidth - window.innerWidth;

      gsap.to(horizontalFlex, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalContainer,
          pin: true,
          pinSpacing: true,
          scrub: 0.5,
          invalidateOnRefresh: true,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          snap: {
            snapTo: 1,
            duration: 0.5,
            ease: "power1.inOut",
          },
        },
      });
    }

    ScrollTrigger.refresh();
  }, { scope: containerRef });

  const panelClass = "w-[100vw] flex-none min-h-[100dvh] flex items-center justify-center text-2xl md:text-5xl font-plus-jakarta font-bold uppercase tracking-widest md:tracking-[0.6em] text-foreground p-10 text-center";

  return (
    <div ref={containerRef} className="bg-background overflow-x-hidden w-full relative">
      <Navbar />
      
      <HeroSection heroTextRef={heroTextRef} />
      <VerticalSection />
      <HorizontalSection ref={horizontalRef} panelClass={panelClass} />

      <Footer />
      <Toaster />
    </div>
  );
};

export default HomeView;
