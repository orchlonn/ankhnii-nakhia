import { Pill, Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Footer() {
  const t = await getTranslations("footer");

  const quickLinks = [
    { label: t("quickLinks.home"), href: "/" as const },
    { label: t("quickLinks.about"), href: "/about" as const },
    { label: t("quickLinks.services"), href: "/services" as const },
    { label: t("quickLinks.products"), href: "/products" as const },
    { label: t("quickLinks.contact"), href: "/contact" as const },
  ];

  const serviceLinks = [
    t("serviceLinks.pharmacyNetwork"),
    t("serviceLinks.supply"),
    t("serviceLinks.import"),
    t("serviceLinks.equipment"),
    t("serviceLinks.quality"),
  ];

  return (
    <footer className="bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#00AC94] flex items-center justify-center">
                <Pill className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-[#243342]">
                  {t("companyName")}
                </span>
                <span className="block text-[10px] text-[#00AC94] font-medium -mt-0.5">
                  {t("companySubtitle")}
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#455A6F] leading-relaxed mb-6">
              {t("companyDesc")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#243342] font-semibold mb-5">{t("quickLinksTitle")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#455A6F] hover:text-[#00AC94] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#243342] font-semibold mb-5">{t("servicesTitle")}</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-sm text-[#455A6F]">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#243342] font-semibold mb-5">{t("contactTitle")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00AC94] mt-0.5 shrink-0" />
                <span className="text-sm text-[#455A6F]">
                  {t("address")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00AC94] shrink-0" />
                <a
                  href="tel:+97670111234"
                  className="text-sm text-[#455A6F] hover:text-[#00AC94] transition-colors"
                >
                  {t("phone")}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00AC94] shrink-0" />
                <a
                  href="mailto:info@ankhniinakhia.mn"
                  className="text-sm text-[#455A6F] hover:text-[#00AC94] transition-colors"
                >
                  {t("email")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#455A6F]/60">
            {t("copyright")}
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#455A6F]/40 hover:text-[#00AC94] transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#455A6F]/40 hover:text-[#00AC94] transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#455A6F]/40 hover:text-[#00AC94] transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
