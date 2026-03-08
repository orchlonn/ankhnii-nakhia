import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FadeInUp, StaggerContainer, StaggerItem } from "./motion";

export default async function Footer() {
  const t = await getTranslations("footer");

  const quickLinks = [
    { label: t("quickLinks.about"), href: "/about" as const },
    { label: t("quickLinks.services"), href: "/services" as const },
    { label: t("quickLinks.contact"), href: "/contact" as const },
  ];

  return (
    <footer className="bg-[#00AC94] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr] gap-10 sm:gap-12" staggerDelay={0.1}>
          {/* Brand */}
          <StaggerItem>
            <div>
              <Link href="/" className="flex items-center gap-3 mb-6">
                <Image src="/Company Logo.png" alt="Анхны Нахиа" width={200} height={200} className="bg-white rounded-2xl p-2 hover:scale-105 transition-transform duration-300" />
              </Link>
              <div className="flex items-center gap-3 mt-6">
                <a href="#" className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 hover:scale-110 flex items-center justify-center transition-all duration-300" aria-label="Facebook">
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 hover:scale-110 flex items-center justify-center transition-all duration-300" aria-label="Instagram">
                  <Instagram className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </StaggerItem>

          {/* Quick Links */}
          <StaggerItem>
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                {t("quickLinksTitle")}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white hover:text-white/80 hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          {/* Services */}
          <StaggerItem>
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                {t("servicesTitle")}
              </h4>
              <ul className="space-y-3">
                <li><Link href={"/services/pharmacy" as any} className="text-sm text-white hover:text-white/80 hover:translate-x-1 inline-block transition-all duration-300">{t("serviceLinks.pharmacyNetwork")}</Link></li>
                <li><Link href={"/services/distribution" as any} className="text-sm text-white hover:text-white/80 hover:translate-x-1 inline-block transition-all duration-300">{t("serviceLinks.supply")}</Link></li>
                <li><Link href={"/services/children-hospital" as any} className="text-sm text-white hover:text-white/80 hover:translate-x-1 inline-block transition-all duration-300">{t("serviceLinks.import")}</Link></li>
              </ul>
            </div>
          </StaggerItem>

          {/* Contact */}
          <StaggerItem>
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                {t("contactTitle")}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-white mt-0.5 shrink-0" />
                  <span className="text-sm text-white">
                    {t("address")}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white shrink-0" />
                  <div className="flex flex-col">
                    <a href="tel:+97698009898" className="text-sm text-white hover:text-white transition-colors">
                      {t("phone")}
                    </a>
                    <a href="tel:+97680010366" className="text-sm text-white hover:text-white transition-colors">
                      {t("phone2")}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-white shrink-0" />
                  <a href="mailto:anhnii.nahia@gmail.com" className="text-sm text-white hover:text-white transition-colors">
                    {t("email")}
                  </a>
                </li>
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Bar */}
        <FadeInUp delay={0.4}>
          <div className="mt-14 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-white">
              {t("copyright")}
            </p>
          </div>
        </FadeInUp>
      </div>
    </footer>
  );
}
