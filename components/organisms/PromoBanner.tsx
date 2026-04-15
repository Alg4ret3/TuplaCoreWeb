"use client";

import { m } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { useState, useEffect } from "react";

interface PromoBannerProps {
  title: string;
  highlight: string;
  description: string;
  discount?: string;
  icon: LucideIcon;
  buttonText: string;
  onClick?: () => void;
  className?: string;
  variant?: "slate" | "charcoal" | "steel";
  fullWidth?: boolean;
}

const PromoBanner = ({
  title,
  highlight,
  description,
  discount,
  icon: Icon,
  buttonText,
  onClick,
  className = "",
  fullWidth = true
}: PromoBannerProps) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className={`relative overflow-hidden ${fullWidth ? "w-full border-y" : "max-w-7xl mx-auto rounded-xl border"} border-white/5 bg-transparent ${className}`}>


      <div className="relative max-w-7xl mx-auto px-10 py-20 md:py-32 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Content Wrapper */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            {/* Professional Badge */}
            <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-minimal text-white uppercase font-outfit">
              <Sparkles className="w-3.5 h-3.5 text-white/40" />
              <span>Oferta Corporativa Exclusiva</span>
            </div>
            
            <h3 className={`text-4xl md:text-5xl lg:text-6xl font-light font-outfit leading-[1.2] tracking-[0.4em] uppercase text-white`}>
              <span className="opacity-10 block mb-6">{title}</span>
              <span className="font-bold">
                {highlight}
              </span>
            </h3>
            
            <p className={`text-[10px] md:text-xs max-w-xl font-bold leading-relaxed tracking-[0.3em] uppercase text-white/40`}>
              {description}
            </p>
          </div>

          {/* Value & CTA Column */}
          <div className="flex flex-col items-center md:items-end space-y-8">
            {discount && (
              <div className="relative">
                <div className="absolute -inset-8 bg-white/5 rounded-full blur-3xl" />
                <div className="relative flex flex-col items-center md:items-end">
                  <span className="text-7xl md:text-8xl font-black font-outfit tracking-tighter text-white">
                    {discount}
                  </span>
                  <span className="text-[8px] font-bold tracking-[0.5em] uppercase opacity-20 text-white mt-4 font-outfit text-right">
                    Descuento Preferencial
                  </span>
                </div>
              </div>
            )}

            {/* Action - Architectural CTA */}
            <m.div
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <button
                onClick={onClick}
                className="group relative flex items-center space-x-6 bg-white text-black hover:bg-gray-200 active:scale-95 transition-all duration-300 pl-10 pr-2 py-2 rounded-md shadow-xl shadow-white/5 hover:scale-105"
              >
                <span className="text-[11px] font-bold uppercase tracking-minimal font-outfit">
                  {buttonText}
                </span>
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-black text-white transition-all duration-300">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </m.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default PromoBanner;
