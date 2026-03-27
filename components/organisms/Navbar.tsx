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
import { ThemeToggle } from "@/components/molecules/ThemeToggle";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  const isDarkHeroPage = pathname === "/";
  const showDarkNavbarAtTop = isDarkHeroPage;

  return (
    <m.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out 
      ${
        scrolled
          ? `bg-white dark:bg-tupla-dark border-b-2 border-tupla-primary 
     shadow-[0_4px_30px_rgba(30,144,255,0.2)]
     before:content-[""] before:absolute before:bottom-0 before:left-0 
     before:h-0.5 before:w-full before:bg-gradient-to-r 
     before:from-transparent before:via-tupla-primary before:to-transparent 
     before:animate-pulse before:blur-sm`
          : "bg-transparent border-transparent before:content-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            {/* Logo for light mode at top of Dark Hero pages (shows White Logo) OR Scrolled/Other Pages (shows Color Logo) */}
            <Image 
              src={(!scrolled && showDarkNavbarAtTop && currentTheme === "dark") ? "/LogoBlanco.svg" : "/logo.svg"} 
              alt="TUPLΛ CΩRE" 
              width={200} 
              height={60} 
              className="h-12 w-auto object-contain dark:hidden"
            />
            {/* Logo for dark mode (always White Logo) */}
            <Image 
              src="/LogoBlanco.svg" 
              alt="TUPLΛ CΩRE" 
              width={200} 
              height={60} 
              className="h-12 w-auto object-contain hidden dark:block"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? "text-tupla-primary font-bold" 
                      : `${scrolled 
                          ? "text-black dark:text-white" 
                          : (showDarkNavbarAtTop && currentTheme === "dark" ? "text-white" : "text-black dark:text-white")
                        } hover:text-tupla-primary dark:hover:text-tupla-primary`
                  } px-3 py-2 text-sm font-medium transition-colors duration-200 group`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <ThemeToggle scrolled={scrolled || !showDarkNavbarAtTop || currentTheme === "light"} />

            <Link href="/cotizar">
              <Button
                className="bg-tupla-primary hover:bg-tupla-accent text-white"
              >
                Cotizar Proyecto
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle scrolled={scrolled || !showDarkNavbarAtTop || currentTheme === "light"} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                scrolled 
                  ? "text-black dark:text-white" 
                  : (showDarkNavbarAtTop && currentTheme === "dark" ? "text-white" : "text-black dark:text-white")
              } hover:text-tupla-primary dark:hover:text-tupla-primary block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                !mounted ? "opacity-0" : "opacity-100"
              }`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 md:hidden bg-tupla-dark/40 backdrop-blur-sm flex justify-end"
              onClick={() => setIsOpen(false)}
            >
              <m.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-[300px] h-full bg-white dark:bg-tupla-dark/95 border-l border-black/10 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col"
              >
                {/* Simple Header */}
                <div className="p-6 flex items-center justify-between border-b border-black/5 dark:border-white/5">
                  <Image src={currentTheme === 'dark' ? "/LogoBlanco.svg" : "/logo.svg"} alt="Logo" width={100} height={30} className="h-6 w-auto" />
                  <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors">
                    <X className="h-5 w-5 opacity-70" />
                  </button>
                </div>

                {/* Navigation List */}
                <div className="p-4 space-y-1">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <m.div
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "tween", delay: index * 0.03 }}
                      >
                        <Link
                          href={item.href}
                          prefetch={true}
                          onClick={() => startTransition(() => setIsOpen(false))}
                          className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all duration-200 group
                            ${isActive 
                              ? "text-tupla-primary bg-tupla-primary/10 shadow-sm shadow-tupla-primary/10" 
                              : "text-gray-500 dark:text-gray-400 hover:text-tupla-primary dark:hover:text-tupla-primary hover:bg-tupla-primary/10"
                            }`}
                        >
                          <item.icon className={`h-5 w-5 transition-colors ${isActive ? 'text-tupla-primary opacity-100' : 'opacity-70 group-hover:text-tupla-primary'}`} />
                          <span>{item.name}</span>
                        </Link>
                      </m.div>
                    );
                  })}
                </div>

                {/* Primary Action & Social Links */}
                <div className="p-6 pb-12 mt-auto border-t border-black/5 dark:border-white/5 space-y-8">
                  <Link href="/cotizar" prefetch={true} onClick={() => startTransition(() => setIsOpen(false))}>
                    <Button className="w-full bg-tupla-primary hover:bg-tupla-accent text-white font-bold h-14 rounded-2xl shadow-lg shadow-tupla-primary/20 transition-all active:scale-[0.98]">
                      Cotizar Proyecto
                    </Button>
                  </Link>

                  <div className="relative pt-4">
                    <div className="flex justify-center items-center space-x-6">
                      {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        const isExpanded = activeSocialMenu === social.label;
                        
                        return (
                          <div key={index} className="flex flex-col items-center">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveSocialMenu(isExpanded ? null : social.label);
                              }}
                              className={`p-4 rounded-2xl transition-all duration-300 ${
                                isExpanded 
                                  ? "bg-tupla-primary text-white scale-110 shadow-lg shadow-tupla-primary/30" 
                                  : "bg-black/5 dark:bg-white/5 text-gray-400 dark:text-gray-500 hover:text-tupla-primary"
                              }`}
                              aria-label={social.label}
                            >
                              {social.href && !social.subLinks ? (
                                <a href={social.href} target="_blank" rel="noopener noreferrer">
                                  <IconComponent className="h-6 w-6" />
                                </a>
                              ) : (
                                <IconComponent className="h-6 w-6" />
                              )}
                            </button>

                            {/* Selection Menu (Animated underneath) */}
                            <AnimatePresence>
                              {isExpanded && social.subLinks && (
                                <m.div
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.9 }}
                                  className="absolute -top-32 left-0 right-0 p-3 bg-white dark:bg-tupla-dark/95 border border-black/10 dark:border-white/10 rounded-3xl shadow-2xl z-50 backdrop-blur-xl flex flex-col items-stretch space-y-1"
                                >
                                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 text-center mb-2 px-2">Selecciona un Perfil</div>
                                  {social.subLinks.map((sub, subIdx) => (
                                    <a
                                      key={subIdx}
                                      href={sub.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={() => {
                                        startTransition(() => {
                                          setIsOpen(false);
                                          setActiveSocialMenu(null);
                                        });
                                      }}
                                      className="flex items-center justify-between px-4 py-3 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-tupla-primary hover:text-white rounded-2xl transition-colors group/row"
                                    >
                                      <span>{sub.name}</span>
                                      <ArrowRight size={14} className="opacity-0 group-hover/row:opacity-100 transition-opacity" />
                                    </a>
                                  ))}
                                </m.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </m.nav>
  );
};

export default Navbar;
