import { Truck, Building2, Stethoscope, PackageCheck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Эм нийлүүлэлтийн төв",
    desc: "Олон улсын стандартын эм, эмнэлгийн хэрэгслийг импортлон, дотоодын зах зээлд найдвартай нийлүүлнэ.",
  },
  {
    icon: Building2,
    title: "Анхны Нахиа Фарм",
    desc: "Улаанбаатар хотод эмийн сангийн сүлжээ ажиллуулж, иргэдэд шууд үйлчилгээ үзүүлнэ.",
  },
  {
    icon: Stethoscope,
    title: "Эмнэлгийн хэрэгсэл",
    desc: "Орчин үеийн оношилгоо, эмчилгээний тоног төхөөрөмж, хэрэгслийг нийлүүлнэ.",
  },
  {
    icon: PackageCheck,
    title: "Түгээлтийн сүлжээ",
    desc: "Улаанбаатар болон орон нутгийн эмнэлэг, эмийн санд найдвартай хүргэлт хийнэ.",
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
            Эм импортлохоос эхлээд түгээлт хүртэл бүх үе шатанд мэргэжлийн
            найдвартай үйлчилгээ үзүүлнэ.
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
