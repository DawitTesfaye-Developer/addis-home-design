import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-serif font-bold text-amber-900 mb-2">
            {category ? `${category} Furniture` : "All Products"}
          </h1>
          <p className="text-xl text-amber-800 mb-8">
            {category ? `Browse our ${category.toLowerCase()} collection` : "Browse our complete furniture collection"}
          </p>
        </div>
        <ProductGrid filterCategory={category} />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
