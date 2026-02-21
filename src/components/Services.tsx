import {
  Truck,
  FlaskConical,
  Stethoscope,
  PackageCheck,
  FileCheck,
  Handshake,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Эм импортлох",
    desc: "Дэлхийн 15+ орноос GMP стандартад нийцсэн эмийг шууд импортолж нийлүүлнэ.",
    color: "bg-teal-50 text-teal-600",
    iconBg: "bg-teal-100",
  },
  {
    icon: FlaskConical,
    title: "Чанарын хяналт",
    desc: "Бүтээгдэхүүн бүрийг олон улсын лабораторийн шинжилгээгээр баталгаажуулна.",
    color: "bg-blue-50 text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    icon: Stethoscope,
    title: "Эмнэлгийн хэрэгсэл",
    desc: "Орчин үеийн эмнэлгийн тоног төхөөрөмж, хэрэгслийг нийлүүлнэ.",
    color: "bg-emerald-50 text-emerald-600",
    iconBg: "bg-emerald-100",
  },
  {
    icon: PackageCheck,
    title: "Түгээлтийн сүлжээ",
    desc: "Улаанбаатар болон орон нутгийн эмийн санд найдвартай хүргэлт хийнэ.",
    color: "bg-purple-50 text-purple-600",
    iconBg: "bg-purple-100",
  },
  {
    icon: FileCheck,
    title: "Бүртгэл, зөвшөөрөл",
    desc: "Эмийн бүртгэл, зөвшөөрлийн бүх үе шатанд мэргэжлийн дэмжлэг үзүүлнэ.",
    color: "bg-amber-50 text-amber-600",
    iconBg: "bg-amber-100",
  },
  {
    icon: Handshake,
    title: "Хамтын ажиллагаа",
    desc: "Эмнэлэг, эмийн сантай урт хугацааны түншлэлийн гэрээ байгуулна.",
    color: "bg-rose-50 text-rose-600",
    iconBg: "bg-rose-100",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-4 sm:mb-6">
            Үйлчилгээ
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Бидний үзүүлдэг{" "}
            <span className="text-teal-600">үйлчилгээнүүд</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed px-2 sm:px-0">
            Эм импортлохоос эхлээд түгээлт хүртэл бүх үе шатанд мэргэжлийн
            найдвартай үйлчилгээ үзүүлнэ.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform`}
              >
                <service.icon
                  className={`w-6 h-6 sm:w-7 sm:h-7 ${service.color.split(" ")[1]}`}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
