import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CompanyIntro from "@/components/CompanyIntro";
import Values from "@/components/Values";
import Partners from "@/components/Partners";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <CompanyIntro />
        <Values />
        <Partners variant="scroll" />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
