import Image from "next/image";
import { FadeInUp } from "./motion";

export default function PageBanner({ title }: { title: string }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/Starting photo except home .jpg"
        alt={title}
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[72px] w-full">
        <div className="pb-32 sm:pb-40 flex flex-col items-center text-center">
          <FadeInUp duration={0.8}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight font-playfair">
              {title}
            </h1>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
