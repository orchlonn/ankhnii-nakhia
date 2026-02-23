import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Newspaper } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function NewsPage() {
  const t = await getTranslations("news");

  return (
    <>
      <Header />
      <main>
        <section className="bg-[#fbf9fa] pt-[72px]">
          <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-28">
            <span className="inline-block text-xs sm:text-sm font-semibold text-[#00AC94] uppercase tracking-wider mb-3">
              {t("badge")}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-[#243342] leading-tight mb-4">
              {t("heroTitle")}{" "}
              <span className="text-[#00AC94]">{t("heroHighlight")}</span>
            </h1>
            <p className="text-sm sm:text-base text-[#455A6F] max-w-xl leading-relaxed">
              {t("heroDescription")}
            </p>
          </div>

          <div className="max-w-[1088px] mx-auto px-4 sm:px-6 pb-20 sm:pb-28">
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#00AC94]/10 flex items-center justify-center mb-5">
                <Newspaper className="w-8 h-8 text-[#00AC94]" />
              </div>
              <h3 className="text-lg font-semibold text-[#243342] mb-2">
                {t("comingSoon")}
              </h3>
              <p className="text-sm text-[#455A6F]">
                {t("comingSoonDesc")}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
