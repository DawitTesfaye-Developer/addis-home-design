import { db } from "@/integrations/firebase/client";
import { collection, setDoc, doc } from "firebase/firestore";
import { testimonialsSeed } from "../data/testimonials-seed";

export async function uploadTestimonials() {
  try {
    for (const t of testimonialsSeed) {
      const ref = doc(collection(db, "testimonials"), t.id);
      await setDoc(ref, t, { merge: true });
    }
    console.log("Testimonials uploaded successfully!");
  } catch (error) {
    console.error("Error uploading testimonials:", error);
  }
}
