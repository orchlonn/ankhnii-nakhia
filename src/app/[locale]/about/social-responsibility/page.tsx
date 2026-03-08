import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ImageCarousel from "@/components/ImageCarousel";
import { FadeInLeft, FadeInRight } from "@/components/motion";
import { getTranslations } from "next-intl/server";

const section1Images = [1, 2, 4, 5, 6, 7, 8].map(
  (n) => `/About Us/Social responsibility/Paragraph 1 -${n}.JPG`
);

const section2Images = Array.from({ length: 6 }, (_, i) =>
  `/About Us/Social responsibility/Paragraph 2 -${i + 1}.JPG`
);

const section3Images = [
  "/About Us/Social responsibility/Paragraph 3 -1 .JPG",
  "/About Us/Social responsibility/Paragraph 3 -2.JPG",
];

export default async function SocialResponsibilityPage() {
  const t = await getTranslations("about");

  return (
    <>
      <Header />
      <main>
        <PageBanner title={t("socialResponsibility.title")} />
        <section className="bg-[#fbf9fa]">
          {/* Section 1 */}
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <FadeInLeft>
                <div className="space-y-4 text-base sm:text-lg text-[#455A6F] leading-relaxed text-justify">
                  <p>{t("socialResponsibility.p1")}</p>
                  <p>{t("socialResponsibility.p1b")}</p>
                </div>
              </FadeInLeft>
              <FadeInRight>
                <ImageCarousel images={section1Images} alt={t("socialResponsibility.title")} />
              </FadeInRight>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                <FadeInLeft>
                  <ImageCarousel images={section2Images} alt={t("socialResponsibility.title")} />
                </FadeInLeft>
                <FadeInRight>
                  <div className="text-base sm:text-lg text-[#455A6F] leading-relaxed text-justify">
                    <p>{t("socialResponsibility.p2")}</p>
                  </div>
                </FadeInRight>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <FadeInLeft>
                <div className="text-base sm:text-lg text-[#455A6F] leading-relaxed text-justify">
                  <p>{t("socialResponsibility.p3")}</p>
                </div>
              </FadeInLeft>
              <FadeInRight>
                <ImageCarousel images={section3Images} alt={t("socialResponsibility.title")} />
              </FadeInRight>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
