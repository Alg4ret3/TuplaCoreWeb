"use client";

import { useState, useEffect, startTransition } from "react";
import { 
  Menu, X, ArrowRight, Home, Layers, 
  Briefcase, Users, Mail, Instagram, 
  Linkedin, Github, ExternalLink 
} from "lucide-react";
import { Button } from "@/components/atoms/button";
import { m, AnimatePresence } from "framer-motion";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = (value?: boolean) => {
    setIsMenuOpen(value ?? !isMenuOpen);
  };
  const [activeSocialMenu, setActiveSocialMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "/", icon: Home },
    { name: "Servicios", href: "/servicios", icon: Layers },
    { name: "Portafolio", href: "/portafolio", icon: Briefcase },
    { name: "Nosotros", href: "/nosotros", icon: Users },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/tupla.core", label: "Instagram" },
    { 
      icon: Linkedin, 
      label: 'LinkedIn',
      subLinks: [
        { name: 'Ing Michael Coral', href: 'http://www.linkedin.com/in/maicol-coral-3626a4251' },  
        { name: 'Ing Sergio Muñoz', href: 'https://www.linkedin.com/in/sergio-mu%C3%B1oz-b75bba208/' }
      ]
    },
    { 
      icon: Github, 
      label: 'GitHub',
      subLinks: [
        { name: 'Ing Michael Coral', href: 'https://github.com/Mai1203' },
        { name: 'Ing Sergio Muñoz', href: 'https://github.com/Alg4ret3' }
      ]
    }
  ];

  return (
    <m.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/40 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent border-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          <Link href="/" className="flex items-center opacity-60 hover:opacity-100 transition-opacity" prefetch={true}>
            <Image 
              src="https://res.cloudinary.com/dqky6oqrd/image/upload/v1776290127/ibh4w2ar7ojmdaue0ne7.svg" 
              alt="TUPLΛ CΩRE" 
              width={180} 
              height={45} 
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12 text-white">
            <div className="flex items-center space-x-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    prefetch={true}
                    className={`px-4 py-2 text-[10px] uppercase font-outfit font-bold tracking-[0.25em] transition-all duration-500 ${
                      isActive
                        ? "text-white" 
                        : "text-white/30 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            
            <div className="flex items-center space-x-8 pl-8 border-l border-white/10">
              <Link href="/cotizar" prefetch={true}>
                <button
                  className="group flex items-center space-x-4 text-white text-[10px] uppercase tracking-extrawide font-bold transition-all"
                >
                  <span className="opacity-30 group-hover:opacity-100 transition-opacity">Cotizar</span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => toggleMenu()}
              className="relative w-8 h-8 flex flex-col items-center justify-center space-y-1.5 focus:outline-none z-[70] opacity-60 hover:opacity-100 transition-opacity"
              aria-label="Toggle Menu"
            >
              <m.span
                animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="block w-6 h-0.5 bg-white origin-center"
              />
              <m.span
                animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-6 h-0.5 bg-white"
              />
              <m.span
                animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="block w-6 h-0.5 bg-white origin-center"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute top-full left-0 right-0 border-b border-white/5 overflow-hidden lg:hidden ${
              scrolled ? "bg-background/60 backdrop-blur-md" : "bg-background/40 backdrop-blur-sm"
            }`}
          >
            <div className="flex flex-col p-10 space-y-8">
              {navItems.map((item, index) => (
                <m.div
                  key={item.name}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.03,
                    ease: "easeOut" 
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => toggleMenu(false)}
                    className="text-[11px] font-bold font-outfit tracking-[0.3em] uppercase text-white/40 hover:text-white transition-all block"
                  >
                    {item.name}
                  </Link>
                </m.div>
              ))}
              
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-4 border-t border-white/5"
              >
                <Link href="/cotizar" onClick={() => toggleMenu(false)}>
                  <button className="flex items-center space-x-4 text-white text-[10px] uppercase tracking-extrawide font-bold">
                    <span>Cotizar Proyecto</span>
                    <ArrowRight className="w-3 h-3 text-white/40" />
                  </button>
                </Link>
              </m.div>

              <div className="flex space-x-6 pt-4 opacity-30">
                {socialLinks.map((social, i) => (
                  <a key={i} href={social.href || "#"} target="_blank" className="hover:text-white transition-colors">
                    <social.icon size={14} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.nav>
  );
};

export default Navbar;
