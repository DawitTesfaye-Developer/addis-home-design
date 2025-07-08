
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, ShoppingCart, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <motion.header 
      className="bg-white/95 backdrop-blur-sm border-b-4 border-gradient-to-r from-green-400 via-yellow-400 to-red-400 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      style={{
        borderImage: 'linear-gradient(90deg, #22c55e, #eab308, #ef4444) 1'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 via-yellow-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">አ</span>
              </div>
              <h1 className="text-2xl font-serif font-bold bg-gradient-to-r from-green-700 via-yellow-600 to-red-700 bg-clip-text text-transparent">
                አዲስ Furniture
              </h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", amharic: "ቤት" },
              { name: "Products", amharic: "ምርቶች" },
              { name: "About", amharic: "ስለእኛ" },
              { name: "Contact", amharic: "ያግኙን" }
            ].map((item, index) => (
              <motion.a 
                key={item.name}
                href={`#${item.name.toLowerCase()}`} 
                className="text-green-800 hover:text-red-600 font-medium transition-colors relative group"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="block text-sm">{item.amharic}</span>
                <span className="block text-xs text-green-600">{item.name}</span>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {[Search, Heart, ShoppingCart].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-green-800 hover:text-red-600 hover:bg-yellow-50 relative"
                >
                  <Icon className="h-5 w-5" />
                  {Icon === ShoppingCart && (
                    <motion.span 
                      className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      0
                    </motion.span>
                  )}
                </Button>
              </motion.div>
            ))}
            
            {/* Mobile Menu Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-green-800 hover:text-red-600"
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
              className="md:hidden overflow-hidden bg-gradient-to-r from-green-50 via-yellow-50 to-red-50"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <nav className="py-4">
                {[
                  { name: "Home", amharic: "ቤት" },
                  { name: "Products", amharic: "ምርቶች" },
                  { name: "About", amharic: "ስለእኛ" },
                  { name: "Contact", amharic: "ያግኙን" }
                ].map((item, index) => (
                  <motion.a 
                    key={item.name}
                    href={`#${item.name.toLowerCase()}`}
                    className="block text-green-800 hover:text-red-600 font-medium transition-colors py-3 px-4 border-l-4 border-transparent hover:border-yellow-500"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 10 }}
                  >
                    <span className="block text-base">{item.amharic}</span>
                    <span className="block text-sm text-green-600">{item.name}</span>
                  </motion.a>
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
