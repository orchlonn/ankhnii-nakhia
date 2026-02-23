import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import SpotlightBanner from "./SpotlightBanner";

export default async function CTABanner() {
  const t = await getTranslations("ctaBanner");

  return (
    <section className="bg-white">
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <SpotlightBanner>
          <div className="relative">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              {t("title")}
            </h3>
            <p className="text-sm text-white/70 max-w-md">
              {t("description")}
            </p>
          </div>
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-[#008F7A] bg-white hover:bg-gray-50 rounded-xl transition-all shrink-0"
          >
            {t("button")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </SpotlightBanner>
      </div>
    </section>
  );
}
