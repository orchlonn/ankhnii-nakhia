"use client";

import { useState, useEffect, type ReactNode } from "react";

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
    opacity: 0.06 + Math.random() * 0.08,
    delay: Math.random() * 10,
  }));
}

export default function SpotlightBanner({ children }: { children: ReactNode }) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    setBubbles(generateBubbles());
  }, []);

  return (
    <div className="bg-[#1a1a2e] rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00AC94]/20 to-transparent pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#00AC94]/10 blur-3xl pointer-events-none" />

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
