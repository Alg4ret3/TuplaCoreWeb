'use client';

import { Instagram, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'IG', href: 'https://instagram.com/tupla.core' },
    { name: 'LI', href: 'https://linkedin.com/company/tuplacore' },
    { name: 'GH', href: 'https://github.com/tuplacore' },
  ];

  return (
    <footer className="relative border-t border-white/5 py-12 lg:py-16">
      {/* Subtle top glow to separate from the video scroll */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center text-center space-y-12">
        
        {/* Simplified Logo */}
        <Link href="/" className="opacity-40 hover:opacity-100 transition-opacity">
          <Image 
            src="https://res.cloudinary.com/dqky6oqrd/image/upload/v1776290459/hcwetijsgf0grhk4yhzh.svg" 
            alt="TUPLΛ CΩRE" 
            width={180} 
            height={45} 
            className="h-9 w-auto grayscale brightness-200"
          />
        </Link>

        {/* Minimalist Subtitle */}
        <p className="max-w-xs text-[9px] lg:text-[10px] uppercase tracking-[0.6em] text-white/30 leading-relaxed font-bold">
          Future Proof Studio. Minimalismo Técnico.
        </p>

        {/* Minimal Social & Bottom Bar */}
        <div className="flex flex-col items-center space-y-8">
           <div className="flex space-x-12">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                className="text-[9px] font-bold tracking-[0.5em] text-white/20 hover:text-white transition-all uppercase"
              >
                {social.name}
              </a>
            ))}
          </div>

          <div className="pt-8 opacity-20 text-[8px] font-bold uppercase tracking-[0.8em] text-white">
            © {currentYear} TUPLΛ CORE — San Juan de Pasto
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;