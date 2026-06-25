"use client";
import { forwardRef } from "react";

interface HeroSectionProps {
  heroTextRef: React.RefObject<HTMLHeadingElement>;
}

import Beams from "@/components/organisms/Beams";

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(({ heroTextRef }, ref) => {
  const renderHeroText = (text: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="hero-letter inline-block opacity-0"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section
      id="hero-section"
      ref={ref}
      className="relative h-[100dvh] flex flex-col items-center justify-center z-10 bg-black overflow-hidden"
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUpScale {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9) rotate(-2deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
{/* Beams Background */}
      <div className="absolute inset-0 w-full h-full">
        <Beams
          beamWidth={2.8}
          beamHeight={15}
          beamNumber={31}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={25}
        />
      </div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60 z-0" />

       {/* Main Title - Centered, prominent */}
       <div className="w-[92%] max-w-7xl flex justify-center relative z-20">
         <h1
           ref={heroTextRef}
           className="flex flex-row items-center justify-center gap-[2vw] leading-none w-full"
         >
           <span className="text-[clamp(2.5rem,10vw,8.5rem)] font-audiowide font-black uppercase text-white flex">
             {renderHeroText("TUPLA")}
           </span>
           <span className="text-[clamp(2.5rem,10vw,8.5rem)] font-audiowide font-black uppercase text-white flex">
             {renderHeroText("CORE")}
           </span>
         </h1>
       </div>

       {/* Subtitle - Tagline */}
        <p className="text-sm md:text-xl font-inter font-light uppercase tracking-[0.2em] text-white text-center mt-4 md:mt-6 max-w-2xl px-4 js-subtitle">
          {renderHeroText("Diseño & Desarrollo De Software")}
        </p>

       {/* Description paragraph */}
        <p className="text-xs md:text-sm font-inter font-light leading-relaxed text-white/80 text-center mt-6 md:mt-8 max-w-lg md:max-w-3xl px-4 js-description opacity-0" style={{ clipPath: "inset(0 100% 0 0)", transform: "translateX(-30px)" }}>
          Nuestro enfoque se centra en la precisión técnica y la estética, garantizando que cada proyecto no solo funcione a la perfección, sino que también defina un nuevo estándar de excelencia digital.
        </p>

      {/* Second description line */}
      <h3 className="text-pinball text-[10px] md:text-sm font-audiowide text-white/40 uppercase tracking-[0.4em] mt-16 relative z-20">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <span className="js-pinball-word text-white/70 opacity-0 transform translate-y-10">PERFORMANCE</span>
          <span className="hidden md:block text-white/10">•</span>
          <span className="js-pinball-word text-white/70 opacity-0 transform translate-y-10">CLEAN CODE</span>
          <span className="hidden md:block text-white/10">•</span>
          <span className="js-pinball-word text-white/70 opacity-0 transform translate-y-10">SCALABILITY</span>
        </div>
      </h3>

      {/* Scroll Indicator - Static Minimal */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 js-scroll-indicator">
        <span className="text-[8px] uppercase tracking-[0.6em] text-white font-inter">
          Scroll
        </span>
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";
export default HeroSection;
