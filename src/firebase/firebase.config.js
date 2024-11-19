// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,

  apiKey: "AIzaSyAp98UmtOFFLopJLWYBJkOY3_SIf4057E8",
  authDomain: "istro-boss.firebaseapp.com",
  projectId: "istro-boss",
  storageBucket: "istro-boss.firebasestorage.app",
  messagingSenderId: "269193045534",
  appId: "1:269193045534:web:6b5a2c8afdba1765be300f",
};
console.log(firebaseConfig);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
