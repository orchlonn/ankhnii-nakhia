import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { FadeInUp } from "@/components/motion";
import { getTranslations } from "next-intl/server";

export default async function ChildrenHospitalPage() {
  const t = await getTranslations("services");

  return (
    <>
      <Header />
      <main>
        <PageBanner title={t("childrenHospital.title")} />
        <section className="bg-[#fbf9fa]">
          <div className="max-w-[1088px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
            <FadeInUp>
              <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-[#1a1a2e] mb-14 text-center font-roboto">
                &ldquo;Аз&rdquo; Хүүхдийн Эмнэлэг
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="space-y-5 text-base sm:text-lg text-black leading-relaxed text-justify">
                <p>&ldquo;Аз&rdquo; Хүүхдийн Эмнэлэг нь 2017 оноос үйл ажиллагаагаа эхлүүлж, хүүхдийн эрүүл энхийг хамгаалах үйлсэд бодитой хувь нэмэр оруулах зорилгоор тасралтгүй ажиллаж байна. Эмнэлэг нь хүүхдийн эрүүл мэндийн төрөл бүрийн шаардлагад нийцсэн чанартай, аюулгүй, хүртээмжтэй үйлчилгээ үзүүлэхэд анхаарч, эмч, сувилагчийн мэргэжлийн өндөр ур чадвар, орчин үеийн тоног төхөөрөмж, шинэ технологийг нэвтрүүлэн ажилладаг.</p>
                <p>Мөн эмнэлэг нь зөвхөн эмчилгээ үйлчилгээ гэлтгүй, хүүхэд, эцэг эхчүүдэд урьдчилан сэргийлэх мэдлэг, зөвлөгөө, мэдээлэл хүргэх, эрүүл амьдралын хэвшлийг төлөвшүүлэхэд чиглэсэн олон арга хэмжээг зохион байгуулдаг.</p>
                <p>Ийнхүү &ldquo;Аз&rdquo; хүүхдийн эмнэлэг нь хүүхдийн эрүүл мэндийг хамгаалах, тэдний хөгжлийг дэмжих чиглэлээр нийгэмд үнэтэй хувь нэмэр оруулж байна.</p>
              </div>
            </FadeInUp>

            {/* Auto-scrolling Images */}
            <FadeInUp delay={0.4}>
              <div className="mt-14 overflow-hidden">
                <div className="flex gap-5 animate-scroll-left" style={{ width: "max-content" }}>
                  {[1, 2, 3, 1, 2, 3].map((num, i) => (
                    <div key={i} className="flex-shrink-0 w-[350px] sm:w-[400px]">
                      <div className="aspect-[4/3] rounded-2xl bg-gray-100 border border-gray-200 overflow-hidden relative group">
                        <Image src={`/Our services/hospital/Children's hospital-${num}.jpg`} alt={`Children Hospital ${num}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
