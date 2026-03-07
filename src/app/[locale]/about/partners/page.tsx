import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";

export default async function PartnersPage() {
  const t = await getTranslations("partners");

  return (
    <>
      <Header />
      <main>
        <PageBanner title={t("title")} />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
