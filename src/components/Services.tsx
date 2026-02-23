import { Truck, Building2, Stethoscope, PackageCheck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Эмийн сангийн сүлжээ",
    desc: "2009 оноос 6 салбар эмийн сантайгаар Эрүүл Мэндийн даатгалын хөнгөлттэй үнээр өрхийн эмнэлэг болон иргэдэд аюулгүй, чанартай эмээр үйлчилж байна.",
  },
  {
    icon: Truck,
    title: "Эм ханган нийлүүлэх",
    desc: "2017 оноос тусгай зөвшөөрлийн дагуу эм, эмнэлгийн багаж, тоног төхөөрөмж, дагалдах хэрэгсэл ханган нийлүүлэх үйл ажиллагаа явуулж байна.",
  },
  {
    icon: Stethoscope,
    title: "Эм импортлох",
    desc: "ОХУ, БНСВУ-ын нэр хүнд бүхий эмийн үйлдвэрүүдээс 10 гаруй төрлийн эмийг Монгол Улсын эмийн бүртгэлд бүртгүүлэн импортоор оруулж ирж байна.",
  },
  {
    icon: PackageCheck,
    title: "Чанарын стандарт",
    desc: "MNS5260:2015 стандартыг баримтлан, Монгол Улсын эмийн бүртгэлд бүртгэгдсэн, чанарын аюулгүй байдлыг хангасан эмээр үйлчилдэг.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-20 bg-[#fbf9fa]">
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#243342] mb-3">
            Бизнесийн чиглэлүүд
          </h2>
          <p className="text-sm sm:text-base text-[#455A6F] max-w-xl mx-auto">
            Эмийн сангийн сүлжээ, эм ханган нийлүүлэх, импортын үйл
            ажиллагааг хууль тогтоомжийн дагуу чанартай явуулж байна.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 card-hover group cursor-pointer"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#00AC94]/10 group-hover:bg-[#00AC94] flex items-center justify-center mb-4 transition-colors duration-300">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#00AC94] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#243342] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#455A6F] leading-relaxed mb-4">
                {service.desc}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#00AC94] hover:text-[#009882] transition-colors"
              >
                Дэлгэрэнгүй
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
