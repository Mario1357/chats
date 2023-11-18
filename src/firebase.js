import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYa2ZsYhQvf9gerM114ZzwS6Uime6ou5E",
  authDomain: "tecnexcus.firebaseapp.com",
  projectId: "tecnexcus",
  storageBucket: "tecnexcus.appspot.com",
  messagingSenderId: "471611478953",
  appId: "1:471611478953:web:09ebee0e2a12b06488aab8",
  measurementId: "G-Q2NVQRMNP2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()