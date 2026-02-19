// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqSS9T05MZzey1G10wCfL4MaXXQacdvP4",
  authDomain: "portfolio-f80fd.firebaseapp.com",
  projectId: "portfolio-f80fd",
  storageBucket: "portfolio-f80fd.firebasestorage.app",
  messagingSenderId: "893361631553",
  appId: "1:893361631553:web:0402c6a82c0e80d4b371c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);