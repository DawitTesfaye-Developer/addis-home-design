
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-amber-950 text-amber-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Addis Furniture
            </h3>
            <p className="text-amber-200 mb-4">
              Crafting beautiful, quality furniture for Ethiopian homes since 1998. 
              Your comfort and style are our top priorities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Living Room</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Bedroom</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Dining Room</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Office Furniture</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Custom Design</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Delivery</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Assembly</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Maintenance</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Warranty</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-300 mt-1" />
                <span className="text-amber-200">Bole Road, Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-300" />
                <span className="text-amber-200">+251 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-300" />
                <span className="text-amber-200">info@addisfurniture.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-12 pt-8 text-center">
          <p className="text-amber-200">
            © 2024 Addis Furniture. All rights reserved. | Made with ❤️ in Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
