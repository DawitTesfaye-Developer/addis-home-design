import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

  return (
    <footer className="bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 text-white relative overflow-hidden">
      {/* Ethiopian Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v30H30zM0 30c0-16.569 13.431-30 30-30v30H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 via-orange-400 to-red-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">አ</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">
                አዲስ Furniture
              </h3>
            </div>
            <p className="text-amber-200 mb-2">
              የኢትዮጵያ ባህላዊ የቤት እቃዎች
            </p>
            <p className="text-amber-100 mb-4 text-sm">
              Crafting beautiful, quality furniture for Ethiopian homes since 1998. 
              Your comfort, style, and our heritage are our top priorities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-orange-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-orange-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-orange-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-orange-200 mb-4">ፈጣን ግንኙነቶች</h4>
            <p className="text-sm text-orange-100 mb-4">Quick Links</p>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigate("/")} className="text-amber-200 hover:text-white transition-colors block text-left">
                  ቤት <span className="text-xs text-amber-300">Home</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick("Living Room")} className="text-amber-200 hover:text-white transition-colors block text-left">
                  የመኖሪያ ክፍል <span className="text-xs text-amber-300">Living Room</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick("Bedroom")} className="text-amber-200 hover:text-white transition-colors block text-left">
                  የመኝታ ክፍል <span className="text-xs text-amber-300">Bedroom</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick("Dining")} className="text-amber-200 hover:text-white transition-colors block text-left">
                  የምግብ ክፍል <span className="text-xs text-amber-300">Dining Room</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/products")} className="text-amber-200 hover:text-white transition-colors block text-left">
                  የቢሮ እቃዎች <span className="text-xs text-amber-300">Office Furniture</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-orange-200 mb-4">አገልግሎቶች</h4>
            <p className="text-sm text-orange-100 mb-4">Services</p>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("about")} className="text-amber-200 hover:text-white transition-colors block text-left">
                  ልዩ ዲዛይን <span className="text-xs text-amber-300">Custom Design</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-amber-200 hover:text-white transition-colors block text-left">
                  ማስተላለፍ <span className="text-xs text-amber-300">Delivery</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-amber-200 hover:text-white transition-colors block text-left">
                  መሰብሰብ <span className="text-xs text-amber-300">Assembly</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-amber-200 hover:text-white transition-colors block text-left">
                  ጥገና <span className="text-xs text-amber-300">Maintenance</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-amber-200 hover:text-white transition-colors block text-left">
                  ዋስትና <span className="text-xs text-amber-300">Warranty</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-orange-200 mb-4">ያግኙን</h4>
            <p className="text-sm text-orange-100 mb-4">Contact Us</p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-300 mt-1" />
                <div>
                  <span className="text-amber-200 block">ቦሌ መንገድ፣ አዲስ አበባ</span>
                  <span className="text-amber-300 text-sm">Bole Road, Addis Ababa, Ethiopia</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-300" />
                <span className="text-amber-200">+251 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-300" />
                <span className="text-amber-200">info@addisfurniture.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-12 pt-8 text-center">
          <p className="text-amber-200">
            © 2024 አዲስ Furniture. All rights reserved. | በኢትዮጵያ ፍቅር የተሠራ ❤️ Made with ❤️ in Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
