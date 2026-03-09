import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FadeInUp, ScaleIn } from "./motion";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/Home/Starting photo.png"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[72px] w-full">
        <div className="py-20 sm:py-28 md:py-36 flex flex-col items-center text-center">
          <div className="max-w-4xl">
            <FadeInUp duration={0.8}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight whitespace-nowrap font-playfair">
                {t("titleHighlight")}
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2} duration={0.8}>
              <p className="text-lg sm:text-xl text-white/80 mt-4 font-bold italic font-playfair">
                {t("experience")}
              </p>
            </FadeInUp>

            <FadeInUp delay={0.4} duration={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 mt-10 sm:mt-12 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[15px] font-semibold text-white bg-[#00AC94] hover:bg-[#009882] hover:scale-105 rounded-full transition-all duration-300 shadow-lg"
                >
                  {t("contactButton")}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
