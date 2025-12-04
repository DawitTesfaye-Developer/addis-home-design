import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, ShoppingCart, Heart, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import CartDrawer from "./CartDrawer";
import LanguageToggle from "./LanguageToggle";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (item: string) => {
    const itemLower = item.toLowerCase();
    
    if (itemLower === "home") {
      navigate("/");
    } else if (itemLower === "products") {
      navigate("/products");
    } else if (itemLower === "about" || itemLower === "contact") {
      // If not on home page, navigate to home first
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(itemLower)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(itemLower)?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const menuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.header 
      className="bg-white/95 backdrop-blur-sm border-b-4 border-gradient-to-r from-amber-400 via-orange-400 to-red-400 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        borderImage: 'linear-gradient(90deg, #f59e0b, #f97316, #ef4444) 1'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate("/")}
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">አ</span>
              </div>
              <h1 className="text-2xl font-serif font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-red-800 bg-clip-text text-transparent">
                አዲስ Furniture
              </h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { key: "home", label: "Home" },
              { key: "products", label: "Products" },
              { key: "about", label: "About" },
              { key: "contact", label: "Contact" }
            ].map((item, index) => (
              <motion.button
                key={item.key}
                onClick={() => handleNavClick(item.label)}
                className="text-amber-900 hover:text-red-600 font-medium transition-colors relative group"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="block text-sm">{t(item.key)}</span>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-600 via-orange-500 to-red-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-amber-900 hover:text-red-600 hover:bg-orange-50"
              >
                <Search className="h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-amber-900 hover:text-red-600 hover:bg-orange-50"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </motion.div>

            <CartDrawer>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-amber-900 hover:text-red-600 hover:bg-orange-50 relative"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {getTotalItems() > 0 && (
                    <motion.span 
                      className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {getTotalItems()}
                    </motion.span>
                  )}
                </Button>
              </motion.div>
            </CartDrawer>

            {/* Language Toggle */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
                className="text-amber-900 hover:text-red-600 hover:bg-orange-50"
                title={`Switch to ${language === 'en' ? 'Amharic' : 'English'}`}
              >
                <Languages className="h-5 w-5" />
                <span className="ml-1 text-xs font-medium">
                  {language === 'en' ? 'አማ' : 'EN'}
                </span>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-amber-900 hover:text-red-600"
                onClick={toggleMenu}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMenuOpen ? 'close' : 'open'}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden overflow-hidden bg-gradient-to-r from-amber-50 via-orange-50 to-red-50"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <nav className="py-4">
                {[
                  { key: "home", label: "Home" },
                  { key: "products", label: "Products" },
                  { key: "about", label: "About" },
                  { key: "contact", label: "Contact" }
                ].map((item, index) => (
                  <motion.button
                    key={item.key}
                    onClick={() => handleNavClick(item.label)}
                    className="block w-full text-left text-amber-900 hover:text-red-600 font-medium transition-colors py-3 px-4 border-l-4 border-transparent hover:border-orange-500"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <span className="block text-base">{t(item.key)}</span>
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
