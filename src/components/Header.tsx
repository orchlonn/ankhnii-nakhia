"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

function DesktopDropdown({ item, pathname, scrolled }: { item: NavItem; pathname: string; scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  const isActive = pathname === item.href || item.dropdown?.some((d) => pathname === d.href);

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className={`flex items-center gap-1 px-4 py-2 text-[17px] font-medium rounded-lg transition-all whitespace-nowrap ${
          isActive
            ? "text-[#00AC94] bg-[#00AC94]/5"
            : scrolled ? "text-[#5a5a72] hover:text-[#1a1a2e] hover:bg-gray-50" : "text-white/90 hover:text-white hover:bg-white/10"
        }`}
      >
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 pt-1 z-50">
          <div className="w-64 bg-white rounded-xl shadow-lg shadow-black/10 border border-gray-100 py-2 animate-fade-in">
            {item.dropdown!.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href as any}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2.5 text-sm transition-colors ${
                  pathname === sub.href
                    ? "text-[#00AC94] bg-[#00AC94]/5"
                    : "text-[#5a5a72] hover:text-[#1a1a2e] hover:bg-gray-50"
                }`}
              >
                {sub.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("header");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const aboutDropdown: DropdownItem[] = [
    { label: t("nav.aboutDropdown.ceoMessage"), href: "/about/ceo-message" },
    { label: t("nav.aboutDropdown.company"), href: "/about/company" },
    { label: t("nav.aboutDropdown.partners"), href: "/about/partners" },
    { label: t("nav.aboutDropdown.missionValues"), href: "/about/mission-values" },
    { label: t("nav.aboutDropdown.socialResponsibility"), href: "/about/social-responsibility" },
  ];

  const servicesDropdown: DropdownItem[] = [
    { label: t("nav.servicesDropdown.distribution"), href: "/services/distribution" },
    { label: t("nav.servicesDropdown.pharmacy"), href: "/services/pharmacy" },
    { label: t("nav.servicesDropdown.childrenHospital"), href: "/services/children-hospital" },
  ];

  const navItems: NavItem[] = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about", dropdown: aboutDropdown },
    { label: t("nav.services"), href: "/services", dropdown: servicesDropdown },
    { label: t("contactButton"), href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/98 backdrop-blur-sm border-b border-gray-100/80 shadow-sm" : "bg-transparent border-b border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <Image src="/Company Logo.png" alt={t("companyName")} width={200} height={200} className="group-hover:scale-105 transition-transform" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) =>
              item.dropdown ? (
                <DesktopDropdown key={item.href} item={item} pathname={pathname} scrolled={scrolled} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href as "/contact"}
                  className={`px-4 py-2 text-[17px] font-medium rounded-lg transition-all whitespace-nowrap ${
                    pathname === item.href
                      ? "text-[#00AC94] bg-[#00AC94]/5"
                      : scrolled ? "text-[#5a5a72] hover:text-[#1a1a2e] hover:bg-gray-50" : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop Language Switcher */}
          <div className="hidden lg:flex items-center">
            <LanguageSwitcher scrolled={scrolled} />
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-50 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={`w-6 h-6 ${scrolled ? "text-[#1a1a2e]" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? "text-[#1a1a2e]" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-6 pt-2 border-t border-gray-100 animate-fade-in max-h-[calc(100vh-72px)] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {/* About Us with dropdown */}
              <div>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-gray-50 rounded-lg transition-all ${
                    pathname === "/about"
                      ? "text-[#00AC94] bg-[#00AC94]/5"
                      : "text-[#5a5a72] hover:text-[#1a1a2e]"
                  }`}
                >
                  {t("nav.about")}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileAboutOpen && (
                  <div className="pl-4">
                    {aboutDropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href as any}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2.5 text-sm text-[#5a5a72] hover:text-[#00AC94] hover:bg-gray-50 rounded-lg transition-all"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services with dropdown */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-gray-50 rounded-lg transition-all ${
                    pathname === "/services"
                      ? "text-[#00AC94] bg-[#00AC94]/5"
                      : "text-[#5a5a72] hover:text-[#1a1a2e]"
                  }`}
                >
                  {t("nav.services")}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4">
                    {servicesDropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href as any}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2.5 text-sm text-[#5a5a72] hover:text-[#00AC94] hover:bg-gray-50 rounded-lg transition-all"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium hover:bg-gray-50 rounded-lg transition-all ${
                  pathname === "/contact"
                    ? "text-[#00AC94] bg-[#00AC94]/5"
                    : "text-[#5a5a72] hover:text-[#1a1a2e]"
                }`}
              >
                {t("contactButton")}
              </Link>

              <div className="mx-4 mt-3">
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
