import { Pill, Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "Нүүр", href: "/" },
  { label: "Бидний тухай", href: "/about" },
  { label: "Үйлчилгээ", href: "/services" },
  { label: "Бүтээгдэхүүн", href: "/products" },
  { label: "Холбоо барих", href: "/contact" },
];

const serviceLinks = [
  "Эмийн сангийн сүлжээ",
  "Эм ханган нийлүүлэх",
  "Эм импортлох",
  "Эмнэлгийн багаж, тоног төхөөрөмж",
  "Чанарын стандарт",
];

export default function Footer() {
  return (
    <footer className="bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#00AC94] flex items-center justify-center">
                <Pill className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-[#243342]">
                  Анхны Нахиа
                </span>
                <span className="block text-[10px] text-[#00AC94] font-medium -mt-0.5">
                  PHARMA LLC
                </span>
              </div>
            </a>
            <p className="text-sm text-[#455A6F] leading-relaxed mb-6">
              2007 оноос эм, гадаад худалдааны чиглэлээр үйл ажиллагаа
              явуулж, 6 салбар эмийн сантайгаар иргэдэд чанартай эмээр
              үйлчилж байна.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#243342] font-semibold mb-5">Хурдан холбоос</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#455A6F] hover:text-[#00AC94] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#243342] font-semibold mb-5">Үйлчилгээ</h4>
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
            <h4 className="text-[#243342] font-semibold mb-5">Холбоо барих</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00AC94] mt-0.5 shrink-0" />
                <span className="text-sm text-[#455A6F]">
                  Улаанбаатар хот, Сүхбаатар дүүрэг
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00AC94] shrink-0" />
                <a
                  href="tel:+97670111234"
                  className="text-sm text-[#455A6F] hover:text-[#00AC94] transition-colors"
                >
                  +976 7011-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00AC94] shrink-0" />
                <a
                  href="mailto:info@ankhniinakhia.mn"
                  className="text-sm text-[#455A6F] hover:text-[#00AC94] transition-colors"
                >
                  info@ankhniinakhia.mn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#455A6F]/60">
            &copy; 2007–2026 Анхны Нахиа ХХК. Бүх эрх хуулиар хамгаалагдсан.
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
