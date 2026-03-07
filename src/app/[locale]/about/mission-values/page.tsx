import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { getTranslations } from "next-intl/server";

export default async function MissionValuesPage() {
  const t = await getTranslations("about");

  return (
    <>
      <Header />
      <main>
        <PageBanner title={`${t("mission.title")} & ${t("vision.title")}`} />
        <section className="bg-[#fbf9fa]">
          {/* Mission */}
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#243342] mb-5">
                  {t("mission.title")}
                </h2>
                <p className="text-sm sm:text-[15px] text-[#455A6F] leading-relaxed text-justify">
                  {t("mission.description")}
                </p>
              </div>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#00AC94]/5 via-[#00AC94]/10 to-[#00AC94]/5 border-2 border-dashed border-[#00AC94]/20 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/mission.jpg"
                  alt={t("mission.title")}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#00AC94]/5 via-[#00AC94]/10 to-[#00AC94]/5 border-2 border-dashed border-[#00AC94]/20 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/vision.jpg"
                    alt={t("vision.title")}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#243342] mb-5">
                    {t("vision.title")}
                  </h2>
                  <p className="text-sm sm:text-[15px] text-[#455A6F] leading-relaxed text-justify">
                    {t("vision.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#243342] mb-5">
                  {t("valuesSection.title")}
                </h2>
                <p className="text-sm sm:text-[15px] text-[#455A6F] leading-relaxed text-justify">
                  {t("valuesSection.description")}
                </p>
              </div>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#00AC94]/5 via-[#00AC94]/10 to-[#00AC94]/5 border-2 border-dashed border-[#00AC94]/20 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/values.jpg"
                  alt={t("values.title")}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
