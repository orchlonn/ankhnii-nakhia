import { Trophy, Smile, Shield } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function Values() {
  const t = await getTranslations("values");

  const values = [
    {
      icon: Trophy,
      title: t("quality.title"),
      desc: t("quality.desc"),
    },
    {
      icon: Smile,
      title: t("affordability.title"),
      desc: t("affordability.desc"),
    },
    {
      icon: Shield,
      title: t("reliability.title"),
      desc: t("reliability.desc"),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {values.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-7 sm:p-8 border border-gray-100 hover:border-[#00AC94]/20 hover:shadow-lg hover:shadow-[#00AC94]/5 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#00AC94]/10 group-hover:bg-[#00AC94] flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-[#00AC94] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#1a1a2e] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#5a5a72] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
