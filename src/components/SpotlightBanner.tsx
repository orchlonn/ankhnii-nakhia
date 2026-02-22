"use client";

import { useRef, useEffect, type MouseEvent, type ReactNode } from "react";

const BUBBLE_COUNT = 6;

interface Bubble {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  delay: number;
}

function generateBubbles(): Bubble[] {
  return Array.from({ length: BUBBLE_COUNT }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 8 + Math.random() * 20,
    speed: 12 + Math.random() * 20,
    opacity: 0.08 + Math.random() * 0.12,
    delay: Math.random() * 10,
  }));
}

export default function SpotlightBanner({ children }: { children: ReactNode }) {
  const spotRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<Bubble[]>(generateBubbles());

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    if (spotRef.current) {
      spotRef.current.style.left = `${e.clientX - rect.left}px`;
      spotRef.current.style.top = `${e.clientY - rect.top}px`;
      spotRef.current.style.opacity = "1";
    }
  }

  function handleMouseLeave() {
    if (spotRef.current) {
      spotRef.current.style.opacity = "0";
    }
  }

  const bubbles = bubblesRef.current;

  return (
    <div
      className="bg-[#008F7A] rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Floating bubbles */}
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.x}%`,
            opacity: b.opacity,
            animation: `bubbleFloat ${b.speed}s ease-in-out ${b.delay}s infinite`,
          }}
        />
      ))}

      {/* Spotlight that follows cursor */}
      <div
        ref={spotRef}
        className="absolute w-[300px] h-[300px] rounded-full bg-white/15 blur-[80px] pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300"
      />
      {children}
    </div>
  );
}
