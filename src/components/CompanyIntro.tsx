import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FadeInLeft, FadeInRight } from "./motion";

export default async function CompanyIntro() {
  const t = await getTranslations("companyIntro");

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text side */}
          <FadeInLeft>
            <div>
              <div className="mb-6">
                <span className="text-sm sm:text-base font-medium text-[#00AC94] italic tracking-wider">
                  {t("badge")}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#243342] leading-tight mb-3 font-roboto">
                {t("title")}
              </h2>
              <p className="text-sm sm:text-base text-[#455A6F] leading-[1.8] font-medium font-roboto">
                {t("description")}
              </p>
            </div>
          </FadeInLeft>

          {/* Image */}
          <FadeInRight delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/Home/About us in home photo.png"
                  alt={t("title")}
                  fill
                  className="object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
}
