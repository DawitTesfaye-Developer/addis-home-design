import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import ProductGrid from "@/components/ProductGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FloatingFurniture3D } from "@/components/FloatingFurniture3D";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <FloatingFurniture3D />
      <div className="relative z-10">
        <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="featured">
          <FeaturedProducts />
        </section>
        <section id="testimonials">
          <Testimonials />
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
