import {
  Trophy,
  Smile,
  Shield,
  Sparkles,
  HeartPulse,
  Globe,
  Building2,
  Users,
  Target,
  Award,
  ArrowRight,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import SpotlightBanner from "./SpotlightBanner";

export default async function About() {
  const t = await getTranslations("about");

  const values = [
    {
      icon: Trophy,
      title: t("values.quality.title"),
      desc: t("values.quality.desc"),
    },
    {
      icon: Smile,
      title: t("values.reliability.title"),
      desc: t("values.reliability.desc"),
    },
    {
      icon: Shield,
      title: t("values.responsibility.title"),
      desc: t("values.responsibility.desc"),
    },
    {
      icon: Sparkles,
      title: t("values.accessibility.title"),
      desc: t("values.accessibility.desc"),
    },
  ];

  const stats = [
    { value: t("stats.founded.value"), label: t("stats.founded.label") },
    { value: t("stats.experience.value"), label: t("stats.experience.label") },
    { value: t("stats.branches.value"), label: t("stats.branches.label") },
    { value: t("stats.staff.value"), label: t("stats.staff.label") },
    { value: t("stats.medicines.value"), label: t("stats.medicines.label") },
    { value: t("stats.units.value"), label: t("stats.units.label") },
  ];

  const milestones = [
    { year: "2000", text: t("timeline.y2000") },
    { year: "2007", text: t("timeline.y2007") },
    { year: "2009", text: t("timeline.y2009") },
    { year: "2017", text: t("timeline.y2017") },
    { year: "2020", text: t("timeline.y2020") },
    { year: "2024", text: t("timeline.y2024") },
  ];

  return (
    <section id="about" className="bg-[#fbf9fa]">
      {/* Hero Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blur-circle w-[500px] h-[500px] bg-[#AAE3DB]/25 -top-40 -right-20 absolute" />
          <div className="blur-circle w-[350px] h-[350px] bg-[#00AC94]/10 bottom-0 -left-32 absolute" />
        </div>
        <div className="relative max-w-[1088px] mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-28">
          <span className="inline-block text-xs sm:text-sm font-semibold text-[#00AC94] uppercase tracking-wider mb-3">
            {t("badge")}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-[#243342] leading-tight mb-4">
            {t("heroTitle")}{" "}
            <span className="text-[#00AC94]">{t("heroHighlight")}</span>
          </h1>
          <p className="text-sm sm:text-base text-[#455A6F] max-w-2xl leading-relaxed">
            {t("heroDescription")}
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 border border-gray-100 card-hover group">
            <div className="w-12 h-12 rounded-xl bg-[#00AC94]/10 group-hover:bg-[#00AC94] flex items-center justify-center mb-5 transition-colors duration-300">
              <Target className="w-6 h-6 text-[#00AC94] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#243342] mb-3">
              {t("mission.title")}
            </h3>
            <p className="text-sm sm:text-[15px] text-[#455A6F] leading-relaxed">
              {t("mission.description")}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 border border-gray-100 card-hover group">
            <div className="w-12 h-12 rounded-xl bg-[#00AC94]/10 group-hover:bg-[#00AC94] flex items-center justify-center mb-5 transition-colors duration-300">
              <Globe className="w-6 h-6 text-[#00AC94] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#243342] mb-3">
              {t("vision.title")}
            </h3>
            <p className="text-sm sm:text-[15px] text-[#455A6F] leading-relaxed">
              {t("vision.description")}
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white">
        <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#00AC94] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[#455A6F] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Left - Text */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[3px] rounded-full bg-[#00AC94]" />
              <span className="text-xs sm:text-sm font-semibold text-[#00AC94] uppercase tracking-wider">
                {t("history.badge")}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#243342] mb-5">
              {t("history.title")}
            </h2>
            <div className="space-y-4 text-sm sm:text-[15px] text-[#455A6F] leading-relaxed">
              <p>{t("history.p1")}</p>
              <p>{t("history.p2")}</p>
              <p>{t("history.p3")}</p>
            </div>
          </div>

          {/* Right - Highlights */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#00AC94]/10 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#00AC94]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#243342] mb-1">
                  {t("highlights.standard.title")}
                </h4>
                <p className="text-xs sm:text-sm text-[#455A6F] leading-relaxed">
                  {t("highlights.standard.desc")}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#00AC94]/10 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-[#00AC94]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#243342] mb-1">
                  {t("highlights.sixBranches.title")}
                </h4>
                <p className="text-xs sm:text-sm text-[#455A6F] leading-relaxed">
                  {t("highlights.sixBranches.desc")}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#00AC94]/10 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-[#00AC94]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#243342] mb-1">
                  {t("highlights.team.title")}
                </h4>
                <p className="text-xs sm:text-sm text-[#455A6F] leading-relaxed">
                  {t("highlights.team.desc")}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#00AC94]/10 flex items-center justify-center shrink-0">
                <HeartPulse className="w-5 h-5 text-[#00AC94]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#243342] mb-1">
                  {t("highlights.insurance.title")}
                </h4>
                <p className="text-xs sm:text-sm text-[#455A6F] leading-relaxed">
                  {t("highlights.insurance.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white">
        <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="text-center mb-10 sm:mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-[3px] rounded-full bg-[#00AC94]" />
              <span className="text-xs sm:text-sm font-semibold text-[#00AC94] uppercase tracking-wider">
                {t("timeline.badge")}
              </span>
              <div className="w-8 h-[3px] rounded-full bg-[#00AC94]" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#243342] mb-3">
              {t("timeline.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {milestones.map((item) => (
              <div
                key={item.year}
                className="relative bg-[#F9FAFB] rounded-2xl p-6 sm:p-7 border border-gray-100 card-hover group overflow-hidden"
              >
                <span className="absolute -top-1 -right-1 text-[64px] font-bold text-[#00AC94]/[0.06] leading-none select-none group-hover:text-[#00AC94]/[0.12] transition-colors duration-500">
                  {item.year}
                </span>
                <div className="relative">
                  <span className="inline-block text-sm font-bold text-[#00AC94] mb-2">
                    {item.year}
                  </span>
                  <p className="text-sm text-[#455A6F] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-[3px] rounded-full bg-[#00AC94]" />
            <span className="text-xs sm:text-sm font-semibold text-[#00AC94] uppercase tracking-wider">
              {t("values.badge")}
            </span>
            <div className="w-8 h-[3px] rounded-full bg-[#00AC94]" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#243342] mb-3">
            {t("values.title")}
          </h2>
          <p className="text-sm sm:text-base text-[#455A6F] max-w-xl mx-auto">
            {t("values.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {values.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 card-hover group text-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#00AC94]/10 group-hover:bg-[#00AC94] flex items-center justify-center mx-auto mb-4 sm:mb-5 transition-colors duration-300">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#00AC94] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#243342] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#455A6F] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white">
        <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <SpotlightBanner>
            <div className="relative">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {t("cta.title")}
              </h3>
              <p className="text-sm text-white/70 max-w-md">
                {t("cta.description")}
              </p>
            </div>
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-[#008F7A] bg-white hover:bg-gray-50 rounded-xl transition-all shrink-0"
            >
              {t("cta.button")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </SpotlightBanner>
        </div>
      </div>
    </section>
  );
}
