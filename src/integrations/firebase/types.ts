export type Json =
| string
| number
| boolean
| null
| { [key: string]: Json | undefined }
| Json[];

// Collections in Firebase
export interface FirestoreCollections {
products: Product;
testimonials: Testimonial;
}

// Product type
export interface Product {
id: string;
name: string;
description?: string | null;
category: string;
price: number;
stock_quantity?: number | null;
image_url: string;
is_featured?: boolean | null;
created_at?: string;
updated_at?: string;
}

// Testimonial type
export interface Testimonial {
id: string;
customer_name: string;
comment: string;
rating: number;
avatar_url?: string | null;
customer_role?: string | null;
is_featured?: boolean | null;
created_at?: string;
}

// Firestore Insert type (for adding documents)
export type FirestoreInsert<T> = Omit<T, "id" | "created_at" | "updated_at"> & {
id?: string;
created_at?: string;
updated_at?: string;
};

// Firestore Update type (for updating documents)
export type FirestoreUpdate<T> = Partial<Omit<T, "id">> & {
updated_at?: string;
};
