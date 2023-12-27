// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4qnjbbktSoPmAo2FC8NqniBfWqI7fq8g",
  authDomain: "contacts-e8d86.firebaseapp.com",
  projectId: "contacts-e8d86",
  storageBucket: "contacts-e8d86.appspot.com",
  messagingSenderId: "429034823250",
  appId: "1:429034823250:web:4d6795150eff3705c7498b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)