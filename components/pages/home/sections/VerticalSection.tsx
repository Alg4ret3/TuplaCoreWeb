"use client";

import { forwardRef } from "react";
import dynamic from "next/dynamic";

// Import Antigravity dynamically to prevent SSR/hydration mismatch errors in Next.js
const Antigravity = dynamic(() => import("@/components/organisms/Antigravity"), {
  ssr: false,
});

const VerticalSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      id="section-2"
      ref={ref}
      className="relative z-20 bg-gradient-to-b from-[#050508] to-[#0b0b10] h-[110vh] w-full flex items-center justify-center overflow-hidden font-inter border-y border-white/5"
    >
      {/* 3D Antigravity Background – wrapper must have explicit dimensions for R3F */}
      <div className="absolute inset-0 z-10 w-full h-full pointer-events-auto">
        <Antigravity
          count={300}
          magnetRadius={10}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#5227FF"
          autoAnimate={true}
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      {/* Foreground Overlay Content */}
      <div className="relative z-20 animate-scroll-reveal pointer-events-none text-center select-none">
        <h2 className="text-[10px] md:text-xs tracking-[0.8em] uppercase text-white/30 font-bold font-inter">
          DISEÑO INTERACTIVO
        </h2>
        <h3 className="mt-2 text-2xl md:text-4xl font-audiowide uppercase text-white tracking-widest opacity-85">
          Tupla Core
        </h3>
      </div>
    </section>
  );
});

VerticalSection.displayName = "VerticalSection";
export default VerticalSection;

