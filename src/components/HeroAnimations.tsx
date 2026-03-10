"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

interface HeroAnimationsProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export default function HeroAnimations({ title, subtitle, buttonText }: HeroAnimationsProps) {
  const [revealed, setRevealed] = useState(false);
  const words = title.split(" ");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setRevealed(true);
      return;
    }

    const timer = setTimeout(() => setRevealed(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Title - word by word */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight sm:whitespace-nowrap font-playfair">
        {words.map((word, i) => (
          <span
            key={i}
            className={`hero-word ${revealed ? "revealed" : ""}`}
            style={{ transitionDelay: `${200 + i * 80}ms` }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </h1>

      {/* Subtitle */}
      <p
        className={`text-lg sm:text-xl text-white/80 mt-4 font-bold italic font-playfair hero-reveal ${revealed ? "revealed" : ""}`}
        style={{ transitionDelay: "400ms" }}
      >
        {subtitle}
      </p>

      {/* CTA Button */}
      <div
        className={`flex flex-col sm:flex-row gap-4 mt-10 sm:mt-12 justify-center hero-reveal ${revealed ? "revealed" : ""}`}
        style={{ transitionDelay: "500ms" }}
      >
        <a
          href="/contact"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-[15px] font-semibold text-white bg-[#00AC94] hover:bg-[#009882] hover:scale-105 rounded-full transition-all duration-300 shadow-lg"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </>
  );
}
