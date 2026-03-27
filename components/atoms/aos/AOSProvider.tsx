'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    import('aos').then((module) => {
      const AOS = module.default;
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  return <>{children}</>;
}
