"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("languageSwitcher");

  function switchLocale() {
    const newLocale = locale === "mn" ? "en" : "mn";
    router.replace(pathname, { locale: newLocale });
  }

  const otherLocale = locale === "mn" ? "en" : "mn";

  return (
    <button
      onClick={switchLocale}
      className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[#455A6F] hover:text-[#00AC94] rounded-lg hover:bg-gray-50 transition-all"
      aria-label={`Switch to ${t(otherLocale)}`}
    >
      <Globe className="w-4 h-4" />
      {t(otherLocale)}
    </button>
  );
}
