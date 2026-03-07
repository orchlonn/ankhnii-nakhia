import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("header");

  return (
    <>
      <Header />
      <main>
        <PageBanner title={t("nav.about")} />
        <About />
      </main>
      <Footer />
    </>
  );
}
