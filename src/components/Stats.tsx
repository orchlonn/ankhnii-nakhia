import { getTranslations } from "next-intl/server";

export default async function Stats() {
  const t = await getTranslations("stats");

  const stats = [
    {
      value: t("experience.value"),
      label: t("experience.label"),
      desc: t("experience.desc"),
    },
    {
      value: t("branches.value"),
      label: t("branches.label"),
      desc: t("branches.desc"),
    },
    {
      value: t("staff.value"),
      label: t("staff.label"),
      desc: t("staff.desc"),
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#fbf9fa]">
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#243342] mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-semibold text-[#243342] mb-1">
                {stat.label}
              </div>
              <p className="text-xs sm:text-sm text-[#455A6F] leading-relaxed max-w-xs mx-auto">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
