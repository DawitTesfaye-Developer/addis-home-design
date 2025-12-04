import { useEffect, useState } from "react";
import { db } from "../../firebase.js";
import { collection, query, where, orderBy, limit, getDocs } from "firebase/firestore";
import { Card } from "../ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

interface Testimonial {
  id: string;
  customer_name: string;
  customer_role: string | null;
  rating: number;
  comment: string;
  avatar_url: string | null;
  is_featured?: boolean;
  created_at?: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        console.log("Fetching testimonials...");
        const testimonialsRef = collection(db, "testimonials");
        let q = query(
          testimonialsRef,
          where("is_featured", "==", true),
          orderBy("created_at", "desc"),
          limit(4)
        );
        let querySnapshot = await getDocs(q);
        console.log("Featured testimonials query snapshot:", querySnapshot);
        let data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Testimonial[];

        // If no featured testimonials, fetch recent ones
        if (data.length === 0) {
          console.log("No featured testimonials, fetching recent ones...");
          q = query(
            testimonialsRef,
            orderBy("created_at", "desc"),
            limit(4)
          );
          querySnapshot = await getDocs(q);
          data = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as Testimonial[];
        }

        console.log("Fetched testimonials:", data);

        // If still no testimonials, use mock data for development
        if (data.length === 0) {
          console.log("Using mock testimonials for development");
          data = [
            {
              id: "mock1",
              customer_name: "Sarah Johnson",
              comment: "የቤት ዕቃዎቹ የኢትዮጵያ ባህል እና ዘመናዊ ዲዛይን በሚያምር ሁኔታ ያዋህዳሉ። ለፕሮጀክቶቼ ተስማሚ ናቸው!",
              rating: 5,
              customer_role: "Home Owner",
              avatar_url: null,
              is_featured: true,
              created_at: new Date().toISOString()
            },
            {
              id: "mock2",
              customer_name: "Michael Chen",
              comment: "ለደንበኞቼ ሁልጊዜ ይህን ኩባንያ እመክራለሁ። ጥራቱ፣ አገልግሎቱ እና ዋጋው በጣም ጥሩ ነው። የመኝታ ቤት ስብስቡ በተለይ አስደናቂ ነው!",
              rating: 5,
              customer_role: "Interior Designer",
              avatar_url: null,
              is_featured: true,
              created_at: new Date().toISOString()
            },
            {
              id: "mock3",
              customer_name: "Emma Davis",
              comment: "ለቢሮዬ የገዛሁት የመመገቢያ ጠረጴዛ እና ወንበሮች በጣም ዘመናዊ እና ጠንካራ ናቸው። የአገልግሎት ሰጪዎቹም በጣም ትሁት እና ረዳት ናቸው።",
              rating: 4,
              customer_role: "Architect",
              avatar_url: null,
              is_featured: true,
              created_at: new Date().toISOString()
            },
            {
              id: "mock4",
              customer_name: "David Wilson",
              comment: "የደረሰኝ የቤት ዕቃ ጥራት በጣም አስደናቂ ነው። የሶፋው ምቾት እና ዲዛይን ከጠበቅኩት በላይ ነው። ለቤተሰቤ ትክክለኛው ምርጫ ነበር!",
              rating: 5,
              customer_role: "Business Owner",
              avatar_url: null,
              is_featured: true,
              created_at: new Date().toISOString()
            }
          ];
        }

        setTestimonials(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        // Fallback to mock data on error
        const mockData = [
          {
            id: "mock1",
            customer_name: "Sarah Johnson",
            comment: "Absolutely love the quality and design of the furniture. The delivery was smooth and the customer service was excellent!",
            rating: 5,
            customer_role: "Home Owner",
            avatar_url: null,
            is_featured: true,
            created_at: new Date().toISOString()
          },
          {
            id: "mock2",
            customer_name: "Michael Chen",
            comment: "The sofa we purchased exceeded our expectations. Comfortable, stylish, and built to last. Highly recommend!",
            rating: 5,
            customer_role: "Interior Designer",
            avatar_url: null,
            is_featured: true,
            created_at: new Date().toISOString()
          }
        ];
        setTestimonials(mockData);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center min-h-[300px]">
            <div className="animate-pulse text-muted-foreground">Loading testimonials...</div>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            {t("whatOurCustomersSay")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real customers who transformed their spaces
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 lg:p-8 hover:shadow-large transition-shadow duration-300 bg-card border-border relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-16 w-16 text-primary" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating
                          ? "fill-accent text-accent"
                          : "fill-muted text-muted"
                        }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-foreground text-base lg:text-lg mb-6 leading-relaxed italic relative z-10">
                  "{testimonial.comment}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-lg">
                    {testimonial.customer_name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.customer_name}
                    </p>
                    {testimonial.customer_role && (
                      <p className="text-sm text-muted-foreground">
                        {testimonial.customer_role}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
