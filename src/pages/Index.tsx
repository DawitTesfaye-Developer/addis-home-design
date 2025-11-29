import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FloatingFurniture3D } from "@/components/FloatingFurniture3D";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingFurniture3D />
      <div className="relative z-10">
        <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="products">
          <ProductGrid />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      </div>
    </div>
  );
};

export default Index;
