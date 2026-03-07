import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";

export default async function ServicesPage() {
  const t = await getTranslations("services");

  return (
    <>
      <Header />
      <main>
        <PageBanner title={t("title")} />
        <Services />
      </main>
      <Footer />
    </>
  );
}
