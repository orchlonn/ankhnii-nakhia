import { Truck, Building2, Stethoscope, ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function Services() {
  const t = await getTranslations("services");

  const services = [
    {
      id: "distribution",
      icon: Truck,
      title: t("distributionCenter.title"),
      desc: t("distributionCenter.desc"),
    },
    {
      id: "pharmacy",
      icon: Building2,
      title: t("pharmacy.title"),
      desc: t("pharmacy.desc"),
    },
    {
      id: "children-hospital",
      icon: Stethoscope,
      title: t("childrenHospital.title"),
      desc: t("childrenHospital.desc"),
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service) => (
            <div
              id={service.id}
              key={service.title}
              className="scroll-mt-[72px] group bg-[#f8f9fc] hover:bg-white rounded-2xl p-7 sm:p-8 border border-transparent hover:border-gray-100 hover:shadow-lg hover:shadow-black/[0.04] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#00AC94]/10 group-hover:bg-[#00AC94] flex items-center justify-center transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-[#00AC94] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="w-9 h-9 rounded-full border border-gray-200 group-hover:border-[#00AC94] group-hover:bg-[#00AC94]/10 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <ArrowRight className="w-4 h-4 text-[#00AC94]" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#5a5a72] leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
