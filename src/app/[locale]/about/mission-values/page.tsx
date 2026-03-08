import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { FadeInLeft, FadeInRight, ScaleIn } from "@/components/motion";
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
              <FadeInLeft>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#243342] mb-5 font-roboto">
                    {t("mission.title")}
                  </h2>
                  <p className="text-base sm:text-lg text-[#455A6F] leading-relaxed text-justify">
                    {t("mission.description")}
                  </p>
                </div>
              </FadeInLeft>
              <FadeInRight>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group">
                  <Image
                    src="/About Us/Mission & Values/Mission.jpg"
                    alt={t("mission.title")}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </FadeInRight>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                <FadeInLeft>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group">
                    <Image
                      src="/About Us/Mission & Values/Vision.png"
                      alt={t("vision.title")}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </FadeInLeft>
                <FadeInRight>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#243342] mb-5 font-roboto">
                      {t("vision.title")}
                    </h2>
                    <p className="text-base sm:text-lg text-[#455A6F] leading-relaxed text-justify">
                      {t("vision.description")}
                    </p>
                  </div>
                </FadeInRight>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <FadeInLeft>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#243342] mb-5 font-roboto">
                    {t("valuesSection.title")}
                  </h2>
                  <p className="text-base sm:text-lg text-[#455A6F] leading-relaxed text-justify">
                    {t("valuesSection.description")}
                  </p>
                </div>
              </FadeInLeft>
              <FadeInRight>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group">
                  <Image
                    src="/About Us/Mission & Values/Values.jpeg"
                    alt={t("valuesSection.title")}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </FadeInRight>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
