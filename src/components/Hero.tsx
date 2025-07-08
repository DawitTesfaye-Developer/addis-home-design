
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
        ease: [0.6, -0.05, 0.01, 0.99]
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
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-100 via-yellow-50 to-red-100 overflow-hidden">
      {/* Ethiopian Flag Pattern Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-green-200/30 to-green-300/30"></div>
        <div className="absolute top-1/3 left-0 w-full h-1/3 bg-gradient-to-r from-yellow-200/30 to-yellow-300/30"></div>
        <div className="absolute top-2/3 left-0 w-full h-1/3 bg-gradient-to-r from-red-200/30 to-red-300/30"></div>
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* Traditional Ethiopian Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M20 20c0-11.046 8.954-20 20-20v20H20zM0 20c0-11.046 8.954-20 20-20v20H0z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        <motion.div 
          className="lg:w-1/2 mb-12 lg:mb-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl lg:text-7xl font-serif font-bold text-green-800 mb-6 leading-tight"
            variants={itemVariants}
          >
            አዲስ
            <span className="block text-yellow-700">Furniture</span>
            <span className="block text-red-700 text-3xl lg:text-4xl font-medium">
              የኢትዮጵያ ባህላዊ የቤት እቃዎች
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-green-800 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Crafting timeless pieces that honor Ethiopian heritage while transforming 
            your space into a home. Discover our collection of handcrafted furniture 
            made with Ethiopian hardwood, passion, and the spirit of our ancestors.
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
                className="bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white px-8 py-3 rounded-full transition-all duration-300 border-2 border-yellow-400"
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
                className="border-2 border-red-600 text-red-700 hover:bg-red-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 bg-white/80 backdrop-blur-sm"
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
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg cursor-pointer border-l-4 border-green-500"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <Sofa className="h-12 w-12 text-green-700 mb-4" />
                <h3 className="text-lg font-semibold text-green-800 mb-2">የመኖሪያ ክፍል</h3>
                <p className="text-green-700 text-sm mb-1">Living Room</p>
                <p className="text-green-600 text-xs">Comfortable sofas and elegant coffee tables</p>
              </motion.div>
              <motion.div 
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg cursor-pointer mt-8 border-l-4 border-yellow-500"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: 0.2 }}
              >
                <Bed className="h-12 w-12 text-yellow-700 mb-4" />
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">የመኝታ ክፍል</h3>
                <p className="text-yellow-700 text-sm mb-1">Bedroom</p>
                <p className="text-yellow-600 text-xs">Dreamy beds and storage solutions</p>
              </motion.div>
            </div>
            <div className="space-y-6 mt-8">
              <motion.div 
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg cursor-pointer border-l-4 border-red-500"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: 0.4 }}
              >
                <Armchair className="h-12 w-12 text-red-700 mb-4" />
                <h3 className="text-lg font-semibold text-red-800 mb-2">የምግብ ክፍል</h3>
                <p className="text-red-700 text-sm mb-1">Dining Room</p>
                <p className="text-red-600 text-xs">Tables and chairs for memorable meals</p>
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
