'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
}

const AnimatedCounter = ({
  target,
  suffix = '',
  prefix = '',
  label,
  delay = 0,
}: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const obj = { val: 0 };

    tweenRef.current = gsap.to(obj, {
      val: target,
      duration: 2.5,
      ease: 'power2.out',
      delay,
      onUpdate: () => setDisplayValue(Math.round(obj.val)),
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, [target, delay]);

  return (
    <div className="js-counter-item flex flex-col items-center gap-1.5">
      <span className="text-2xl md:text-4xl lg:text-5xl font-audiowide font-bold text-white tabular-nums">
        {prefix}{displayValue}{suffix}
      </span>
      <span className="text-[7px] md:text-[9px] font-inter uppercase tracking-[0.25em] text-white/40 text-center leading-tight">
        {label}
      </span>
    </div>
  );
};

export default AnimatedCounter;
