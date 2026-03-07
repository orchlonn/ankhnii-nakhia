import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { getTranslations } from "next-intl/server";

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
              <div className="space-y-4 text-sm sm:text-[15px] text-[#455A6F] leading-relaxed text-justify">
                <p>{t("socialResponsibility.p1")}</p>
                <p>{t("socialResponsibility.p1b")}</p>
              </div>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#00AC94]/5 via-[#00AC94]/10 to-[#00AC94]/5 border-2 border-dashed border-[#00AC94]/20 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/social-responsibility-1.jpg"
                  alt={t("socialResponsibility.title")}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                <div className="text-sm sm:text-[15px] text-[#455A6F] leading-relaxed text-justify">
                  <p>{t("socialResponsibility.p2")}</p>
                </div>
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#00AC94]/5 via-[#00AC94]/10 to-[#00AC94]/5 border-2 border-dashed border-[#00AC94]/20 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/social-responsibility-2.jpg"
                    alt={t("socialResponsibility.title")}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="text-sm sm:text-[15px] text-[#455A6F] leading-relaxed text-justify">
                <p>{t("socialResponsibility.p3")}</p>
              </div>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#00AC94]/5 via-[#00AC94]/10 to-[#00AC94]/5 border-2 border-dashed border-[#00AC94]/20 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/social-responsibility-3.jpg"
                  alt={t("socialResponsibility.title")}
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
