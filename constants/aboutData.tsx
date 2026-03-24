import { Code, Users, Award, Heart } from "lucide-react";
import React from 'react';

export const capabilities = [
  {
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="w-3.5 h-3.5">
        <rect x="2" y="3" width="12" height="10" rx="2" />
        <path d="M5 7h6M5 10h4" />
      </svg>
    ),
    label: "Desarrollo web",
    desc: "Aplicaciones modernas y escalables",
  },
  {
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="w-3.5 h-3.5">
        <rect x="4" y="2" width="8" height="14" rx="2" />
        <path d="M6 5h4M6 8h4M6 11h2" />
      </svg>
    ),
    label: "Apps móviles",
    desc: "iOS y Android con React Native",
  },
  {
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="w-3.5 h-3.5">
        <circle cx="8" cy="8" r="5" />
        <path d="M8 5v3l2 2" />
      </svg>
    ),
    label: "Integración IA",
    desc: "Automatización inteligente",
  },
  {
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="w-3.5 h-3.5">
        <path d="M3 8h10M8 3l5 5-5 5" />
      </svg>
    ),
    label: "Consultoría",
    desc: "Arquitectura y estrategia tech",
  },
];

export const team = [
  {
    id: "sergio",
    num: "01",
    name: "Ing. Sergio Muñoz",
    role: "Full Stack & AI Engineer",
    image: "/img/team/perfilsergio.webp",
    bio: "Arquitectura end-to-end de soluciones web y móviles. Especializado en sistemas escalables, IA aplicada y optimización de experiencia de usuario.",
    accentColor: "#7c5cfc",
    accentBg: "rgba(124,92,252,0.15)",
    accentBorder: "rgba(124,92,252,0.35)",
    glowColor: "rgba(124,92,252,0.25)",
    skills: [
      { name: "Backend", pct: 92 },
      { name: "Frontend", pct: 85 },
      { name: "IA / ML", pct: 78 },
      { name: "Bases datos", pct: 88 },
    ],
    chips: ["React", "Node.js", "Python", "SQL", "React Native"],
  },
  {
    id: "michael",
    num: "02",
    name: "Ing. Michael Coral",
    role: "Backend & Software Architect",
    image: "/img/team/perfilmichael2.webp",
    bio: "Especialista en el diseño y estructuración de sistemas escalables. Experiencia en desarrollo backend, modelado de bases de datos y construcción de arquitecturas sólidas. Enfocado en crear soluciones eficientes, mantenibles y alineadas a las necesidades del negocio.",
    accentColor: "#18d4aa",
    accentBg: "rgba(24,212,170,0.12)",
    accentBorder: "rgba(24,212,170,0.3)",
    glowColor: "rgba(24,212,170,0.2)",
    skills: [
      { name: "Backend", pct: 92 },
      { name: "Arquitectura de Software", pct: 90 },
      { name: "Bases de Datos", pct: 88 },
      { name: "API Design", pct: 87 },
    ],
    chips: ["Node.js", "Supabase", "PostgreSQL", "Next.js", "TypeScript"],
  },
];

export const values = [
  {
    icon: Code,
    title: "Excelencia Técnica",
    description:
      "Aplicamos tecnologías de vanguardia y buenas prácticas de desarrollo para crear soluciones robustas, escalables y eficientes.",
  },
  {
    icon: Users,
    title: "Colaboración Humana",
    description:
      "Construimos relaciones cercanas con nuestros clientes, entendiendo sus retos y trabajando juntos como un solo equipo.",
  },
  {
    icon: Award,
    title: "Compromiso y Responsabilidad",
    description:
      "Asumimos cada proyecto con seriedad, cumpliendo los plazos acordados y garantizando resultados de alto impacto.",
  },
  {
    icon: Heart,
    title: "Pasión por la Innovación",
    description:
      "Nos mueve el entusiasmo por la tecnología, la creatividad y el deseo constante de superar expectativas.",
  },
];

export const stats = [
  { number: "10+", label: "Proyectos entregados" },
  { number: "94%", label: "Satisfacción" },
  { number: "2+", label: "Años de experiencia" },
];
