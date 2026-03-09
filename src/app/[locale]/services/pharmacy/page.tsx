import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { FadeInUp } from "@/components/motion";
import { getTranslations } from "next-intl/server";

export default async function PharmacyPage() {
  const t = await getTranslations("services");

  return (
    <>
      <Header />
      <main>
        <PageBanner title={t("pharmacy.title")} />
        <section className="bg-[#fbf9fa]">
          <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
            <FadeInUp>
              <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#1a1a2e] mb-14 text-center font-roboto">
                {t("pharmacyPage.heading")}
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="space-y-5 text-base sm:text-lg text-[#455A6F] leading-relaxed text-justify">
                <p>{t("pharmacyPage.p1")}</p>
                <p>{t("pharmacyPage.p2")}</p>
                <p>
                  <strong>{t("pharmacyPage.goalTitle")}</strong> {t("pharmacyPage.goalText")}
                </p>
              </div>
            </FadeInUp>

            {/* Auto-scrolling Images */}
            <FadeInUp delay={0.4}>
              <div className="mt-14 overflow-hidden">
                <div
                  className="flex gap-5 animate-scroll-left"
                  style={{ width: "max-content" }}
                >
                  {[
                    "/Our services/pharmacy/Pharmacy-1.JPG",
                    "/Our services/pharmacy/Pharmacy-2.jpg",
                    "/Our services/pharmacy/Pharmacy-3.jpg",
                    "/Our services/pharmacy/Pharmacy-4.jpg",
                    "/Our services/pharmacy/Pharmacy-5.jpg",
                    "/Our services/pharmacy/Pharmacy-6.jpg",
                    "/Our services/pharmacy/Pharmacy-7.jpg",
                    "/Our services/pharmacy/Pharmacy-8.jpg",
                    "/Our services/pharmacy/Pharmacy-9.JPG",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 w-[350px] sm:w-[400px]"
                    >
                      <div className="aspect-[4/3] rounded-2xl bg-gray-100 border border-gray-200 overflow-hidden group">
                        <img
                          src={src}
                          alt={`Pharmacy ${i + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
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
