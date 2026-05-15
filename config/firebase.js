// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4YezEq53QJdOf7c_-w05F1vS_ZMcknkg",
  authDomain: "med-share-bafa3.firebaseapp.com",
  projectId: "med-share-bafa3",
  storageBucket: "med-share-bafa3.firebasestorage.app",
  messagingSenderId: "413304875959",
  appId: "1:413304875959:web:d5e9de7e64b660a1b59632"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}