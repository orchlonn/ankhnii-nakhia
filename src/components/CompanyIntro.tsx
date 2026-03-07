import { getTranslations } from "next-intl/server";

export default async function CompanyIntro() {
  const t = await getTranslations("companyIntro");

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text side */}
          <div>
            <div className="mb-6">
              <span className="text-xs sm:text-sm font-semibold text-[#00AC94] uppercase tracking-wider">
                {t("badge")}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-semibold text-[#243342] leading-tight mb-6">
              {t("title")}
            </h2>
            <p className="text-sm sm:text-[15px] text-[#455A6F] leading-[1.8]">
              {t("description")}
            </p>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#00AC94]/5 via-[#00AC94]/10 to-[#00AC94]/5 border-2 border-dashed border-[#00AC94]/20 flex items-center justify-center">
              <div className="text-center px-6">
                <div className="w-16 h-16 rounded-2xl bg-[#00AC94]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#00AC94]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                  </svg>
                </div>
                <p className="text-sm text-[#00AC94]/40 font-medium">{t("imagePlaceholder")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
