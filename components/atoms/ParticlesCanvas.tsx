'use client';

import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  char: string;
  speed: number;
  opacity: number;
  size: number;
  sway: number;
  swaySpeed: number;
  swayOffset: number;
}

const CODE_CHARS = ['0', '1', '{', '}', '<', '>', '/', ';', '(', ')', '=', '+', '*', '#', '::'];

const ParticlesCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const dimensionsRef = useRef({ width: 0, height: 0 });

  const createParticle = useCallback((spreadY = false): Particle => {
    const { width, height } = dimensionsRef.current;
    return {
      x: Math.random() * width,
      y: spreadY ? Math.random() * height : height + 20 + Math.random() * 40,
      char: CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)],
      speed: 0.2 + Math.random() * 0.6,
      opacity: 0.03 + Math.random() * 0.1,
      size: 10 + Math.random() * 14,
      sway: 12 + Math.random() * 20,
      swaySpeed: 0.003 + Math.random() * 0.012,
      swayOffset: Math.random() * Math.PI * 2,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      dimensionsRef.current = { width: rect.width, height: rect.height };
    };

    const init = () => {
      resize();
      const count = window.innerWidth < 768 ? 20 : 32;
      particlesRef.current = Array.from({ length: count }, () => createParticle(true));
    };

    const animate = () => {
      const { width, height } = dimensionsRef.current;
      if (!ctx || !width) return;

      ctx.clearRect(0, 0, width, height);
      const now = Date.now();

      particlesRef.current.forEach((p, i) => {
        p.y -= p.speed;
        const swayX = Math.sin(now * p.swaySpeed + p.swayOffset) * p.sway;

        // Fade based on vertical position — most visible in center, fade at edges
        const normalizedY = p.y / height;
        const edgeFade = Math.sin(Math.max(0, Math.min(1, normalizedY)) * Math.PI);
        const finalOpacity = p.opacity * Math.max(0.05, edgeFade);

        ctx.font = `${p.size}px "Courier New", monospace`;
        ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`;
        ctx.fillText(p.char, p.x + swayX, p.y);

        // Reset when off-screen
        if (p.y < -30) {
          particlesRef.current[i] = createParticle(false);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-[5] pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default ParticlesCanvas;
