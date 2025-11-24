import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";
import { ShoppingCart, Heart, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import livingRoomSofa from "@/assets/living-room-sofa.jpg";
import diningRoomTable from "@/assets/dining-room-table.jpg";
import bedroomBed from "@/assets/bedroom-bed.jpg";
import livingRoomArmchair from "@/assets/living-room-armchair.jpg";
import livingRoomCoffeeTable from "@/assets/living-room-coffee-table.jpg";
import bedroomWardrobe from "@/assets/bedroom-wardrobe.jpg";

const products = [
  {
    id: 1,
    name: "Elegant Sofa Set",
    amharic: "ዓላማ ይፋል ዕቃ",
    price: "15,000 ብር",
    priceUSD: "$275",
    image: livingRoomSofa,
    category: "Living Room",
    categoryAmharic: "የመኖሪያ ክፍል",
    description: "Luxurious sofa set crafted from premium Ethiopian hardwood with comfortable cushioning. Perfect for modern Ethiopian homes.",
    descriptionAmharic: "ከፕሪሚየም የኢትዮጵያ ጠንካራ እንጨት የተሰራ ቅንጡ የሶፋ ስብስብ።",
    features: ["Handcrafted solid wood frame", "Premium fabric upholstery", "Comfortable seating for 5-6 people", "Traditional Ethiopian design elements"]
  },
  {
    id: 2,
    name: "Traditional Dining Table",
    amharic: "ባህላዊ የምግብ ጠረጴዛ",
    price: "8,500 ብር",
    priceUSD: "$155",
    image: diningRoomTable,
    category: "Dining",
    categoryAmharic: "የምግብ ክፍል",
    description: "Beautiful dining table perfect for family gatherings and traditional Ethiopian coffee ceremonies.",
    descriptionAmharic: "ለቤተሰብ ስብሰባዎች እና ለባህላዊ የቡና ስነ-ስርዓቶች ተስማሚ የሆነ ቆንጆ የምግብ ጠረጴዛ።",
    features: ["Seats 6-8 people", "Solid wood construction", "Hand-carved details", "Matching chairs available"]
  },
  {
    id: 3,
    name: "Ethiopian Bed Frame",
    amharic: "የኢትዮጵያ አልጋ ፍሬም",
    price: "12,000 ብር",
    priceUSD: "$220",
    image: bedroomBed,
    category: "Bedroom",
    categoryAmharic: "የመኝታ ክፍል",
    description: "Traditional bed frame showcasing Ethiopian craftsmanship with modern comfort standards.",
    descriptionAmharic: "ዘመናዊ የምቾት ደረጃዎችን የሚያሳይ ባህላዊ የአልጋ ፍሬም።",
    features: ["Queen size", "Solid wood construction", "Traditional carved headboard", "Sturdy and durable"]
  },
  {
    id: 4,
    name: "Comfortable Armchair",
    amharic: "ምቹ የእጅ ወንበር",
    price: "4,500 ብር",
    priceUSD: "$82",
    image: livingRoomArmchair,
    category: "Living Room",
    categoryAmharic: "የመኖሪያ ክፍል",
    description: "Cozy armchair perfect for reading corners or living room accent pieces.",
    descriptionAmharic: "ለንባብ ጥግ ወይም ለመኖሪያ ክፍል ተስማሚ ምቹ ወንበር።",
    features: ["Ergonomic design", "Premium cushioning", "Wooden armrests", "Multiple color options"]
  },
  {
    id: 5,
    name: "Coffee Table Set",
    amharic: "የቡና ጠረጴዛ ስብስብ",
    price: "3,200 ብር",
    priceUSD: "$58",
    image: livingRoomCoffeeTable,
    category: "Living Room",
    categoryAmharic: "የመኖሪያ ክፍል",
    description: "Essential coffee table perfect for traditional Ethiopian coffee ceremonies and modern living.",
    descriptionAmharic: "ለባህላዊ የኢትዮጵያ የቡና ስነ-ስርዓቶች እና ዘመናዊ መኖሪያ ተስማሚ።",
    features: ["Solid wood construction", "Storage shelf included", "Easy to clean surface", "Compact design"]
  },
  {
    id: 6,
    name: "Wooden Wardrobe",
    amharic: "የእንጨት ቀሚስ ቤት",
    price: "9,800 ብር",
    priceUSD: "$179",
    image: bedroomWardrobe,
    category: "Bedroom",
    categoryAmharic: "የመኝታ ክፍል",
    description: "Spacious wardrobe with ample storage space and traditional Ethiopian design elements.",
    descriptionAmharic: "ከሰፊ የማከማቻ ቦታ እና ባህላዊ የኢትዮጵያ ዲዛይን ያለው ሰፊ ቀሚስ ቤት።",
    features: ["3-door design", "Multiple shelves and hanging space", "Solid wood construction", "Carved door details"]
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/products")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to Cart!",
      description: `${product.amharic} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="mb-6 border-amber-800 text-amber-900 hover:bg-amber-800 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <span className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                  {product.categoryAmharic}
                </span>
                <h1 className="text-4xl font-serif font-bold text-amber-900 mb-2">
                  {product.amharic}
                </h1>
                <h2 className="text-2xl text-amber-800 mb-6">{product.name}</h2>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-amber-900">{product.price}</span>
                <span className="text-xl text-amber-700">{product.priceUSD}</span>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">Description</h3>
                  <p className="text-amber-800 mb-2">{product.description}</p>
                  <p className="text-amber-800">{product.descriptionAmharic}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        <span className="text-amber-800">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Button 
                  size="lg"
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 text-white rounded-full px-8 py-6 text-lg"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-red-600 text-red-700 hover:bg-red-600 hover:text-white rounded-full px-6"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
