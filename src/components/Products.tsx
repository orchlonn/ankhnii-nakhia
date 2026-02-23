import { Building2, MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function Products() {
  const t = await getTranslations("products");

  const branches = [
    {
      name: t("ankhnyNakhia.name"),
      desc: t("ankhnyNakhia.desc"),
      type: "pharmacy",
    },
    {
      name: t("azynNakhia1.name"),
      desc: t("azynNakhia1.desc"),
      type: "branch",
    },
    {
      name: t("azynNakhia2.name"),
      desc: t("azynNakhia2.desc"),
      type: "branch",
    },
    {
      name: t("shineNakhia.name"),
      desc: t("shineNakhia.desc"),
      type: "branch",
    },
    {
      name: t("azKids.name"),
      desc: t("azKids.desc"),
      type: "branch",
    },
    {
      name: t("supply.name"),
      desc: t("supply.desc"),
      type: "supply",
    },
  ];

  return (
    <section id="products" className="py-12 sm:py-20 bg-[#fbf9fa]">
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#243342] mb-3">
            {t("title")}
          </h2>
          <p className="text-sm sm:text-base text-[#455A6F] max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Branch Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="flex items-start gap-4 bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 hover:border-[#00AC94]/30 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00AC94]/10 flex items-center justify-center shrink-0">
                {branch.type === "supply" ? (
                  <MapPin className="w-5 h-5 text-[#00AC94]" />
                ) : (
                  <Building2 className="w-5 h-5 text-[#00AC94]" />
                )}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-[#243342] mb-1">
                  {branch.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#455A6F]">
                  {branch.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
