import { getTranslations } from "next-intl/server";
import { StaggerContainer, StaggerItem, AnimatedCounter } from "./motion";

export default async function Stats() {
  const t = await getTranslations("stats");

  const stats = [
    { value: t("founded.value"), label: t("founded.label") },
    { value: t("experience.value"), label: t("experience.label") },
    { value: t("branches.value"), label: t("branches.label") },
    { value: t("staff.value"), label: t("staff.label") },
    { value: t("medicines.value"), label: t("medicines.label") },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-3 sm:grid-cols-5 gap-6 sm:gap-8" staggerDelay={0.15}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#00AC94]">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-sm font-medium text-[#5a5a72] mt-1">
                {stat.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
