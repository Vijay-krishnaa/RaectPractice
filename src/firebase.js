// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-a6725.firebaseapp.com",
  projectId: "auth-a6725",
  storageBucket: "auth-a6725.firebasestorage.app",
  messagingSenderId: "742673530009",
  appId: "1:742673530009:web:d3ece201813407c4890c08",
  measurementId: "G-13KKZGGXWE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
