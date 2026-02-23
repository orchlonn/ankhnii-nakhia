"use client";

import { useState } from "react";
import { Menu, X, Pill } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("header");
  const pathname = usePathname();

  const navLinks = [
    { label: t("nav.about"), href: "/about" as const },
    { label: t("nav.services"), href: "/services" as const },
    { label: t("nav.products"), href: "/products" as const },
    { label: t("nav.hr"), href: "/hr" as const },
    { label: t("nav.news"), href: "/news" as const },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#00AC94] flex items-center justify-center group-hover:scale-105 transition-transform">
              <Pill className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-semibold text-[#243342] tracking-tight">
                {t("companyName")}
              </span>
              <span className="block text-[10px] text-[#00AC94] font-medium -mt-0.5 tracking-wide">
                {t("companySubtitle")}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap ${
                  pathname === link.href
                    ? "text-[#00AC94]"
                    : "text-[#455A6F] hover:text-[#00AC94]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Language Switcher */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="inline-flex px-5 py-2.5 text-sm font-medium text-white bg-[#00AC94] hover:bg-[#009882] rounded-xl transition-all shrink-0"
            >
              {t("contactButton")}
            </Link>
          </div>

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
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm font-medium hover:bg-gray-50 rounded-lg transition-all ${
                    pathname === link.href
                      ? "text-[#00AC94]"
                      : "text-[#455A6F] hover:text-[#00AC94]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mx-4 mt-3">
                <LanguageSwitcher />
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 mx-4 px-5 py-3 text-sm font-medium text-white bg-[#00AC94] rounded-xl text-center transition-all"
              >
                {t("contactButton")}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
