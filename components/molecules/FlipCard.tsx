'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import SkillBar from './SkillBar';

export interface Member {
  id: string;
  num: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  glowColor: string;
  skills: { name: string; pct: number }[];
  chips: string[];
  github: string;
}

interface FlipCardProps {
  member: Member;
}

const FlipCard: React.FC<FlipCardProps> = ({ member }) => {
  const [flipped, setFlipped] = useState(false);
  const [animateBars, setAnimateBars] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const isTouch = useRef(false);

  useEffect(() => {
    isTouch.current = window.matchMedia("(hover: none)").matches;
  }, []);

  const handleFlip = (val: boolean) => {
    setFlipped(val);
    if (val) {
      setTimeout(() => setAnimateBars(true), 360);
    } else {
      setAnimateBars(false);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!isTouch.current) {
      window.open(member.github, '_blank');
    } else {
      setShowOptions(true);
    }
  };

  return (
    <div
      className="relative cursor-pointer w-full h-full"
      style={{ perspective: "1000px", aspectRatio: "3/4" }}
      onMouseEnter={() => !isTouch.current && handleFlip(true)}
      onMouseLeave={() => !isTouch.current && handleFlip(false)}
      onClick={handleClick}
    >
      {/* Inner */}
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── FRONT ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: "hidden", background: "#0a0a0a" }}
        >
          {/* Photo / initials placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-medium select-none"
              style={{ fontSize: 96, lineHeight: 1, color: "#1a1a2e" }}
            >
              {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </span>
          </div>

          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 ease-out"
            style={{ transform: flipped ? "scale(1)" : "scale(1.04)" }}
          />

          {/* Glow border */}
          <div
            className="absolute inset-[-1px] rounded-[15px] pointer-events-none transition-opacity duration-400"
            style={{
              opacity: flipped ? 0 : 1,
              boxShadow: `inset 0 0 0 1.5px ${member.accentColor}, 0 0 50px ${member.glowColor}`,
            }}
          />

          {/* Overlay */}
          <div
            className="absolute inset-0 flex flex-col justify-end p-6"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.85) 10%, rgba(0,0,0,0.2) 45%, transparent 100%)",
            }}
          >
            {/* Number */}
            <span
              className="absolute top-4 right-5 text-[12px] font-medium tracking-widest"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              {member.num}
            </span>

            {/* Hint */}
            <div
              className="absolute top-4 left-5 flex items-center gap-1.5 transition-opacity duration-300"
              style={{ opacity: flipped ? 0 : 1 }}
            >
              <div
                className="w-[18px] h-[18px] rounded-full flex items-center justify-center"
                style={{ border: "0.5px solid rgba(255,255,255,0.3)" }}
              >
                <svg viewBox="0 0 10 10" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round" className="w-2 h-2">
                  <path d="M2 5h6M5 2l3 3-3 3" />
                </svg>
              </div>
              <span className="text-[10px] tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                Ver perfil
              </span>
            </div>

            <p className="text-lg font-bold text-white leading-tight mb-1">{member.name}</p>
            <p className="text-[12px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.5)" }}>
              {member.role}
            </p>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden p-7 flex flex-col justify-between"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: member.id === "sergio" ? "#0d0a1a" : "#0a1410",
            border: `0.5px solid ${member.accentBorder}`,
          }}
        >
          <div>
            {/* Header */}
            <p className="text-[14px] uppercase tracking-[.14em] font-medium mb-2" style={{ color: member.accentColor }}>
              Cofundador — {member.num}
            </p>
            <h4 className="text-xl font-medium text-white mb-1">{member.name}</h4>
            <p className="text-[14px] uppercase tracking-[.08em] mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
              {member.role}
            </p>

            {/* Bio */}
            <p className="text-[14px] leading-[1.75] mb-5 font-light" style={{ color: "rgba(255,255,255,0.65)" }}>
              {member.bio}
            </p>

            {/* Skills */}
            <div className="flex flex-col gap-[9px] mb-5">
              {member.skills.map((s) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  pct={s.pct}
                  accentColor={member.accentColor}
                  animate={animateBars}
                />
              ))}
            </div>
          </div>

          {/* Chips */}
          <div className="flex flex-wrap gap-1">
            {member.chips.map((c) => (
              <span
                key={c}
                className="text-[12px] px-2 py-[3px] rounded"
                style={{
                  border: `0.5px solid ${member.accentBorder}`,
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Options Overlay */}
      {showOptions && isTouch.current && (
        <div 
          className="absolute inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-6 rounded-2xl animate-fade-in"
          onClick={(e) => { e.stopPropagation(); setShowOptions(false); }}
        >
          <div className="w-full space-y-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(member.github, '_blank');
                setShowOptions(false);
              }}
              className="w-full py-4 bg-tupla-primary text-white font-bold rounded-xl shadow-lg active:scale-95 transition-transform"
            >
              Visitar GitHub
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleFlip(!flipped);
                setShowOptions(false);
              }}
              className="w-full py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 active:scale-95 transition-transform"
            >
              {flipped ? "Ver Foto" : "Mostrar Perfil"}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowOptions(false);
              }}
              className="w-full py-3 text-sm text-gray-400 font-medium"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlipCard;
