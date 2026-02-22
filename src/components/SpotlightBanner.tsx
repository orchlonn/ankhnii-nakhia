"use client";

import { useRef, type ReactNode } from "react";

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
  const bubblesRef = useRef<Bubble[]>(generateBubbles());

  const bubbles = bubblesRef.current;

  return (
    <div className="bg-[#008F7A] rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
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
      {children}
    </div>
  );
}
