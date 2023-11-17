// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfHBI7YwiQCdjfrlKdQdl7eQJDL8WhLZA",
  authDomain: "chat-40563.firebaseapp.com",
  projectId: "chat-40563",
  storageBucket: "chat-40563.appspot.com",
  messagingSenderId: "391894232504",
  appId: "1:391894232504:web:44fc790c55b8c1c82ef34d",
  measurementId: "G-R10P2VW41J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();