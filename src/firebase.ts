// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANGFlmGtRzqDG7tmaYxpIUYxvEBN-h88E",
  authDomain: "https://google-home-search-clone.vercel.app/",
  projectId: "clone-731db",
  storageBucket: "clone-731db.firebasestorage.app",
  messagingSenderId: "573696113882",
  appId: "1:573696113882:web:b547682a9fb79d3d2939e3",
  measurementId: "G-Q0P2JRP3LJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
