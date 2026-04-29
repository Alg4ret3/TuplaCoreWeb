"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Github, Send, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // 1. Logo Stroke Reveal Animation (Only for Social Icons)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom-=100",
        }
      });

      // Target all Social Icon SVG elements
      const iconPaths = gsap.utils.toArray(".social-animate-icon path, .social-animate-icon circle, .social-animate-icon line, .social-animate-icon rect, .social-animate-icon polyline, .social-animate-icon polygon");

      if (iconPaths.length > 0) {
        // Set initial states for icons (Stroke hidden)
        iconPaths.forEach((path: any) => {
          const length = path.getTotalLength?.() || 0;
          gsap.set(path, { 
            strokeDasharray: length + 1, // Add a small buffer
            strokeDashoffset: length + 1,
            fill: "transparent",
            stroke: "white"
          });
        });

        tl.to(iconPaths, {
          strokeDashoffset: 0,
          duration: 0.8, // Much faster
          ease: "power2.inOut",
          stagger: 0.05
        })
        .to(iconPaths, {
          fill: "white",
          stroke: "white",
          duration: 0.4,
          stagger: 0.03,
          clearProps: "strokeDasharray,strokeDashoffset"
        }, "-=0.2");
      }

      // 4. Ghost Trail Animation for Logo
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

      // 6. Ghost Trail Animation for Copyright
      const copyTl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom-=50",
        }
      });

      copyTl.from(".copy-ghost-1", { x: -300, opacity: 0.5, duration: 0.6 })
        .from(".copy-ghost-2", { x: -400, opacity: 0.3, duration: 0.7 }, "<0.1")
        .from(".copy-ghost-main", { x: -200, opacity: 0, duration: 0.8 }, "<0.1")
        .to(".copy-ghost-1", { opacity: 0, filter: "blur(4px)", duration: 0.5 })
        .to(".copy-ghost-2", { opacity: 0, filter: "blur(8px)", duration: 0.5 }, "<");

      // 5. Ghost Trail Animation for Contact Info
      const contactTl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
        }
      });

      contactTl.from(".contact-ghost-1", { x: -300, opacity: 0.5, duration: 0.6, stagger: 0.1 })
        .from(".contact-ghost-2", { x: -400, opacity: 0.3, duration: 0.7, stagger: 0.1 }, "<0.1")
        .from(".contact-ghost-main", { x: -200, opacity: 0, duration: 0.8, stagger: 0.1 }, "<0.1")
        .to(".contact-ghost-1", { opacity: 0, filter: "blur(4px)", duration: 0.5, stagger: 0.1 })
        .to(".contact-ghost-2", { opacity: 0, filter: "blur(8px)", duration: 0.5, stagger: 0.1 }, "<");

      // 3. Reveal for other footer elements
      gsap.from(".footer-reveal", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom-=50",
        },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });
      // 7. Spotlight Mouse Follower
      const spotlight = footerRef.current?.querySelector(".footer-spotlight");
      
      const handleSpotlight = (e: MouseEvent) => {
        if (!footerRef.current || !spotlight) return;
        const rect = footerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        gsap.to(spotlight, {
          x: x - 150,
          y: y - 150,
          duration: 1,
          ease: "power2.out"
        });
      };

      footerRef.current?.addEventListener("mousemove", handleSpotlight);

    }, footerRef);

    return () => ctx.revert();
  }, { scope: footerRef });

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Send, href: "#", label: "Telegram" },
  ];

  return (
    <footer 
      ref={footerRef}
      className="sticky bottom-0 z-0 w-full bg-black text-white py-12 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Main Footer Content: 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10">
          
          {/* Column 1: Logo (Left) */}
          <div className="flex justify-center lg:justify-start">
            <Link href="/" className="group relative">
              {/* Ghost Main */}
              <div className="logo-ghost-main relative z-[3]">
                <Image
                  src="https://res.cloudinary.com/dqky6oqrd/image/upload/f_auto,q_auto/v1777477653/yzuhpdmywqomvj68rtzm.svg"
                  alt="TUPLΛ CORE"
                  width={160}
                  height={40}
                  className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
                />
              </div>
              {/* Ghost Copies */}
              <div className="logo-ghost-1 absolute top-0 left-0 opacity-0 pointer-events-none">
                <Image
                  src="https://res.cloudinary.com/dqky6oqrd/image/upload/f_auto,q_auto/v1777477653/yzuhpdmywqomvj68rtzm.svg"
                  alt=""
                  width={160}
                  height={40}
                  className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
                />
              </div>
              <div className="logo-ghost-2 absolute top-0 left-0 opacity-0 pointer-events-none">
                <Image
                  src="https://res.cloudinary.com/dqky6oqrd/image/upload/f_auto,q_auto/v1777477653/yzuhpdmywqomvj68rtzm.svg"
                  alt=""
                  width={160}
                  height={40}
                  className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
                />
              </div>
            </Link>
          </div>

          {/* Column 2: Contact Info (Center) */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-audiowide text-white whitespace-nowrap">
            
            {/* Email Ghost Trail */}
            <a href="mailto:hola@tuplacore.com" className="hover:opacity-70 transition-all flex items-center gap-2 group relative">
              <div className="contact-ghost-main relative z-[3] flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span>hola@tuplacore.com</span>
              </div>
              <div className="contact-ghost-1 absolute top-0 left-0 opacity-0 pointer-events-none flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" />
                <span>hola@tuplacore.com</span>
              </div>
              <div className="contact-ghost-2 absolute top-0 left-0 opacity-0 pointer-events-none flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" />
                <span>hola@tuplacore.com</span>
              </div>
            </a>

            <div className="hidden md:block w-[1px] h-3 bg-white/20" />

            {/* Phone Ghost Trail */}
            <a href="tel:+573000000000" className="hover:opacity-70 transition-all flex items-center gap-2 group relative">
              <div className="contact-ghost-main relative z-[3] flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span>+57 300 000 0000</span>
              </div>
              <div className="contact-ghost-1 absolute top-0 left-0 opacity-0 pointer-events-none flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                <span>+57 300 000 0000</span>
              </div>
              <div className="contact-ghost-2 absolute top-0 left-0 opacity-0 pointer-events-none flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                <span>+57 300 000 0000</span>
              </div>
            </a>
          </div>

          {/* Column 3: Social Links (Right) */}
          <div className="footer-reveal flex items-center justify-center lg:justify-end gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="social-item group flex items-center justify-center w-11 h-11 rounded-full border border-white/20 transition-all"
                aria-label={social.label}
              >
                <social.icon className="social-animate-icon w-4 h-4 text-white" />
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Row: Centered Copyright */}
        <div className="w-full pt-10 border-t border-white/10 text-center flex justify-center">
          <div className="relative">
            <p className="copy-ghost-main relative z-[3] text-[8px] md:text-[9px] uppercase tracking-[0.5em] text-white font-inter opacity-60">
              © {new Date().getFullYear()} Tupla Core
            </p>
            <p className="copy-ghost-1 absolute top-0 left-0 w-full text-[8px] md:text-[9px] uppercase tracking-[0.5em] text-white font-inter opacity-0 pointer-events-none">
              © {new Date().getFullYear()} Tupla Core
            </p>
            <p className="copy-ghost-2 absolute top-0 left-0 w-full text-[8px] md:text-[9px] uppercase tracking-[0.5em] text-white font-inter opacity-0 pointer-events-none">
              © {new Date().getFullYear()} Tupla Core
            </p>
          </div>
        </div>

      </div>

      {/* Background Noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Interactive Spotlight */}
      <div className="footer-spotlight pointer-events-none absolute w-[300px] h-[300px] bg-white/[0.07] blur-[100px] rounded-full z-[1]" />
    </footer>
  );
};

export default Footer;