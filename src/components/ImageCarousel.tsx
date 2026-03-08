"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

export default function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      if (isAnimating || index === current) return;
      setDirection(dir);
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating, current]
  );

  const next = useCallback(() => {
    goTo((current + 1) % images.length, "next");
  }, [current, images.length, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + images.length) % images.length, "prev");
  }, [current, images.length, goTo]);

  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(next, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, isHovered]);

  return (
    <div
      className="aspect-[4/3] rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images with slide animation */}
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            transform:
              i === current
                ? "translateX(0) scale(1)"
                : i < current || (current === 0 && i === images.length - 1 && direction === "next")
                  ? "translateX(-100%) scale(0.95)"
                  : "translateX(100%) scale(0.95)",
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 10 : 0,
            transitionDuration: "600ms",
          }}
        >
          <Image
            src={src}
            alt={`${alt} ${i + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}

      {/* Gradient overlay at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent z-20 pointer-events-none" />

      {/* Navigation arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-md"
      >
        <svg className="w-4 h-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-md"
      >
        <svg className="w-4 h-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Progress dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              goTo(i, i > current ? "next" : "prev");
            }}
            className="relative h-2 rounded-full transition-all duration-300 overflow-hidden"
            style={{ width: i === current ? 24 : 8 }}
          >
            <span className="absolute inset-0 rounded-full bg-white/40" />
            {i === current && (
              <span
                className="absolute inset-0 rounded-full bg-white origin-left"
                style={{
                  animation: isHovered ? "none" : "progressFill 4s linear forwards",
                }}
              />
            )}
            {i !== current && (
              <span className="absolute inset-0 rounded-full bg-white/40" />
            )}
          </button>
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-4 right-4 z-30 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-medium">
        {current + 1} / {images.length}
      </div>

      <style jsx>{`
        @keyframes progressFill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
