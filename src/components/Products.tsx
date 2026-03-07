import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function Products() {
  const t = await getTranslations("products");

  const branches = [
    {
      name: t("ankhnyNakhia.name"),
      desc: t("ankhnyNakhia.desc"),
    },
    {
      name: t("azynNakhia1.name"),
      desc: t("azynNakhia1.desc"),
    },
    {
      name: t("azynNakhia2.name"),
      desc: t("azynNakhia2.desc"),
    },
    {
      name: t("shineNakhia.name"),
      desc: t("shineNakhia.desc"),
    },
    {
      name: t("azKids.name"),
      desc: t("azKids.desc"),
    },
    {
      name: t("supply.name"),
      desc: t("supply.desc"),
    },
  ];

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
            {t("title")}
          </h2>
          <p className="text-[#5a5a72] text-base sm:text-lg max-w-2xl">
            {t("subtitle")}
          </p>
        </div>

        {/* Branch Grid - Asklepiy style cards with arrows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 hover:border-[#00AC94]/30 hover:shadow-lg hover:shadow-[#00AC94]/5 transition-all duration-300 cursor-pointer flex items-start justify-between gap-4"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] sm:text-base font-semibold text-[#1a1a2e] mb-1.5 group-hover:text-[#00AC94] transition-colors">
                  {branch.name}
                </h3>
                <p className="text-sm text-[#5a5a72] leading-relaxed">
                  {branch.desc}
                </p>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#00AC94]/10 group-hover:bg-[#00AC94] flex items-center justify-center shrink-0 transition-all duration-300 mt-0.5">
                <ArrowRight className="w-4 h-4 text-[#00AC94] group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
