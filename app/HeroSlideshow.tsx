"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

type HeroSlide = {
  src: string;
  alt: string;
  position?: string;
  rotation?: number;
};

export function HeroSlideshow({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6400);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="heroSlideshow" aria-hidden="true">
      {slides.map((slide, index) => (
        <img
          key={slide.src}
          className="heroImage"
          src={slide.src}
          alt={slide.alt}
          data-active={index === active}
          style={
            {
              "--hero-position": slide.position ?? "center",
              "--hero-rotation": `${slide.rotation ?? 0}deg`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
