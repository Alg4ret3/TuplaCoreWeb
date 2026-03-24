"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface PromoBannerProps {
  title: string;
  highlight: string;
  description: string;
  discount?: string;
  icon: LucideIcon;
  buttonText: string;
  onClick?: () => void;
  className?: string;
  variant?: "slate" | "navy" | "charcoal" | "steel" | "light";
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
  variant = "slate",
  fullWidth = true
}: PromoBannerProps) => {
  const variants = {
    slate: "bg-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-y border-slate-200 dark:border-slate-700/50",
    navy: "bg-blue-50/50 dark:from-[#0a192f] dark:via-[#112240] dark:to-[#0a192f] border-y border-blue-100 dark:border-blue-900/30",
    charcoal: "bg-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 border-y border-neutral-200 dark:border-neutral-700/50",
    steel: "bg-zinc-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 border-y border-zinc-200 dark:border-zinc-700/50",
    light: "bg-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 border-y border-gray-100 dark:border-neutral-700/50"
  };

  const textColors = {
    slate: "text-slate-900 dark:text-white",
    navy: "text-blue-900 dark:text-white",
    charcoal: "text-neutral-900 dark:text-white",
    steel: "text-zinc-900 dark:text-white",
    light: "text-slate-900 dark:text-white"
  };

  const [isMobile, setIsMobile] = (require("react")).useState(false);
  (require("react")).useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className={`relative overflow-hidden ${fullWidth ? "w-full" : "max-w-7xl mx-auto rounded-3xl"} ${className}`}>
      {/* Background with understated professional gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r dark:block hidden ${variants[variant]}`} />
      <div className={`absolute inset-0 block dark:hidden ${variants[variant]}`} />
      
      {/* Subtle architectural background elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tupla-primary/10 dark:bg-white/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tupla-accent/10 dark:bg-white/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-20 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Content Wrapper */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            {/* Professional Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-tupla-primary/5 dark:bg-white/5 border border-tupla-primary/10 dark:border-white/10 text-[0.65rem] font-bold tracking-[0.2em] text-tupla-primary/60 dark:text-white/60 uppercase">
              <Sparkles className="w-3.5 h-3.5 text-tupla-primary dark:text-blue-400" />
              <span>Oferta Corporativa Exclusiva</span>
            </div>
            
            <h3 className={`text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.15] tracking-tight ${textColors[variant]}`}>
              {title} <br />
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-tupla-primary via-blue-600 to-indigo-600 dark:from-blue-200 dark:to-indigo-200 italic pb-1 pr-10">
                {highlight}
              </span>
            </h3>
            
            <p className={`text-lg md:text-xl max-w-2xl font-light leading-relaxed opacity-70 ${textColors[variant]}`}>
              {description}
            </p>
          </div>

          {/* Value & CTA Column */}
          <div className="flex flex-col items-center md:items-end space-y-8">
            {discount && (
              <div className="relative">
                <div className="absolute -inset-8 bg-white/5 rounded-full blur-3xl" />
                <div className="relative flex flex-col items-center md:items-end">
                  <span className="text-7xl md:text-8xl font-light tracking-tighter text-tupla-dark dark:text-white/90">
                    {discount}
                  </span>
                  <span className="text-[0.6rem] font-bold tracking-[0.3em] uppercase opacity-40 text-tupla-dark dark:text-white mt-1">
                    Descuento Preferencial
                  </span>
                </div>
              </div>
            )}

            {/* Action - Architectural CTA */}
            <motion.div
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <button
                onClick={onClick}
                className="group relative flex items-center space-x-4 bg-tupla-primary/5 dark:bg-white/5 hover:bg-tupla-primary/10 dark:hover:bg-white/10 active:scale-95 transition-all duration-300 pl-8 pr-1 py-1 rounded-full border border-tupla-primary/20 dark:border-white/10 backdrop-blur-sm"
              >
                <span className={`text-base font-medium tracking-wide ${textColors[variant]}`}>
                  {buttonText}
                </span>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-tupla-primary text-white dark:bg-white dark:text-slate-900 group-hover:bg-tupla-accent group-hover:text-white transition-all duration-300 shadow-lg">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
                
                {/* Subtle Shine */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-tupla-primary/5 dark:via-white/5 to-transparent -translate-x-full group-hover:animate-[shine_2s_infinite] pointer-events-none" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Large Icon Background Graphic */}
      <div className={`absolute -right-20 -bottom-20 opacity-[0.03] pointer-events-none ${textColors[variant]}`}>
        <Icon size={500} strokeWidth={0.5} />
      </div>
    </section>
  );
};

export default PromoBanner;
