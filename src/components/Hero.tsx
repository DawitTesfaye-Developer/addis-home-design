import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import livingRoomSofa from "@/assets/living-room-sofa.jpg";
import bedroomBed from "@/assets/bedroom-bed.jpg";
import diningRoomTable from "@/assets/dining-room-table.jpg";

const Hero = () => {
  const navigate = useNavigate();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const features = [
    { icon: Sparkles, text: "Handcrafted Quality" },
    { icon: Shield, text: "Lifetime Warranty" },
    { icon: TrendingUp, text: "Investment Pieces" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-warm overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12 min-h-screen justify-center">
        <motion.div 
          className="lg:w-1/2 max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft mb-6 border border-border"
            variants={itemVariants}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-sm font-medium text-foreground">Ethiopian Craftsmanship</span>
          </motion.div>

          <motion.h1 
            className="text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-[1.1]"
            variants={itemVariants}
          >
            Timeless Furniture
            <span className="block text-primary mt-2">for Modern Living</span>
          </motion.h1>

          <motion.p 
            className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl"
            variants={itemVariants}
          >
            Experience the perfect blend of Ethiopian heritage and contemporary design. 
            Each piece is meticulously handcrafted from premium hardwood to transform your space.
          </motion.p>

          {/* Features */}
          <motion.div 
            className="flex flex-wrap gap-6 mb-10"
            variants={itemVariants}
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <feature.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <Button 
              size="lg" 
              onClick={() => navigate("/products")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 rounded-full shadow-medium hover:shadow-large transition-all duration-300 font-medium"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const aboutSection = document.getElementById("about");
                aboutSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-border hover:border-primary hover:bg-primary/5 px-8 h-12 rounded-full transition-all duration-300 font-medium"
            >
              Our Story
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Image Grid */}
        <motion.div 
          className="lg:w-1/2 relative max-w-2xl w-full"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {/* Main large image */}
            <motion.div 
              className="col-span-2 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-large group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={livingRoomSofa} 
                alt="Premium living room furniture"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-serif text-xl font-semibold">Living Room Collection</p>
              </div>
            </motion.div>

            {/* Two smaller images */}
            <motion.div 
              className="relative aspect-square rounded-2xl overflow-hidden shadow-medium group cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate("/products?category=Bedroom")}
            >
              <img 
                src={bedroomBed} 
                alt="Bedroom furniture"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-foreground/0"></div>
              <div className="absolute bottom-3 left-3 text-primary-foreground">
                <p className="font-medium text-sm">Bedroom</p>
              </div>
            </motion.div>

            <motion.div 
              className="relative aspect-square rounded-2xl overflow-hidden shadow-medium group cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate("/products?category=Dining")}
            >
              <img 
                src={diningRoomTable} 
                alt="Dining room furniture"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-foreground/0"></div>
              <div className="absolute bottom-3 left-3 text-primary-foreground">
                <p className="font-medium text-sm">Dining Room</p>
              </div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
