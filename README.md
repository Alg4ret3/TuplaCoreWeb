# TUPLΛ CORE — Sitio Web Corporativo

Sitio web oficial de **TUPLΛ CORE**, empresa de desarrollo web y software a medida con sede en Pasto, Colombia.

[![Deploy](https://img.shields.io/badge/deploy-vercel-black?style=flat-square&logo=vercel)](https://tuplla-core.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-13.5-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

---

## 🚀 Stack Tecnológico

| Categoría        | Tecnología                                      |
|------------------|-------------------------------------------------|
| Framework        | Next.js 13.5 (App Router)                       |
| Lenguaje         | TypeScript 5.2                                  |
| Estilos          | Tailwind CSS 3.3                                |
| Animaciones      | GSAP 3 + Framer Motion 12                       |
| 3D / WebGL       | Three.js + @react-three/fiber                   |
| Fuentes          | Audiowide & Inter (Google Fonts)                |
| Package Manager  | pnpm 9                                          |
| Deploy           | Vercel (Static Export en producción)            |

---

## 📁 Estructura del Proyecto

```
TuplaCoreWeb/
├── app/                        # App Router de Next.js
│   ├── layout.tsx              # Layout raíz (fuentes, metadata, video global)
│   ├── globals.css             # Estilos globales y tokens CSS
│   ├── page.tsx                # Página principal (/)
│   ├── login/                  # Ruta /login
│   ├── nuestro-trabajo/        # Ruta /nuestro-trabajo
│   └── desarrollo-de-apps/     # Ruta /desarrollo-de-apps
│
├── components/
│   ├── atoms/                  # Componentes base reutilizables
│   ├── organisms/              # Componentes complejos
│   │   ├── Navbar.tsx          # Barra de navegación
│   │   ├── Footer.tsx          # Pie de página con animaciones GSAP
│   │   ├── ContactDialog.tsx   # Modal de contacto global
│   │   └── Antigravity.tsx     # Componente IA integrado
│   ├── pages/
│   │   └── home/
│   │       ├── HomeView.tsx        # Vista principal con scroll GSAP
│   │       └── sections/
│   │           ├── HeroSection.tsx     # Hero con animación 3D de letras
│   │           ├── VerticalSection.tsx # Sección vertical con scroll
│   │           └── HorizontalSection.tsx # Scroll horizontal tipo carrusel
│   └── providers/              # Proveedores de contexto (Theme, Framer)
│
├── constants/                  # Datos estáticos (engineers, socialOptions)
├── context/                    # Context API de React
├── hooks/                      # Custom hooks
├── lib/                        # Utilidades y helpers
└── public/                     # Assets estáticos
```

---

## ✨ Características Principales

- **Hero animado**: Letras con animación 3D rotacional + loop en la "Λ" usando GSAP
- **Scroll cinematográfico**: Pin hero, parallax y scroll horizontal animado con ScrollTrigger
- **Video de fondo global**: Precargado con `fetchPriority="high"` para optimizar el LCP
- **Tema oscuro forzado**: `next-themes` con `forcedTheme="dark"`
- **SEO completo**: Metadata, Open Graph y Twitter Cards configurados
- **Footer interactivo**: Spotlight con seguimiento de mouse, animaciones SVG stroke y perfiles de ingenieros
- **Accesibilidad**: Skip-to-content link, `aria-label` en iconos, semántica HTML5

---

## 🛠️ Instalación y Desarrollo

### Requisitos
- Node.js ≥ 18
- pnpm ≥ 9

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/Alg4ret3/TuplaCoreWeb.git
cd TuplaCoreWeb

# Instalar dependencias
pnpm install

# Configurar variables de entorno
cp .env.example .env
# (Editar .env con los valores correspondientes)

# Iniciar servidor de desarrollo
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

---

## 🏗️ Build y Deploy

```bash
# Build de producción (genera export estático en /out)
pnpm build

# Preview local del build
pnpm start
```

> El proyecto usa `output: 'export'` en producción, generando un sitio estático desplegado en **Vercel**.

---

## 🌐 Variables de Entorno

Crear un archivo `.env` en la raíz basado en `.env.example`:

```env
# Ejemplo de variables necesarias
NEXT_PUBLIC_SITE_URL=https://tuplla-core.vercel.app
```

---

## 📬 Contacto

**TUPLΛ CORE** — Pasto, Colombia
✉️ hola@tuplacore.com
🌐 [tuplla-core.vercel.app](https://tuplla-core.vercel.app)

---

© 2026 Tupla Core. Diseño & Desarrollo.