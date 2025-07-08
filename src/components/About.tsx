
import { Award, Users, Truck, Shield } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Handcrafted with the finest materials and attention to detail"
    },
    {
      icon: Users,
      title: "Expert Craftsmen",
      description: "Over 25 years of furniture making experience and expertise"
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Complimentary delivery and setup service within Addis Ababa"
    },
    {
      icon: Shield,
      title: "Warranty",
      description: "5-year warranty on all our furniture pieces"
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
        ease: "easeOut"
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
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-serif font-bold text-amber-900 mb-6"
              variants={itemVariants}
            >
              Crafting Dreams Into Reality
            </motion.h2>
            <motion.p 
              className="text-lg text-amber-700 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              For over two decades, Addis Furniture has been transforming homes across 
              Ethiopia with our carefully crafted pieces. We believe that furniture is 
              more than just functional – it's the foundation of memories, comfort, and style.
            </motion.p>
            <motion.p 
              className="text-lg text-amber-700 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Our master craftsmen combine traditional techniques with modern design 
              sensibilities to create pieces that stand the test of time. Every item 
              in our collection is made with sustainable materials and built to last generations.
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
                    className="bg-amber-200 p-3 rounded-full"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="h-6 w-6 text-amber-800" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-amber-700">{feature.description}</p>
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
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
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
                    className="text-4xl font-bold text-amber-800 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    25+
                  </motion.div>
                  <div className="text-amber-700">Years Experience</div>
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
                    className="text-4xl font-bold text-amber-800 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    5K+
                  </motion.div>
                  <div className="text-amber-700">Happy Customers</div>
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
                    className="text-4xl font-bold text-amber-800 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    100+
                  </motion.div>
                  <div className="text-amber-700">Furniture Designs</div>
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
                    className="text-4xl font-bold text-amber-800 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    24/7
                  </motion.div>
                  <div className="text-amber-700">Customer Support</div>
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
