"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Github, Send, Phone, X, Globe, ShieldCheck } from "lucide-react";
import { socialOptions } from "@/constants/socialOptions";
import { engineers } from "@/constants/engineers";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [activeSocial, setActiveSocial] = useState<string | null>(null);

  const handleSocialClick = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    setActiveSocial(prev => (prev === label ? null : label));
  };

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal for footer elements
      gsap.from(".footer-reveal", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom-=50",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
      });

      // 2. Social Icon Stroke Reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom-=100",
        }
      });

      const iconPaths = gsap.utils.toArray(".social-animate-icon path, .social-animate-icon circle, .social-animate-icon line, .social-animate-icon rect, .social-animate-icon polyline, .social-animate-icon polygon");

      if (iconPaths.length > 0) {
        iconPaths.forEach((path: any) => {
          const length = path.getTotalLength?.() || 0;
          gsap.set(path, {
            strokeDasharray: length + 1,
            strokeDashoffset: length + 1,
            fill: "none",
            stroke: "currentColor"
          });
        });

        tl.to(iconPaths, {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power3.inOut",
          stagger: 0.1
        })
          .to(iconPaths, {
            duration: 0.1,
            clearProps: "all"
          }, "-=0.2");
      }

      // 3. Normal Logo Ghost Trail
      const logoTl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom-=100",
        }
      });

      logoTl.from(".logo-ghost-1", { x: -300, opacity: 0.5, duration: 0.6 })
        .from(".logo-ghost-2", { x: -400, opacity: 0.3, duration: 0.7 }, "<0.1")
        .from(".logo-ghost-main", { x: -200, opacity: 0, duration: 0.8 }, "<0.1")
        .to(".logo-ghost-1", { opacity: 0, filter: "blur(4px)", duration: 0.5 })
        .to(".logo-ghost-2", { opacity: 0, filter: "blur(8px)", duration: 0.5 }, "<");

      // 4. Spotlight Mouse Follower
      const spotlight = footerRef.current?.querySelector(".footer-spotlight");
      const handleSpotlight = (e: MouseEvent) => {
        if (!footerRef.current || !spotlight) return;
        const rect = footerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(spotlight, {
          x: x - 200,
          y: y - 200,
          duration: 1.2,
          ease: "power3.out"
        });
      };

      footerRef.current?.addEventListener("mousemove", handleSpotlight);
    }, footerRef);

    return () => ctx.revert();
  }, { scope: footerRef });

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "Linkedin" },
    { icon: Github, href: "#", label: "Github" },
    { icon: Send, href: "#", label: "Telegram" },
    { icon: Globe, href: "#", label: "Portafolio" },
    { icon: ShieldCheck, href: "#", label: "COPNIA" },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-black text-white pt-24 pb-8 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto flex flex-col relative z-10">

        {/* Top Section: CTA & Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 mb-20 md:mb-24">

          {/* CTA */}
          <div className="footer-reveal flex-1 w-full max-w-full overflow-hidden flex flex-col items-start space-y-4">
            <Link href="/" className="group block">
              <Image
                src="https://res.cloudinary.com/dqky6oqrd/image/upload/f_auto,q_auto/v1777477653/yzuhpdmywqomvj68rtzm.svg"
                alt="TUPLΛ CORE"
                width={240}
                height={60}
                className="h-12 md:h-16 lg:h-20 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <a href="mailto:hola@tuplacore.com" className="group flex flex-wrap items-center gap-4 text-[10px] sm:text-xs md:text-base font-inter tracking-[0.2em] md:tracking-[0.3em] uppercase">
              <span className="w-8 md:w-16 h-[1px] bg-white/50 transition-all duration-500 group-hover:w-12 md:group-hover:w-24 group-hover:bg-white hidden sm:block"></span>
              <span className="break-all">hola@tuplacore.com</span>
            </a>
          </div>

          {/* Navigation & Socials */}
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-24 text-[10px] sm:text-xs font-inter uppercase tracking-[0.2em] text-white/60 w-full lg:w-auto">
            <div className="footer-reveal flex flex-col gap-5">
              <h4 className="text-white font-audiowide tracking-[0.4em] mb-2 opacity-50">Navegación</h4>
              <Link href="/" className="hover:text-white hover:translate-x-2 transition-all duration-300">Inicio</Link>
              <Link href="/servicios" className="hover:text-white hover:translate-x-2 transition-all duration-300">Servicios</Link>
              <Link href="/proyectos" className="hover:text-white hover:translate-x-2 transition-all duration-300">Proyectos</Link>
            </div>

            <div className="footer-reveal flex flex-col gap-5 relative">
              <h4 className="text-white font-audiowide tracking-[0.4em] mb-2 opacity-50">Sociales</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      onClick={(e) => handleSocialClick(e, social.label)}
                      className={`group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 ${activeSocial===social.label ? 'bg-white/20' : ''} transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:-translate-y-1`}
                      aria-label={social.label}
                    >
                      <social.icon className="social-animate-icon w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>



              {/* Phone */}
              <a href="tel:+573000000000" className="mt-4 flex items-center gap-3 hover:text-white transition-colors group">
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>+57 300 000 0000</span>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-t border-white/20 w-full my-5" />

        {/* Bottom Row: Copyright */}
        <div className="footer-reveal flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-inter text-white/40">
          <p>© {new Date().getFullYear()} Tupla Core</p>
          <p>Diseño & Desarrollo</p>
        </div>

      </div>

      {/* Background Noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Interactive Spotlight */}
      <div className="footer-spotlight pointer-events-none absolute w-[400px] h-[400px] bg-white/[0.04] blur-[120px] rounded-full z-[1]" />

      {/* Fixed Full-Screen Modal for social options */}
      {activeSocial && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          {/* Backdrop click to close */}
          <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveSocial(null)}></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-sm bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl p-6 z-10">
            <div className="flex justify-between items-center mb-6">
              <h5 className="text-white text-sm font-audiowide uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/50"></span>
                {activeSocial}
              </h5>
              <button 
                onClick={() => setActiveSocial(null)}
                className="text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-all duration-300"
                aria-label="Cerrar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {engineers
                .filter((eng) =>
                  eng.socials.some(
                    (s) => s.platform.toLowerCase() === activeSocial.toLowerCase()
                  )
                )
                .map((eng, i) => {
                  const platformSocial = eng.socials.find(
                    (s) => s.platform.toLowerCase() === activeSocial.toLowerCase()
                  );
                  return (
                    <a
                      key={i}
                      href={platformSocial?.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors flex-shrink-0 shadow-inner overflow-hidden relative">
                        {eng.avatar ? (
                          <img src={eng.avatar} alt={eng.name} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-xs font-audiowide text-white/90">{eng.name.charAt(0)}</span>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors truncate">
                          {eng.name}
                        </span>
                        <span className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">
                          {{
                            linkedin: "Visitar ↗",
                            github: "Explorar ↗",
                            telegram: "Contactar ↗",
                            portafolio: "Visitar Web ↗",
                            copnia: "Verificar ↗"
                          }[activeSocial.toLowerCase()] || "Visitar ↗"}
                        </span>
                      </div>
                    </a>
                  );
                })}
              {engineers.filter(eng => eng.socials.some(s => s.platform.toLowerCase() === activeSocial.toLowerCase())).length === 0 && (
                <div className="text-center py-8">
                  <p className="text-xs text-white/50 italic font-inter tracking-widest uppercase">No disponible en este momento.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;