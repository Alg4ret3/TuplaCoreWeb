"use client";
import { forwardRef } from "react";

interface HeroSectionProps {
  heroTextRef: React.RefObject<HTMLHeadingElement>;
}

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(({ heroTextRef }, ref) => {
  const renderHeroText = (text: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="hero-letter inline-block"
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
       {/* Video Background */}
       <div className="absolute inset-0 w-full h-full">
         <video
           autoPlay
           loop
           muted
           playsInline
           className="w-full h-full object-cover opacity-40 grayscale brightness-75"
           style={{ animation: 'fadeIn 2s ease-out forwards' }}
         >
           <source src="https://res.cloudinary.com/dqky6oqrd/video/upload/v1776293360/w0j24ooz1q3qw7jbbvql.mp4" type="video/mp4" />
         </video>
       </div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60 z-0" />

       {/* Main Title - Centered, prominent */}
       <h1
         ref={heroTextRef}
         className="flex flex-row items-center justify-center gap-4 md:gap-8 relative z-20 leading-none"
       >
         <span className="text-5xl md:text-[8rem] lg:text-[12rem] font-audiowide font-black uppercase text-white flex">
           {renderHeroText("TUPLA")}
         </span>
         <span className="text-5xl md:text-[8rem] lg:text-[12rem] font-audiowide font-black uppercase text-white flex">
           {renderHeroText("CORE")}
         </span>
       </h1>

       {/* Subtitle - Tagline */}
        <p className="text-sm md:text-xl font-inter font-light uppercase tracking-[0.2em] text-white text-center mt-4 md:mt-6 max-w-2xl px-4 js-subtitle">
          {renderHeroText("Diseño & Desarrollo De Software")}
        </p>

       {/* Description paragraph */}
        <p className="text-xs md:text-sm font-inter font-light leading-relaxed text-white/80 text-center mt-6 md:mt-8 max-w-lg md:max-w-3xl px-4 js-description">
          {renderHeroText("Nuestro enfoque se centra en la precisión técnica y la estética, garantizando que cada proyecto no solo funcione a la perfección, sino que también defina un nuevo estándar de excelencia digital.")}
        </p>

      {/* Second description line */}
      <h3 className="text-pinball text-[10px] md:text-sm font-audiowide text-white/40 uppercase tracking-[0.4em] mt-16 relative z-20">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <span className="js-pinball-word text-white/70">{renderHeroText("PERFORMANCE")}</span>
          <span className="hidden md:block text-white/10">•</span>
          <span className="js-pinball-word text-white/70">{renderHeroText("CLEAN CODE")}</span>
          <span className="hidden md:block text-white/10">•</span>
          <span className="js-pinball-word text-white/70">{renderHeroText("SCALABILITY")}</span>
        </div>
      </h3>

      {/* Scroll Indicator - Static Minimal */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-80">
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
