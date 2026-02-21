"use client";

import { ShieldCheck, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";

const PharmacyScene = dynamic(
  () => import("@/components/three/PharmacyScene"),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center w-full h-full min-h-[500px]">
        <div className="glass rounded-2xl p-8 animate-pulse-gentle">
          <div className="w-16 h-16 rounded-xl bg-teal-400/20 mx-auto" />
          <p className="text-teal-200/60 text-sm mt-4 text-center">
            3D ачааллаж байна...
          </p>
        </div>
      </div>
    ),
  }
);

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden gradient-hero"
    >
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-teal-400/10 blur-3xl" />
        <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/[0.02]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 sm:pt-32 sm:pb-28 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass text-teal-200 text-xs sm:text-sm font-medium mb-6 sm:mb-8 animate-fade-in-up">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              2005 оноос итгэлтэй үйлчилж байна
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up animation-delay-200">
              Эрүүл мэндийн
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">
                найдвартай түнш
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-teal-100/80 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animation-delay-400">
              Анхны Нахиа ХХК нь олон улсын стандартад нийцсэн эм, эмнэлгийн
              хэрэгслийг импортлон Монгол Улсын эрүүл мэндийн салбарт 20 гаруй
              жил тасралтгүй үйлчилж байна.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10 animate-fade-in-up animation-delay-600 sm:justify-start justify-center items-center lg:items-start">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white text-teal-700 font-semibold rounded-full hover:bg-teal-50 transition-all shadow-xl hover:shadow-2xl group w-full sm:w-auto"
              >
                Бүтээгдэхүүн үзэх
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 glass text-white font-semibold rounded-full hover:bg-white/20 transition-all w-full sm:w-auto"
              >
                Бидний тухай
              </a>
            </div>

            {/* Mobile mini-stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 lg:hidden">
              <div className="glass rounded-xl p-3 text-center">
                <div className="text-xl font-bold text-white">20+</div>
                <div className="text-[11px] text-teal-200/70">
                  Жилийн туршлага
                </div>
              </div>
              <div className="glass rounded-xl p-3 text-center">
                <div className="text-xl font-bold text-white">500+</div>
                <div className="text-[11px] text-teal-200/70">
                  Бүтээгдэхүүн
                </div>
              </div>
              <div className="glass rounded-xl p-3 text-center">
                <div className="text-xl font-bold text-white">15+</div>
                <div className="text-[11px] text-teal-200/70">
                  Импортын улс
                </div>
              </div>
            </div>
          </div>

          {/* Right side - 3D Pharmacy Scene (desktop only) */}
          <div className="hidden lg:block relative w-full h-[500px]">
            <PharmacyScene />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
