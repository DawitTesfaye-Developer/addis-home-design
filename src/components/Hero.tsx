
import { Button } from "@/components/ui/button";
import { ArrowRight, Sofa, Bed, Armchair } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        <motion.div 
          className="lg:w-1/2 mb-12 lg:mb-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl lg:text-7xl font-serif font-bold text-amber-900 mb-6 leading-tight"
            variants={itemVariants}
          >
            Addis
            <span className="block text-amber-700">Furniture</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-amber-800 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Crafting timeless pieces that transform your space into a home. 
            Discover our collection of handcrafted furniture made with passion and precision.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-full transition-all duration-300"
              >
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <Sofa className="h-12 w-12 text-amber-700 mb-4" />
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Living Room</h3>
                <p className="text-amber-700 text-sm">Comfortable sofas and elegant coffee tables</p>
              </motion.div>
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg cursor-pointer mt-8"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: 0.2 }}
              >
                <Bed className="h-12 w-12 text-amber-700 mb-4" />
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Bedroom</h3>
                <p className="text-amber-700 text-sm">Dreamy beds and storage solutions</p>
              </motion.div>
            </div>
            <div className="space-y-6 mt-8">
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: 0.4 }}
              >
                <Armchair className="h-12 w-12 text-amber-700 mb-4" />
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Dining</h3>
                <p className="text-amber-700 text-sm">Tables and chairs for memorable meals</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
