import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#00AC94] via-[#008F7A] to-[#005C4F]"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-white/5" />
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full bg-white/5" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-white/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[72px] w-full">
        <div className="py-20 sm:py-28 md:py-36 flex flex-col items-center text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight font-[var(--font-playfair)] max-w-4xl">
              {t("titleHighlight")}
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 sm:mt-12 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[15px] font-semibold text-[#00AC94] bg-white hover:bg-gray-100 rounded-full transition-all shadow-lg"
              >
                {t("contactButton")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
