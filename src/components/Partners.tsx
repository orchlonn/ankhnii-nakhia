import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FadeInUp, StaggerContainer, StaggerItem } from "./motion";

const partners = [
  { name: "Truong Tho", logo: "/About Us/Partners/logo-1.png" },
  { name: "Нижфарм", logo: "/About Us/Partners/logo-14.jpeg" },
  { name: "DK Pharma", logo: "/About Us/Partners/logo-4.png" },
  { name: "Dai Tin", logo: "/About Us/Partners/logo-5.png" },
  { name: "Hadiphar", logo: "/About Us/Partners/logo-6.jpg" },
  { name: "Eloge", logo: "/About Us/Partners/logo-7.jpg" },
  { name: "Healthline", logo: "/About Us/Partners/logo-13.png" },
  { name: "Alpha Pharma", logo: "/About Us/Partners/logo-9.png" },
  { name: "Beatexpharm", logo: "/About Us/Partners/logo-10.jpeg" },
  { name: "Vacopharm", logo: "/About Us/Partners/logo-12.png" },
];

function PartnerCard({ partner }: { partner: { name: string; logo: string } }) {
  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 flex flex-col items-center justify-center text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-4 overflow-hidden relative">
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className="object-contain p-2"
        />
      </div>
      <span className="text-sm font-semibold text-[#455A6F]">
        {partner.name}
      </span>
    </div>
  );
}

export default async function Partners({
  variant = "grid",
}: {
  variant?: "grid" | "scroll";
}) {
  const t = await getTranslations("partners");

  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-3 font-roboto">
              {t("title")}
            </h2>
          </div>
          <p className="text-center text-[#5a5a72] text-base sm:text-lg italic mb-12">
            {t("subtitle")}
          </p>
        </FadeInUp>
      </div>

      {variant === "scroll" ? (
        <FadeInUp delay={0.2}>
          <div className="relative">
            <div
              className="flex gap-5 animate-scroll-left"
              style={{ width: "max-content" }}
            >
              {[...partners, ...partners].map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="flex-shrink-0 w-[200px]"
                >
                  <PartnerCard partner={partner} />
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8 sm:gap-x-6 sm:gap-y-10"
            staggerDelay={0.05}
          >
            {partners.map((partner) => (
              <StaggerItem key={partner.name}>
                <PartnerCard partner={partner} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      )}
    </section>
  );
}
