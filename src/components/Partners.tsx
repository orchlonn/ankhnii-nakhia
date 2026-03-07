import { getTranslations } from "next-intl/server";

const partners = [
  { name: "Truong Tho", logo: "/images/partners/truong-tho.png" },
  { name: "Shin Poong", logo: "/images/partners/shin-poong.png" },
  { name: "NizhPharm", logo: "/images/partners/nizhpharm.png" },
  { name: "DK Pharma", logo: "/images/partners/dk-pharma.png" },
  { name: "Dai Tin", logo: "/images/partners/dai-tin.png" },
  { name: "Hadiphar", logo: "/images/partners/hadiphar.png" },
  { name: "Eloge", logo: "/images/partners/eloge.png" },
  { name: "Takaraj", logo: "/images/partners/takaraj.png" },
  { name: "Alpha Pharma", logo: "/images/partners/alpha-pharma.png" },
  { name: "Beatexpharm", logo: "/images/partners/beatexpharm.png" },
  { name: "Vacopharm", logo: "/images/partners/vacopharm.png" },
  { name: "Diamond France", logo: "/images/partners/diamond-france.png" },
  { name: "Нижфарм", logo: "/images/partners/nizhfarm.png" },
  { name: "Best-pharm", logo: "/images/partners/best-pharm.png" },
  { name: "Delta Medical", logo: "/images/partners/delta-medical.png" },
  { name: "Hanlim Pharm", logo: "/images/partners/hanlim-pharm.png" },
  { name: "Arterium", logo: "/images/partners/arterium.png" },
  { name: "Feixia Medical", logo: "/images/partners/feixia-medical.png" },
];

function PartnerCard({ partner }: { partner: { name: string; logo: string } }) {
  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-4 overflow-hidden">
        <img
          src={partner.logo}
          alt={partner.name}
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
        />
      </div>
      <span className="text-sm font-semibold text-[#455A6F]">
        {partner.name}
      </span>
    </div>
  );
}

export default async function Partners({ variant = "grid" }: { variant?: "grid" | "scroll" }) {
  const t = await getTranslations("partners");

  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-3">
            {t("title")}
          </h2>
        </div>
        <p className="text-center text-[#5a5a72] text-base sm:text-lg italic mb-12">
          {t("subtitle")}
        </p>
      </div>

      {variant === "scroll" ? (
        <div className="relative">
          <div className="flex gap-5 animate-scroll-left" style={{ width: "max-content" }}>
            {[...partners, ...partners].map((partner, i) => (
              <div key={`${partner.name}-${i}`} className="flex-shrink-0 w-[200px]">
                <PartnerCard partner={partner} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8 sm:gap-x-6 sm:gap-y-10">
            {partners.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
