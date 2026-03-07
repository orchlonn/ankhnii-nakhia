import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { getTranslations } from "next-intl/server";

export default async function CeoMessagePage() {
  const t = await getTranslations("about");

  return (
    <>
      <Header />
      <main>
        <PageBanner title={t("ceoMessage.title")} />
        <section className="bg-[#fbf9fa]">
          <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
            <div className="bg-white rounded-2xl p-7 sm:p-10 border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-stretch gap-10">
                {/* CEO Image */}
                <div className="flex-shrink-0">
                  <div className="w-72 sm:w-80 md:w-96 h-full rounded-xl bg-gray-100 border border-gray-200 overflow-hidden">
                    <img
                      src="/images/ceo.jpg"
                      alt={t("ceoMessage.name")}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Text content */}
                <div className="space-y-4 text-sm sm:text-[15px] text-[#1a1a2e] leading-relaxed text-justify">
                  <p>{t("ceoMessage.p1")}</p>
                  <p>{t("ceoMessage.p2")}</p>
                  <p>{t("ceoMessage.p3")}</p>
                  <p>{t("ceoMessage.p4")}</p>
                  <p>{t("ceoMessage.p5")}</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 text-right">
                <p className="text-lg font-bold text-[#243342]">{t("ceoMessage.name")}</p>
                <p className="text-sm font-semibold text-[#455A6F]">{t("ceoMessage.position")}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
