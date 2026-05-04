"use client";

import { useRef } from "react";
import dynamic from 'next/dynamic';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Navbar from '@/components/organisms/Navbar';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import ProcessSection from './sections/ProcessSection';
import PortfolioSection from './sections/PortfolioSection';
import TechStackSection from './sections/TechStackSection';
import TeamSection from './sections/TeamSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';

gsap.registerPlugin(ScrollTrigger);

const Footer = dynamic(() => import('@/components/organisms/Footer'), { ssr: false });

const HomeView = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // --- 1. HERO MAIN TITLE (3D ROTATION) ---
    const mainLetters = gsap.utils.toArray<HTMLElement>(".hero-letter", heroTextRef.current || undefined);
    
    if (mainLetters.length > 0) {
      gsap.fromTo(mainLetters,
        {
          opacity: 0,
          scale: 0,
          filter: "blur(20px)",
          rotationX: -180,
          x: (i) => [-300, 0, 300, 0][i % 4],
          y: (i) => [0, -300, 0, 300][i % 4],
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotationX: 360,
          filter: "blur(0px)",
          duration: 1.8,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.5,
          force3D: true,
          onComplete: () => {
            // Loop for the "A" in TUPLA
            if (mainLetters[4]) {
              gsap.to(mainLetters[4], {
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

    // --- 2. SUBTITLE (SPIRAL ENTRY) ---
    gsap.fromTo(".js-subtitle .hero-letter", 
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
        force3D: true,
      }
    );

    // --- 3. DESCRIPTION (WIPE REVEAL) ---
    gsap.fromTo(".js-description", 
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
        delay: 1.6,
        force3D: true,
      }
    );

    // --- 4. KEYWORDS (FADE UP) ---
    gsap.fromTo(".js-pinball-word", 
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
        force3D: true,
      }
    );


    // --- 6. COUNTERS (SCALE + REVEAL) ---
    gsap.fromTo(".js-counters",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        delay: 2.8,
      }
    );

    gsap.fromTo(".js-counter-item",
      {
        opacity: 0,
        y: 25,
        scale: 0.7,
        filter: "blur(6px)",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 3.0,
        force3D: true,
      }
    );

    // --- 7. SCROLL INDICATOR ---
    gsap.fromTo(".js-scroll-indicator",
      { opacity: 0, y: -10 },
      {
        opacity: 0.6,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 3.5,
      }
    );

    // --- 6. PINNING & PARALLAX ---
    ScrollTrigger.create({
      trigger: "#hero-section",
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
    });

    if (heroTextRef.current) {
      gsap.to(heroTextRef.current, {
        opacity: 0,
        filter: "blur(20px)",
        scale: 0.8,
        yPercent: -20,
        force3D: true,
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // SERVICES ENTRANCE
    gsap.fromTo(".js-service-card", 
      {
        y: 60,
        opacity: 0,
        scale: 0.95,
      },
      { 
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#section-2",
          start: "top 80%",
          once: true,
        }
      }
    );

    // TEAM ENTRANCE
    gsap.fromTo(".js-team-member", 
      { y: 50, opacity: 0 },
      { 
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".js-team-member",
          start: "top 85%",
          once: true,
        }
      }
    );

    // PORTFOLIO ENTRANCE
    gsap.fromTo(".js-portfolio-item", 
      { y: 80, opacity: 0 },
      { 
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".js-portfolio-item",
          start: "top 90%",
          once: true,
        }
      }
    );

    // TESTIMONIALS ENTRANCE
    gsap.fromTo(".js-testimonial-card", 
      { y: 40, opacity: 0 },
      { 
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".js-testimonial-card",
          start: "top 90%",
          once: true,
        }
      }
    );

    // HORIZONTAL SCROLL
    const hContainer = document.getElementById("horizontal-container");
    const hFlex = horizontalRef.current;

    if (hContainer && hFlex) {
      const getDist = () => hFlex.scrollWidth - window.innerWidth;

      gsap.to(hFlex, {
        x: () => -getDist(),
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: hContainer,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          start: "top top",
          end: () => `+=${getDist() * 2.5}`,
          snap: {
            snapTo: 1 / (4 - 1),
            duration: { min: 0.4, max: 0.8 },
            delay: 0.1,
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
      <main className="relative z-10 bg-background shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
        <HeroSection heroTextRef={heroTextRef} />
        <ServicesSection />
        <ProcessSection ref={horizontalRef} panelClass={panelClass} />
        <PortfolioSection />
        <TechStackSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomeView;
