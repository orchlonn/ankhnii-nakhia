import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { FadeInUp } from "@/components/motion";
import { getTranslations } from "next-intl/server";

export default async function DistributionPage() {
  const t = await getTranslations("services");

  return (
    <>
      <Header />
      <main>
        <PageBanner title={t("distributionCenter.title")} />
        <section className="bg-[#fbf9fa]">
          <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
            <FadeInUp>
              <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#1a1a2e] mb-14 text-center font-roboto">
                {t("distributionPage.heading")}
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="space-y-5 text-base sm:text-lg text-[#455A6F] leading-relaxed text-justify">
                <p>{t("distributionPage.p1")}</p>
                <p>{t("distributionPage.p2")}</p>
                <p><strong>{t("distributionPage.goalTitle")}</strong> {t("distributionPage.goalText")}</p>
                <p><strong>{t("distributionPage.objectiveTitle")}</strong> {t("distributionPage.objectiveText")}</p>
              </div>
            </FadeInUp>

            {/* Auto-scrolling Images */}
            <FadeInUp delay={0.4}>
              <div className="mt-14 overflow-hidden">
                <div className="flex gap-5 animate-scroll-left" style={{ width: "max-content" }}>
                  {[
                    "/Our services/distribution/Pharmaceutical Distribution Center-1.JPG",
                    "/Our services/distribution/Pharmaceutical Distribution Center-2.jpg",
                    "/Our services/distribution/Pharmaceutical Distribution Center-3.JPG",
                    "/Our services/distribution/Pharmaceutical Distribution Center-4.jpg",
                    "/Our services/distribution/Pharmaceutical Distribution Center-1.JPG",
                    "/Our services/distribution/Pharmaceutical Distribution Center-2.jpg",
                    "/Our services/distribution/Pharmaceutical Distribution Center-3.JPG",
                    "/Our services/distribution/Pharmaceutical Distribution Center-4.jpg",
                  ].map((src, i) => (
                    <div key={i} className="flex-shrink-0 w-[350px] sm:w-[400px]">
                      <div className="aspect-[4/3] rounded-2xl bg-gray-100 border border-gray-200 overflow-hidden group">
                        <img src={src} alt={`Distribution ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
