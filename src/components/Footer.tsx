import { Pill, Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "Нүүр", href: "#hero" },
  { label: "Бидний тухай", href: "#about" },
  { label: "Үйлчилгээ", href: "#services" },
  { label: "Бүтээгдэхүүн", href: "#products" },
  { label: "Холбоо барих", href: "#contact" },
];

const serviceLinks = [
  "Эм импортлох",
  "Чанарын хяналт",
  "Эмнэлгийн хэрэгсэл",
  "Түгээлтийн сүлжээ",
  "Бүртгэл, зөвшөөрөл",
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <a href="#hero" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Pill className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">
                  Анхны Нахиа
                </span>
                <span className="block text-[10px] text-teal-400 font-medium -mt-0.5">
                  PHARMA LLC
                </span>
              </div>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              2005 оноос хойш Монголын эрүүл мэндийн салбарт итгэлтэй
              үйлчилж, олон улсын стандартын эм, эмнэлгийн хэрэгслийг
              нийлүүлж байна.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Хурдан холбоос</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5">Үйлчилгээ</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-sm text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">Холбоо барих</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">
                  Улаанбаатар хот, Сүхбаатар дүүрэг
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href="tel:+97670111234"
                  className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                >
                  +976 7011-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href="mailto:info@ankhniinakhia.mn"
                  className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                >
                  info@ankhniinakhia.mn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-gray-500">
            &copy; 2005–2026 Анхны Нахиа ХХК. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-teal-400 transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-teal-400 transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-teal-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
