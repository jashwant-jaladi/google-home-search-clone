import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyANGFlmGtRzqDG7tmaYxpIUYxvEBN-h88E",
  authDomain: "clone-731db.firebaseapp.com",
  projectId: "clone-731db",
  storageBucket: "clone-731db.firebasestorage.app",
  messagingSenderId: "573696113882",
  appId: "1:573696113882:web:b547682a9fb79d3d2939e3",
  measurementId: "G-Q0P2JRP3LJ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
