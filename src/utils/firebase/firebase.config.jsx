// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtHFAI9O7gADWgHvTQaMi22_ubZ9Uem4s",
  authDomain: "bantaba-19738.firebaseapp.com",
  projectId: "bantaba-19738",
  storageBucket: "bantaba-19738.appspot.com",
  messagingSenderId: "688868093506",
  appId: "1:688868093506:web:4232181738789e7d3587db",
  measurementId: "G-30WB708MJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()