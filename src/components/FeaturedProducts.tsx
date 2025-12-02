import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import livingRoomSofa from "@/assets/living-room-sofa.jpg";
import livingRoomArmchair from "@/assets/living-room-armchair.jpg";
import livingRoomCoffeeTable from "@/assets/living-room-coffee-table.jpg";
import bedroomBed from "@/assets/bedroom-bed.jpg";
import bedroomWardrobe from "@/assets/bedroom-wardrobe.jpg";
import diningRoomTable from "@/assets/dining-room-table.jpg";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  stock_quantity: number;
}

const imageMap: Record<string, string> = {
  '/src/assets/living-room-sofa.jpg': livingRoomSofa,
  '/src/assets/living-room-armchair.jpg': livingRoomArmchair,
  '/src/assets/living-room-coffee-table.jpg': livingRoomCoffeeTable,
  '/src/assets/bedroom-bed.jpg': bedroomBed,
  '/src/assets/bedroom-wardrobe.jpg': bedroomWardrobe,
  '/src/assets/dining-room-table.jpg': diningRoomTable,
};

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("is_featured", true)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to load featured products");
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    };

    fetchFeaturedProducts();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, products.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, products.length - 2)) % Math.max(1, products.length - 2));
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: parseInt(product.id) || 0,
      name: product.name,
      amharic: product.name,
      price: `ETB ${product.price.toLocaleString()}`,
      priceUSD: `$${(product.price / 120).toFixed(2)}`,
      image: imageMap[product.image_url] || product.image_url,
      category: product.category,
      categoryAmharic: product.category,
    });
  };

  if (loading) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-pulse text-muted-foreground">Loading featured products...</div>
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return null;
  }

  const visibleProducts = products.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-2">
            Featured Collection
          </h2>
          <p className="text-xl text-primary/80 font-medium mb-4">ተመራጭ ስብስብ</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium furniture pieces
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mt-1">
            የምርጥ የቤት ዕቃ ምርጫዎቻችንን ያግኙ
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          {products.length > 3 && (
            <>
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full shadow-medium bg-card hover:bg-accent"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full shadow-medium bg-card hover:bg-accent"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visibleProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden group cursor-pointer hover:shadow-large transition-all duration-300 border-border">
                    <div
                      className="relative aspect-[4/3] overflow-hidden"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      <img
                        src={imageMap[product.image_url] || product.image_url}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">
                          ETB {product.price.toLocaleString()}
                        </span>
                        <Button
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product);
                            toast.success(`${product.name} ወደ ጋሪ ታክሏል / Added to cart`);
                          }}
                          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add / ጨምር
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/products")}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8"
          >
            View All Products / ሁሉንም ምርቶች ይመልከቱ
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
