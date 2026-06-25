"use client";

const HorizontalSection = () => {
  return (
    <section
      id="section-3"
      className="relative z-30 bg-background min-h-[200vh] flex flex-col justify-center overflow-hidden"
    >
      <div className="parallax-wrapper relative h-[100vh] overflow-clip">
        <div className="parallax-layer absolute inset-0 flex items-center justify-center text-2xl md:text-5xl font-plus-jakarta font-bold uppercase tracking-widest md:tracking-[0.6em] text-foreground will-change-transform">
          <span>Sección 3 - Panel 1</span>
        </div>
        <div className="parallax-layer absolute inset-0 flex items-center justify-center text-2xl md:text-5xl font-plus-jakarta font-bold uppercase tracking-widest md:tracking-[0.6em] text-foreground/80 will-change-transform">
          <span>Sección 3 - Panel 2</span>
        </div>
      </div>
    </section>
  );
};

HorizontalSection.displayName = "HorizontalSection";
export default HorizontalSection;
