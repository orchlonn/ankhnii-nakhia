import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import HeroAnimations from "./HeroAnimations";

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
            <HeroAnimations
              title={t("titleHighlight")}
              subtitle={t("experience")}
              buttonText={t("contactButton")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
