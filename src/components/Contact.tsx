
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Showroom",
      amharic: "የምርት ማሳያ ቦታችንን ይጎብኙ",
      details: "Bole Road, Addis Ababa, Ethiopia",
      subtitle: "Come see our Ethiopian furniture collection in person"
    },
    {
      icon: Phone,
      title: "Call Us",
      amharic: "ይደውሉልን",
      details: "+251 11 123 4567",
      subtitle: "Monday to Saturday, 9AM - 6PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      amharic: "ኢሜል ላኩልን",
      details: "info@addisfurniture.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: Clock,
      title: "Business Hours",
      amharic: "የስራ ሰዓት",
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
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 text-white relative overflow-hidden">
      {/* Ethiopian Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M40 40c0-22.091 17.909-40 40-40v40H40zM0 40c0-22.091 17.909-40 40-40v40H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            ያግኙን
          </h2>
          <p className="text-2xl lg:text-3xl text-orange-200 mb-2">Get In Touch</p>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Ready to transform your space with authentic Ethiopian furniture? 
            Visit our showroom or contact us to discuss your needs with our design experts.
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
                    className="bg-gradient-to-r from-amber-200 via-orange-200 to-red-200 text-amber-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <info.icon className="h-8 w-8" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-1 text-orange-200">{info.amharic}</h3>
                  <h4 className="text-sm font-medium mb-2 text-white">{info.title}</h4>
                  <p className="text-amber-100 font-medium mb-1">{info.details}</p>
                  <p className="text-sm text-amber-200">{info.subtitle}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto border-2 border-white/20"
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
                className="text-2xl font-serif font-bold mb-2 text-orange-200"
                variants={itemVariants}
              >
                መልእክት ይላኩልን
              </motion.h3>
              <motion.p 
                className="text-lg mb-6 text-white"
                variants={itemVariants}
              >
                Send Us a Message
              </motion.p>
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
                    placeholder="Your Name / ስምዎ"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.input 
                    type="email" 
                    placeholder="Your Email / ኢሜልዎ"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
                <motion.input 
                  type="text" 
                  placeholder="Subject / ርዕስ"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  variants={itemVariants}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.textarea 
                  placeholder="Your Message / መልእክትዎ"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  variants={itemVariants}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                ></motion.textarea>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 rounded-lg text-lg font-semibold border-2 border-white/20">
                    Send Message / መልእክት ላክ
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
                className="text-2xl font-serif font-bold mb-2 text-orange-200"
                variants={itemVariants}
              >
                ለምን አዲስ Furniture?
              </motion.h3>
              <motion.p 
                className="text-lg mb-6 text-white"
                variants={itemVariants}
              >
                Why Choose Addis Furniture?
              </motion.p>
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
                  <div className="w-2 h-2 bg-orange-300 rounded-full mt-2 mr-3"></div>
                  <div>
                    <span className="text-amber-100 block">በኢትዮጵያ ጠንካራ እንጨት የተሠሩ</span>
                    <span className="text-amber-200 text-sm">Locally crafted with Ethiopian hardwood</span>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-2 h-2 bg-orange-300 rounded-full mt-2 mr-3"></div>
                  <div>
                    <span className="text-amber-100 block">ለእርስዎ የተነደፉ ልዩ ዲዛይኖች</span>
                    <span className="text-amber-200 text-sm">Custom designs to fit your space perfectly</span>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-2 h-2 bg-orange-300 rounded-full mt-2 mr-3"></div>
                  <div>
                    <span className="text-amber-100 block">ተመጣጣኝ ዋጋ እና የመክፈያ አማራጮች</span>
                    <span className="text-amber-200 text-sm">Competitive pricing and flexible payment options</span>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-2 h-2 bg-orange-300 rounded-full mt-2 mr-3"></div>
                  <div>
                    <span className="text-amber-100 block">ሙያዊ የማስተላለፍ እና መሰብሰብ አገልግሎት</span>
                    <span className="text-amber-200 text-sm">Professional delivery and assembly service</span>
                  </div>
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
