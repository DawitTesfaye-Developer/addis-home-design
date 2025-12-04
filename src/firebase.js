// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Import other services you plan to use, e.g.:
import { getFirestore } from "firebase/firestore";

// The configuration object uses environment variables from the .env file
// accessed via import.meta.env
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// 1. Initialize Firebase App
const app = initializeApp(firebaseConfig);

// 2. Initialize and export all required services
// You only need to initialize Analytics if you're using it.
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Export the initialized instances so they can be used across your app
export { app, analytics, db };

// You would add other services here as needed (e.g., getStorage, getFunctions)
