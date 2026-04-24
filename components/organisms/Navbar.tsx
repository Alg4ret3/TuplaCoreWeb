"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);

   useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Calculate hero height (approximately 100vh)
      const heroHeight = window.innerHeight;
      setIsOverHero(scrollY < heroHeight - 80); // navbar height offset
    };

    // Initial check after mount
    setTimeout(handleScroll, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   const navLinks = [
     { name: "Inicio", href: "/" },
   ];

   // Mobile menu shows same single link
   const mobileMenuLinks = navLinks;

   return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isOverHero
          ? "py-3 bg-transparent backdrop-blur-[2px]"
          : "py-2 bg-white/95 backdrop-blur-md border-b border-black/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* LOGO - Color adaptable */}
          <Link href="/" className="relative z-[110]">
            <Image
              src="https://res.cloudinary.com/dqky6oqrd/image/upload/v1776290459/hcwetijsgf0grhk4yhzh.svg"
              alt="TUPLΛ CORE"
              width={160}
              height={40}
              className={`h-8 w-auto object-contain grayscale brightness-0 transition-all duration-300 ${isOverHero ? "invert" : ""} md:h-10`}
              priority
            />
          </Link>

          {/* DESKTOP NAV - Color adaptable */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[11px] uppercase font-inter font-bold tracking-[0.3em] transition-colors duration-300 ${
                  isOverHero ? "text-white hover:opacity-70" : "text-black hover:opacity-70"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* MOBILE HAMBURGER - Minimal design, color adaptable */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden relative z-[110] w-8 h-8 flex flex-col items-center justify-center gap-1 focus:outline-none transition-colors duration-300 ${
              isOverHero ? "text-white" : "text-black"
            }`}
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-0.5 bg-current origin-center"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-0.5 bg-current"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-0.5 bg-current origin-center"
            />
          </button>

          {/* MOBILE MENU DROPDOWN - Minimal, color adaptable */}
          <AnimatePresence>
            {isMenuOpen && (
             <motion.div
                 initial={{ height: 0, opacity: 0 }}
                 animate={{ height: "auto", opacity: 1 }}
                 exit={{ height: 0, opacity: 0 }}
                 transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                 className="absolute top-full left-0 right-0 overflow-hidden backdrop-blur-md border-t border-white/10"
               >
                <div className="flex flex-col p-8 space-y-4">
                  {mobileMenuLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                       <Link
                         href={link.href}
                         onClick={() => setIsMenuOpen(false)}
                         className={`text-xs font-inter font-bold uppercase tracking-[0.2em] transition-colors duration-300 block ${
                           isOverHero ? "text-white hover:opacity-70" : "text-black hover:opacity-60"
                         }`}
                       >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

      </div>
    </nav>
  );
};

export default Navbar;
