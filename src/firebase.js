// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApbz1MUPXIxT3zKeb5TinaYjAamuLokBQ",
  authDomain: "mydictinary-5e8be.firebaseapp.com",
  projectId: "mydictinary-5e8be",
  storageBucket: "mydictinary-5e8be.appspot.com",
  messagingSenderId: "16178750623",
  appId: "1:16178750623:web:b088362c3c6c8ae98aeeaa",
  measurementId: "G-31V8LR3DF9"
};
initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export const db = getFirestore();
