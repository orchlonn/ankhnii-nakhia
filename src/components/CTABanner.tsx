import { ArrowRight } from "lucide-react";
import SpotlightBanner from "./SpotlightBanner";

export default function CTABanner() {
  return (
    <section className="bg-white">
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <SpotlightBanner>
          <div className="relative">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              Бидэнтэй хамтран ажиллах
            </h3>
            <p className="text-sm text-white/70 max-w-md">
              Эм, эмнэлгийн хэрэгслийн захиалга өгөх эсвэл хамтын ажиллагааны
              талаар мэдээлэл авахыг хүсвэл бидэнтэй холбогдоорой.
            </p>
          </div>
          <a
            href="/contact"
            className="relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-[#008F7A] bg-white hover:bg-gray-50 rounded-xl transition-all shrink-0"
          >
            Холбоо барих
            <ArrowRight className="w-4 h-4" />
          </a>
        </SpotlightBanner>
      </div>
    </section>
  );
}
