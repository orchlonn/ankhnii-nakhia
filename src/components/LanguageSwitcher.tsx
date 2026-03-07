"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const flags: Record<string, { src: string; alt: string }> = {
  mn: {
    src: "https://flagcdn.com/w40/mn.png",
    alt: "Монгол",
  },
  en: {
    src: "https://flagcdn.com/w40/gb.png",
    alt: "English",
  },
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale() {
    const newLocale = locale === "mn" ? "en" : "mn";
    router.replace(pathname, { locale: newLocale });
  }

  const otherLocale = locale === "mn" ? "en" : "mn";
  const flag = flags[otherLocale];

  return (
    <button
      onClick={switchLocale}
      className="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-[#00AC94]/5 transition-all"
      aria-label={`Switch to ${flag.alt}`}
    >
      <img
        src={flag.src}
        alt={flag.alt}
        className="w-6 h-4 object-cover rounded-sm"
      />
      <span className="text-sm font-medium text-[#5a5a72]">
        {otherLocale.toUpperCase()}
      </span>
    </button>
  );
}
