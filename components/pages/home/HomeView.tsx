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
    // 1. Animación Pixar Hero (TUPLA CORE) - Letter animation
    if (heroTextRef.current) {
      const letters = heroTextRef.current.querySelectorAll(".hero-letter");
      gsap.fromTo(
        letters,
        {
          opacity: 0,
          x: -80,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.06,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }

    // 2. Subtitle - Fade up
    gsap.fromTo(
      ".js-subtitle",
      { opacity: 0, y: 20 },
      {
        opacity: 0.7,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1.2,
      }
    );

    // 3. Description paragraph - Fade up
    gsap.fromTo(
      ".js-description",
      { opacity: 0, y: 15 },
      {
        opacity: 0.5,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1.4,
      }
    );

    // 4. Second description line (Innovación • Precisión • Pasión) - Fade up
    gsap.fromTo(
      ".js-tagline",
      { opacity: 0, y: 10 },
      {
        opacity: 0.7,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.6,
      }
    );

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
