
import { Award, Users, Truck, Shield } from "lucide-react";

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

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-amber-900 mb-6">
              Crafting Dreams Into Reality
            </h2>
            <p className="text-lg text-amber-700 mb-8 leading-relaxed">
              For over two decades, Addis Furniture has been transforming homes across 
              Ethiopia with our carefully crafted pieces. We believe that furniture is 
              more than just functional – it's the foundation of memories, comfort, and style.
            </p>
            <p className="text-lg text-amber-700 mb-8 leading-relaxed">
              Our master craftsmen combine traditional techniques with modern design 
              sensibilities to create pieces that stand the test of time. Every item 
              in our collection is made with sustainable materials and built to last generations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-amber-200 p-3 rounded-full">
                    <feature.icon className="h-6 w-6 text-amber-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-amber-700">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-800 mb-2">25+</div>
                  <div className="text-amber-700">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-800 mb-2">5K+</div>
                  <div className="text-amber-700">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-800 mb-2">100+</div>
                  <div className="text-amber-700">Furniture Designs</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-800 mb-2">24/7</div>
                  <div className="text-amber-700">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
