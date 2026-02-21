"use client";

import { useState } from "react";
import { Menu, X, Pill } from "lucide-react";

const navLinks = [
  { label: "Нүүр", href: "#hero" },
  { label: "Бидний тухай", href: "#about" },
  { label: "Үйлчилгээ", href: "#services" },
  { label: "Бүтээгдэхүүн", href: "#products" },
  { label: "Холбоо барих", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl gradient-primary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Pill className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <span className="text-base sm:text-xl font-bold text-secondary-dark tracking-tight">
                Анхны Нахиа
              </span>
              <span className="block text-[10px] sm:text-[11px] text-teal-600 font-medium -mt-1 tracking-wide">
                PHARMA LLC
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-teal-700 rounded-lg hover:bg-teal-50 transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              Захиалга өгөх
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-6 pt-2 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 mx-4 px-6 py-3 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-full transition-all text-center shadow-md"
              >
                Захиалга өгөх
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
