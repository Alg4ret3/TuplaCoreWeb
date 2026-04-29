"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";

const navLinks = [{ name: "Inicio", href: "/" }];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const navRef = useRef<HTMLElement>(null);

  // ── GSAP Slide-From-Left entry ───────────────────────────────────────────
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    gsap.set(el, { x: "-100%", opacity: 0 });

    const tween = gsap.to(el, {
      x: "0%",
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      clearProps: "x,opacity",
    });

    // cleanup: mata el tween si React StrictMode desmonta antes de terminar
    return () => { tween.kill(); };
  }, []);

  // ── Scroll: detectar si estamos sobre el hero ────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      setIsOverHero(window.scrollY < window.innerHeight - 80);
    };
    setTimeout(onScroll, 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[100] transition-[padding,background,border-color,backdrop-filter] duration-300 ${
        isOverHero
          ? "py-3 bg-transparent backdrop-blur-sm"
          : "py-2 bg-white/95 backdrop-blur-md border-b border-black/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">

        {/* ── Logo ── */}
        <Link href="/" className="relative z-[110]">
          <Image
            src="https://res.cloudinary.com/dqky6oqrd/image/upload/f_auto,q_auto/v1777477653/yzuhpdmywqomvj68rtzm.svg"
            alt="TUPLΛ CORE"
            width={160}
            height={40}
            className={`h-8 md:h-10 w-auto object-contain transition-all duration-300 ${
              isOverHero ? "brightness-0 invert" : "brightness-0"
            }`}
            priority
          />
        </Link>

        {/* ── Desktop links ── */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-inter text-[11px] font-bold uppercase tracking-[0.3em] transition-opacity duration-200 hover:opacity-60 ${
                isOverHero ? "text-white" : "text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ── Hamburger ── */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className={`lg:hidden relative z-[110] flex flex-col items-center justify-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer focus:outline-none ${
            isOverHero ? "text-white" : "text-black"
          }`}
        >
          <span
            className="block w-5 h-0.5 bg-current origin-center transition-transform duration-200"
            style={{ transform: isMenuOpen ? "translateY(7px) rotate(45deg)" : "none" }}
          />
          <span
            className="block w-5 h-0.5 bg-current transition-opacity duration-200"
            style={{ opacity: isMenuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-0.5 bg-current origin-center transition-transform duration-200"
            style={{ transform: isMenuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }}
          />
        </button>

        {/* ── Mobile dropdown ── */}
        <div
          className={`absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
            isMenuOpen
              ? isOverHero
                ? "bg-transparent backdrop-blur-sm"
                : "bg-white/95 backdrop-blur-md"
              : "bg-transparent"
          }`}
          style={{ maxHeight: isMenuOpen ? 400 : 0, opacity: isMenuOpen ? 1 : 0 }}
        >
          <div className="flex flex-col gap-4 p-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-inter text-xs font-bold uppercase tracking-[0.2em] transition-opacity duration-200 hover:opacity-60 ${
                  isOverHero ? "text-white" : "text-black"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
