import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Award, Building2, Users, HeartPulse } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function CompanyPage() {
  const t = await getTranslations("about");

  const stats = [
    { value: t("stats.founded.value"), label: t("stats.founded.label") },
    { value: t("stats.experience.value"), label: t("stats.experience.label") },
    { value: t("stats.branches.value"), label: t("stats.branches.label") },
    { value: t("stats.staff.value"), label: t("stats.staff.label") },
    { value: t("stats.medicines.value"), label: t("stats.medicines.label") },
  ];

  const milestones = [
    { year: "2009", text: t("timeline.y2009") },
    { year: "2013", text: t("timeline.y2013") },
    { year: "2015", text: t("timeline.y2015") },
    { year: "2017", text: t("timeline.y2017") },
    { year: "2021", text: t("timeline.y2021") },
    { year: "2023", text: t("timeline.y2023") },
  ];

  return (
    <>
      <Header />
      <main>
        <PageBanner title={t("history.title")} />
        <section className="bg-[#fbf9fa]">
          {/* Company Story */}
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
            <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#00AC94] mb-8">
              {t("aboutUs")}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-3">
                <div className="space-y-4 text-base sm:text-lg text-[#1a1a2e] leading-relaxed text-justify">
                  <p>{t("history.p1")}</p>
                  <p>{t("history.p2")}</p>
                  <p>{t("history.p3")}</p>
                  <p>{t("history.p4")}</p>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#00AC94]/10 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-[#00AC94]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#243342] mb-1">{t("highlights.standard.title")}</h4>
                    <p className="text-xs sm:text-sm text-[#455A6F] leading-relaxed">{t("highlights.standard.desc")}</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#00AC94]/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-[#00AC94]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#243342] mb-1">{t("highlights.sixBranches.title")}</h4>
                    <p className="text-xs sm:text-sm text-[#455A6F] leading-relaxed">{t("highlights.sixBranches.desc")}</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#00AC94]/10 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-[#00AC94]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#243342] mb-1">{t("highlights.team.title")}</h4>
                    <p className="text-xs sm:text-sm text-[#455A6F] leading-relaxed">{t("highlights.team.desc")}</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#00AC94]/10 flex items-center justify-center shrink-0">
                    <HeartPulse className="w-5 h-5 text-[#00AC94]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#243342] mb-1">{t("highlights.insurance.title")}</h4>
                    <p className="text-xs sm:text-sm text-[#455A6F] leading-relaxed">{t("highlights.insurance.desc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white">
            <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 sm:gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#00AC94] mb-1">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-[#455A6F] font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="bg-white">
            <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#00AC94]/5 via-[#00AC94]/10 to-[#00AC94]/5 border-2 border-dashed border-[#00AC94]/20 flex items-center justify-center">
                  <p className="text-sm text-[#00AC94]/40 font-medium">{t("imagePlaceholder")}</p>
                </div>
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#00AC94]/5 via-[#00AC94]/10 to-[#00AC94]/5 border-2 border-dashed border-[#00AC94]/20 flex items-center justify-center">
                  <p className="text-sm text-[#00AC94]/40 font-medium">{t("imagePlaceholder")}</p>
                </div>
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#00AC94]/5 via-[#00AC94]/10 to-[#00AC94]/5 border-2 border-dashed border-[#00AC94]/20 flex items-center justify-center">
                  <p className="text-sm text-[#00AC94]/40 font-medium">{t("imagePlaceholder")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
              <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#243342] mb-10 text-center">
                {t("timeline.title")}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                {/* Image */}
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#00AC94]/5 via-[#00AC94]/10 to-[#00AC94]/5 border-2 border-dashed border-[#00AC94]/20 flex items-center justify-center">
                  <p className="text-sm text-[#00AC94]/40 font-medium">{t("imagePlaceholder")}</p>
                </div>
                {/* Achievement list */}
                <div className="space-y-4">
                  {milestones.map((item) => (
                    <div key={item.year} className="flex items-start gap-4 bg-[#F9FAFB] rounded-2xl p-5 sm:p-6 border border-gray-100">
                      <span className="text-lg sm:text-xl font-bold text-[#00AC94] shrink-0 min-w-[52px]">{item.year}</span>
                      <p className="text-sm sm:text-base text-[#1a1a2e] leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
