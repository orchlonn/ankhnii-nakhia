import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Newspaper } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function NewsPage() {
  const t = await getTranslations("news");

  return (
    <>
      <Header />
      <main>
        <PageBanner title={t("badge")} />
        <section className="bg-[#fbf9fa]">
          <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-20 sm:py-28">
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
