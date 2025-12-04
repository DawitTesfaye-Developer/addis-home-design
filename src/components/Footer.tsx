import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/products?category=${category}`);
  };

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.footer 
      className="bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Ethiopian Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v30H30zM0 30c0-16.569 13.431-30 30-30v30H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 via-orange-400 to-red-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">አ</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">
                አዲስ Furniture
              </h3>
            </motion.div>
            <p className="text-amber-200 mb-2">
              የኢትዮጵያ ባህላዊ የቤት እቃዎች
            </p>
            <p className="text-amber-100 mb-4 text-sm">
              Crafting beautiful, quality furniture for Ethiopian homes since 1998. 
              Your comfort, style, and our heritage are our top priorities.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="text-orange-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-orange-200 mb-4">ፈጣን ግንኙነቶች</h4>
            <p className="text-sm text-orange-100 mb-4">Quick Links</p>
            <ul className="space-y-2">
              {[
                { label: "ቤት", en: "Home", action: () => navigate("/") },
                { label: "የመኖሪያ ክፍል", en: "Living Room", action: () => handleCategoryClick("Living Room") },
                { label: "የመኝታ ክፍል", en: "Bedroom", action: () => handleCategoryClick("Bedroom") },
                { label: "የምግብ ክፍል", en: "Dining Room", action: () => handleCategoryClick("Dining") },
                { label: "የቢሮ እቃዎች", en: "Office Furniture", action: () => navigate("/products") },
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <button 
                    onClick={item.action} 
                    className="text-amber-200 hover:text-white transition-colors block text-left"
                  >
                    {item.label} <span className="text-xs text-amber-300">{item.en}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-orange-200 mb-4">አገልግሎቶች</h4>
            <p className="text-sm text-orange-100 mb-4">Services</p>
            <ul className="space-y-2">
              {[
                { label: "ልዩ ዲዛይን", en: "Custom Design", section: "about" },
                { label: "ማስተላለፍ", en: "Delivery", section: "contact" },
                { label: "መሰብሰብ", en: "Assembly", section: "contact" },
                { label: "ጥገና", en: "Maintenance", section: "contact" },
                { label: "ዋስትና", en: "Warranty", section: "about" },
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <button 
                    onClick={() => scrollToSection(item.section)} 
                    className="text-amber-200 hover:text-white transition-colors block text-left"
                  >
                    {item.label} <span className="text-xs text-amber-300">{item.en}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-orange-200 mb-4">ያግኙን</h4>
            <p className="text-sm text-orange-100 mb-4">Contact Us</p>
            <div className="space-y-3">
              {[
                { 
                  icon: MapPin, 
                  am: "ቦሌ መንገድ፣ አዲስ አበባ", 
                  en: "Bole Road, Addis Ababa, Ethiopia" 
                },
                { 
                  icon: Phone, 
                  am: "+251 11 123 4567", 
                  en: null 
                },
                { 
                  icon: Mail, 
                  am: "info@addisfurniture.com", 
                  en: null 
                },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="h-5 w-5 text-orange-300 mt-1" />
                  </motion.div>
                  <div>
                    <span className="text-amber-200 block">{item.am}</span>
                    {item.en && <span className="text-amber-300 text-sm">{item.en}</span>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-amber-700 mt-12 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-amber-200">
            © 2024 አዲስ Furniture. All rights reserved. | በኢትዮጵያ ፍቅር የተሠራ ❤️ Made with ❤️ in Ethiopia
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;