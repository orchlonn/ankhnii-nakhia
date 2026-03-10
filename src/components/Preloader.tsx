"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [phase, setPhase] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReducedMotion(true);
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setPhase(1), 200);
    const t2 = setTimeout(() => setPhase(2), 500);
    const t3 = setTimeout(() => setPhase(3), 1200);
    const t4 = setTimeout(() => setPhase(4), 1600);
    const t5 = setTimeout(() => onComplete(), 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  if (reducedMotion) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        phase >= 4 ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #0d3330 50%, #1a1a2e 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00AC94 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Logo */}
      <div
        className={`relative w-24 h-24 sm:w-28 sm:h-28 mb-6 transition-all duration-700 ease-out ${
          phase >= 1
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75"
        }`}
      >
        <Image
          src="/mini-logo.png"
          alt="Ankhnii Nakhia"
          fill
          className="object-contain drop-shadow-[0_0_30px_rgba(0,172,148,0.4)]"
          priority
        />
      </div>

      {/* App name */}
      <h1
        className={`text-2xl sm:text-3xl font-bold text-white font-playfair tracking-wide mb-8 transition-all duration-600 ease-out ${
          phase >= 2
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        Анхний Нахиа
      </h1>

      {/* Loading bar */}
      <div
        className={`w-48 sm:w-56 h-1 rounded-full overflow-hidden bg-white/10 transition-opacity duration-500 ${
          phase >= 2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="h-full rounded-full transition-all ease-out"
          style={{
            width: phase >= 3 ? "100%" : phase >= 2 ? "60%" : "0%",
            transitionDuration: phase >= 3 ? "700ms" : "1400ms",
            background: "linear-gradient(90deg, #00AC94, #00d4aa)",
          }}
        />
      </div>
    </div>
  );
}
