import { ShoppingCart, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#fbf9fa] pt-[72px]"
    >
      {/* Decorative blurred circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blur-circle w-[500px] h-[500px] bg-[#AAE3DB]/30 -top-40 -right-20 absolute" />
        <div className="blur-circle w-[400px] h-[400px] bg-[#AAE3DB]/20 bottom-0 -left-40 absolute" />
        <div className="blur-circle w-[300px] h-[300px] bg-[#00AC94]/10 top-1/3 left-1/3 absolute" />
      </div>

      <div className="relative max-w-[1088px] mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-[#243342] leading-tight animate-fade-in-up">
            Дэлхийн түвшний эм, эрүүл мэндийн
            <br className="hidden sm:block" />
            бүтээгдэхүүнийг{" "}
            <span className="text-[#00AC94]">таны гарт хүргэнэ.</span>
          </h1>

          <p className="mt-5 sm:mt-6 text-[#455A6F] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Анхны Нахиа ХХК нь 2007 оноос эм, гадаад худалдааны чиглэлээр үйл
            ажиллагаа явуулж, 6 салбар эмийн сан, эм ханган нийлүүлэх
            үйлчилгээгээр өрхийн эмнэлэг болон ард иргэддээ аюулгүй, чанартай
            эмээр үйлчилж байна.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 sm:mt-10 justify-center animate-fade-in-up animation-delay-400">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 text-sm font-medium text-[#243342] border border-gray-300 rounded-xl hover:border-[#00AC94] hover:text-[#00AC94] transition-all"
            >
              <ShoppingCart className="w-4 h-4" />
              Захиалга өгөх
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 text-sm font-medium text-white bg-[#00AC94] hover:bg-[#009882] rounded-xl transition-all"
            >
              Холбоо барих
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
