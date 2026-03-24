"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/molecules/ThemeToggle";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Portafolio", href: "/portafolio" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
  ];

  const isDarkHeroPage = pathname === "/";
  const showDarkNavbarAtTop = isDarkHeroPage;

  return (
    <motion.nav
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
                    scrolled 
                      ? "text-black dark:text-white" 
                      : (showDarkNavbarAtTop && currentTheme === "dark" ? "text-white" : "text-black dark:text-white")
                  } ${pathname === item.href ? "text-tupla-primary font-bold" : "hover:text-tupla-primary"} px-3 py-2 text-sm font-medium transition-colors duration-200`}
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
              } hover:text-tupla-primary block px-3 py-2 text-base font-medium transition-colors duration-200 ${
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
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="bg-white dark:bg-tupla-dark border border-black/10 dark:border-white/10 rounded-3xl p-6 mt-4 shadow-2xl relative overflow-hidden"
              >
                {/* Background accents */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-tupla-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-tupla-accent/10 rounded-full blur-3xl" />

                <div className="flex flex-col gap-2 relative z-10">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-center justify-between w-full px-5 py-4 rounded-2xl font-bold text-lg transition-all duration-300
                          ${pathname === item.href 
                            ? "bg-tupla-primary text-white shadow-lg shadow-tupla-primary/30 scale-[1.02]" 
                            : "bg-gray-50/80 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-tupla-primary/10 hover:text-tupla-primary"
                          }`}
                      >
                        <span className="flex items-center">
                          {item.name}
                        </span>
                        {pathname === item.href ? (
                          <motion.div 
                            layoutId="active-dot"
                            className="w-2 h-2 rounded-full bg-white animate-pulse" 
                          />
                        ) : (
                          <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        )}
                      </Link>
                    </motion.div>
                  ))}

                  <div className="pt-4">
                    <Link href="/cotizar" onClick={() => setIsOpen(false)}>
                      <Button
                        className="w-full bg-tupla-primary hover:bg-tupla-accent font-bold text-lg h-16 shadow-xl shadow-tupla-primary/20 transition-all duration-300 active:scale-[0.98] rounded-xl"
                      >
                        Cotizar Proyecto
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
