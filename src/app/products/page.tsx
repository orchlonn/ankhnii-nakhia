import Header from "@/components/Header";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <Products />
      </main>
      <Footer />
    </>
  );
}
