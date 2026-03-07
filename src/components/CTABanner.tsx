import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import SpotlightBanner from "./SpotlightBanner";

export default async function CTABanner() {
  const t = await getTranslations("ctaBanner");

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <SpotlightBanner>
          <div className="relative">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
              {t("title")}
            </h3>
            <p className="text-sm sm:text-base text-white/70 max-w-lg">
              {t("description")}
            </p>
          </div>
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#00AC94] bg-white hover:bg-gray-50 rounded-full transition-all shrink-0 shadow-lg"
          >
            {t("button")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </SpotlightBanner>
      </div>
    </section>
  );
}
