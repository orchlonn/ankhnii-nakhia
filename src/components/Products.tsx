import { Building2, MapPin } from "lucide-react";

const branches = [
  {
    name: "Анхны нахиа эмийн сан",
    desc: "Үндсэн эмийн сан, 2009 оноос үйл ажиллагаа явуулж байна",
    type: "pharmacy",
  },
  {
    name: "Азын нахиа-1",
    desc: "Салбар нэгж",
    type: "branch",
  },
  {
    name: "Азын нахиа-2",
    desc: "Салбар нэгж",
    type: "branch",
  },
  {
    name: "Шинэ нахиа",
    desc: "Салбар нэгж",
    type: "branch",
  },
  {
    name: "Аз хүүхдийн эмнэлэг",
    desc: "Хүүхдийн эмнэлгийн салбар",
    type: "branch",
  },
  {
    name: "Эм ханган нийлүүлэх нэгж",
    desc: "Хан-Уул дүүрэг, 2017 оноос үйл ажиллагаа явуулж байна",
    type: "supply",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-12 sm:py-20 bg-[#fbf9fa]">
      <div className="max-w-[1088px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#243342] mb-3">
            Салбар сүлжээ
          </h2>
          <p className="text-sm sm:text-base text-[#455A6F] max-w-xl mx-auto">
            6 салбар эмийн сан, эм ханган нийлүүлэх нэгжтэйгээр иргэдэд
            үйлчилж байна
          </p>
        </div>

        {/* Branch Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="flex items-start gap-4 bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 hover:border-[#00AC94]/30 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00AC94]/10 flex items-center justify-center shrink-0">
                {branch.type === "supply" ? (
                  <MapPin className="w-5 h-5 text-[#00AC94]" />
                ) : (
                  <Building2 className="w-5 h-5 text-[#00AC94]" />
                )}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-[#243342] mb-1">
                  {branch.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#455A6F]">
                  {branch.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
