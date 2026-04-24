"use client";

import { useEffect, useState } from "react";

export const useHeroVisibility = () => {
  const [isOverHero, setIsOverHero] = useState(true);

  useEffect(() => {
    const heroSection = document.getElementById("hero-section");
    if (!heroSection) return;

    // Check initial state after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const rect = heroSection.getBoundingClientRect();
      setIsOverHero(rect.bottom > 0);
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsOverHero(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: "-50px 0px 0px 0px",
        threshold: 0,
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return isOverHero;
};

