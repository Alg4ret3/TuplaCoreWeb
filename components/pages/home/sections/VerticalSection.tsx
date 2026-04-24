"use client";
import { forwardRef } from "react";

const VerticalSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      id="section-2"
      ref={ref}
      className="relative z-20 bg-white h-[100dvh] flex items-center justify-center border-y border-black/5"
    >
      <h2
        id="s2-text"
        className="text-2xl md:text-5xl font-plus-jakarta font-light uppercase tracking-[0.2em] md:tracking-[0.4em]"
      >
        Sección 2
      </h2>
    </section>
  );
});

VerticalSection.displayName = "VerticalSection";
export default VerticalSection;
