"use client";
import { forwardRef } from "react";

interface HorizontalSectionProps {
  panelClass: string;
}

const HorizontalSection = forwardRef<HTMLDivElement, HorizontalSectionProps>(({ panelClass }, ref) => {
  return (
    <div id="horizontal-container" className="relative z-30 bg-background overflow-hidden min-h-[100dvh]">
      <div 
        ref={ref} 
        className="flex flex-nowrap h-[100dvh] items-center will-change-transform"
        style={{ width: "200vw" }}
      >
        <div className={panelClass}>
          <span>Sección 3 - Panel 1</span>
        </div>
        <div className={panelClass}>
          <span>Sección 3 - Panel 2</span>
        </div>
      </div>
    </div>
  );
});

HorizontalSection.displayName = "HorizontalSection";
export default HorizontalSection;
