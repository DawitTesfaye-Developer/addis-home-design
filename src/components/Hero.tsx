
import { Button } from "@/components/ui/button";
import { ArrowRight, Sofa, Bed, Armchair } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-amber-900 mb-6 leading-tight">
            Addis
            <span className="block text-amber-700">Furniture</span>
          </h1>
          <p className="text-xl text-amber-800 mb-8 leading-relaxed">
            Crafting timeless pieces that transform your space into a home. 
            Discover our collection of handcrafted furniture made with passion and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Sofa className="h-12 w-12 text-amber-700 mb-4" />
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Living Room</h3>
                <p className="text-amber-700 text-sm">Comfortable sofas and elegant coffee tables</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 mt-8">
                <Bed className="h-12 w-12 text-amber-700 mb-4" />
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Bedroom</h3>
                <p className="text-amber-700 text-sm">Dreamy beds and storage solutions</p>
              </div>
            </div>
            <div className="space-y-6 mt-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Armchair className="h-12 w-12 text-amber-700 mb-4" />
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Dining</h3>
                <p className="text-amber-700 text-sm">Tables and chairs for memorable meals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
