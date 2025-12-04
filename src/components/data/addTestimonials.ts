import { db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";

const data = [
  {
    id: "mock1",
    customer_name: "Sarah Johnson",
    comment:
      "የቤት ዕቃዎቹ የኢትዮጵያ ባህል እና ዘመናዊ ዲዛይን በሚያምር ሁኔታ ያዋህዳሉ። ለፕሮጀክቶቼ ተስማሚ ናቸው!",
    rating: 5,
    customer_role: "Home Owner",
    is_featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "mock2",
    customer_name: "Michael Chen",
    comment:
      "ለደንበኞቼ ሁልጊዜ ይህን ኩባንያ እመክራለሁ። ጥራቱ፣ አገልግሎቱ እና ዋጋው በጣም ጥሩ ነው። የመኝታ ቤት ስብስቡ በተለይ አስደናቂ ነው!",
    rating: 5,
    customer_role: "Interior Designer",
    is_featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "mock3",
    customer_name: "Emma Davis",
    comment:
      "ለቢሮዬ የገዛሁት የመመገቢያ ጠረጴዛ እና ወንበሮች በጣም ዘመናዊ እና ጠንካራ ናቸው። የአገልግሎት ሰጪዎቹም በጣም ትሁት እና ረዳት ናቸው።",
    rating: 4,
    customer_role: "Architect",
    is_featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "mock4",
    customer_name: "David Wilson",
    comment:
      "የደረሰኝ የቤት ዕቃ ጥራት በጣም አስደናቂ ነው። የሶፋው ምቾት እና ዲዛይን ከጠበቅኩት በላይ ነው። ለቤተሰቤ ትክክለኛው ምርጫ ነበር!",
    rating: 5,
    customer_role: "Business Owner",
    is_featured: true,
    created_at: new Date().toISOString(),
  },
];

export const uploadTestimonials = async () => {
  for (const item of data) {
    await setDoc(doc(db, "testimonials", item.id), item);
  }

  console.log("Testimonials uploaded!");
};
