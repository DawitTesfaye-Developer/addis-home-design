
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

const ProductGrid = () => {
  const { toast } = useToast();
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
    // Show success message
    toast({
      title: "Added to Cart!",
      description: `${product.amharic} has been added to your cart.`,
      duration: 3000,
    });
  };
  const products = [
    {
      id: 1,
      name: "Elegant Sofa Set",
      amharic: "ዓላማ ይፋል ዕቃ",
      price: "15,000 ብር",
      priceUSD: "$275",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      category: "Living Room",
      categoryAmharic: "የመኖሪያ ክፍል"
    },
    {
      id: 2,
      name: "Traditional Dining Table",
      amharic: "ባህላዊ የምግብ ጠረጴዛ",
      price: "8,500 ብር",
      priceUSD: "$155",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      category: "Dining",
      categoryAmharic: "የምግብ ክፍል"
    },
    {
      id: 3,
      name: "Ethiopian Bed Frame",
      amharic: "የኢትዮጵያ አልጋ ፍሬም",
      price: "12,000 ብር",
      priceUSD: "$220",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
      category: "Bedroom",
      categoryAmharic: "የመኝታ ክፍል"
    },
    {
      id: 4,
      name: "Comfortable Armchair",
      amharic: "ምቹ የእጅ ወንበር",
      price: "4,500 ብር",
      priceUSD: "$82",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      category: "Living Room",
      categoryAmharic: "የመኖሪያ ክፍል"
    },
    {
      id: 5,
      name: "Coffee Table Set",
      amharic: "የቡና ጠረጴዛ ስብስብ",
      price: "3,200 ብር",
      priceUSD: "$58",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      category: "Living Room",
      categoryAmharic: "የመኖሪያ ክፍል"
    },
    {
      id: 6,
      name: "Wooden Wardrobe",
      amharic: "የእንጨት ቀሚስ ቤት",
      price: "9,800 ብር",
      priceUSD: "$179",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
      category: "Bedroom",
      categoryAmharic: "የመኝታ ክፍል"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Ethiopian Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046 8.954-20 20-20v20H20zM0 20c0-11.046 8.954-20 20-20v20H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-amber-900 mb-2">
            የተመረጡ ምርቶች
          </h2>
          <p className="text-2xl lg:text-3xl text-orange-800 mb-4">Featured Collection</p>
          <p className="text-xl text-amber-800 max-w-2xl mx-auto">
            Discover our handpicked selection of premium Ethiopian furniture pieces, 
            each crafted with traditional techniques and designed to honor our heritage.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white/90 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {product.categoryAmharic}
                    </span>
                  </div>
                  <motion.div 
                    className="absolute top-4 right-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white border-0 rounded-full p-2">
                        <Heart className="h-4 w-4 text-red-600" />
                      </Button>
                    </motion.div>
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-amber-700 font-medium">{product.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-1">{product.amharic}</h3>
                  <p className="text-md text-amber-800 mb-3">{product.name}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-amber-900 block">{product.price}</span>
                      <span className="text-sm text-amber-700">{product.priceUSD}</span>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 text-white rounded-full px-6 border-2 border-red-200"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        <span className="hidden sm:inline">Add to Cart</span>
                        <span className="sm:hidden">Add</span>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-amber-800 text-amber-900 hover:bg-amber-800 hover:text-white px-8 py-3 rounded-full transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <span className="mr-2">ሁሉንም ምርቶች ይመልከቱ</span>
              <span className="text-sm">View All Products</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;
