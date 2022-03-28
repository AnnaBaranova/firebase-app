// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR1vU8Hhz_6oaOxUSfbJZTDdBrG3WP2iw",
  authDomain: "blogproject-ed8d8.firebaseapp.com",
  projectId: "blogproject-ed8d8",
  storageBucket: "blogproject-ed8d8.appspot.com",
  messagingSenderId: "882732750470",
  appId: "1:882732750470:web:e76ace03865ca0eb7b6307"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);