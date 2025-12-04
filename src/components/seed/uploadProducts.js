import { db } from "@/integrations/firebase/client";
import { collection, setDoc, doc } from "firebase/firestore";

export async function seedProducts(products) {
  const colRef = collection(db, "products");

  for (const p of products) {
    const ref = doc(colRef);
    await setDoc(ref, {
      ...p,
      is_featured: true,
      created_at: new Date().toISOString(),
    });
  }

  console.log("Products uploaded!");
}
