
import { Award, Users, Truck, Shield } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Handcrafted with the finest Ethiopian hardwood and traditional techniques"
    },
    {
      icon: Users,
      title: "Expert Craftsmen",
      description: "Over 25 years of furniture making experience rooted in Ethiopian heritage"
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Complimentary delivery and setup service throughout Addis Ababa"
    },
    {
      icon: Shield,
      title: "Warranty",
      description: "5-year warranty on all our handcrafted Ethiopian furniture pieces"
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-yellow-50 to-red-50 relative overflow-hidden">
      {/* Ethiopian Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v30H30zM0 30c0-16.569 13.431-30 30-30v30H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-serif font-bold text-green-800 mb-6"
              variants={itemVariants}
            >
              የኢትዮጵያ ባህላዊ የቤት እቃዎች
              <span className="block text-yellow-700 text-2xl lg:text-3xl mt-2">
                Crafting Ethiopian Dreams Into Reality
              </span>
            </motion.h2>
            <motion.p 
              className="text-lg text-green-700 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              For over two decades, Addis Furniture has been transforming Ethiopian homes 
              with furniture that celebrates our rich cultural heritage. We blend traditional 
              Ethiopian craftsmanship with modern design to create pieces that tell our story.
            </motion.p>
            <motion.p 
              className="text-lg text-green-700 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Using sustainably sourced Ethiopian hardwood and time-honored techniques 
              passed down through generations, every piece carries the spirit of our 
              beautiful nation and the warmth of Ethiopian hospitality.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-green-200 to-yellow-200 p-3 rounded-full border-2 border-red-200"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="h-6 w-6 text-green-800" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-green-800 mb-1">{feature.title}</h3>
                    <p className="text-sm text-green-700">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-gradient-to-r from-green-300 via-yellow-300 to-red-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundImage: `linear-gradient(45deg, rgba(34, 197, 94, 0.1) 0%, rgba(234, 179, 8, 0.1) 50%, rgba(239, 68, 68, 0.1) 100%)`
              }}
            >
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="text-center"
                  variants={statsVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <motion.div 
                    className="text-4xl font-bold text-green-800 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    25+
                  </motion.div>
                  <div className="text-green-700">አመት ልምድ</div>
                  <div className="text-xs text-green-600">Years Experience</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  variants={statsVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div 
                    className="text-4xl font-bold text-yellow-700 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    5K+
                  </motion.div>
                  <div className="text-yellow-700">ደስተኛ ደንበኞች</div>
                  <div className="text-xs text-yellow-600">Happy Customers</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  variants={statsVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div 
                    className="text-4xl font-bold text-red-700 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    100+
                  </motion.div>
                  <div className="text-red-700">የቤት እቃ ዲዛይኖች</div>
                  <div className="text-xs text-red-600">Furniture Designs</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  variants={statsVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div 
                    className="text-4xl font-bold text-green-700 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    24/7
                  </motion.div>
                  <div className="text-green-700">የደንበኛ አገልግሎት</div>
                  <div className="text-xs text-green-600">Customer Support</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
