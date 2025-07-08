
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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

  return (
    <section className="py-20 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Ready to transform your space? Visit our showroom or contact us 
            to discuss your furniture needs with our design experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-amber-200 text-amber-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="text-amber-100 font-medium mb-1">{info.details}</p>
                <p className="text-sm text-amber-200">{info.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
                <textarea 
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                ></textarea>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg text-lg font-semibold">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-bold mb-6">Why Choose Addis Furniture?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-300 rounded-full mt-2 mr-3"></div>
                  <span className="text-amber-100">Locally crafted with Ethiopian hardwood</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-300 rounded-full mt-2 mr-3"></div>
                  <span className="text-amber-100">Custom designs to fit your space perfectly</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-300 rounded-full mt-2 mr-3"></div>
                  <span className="text-amber-100">Competitive pricing and flexible payment options</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-300 rounded-full mt-2 mr-3"></div>
                  <span className="text-amber-100">Professional delivery and assembly service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
