"use client";

import { useState } from "react";
import { Menu, X, Pill } from "lucide-react";

const navLinks = [
  { label: "Бидний тухай", href: "#about" },
  { label: "Бизнесийн чиглэл", href: "#services" },
  { label: "Бүтээгдэхүүн", href: "#products" },
  { label: "Хүний нөөц", href: "/hr" },
  { label: "Мэдээ мэдээлэл", href: "#news" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#00AC94] flex items-center justify-center group-hover:scale-105 transition-transform">
              <Pill className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-semibold text-[#243342] tracking-tight">
                Анхны Нахиа
              </span>
              <span className="block text-[10px] text-[#00AC94] font-medium -mt-0.5 tracking-wide">
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
                className="px-3 py-2 text-sm font-medium text-[#455A6F] hover:text-[#00AC94] rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-2.5 text-sm font-medium text-white bg-[#00AC94] hover:bg-[#009882] rounded-xl transition-all shrink-0"
          >
            Холбоо барих
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-[#243342]" />
            ) : (
              <Menu className="w-6 h-6 text-[#243342]" />
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
                  className="px-4 py-3 text-sm font-medium text-[#455A6F] hover:text-[#00AC94] hover:bg-gray-50 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 mx-4 px-5 py-3 text-sm font-medium text-white bg-[#00AC94] rounded-xl text-center transition-all"
              >
                Холбоо барих
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
