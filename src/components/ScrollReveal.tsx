"use client";

import { useEffect, useRef, useState } from "react";

type AnimationType = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-up";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.15,
  once = true,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setRevealed(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setRevealed(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${animation} ${revealed ? "scroll-revealed" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
