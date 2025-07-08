
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Showroom",
      details: "Bole Road, Addis Ababa, Ethiopia",
      subtitle: "Come see our furniture collection in person"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+251 11 123 4567",
      subtitle: "Monday to Saturday, 9AM - 6PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@addisfurniture.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat: 9AM - 6PM",
      subtitle: "Sunday: 10AM - 4PM"
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
    hidden: { scale: 0.9, opacity: 0 },
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
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Ready to transform your space? Visit our showroom or contact us 
            to discuss your furniture needs with our design experts.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <motion.div 
                    className="bg-amber-200 text-amber-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <info.icon className="h-8 w-8" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="text-amber-100 font-medium mb-1">{info.details}</p>
                  <p className="text-sm text-amber-200">{info.subtitle}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-2xl font-serif font-bold mb-6"
                variants={itemVariants}
              >
                Send Us a Message
              </motion.h3>
              <motion.form 
                className="space-y-4"
                variants={containerVariants}
              >
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  variants={itemVariants}
                >
                  <motion.input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
                <motion.input 
                  type="text" 
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  variants={itemVariants}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.textarea 
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  variants={itemVariants}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                ></motion.textarea>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg text-lg font-semibold">
                    Send Message
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>
            
            <motion.div 
              className="flex flex-col justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-2xl font-serif font-bold mb-6"
                variants={itemVariants}
              >
                Why Choose Addis Furniture?
              </motion.h3>
              <motion.ul 
                className="space-y-4"
                variants={containerVariants}
              >
                <motion.li 
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-2 h-2 bg-amber-300 rounded-full mt-2 mr-3"></div>
                  <span className="text-amber-100">Locally crafted with Ethiopian hardwood</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-2 h-2 bg-amber-300 rounded-full mt-2 mr-3"></div>
                  <span className="text-amber-100">Custom designs to fit your space perfectly</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-2 h-2 bg-amber-300 rounded-full mt-2 mr-3"></div>
                  <span className="text-amber-100">Competitive pricing and flexible payment options</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-2 h-2 bg-amber-300 rounded-full mt-2 mr-3"></div>
                  <span className="text-amber-100">Professional delivery and assembly service</span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
