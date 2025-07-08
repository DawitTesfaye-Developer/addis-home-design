
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Elegant Sofa Set",
      price: "$1,299",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      category: "Living Room"
    },
    {
      id: 2,
      name: "Modern Dining Table",
      price: "$899",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      category: "Dining"
    },
    {
      id: 3,
      name: "Luxury Bed Frame",
      price: "$1,599",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
      category: "Bedroom"
    },
    {
      id: 4,
      name: "Comfortable Armchair",
      price: "$599",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      category: "Living Room"
    },
    {
      id: 5,
      name: "Coffee Table Set",
      price: "$449",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      category: "Living Room"
    },
    {
      id: 6,
      name: "Wooden Wardrobe",
      price: "$1,199",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
      category: "Bedroom"
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-amber-900 mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Discover our handpicked selection of premium furniture pieces, 
            each crafted with attention to detail and designed to last.
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
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
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
                        <Heart className="h-4 w-4 text-amber-700" />
                      </Button>
                    </motion.div>
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-amber-600 font-medium">{product.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-800">{product.price}</span>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="bg-amber-700 hover:bg-amber-800 text-white rounded-full px-6">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
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
              className="border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              View All Products
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;
