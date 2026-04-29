"use client";
import { forwardRef } from "react";

const VerticalSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      id="section-2"
      ref={ref}
      className="relative z-20 bg-white h-[75vh] w-full flex items-center justify-center overflow-hidden font-inter"
    >
      <div className="relative z-20">
        <h2 className="text-sm tracking-[0.8em] uppercase text-black/20 font-medium">
          SECCIÓN 2
        </h2>
      </div>
    </section>
  );
});

VerticalSection.displayName = "VerticalSection";
export default VerticalSection;

