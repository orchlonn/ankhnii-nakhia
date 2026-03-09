import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, ScaleIn, AnimatedCounter } from "@/components/motion";
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

  const highlights = [
    { icon: Award, title: t("highlights.standard.title"), desc: t("highlights.standard.desc") },
    { icon: Building2, title: t("highlights.sixBranches.title"), desc: t("highlights.sixBranches.desc") },
    { icon: Users, title: t("highlights.team.title"), desc: t("highlights.team.desc") },
    { icon: HeartPulse, title: t("highlights.insurance.title"), desc: t("highlights.insurance.desc") },
  ];

  return (
    <>
      <Header />
      <main>
        <PageBanner title={t("history.title")} />
        <section className="bg-[#fbf9fa]">
          {/* Company Story */}
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
            <FadeInUp>
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold text-[#243342] mb-8 font-roboto">
                {t("aboutUs")}
              </h2>
            </FadeInUp>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
              <FadeInLeft className="lg:col-span-3">
                <div className="space-y-4 text-[15px] sm:text-base text-[#1a1a2e] leading-relaxed text-justify">
                  <p>{t("history.p1")}</p>
                  <p>{t("history.p2")}</p>
                  <p>{t("history.p3")}</p>
                  <p>{t("history.p4")}</p>
                </div>
              </FadeInLeft>
              <StaggerContainer className="lg:col-span-2 space-y-4" staggerDelay={0.1}>
                {highlights.map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                      <div className="w-11 h-11 rounded-xl bg-[#00AC94]/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-[#00AC94]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#243342] mb-1">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-[#455A6F] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white">
            <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
              <StaggerContainer className="grid grid-cols-3 sm:grid-cols-5 gap-6 sm:gap-8" staggerDelay={0.1}>
                {stats.map((stat) => (
                  <StaggerItem key={stat.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#00AC94] mb-1">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-xs sm:text-sm text-[#455A6F] font-medium">{stat.label}</div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>

          {/* Images */}
          <div className="bg-white">
            <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
                {[
                  { src: "/About Us/About the company/Company introduction photo -1.JPG", alt: "Company photo 1" },
                  { src: "/About Us/About the company/Company introduction photo -2.jpg", alt: "Company photo 2" },
                  { src: "/About Us/About the company/Company introduction photo -4.JPG", alt: "Company photo 3" },
                  { src: "/About Us/About the company/Company introduction photo -5.JPG", alt: "Company photo 4" },
                ].map((img) => (
                  <StaggerItem key={img.alt}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group">
                      <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
              <FadeInUp>
                <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#243342] mb-10 text-center font-roboto">
                  {t("timeline.title")}
                </h2>
              </FadeInUp>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
                {/* Image */}
                <ScaleIn>
                  <div className="min-h-[500px] rounded-2xl overflow-hidden relative">
                    <Image src="/About Us/About the company/Our achievements.jpg" alt="Our achievements" fill className="object-cover" />
                  </div>
                </ScaleIn>
                {/* Achievement list */}
                <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                  {milestones.map((item) => (
                    <StaggerItem key={item.year}>
                      <div className="flex items-start gap-4 bg-[#F9FAFB] rounded-2xl p-5 sm:p-6 border border-gray-100 hover:shadow-md hover:border-[#00AC94]/20 transition-all duration-300">
                        <span className="text-lg sm:text-xl font-bold text-[#00AC94] shrink-0 min-w-[52px]">{item.year}</span>
                        <p className="text-sm sm:text-base text-[#1a1a2e] leading-relaxed">{item.text}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
