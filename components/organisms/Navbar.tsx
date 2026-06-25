"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import { Globe, ChevronDown, User } from "lucide-react";

const navLinks = [
  { name: "Software a medida", href: "/software-a-medida" },
  { name: "Desarrollo de Apps", href: "/desarrollo-de-apps" },
  { name: "Nuestro Trabajo", href: "/nuestro-trabajo" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState("ES");
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  
  const navRef = useRef<HTMLElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  // ── GSAP Slide-Down entry ────────────────────────────────────────────────
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    gsap.set(el, { y: "-150%", opacity: 0 });

    const tween = gsap.to(el, {
      y: "0%",
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      clearProps: "y,opacity",
    });

    return () => {
      tween.kill();
    };
  }, []);

  // ── Clic fuera para cerrar dropdown de idioma ───────────────────────────
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-7xl transition-all duration-300 rounded-full border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] bg-black/15 backdrop-blur-md py-3 px-6 md:px-8`}
    >
      <div className="w-full flex items-center justify-between relative">
        {/* ── Logo (Left) ── */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="relative z-[110]">
            <Image
              src="https://res.cloudinary.com/dqky6oqrd/image/upload/f_auto,q_auto/v1777477653/yzuhpdmywqomvj68rtzm.svg"
              alt="TUPLΛ CORE"
              width={160}
              height={40}
              className={`h-7 md:h-8.5 w-auto object-contain transition-all duration-300 brightness-0 invert`}
              priority
            />
          </Link>
        </div>

        {/* ── Desktop links (Center) ── */}
        <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 nav-links-container">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-inter text-[11px] font-bold uppercase tracking-[0.3em] transition-opacity duration-200 hover:opacity-60 text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ── Actions (Right) ── */}
        <div className="flex-1 flex items-center justify-end gap-3 md:gap-5 relative z-[110]">
          {/* Language Switcher */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider transition-all duration-200 uppercase text-white/80 hover:text-white hover:bg-white/10"
              aria-label="Select language"
              aria-haspopup="true"
              aria-expanded={isLangDropdownOpen}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isLangDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLangDropdownOpen && (
              <div
              className="absolute right-0 mt-2 w-32 rounded-2xl p-1.5 border shadow-xl z-[120] transition-all duration-200 animate-in fade-in slide-in-from-top-2 bg-black/90 backdrop-blur-xl border-white/10 text-white"
              >
                {["ES", "EN"].map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setIsLangDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-[11px] font-bold tracking-wider transition-colors duration-200 bg-white/15 text-white hover:bg-white/10 hover:text-white"
                  >
                    {l === "ES" ? "ES (Español)" : "EN (English)"}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Login Button */}
          <Link
            href="/login"
            className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 bg-white text-black hover:bg-white/90 border border-transparent shadow-[0_4px_12px_rgba(255,255,255,0.15)] hover:scale-[1.03]"
          >
            <User className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Login</span>
          </Link>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
              className="lg:hidden relative z-[110] flex flex-col items-center justify-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer focus:outline-none transition-transform duration-300 active:scale-95 text-white"
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
        </div>

        {/* ── Mobile dropdown ── */}
        <div
          className={`absolute top-[calc(100%+0.75rem)] left-0 right-0 overflow-hidden shadow-2xl rounded-3xl ${
            isMenuOpen
              ? "bg-black/90 backdrop-blur-2xl border border-white/10"
              : "bg-transparent border-transparent pointer-events-none"
          }`}
          style={{
            maxHeight: isMenuOpen ? 350 : 0,
            opacity: isMenuOpen ? 1 : 0,
            transition: "all 500ms cubic-bezier(0.22, 1, 0.36, 1)"
          }}
        >
          <div className="flex flex-col px-6 pb-6 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center justify-between py-4 border-b transition-colors duration-300 last:border-none border-white/10 text-white/70 hover:text-white"
              >
                <span className="font-inter text-[10px] font-bold uppercase tracking-[0.25em]">
                  {link.name}
                </span>
                <span
                  className="text-base font-light transition-all duration-300 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 text-white"

                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
