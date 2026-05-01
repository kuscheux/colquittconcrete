"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";

type CoverflowItem = {
  src: string;
  label: string;
  type: string;
};

export function ProjectCoverflow({ items }: { items: CoverflowItem[] }) {
  const [active, setActive] = useState(0);
  const count = items.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [count]);

  const arrangedItems = useMemo(
    () =>
      items.map((item, index) => {
        let offset = index - active;

        if (offset > count / 2) offset -= count;
        if (offset < -count / 2) offset += count;

        return { ...item, index, offset };
      }),
    [active, count, items]
  );

  const move = (direction: -1 | 1) => {
    setActive((current) => (current + direction + count) % count);
  };

  return (
    <div className="coverflowMask">
      <div className="coverflowFrame" aria-label="Featured project photos">
        <button
          className="coverflowControl"
          type="button"
          aria-label="Previous project photo"
          onClick={() => move(-1)}
        >
          <ChevronLeft size={18} />
        </button>
        <ul className="coverflowCarousel">
          {arrangedItems.map((item) => (
            <li
              className="coverflowSlide"
              key={item.src}
              style={
                {
                  "--offset": item.offset,
                  "--abs-offset": Math.abs(item.offset),
                  zIndex: 20 - Math.abs(item.offset),
                } as CSSProperties
              }
            >
              <button
                type="button"
                className="coverflowImageButton"
                aria-label={`Show ${item.label}`}
                onClick={() => setActive(item.index)}
              >
                <img
                  draggable={false}
                  src={item.src}
                  alt={item.label}
                  className="coverflowItem"
                />
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.type}</small>
                </span>
              </button>
            </li>
          ))}
        </ul>
        <button
          className="coverflowControl"
          type="button"
          aria-label="Next project photo"
          onClick={() => move(1)}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
