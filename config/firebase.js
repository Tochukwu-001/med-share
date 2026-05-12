// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjeeXZCh1vAdqaSZZtqlPhiQcpeTTy54Q",
  authDomain: "med-share-africa-dac58.firebaseapp.com",
  projectId: "med-share-africa-dac58",
  storageBucket: "med-share-africa-dac58.firebasestorage.app",
  messagingSenderId: "971131220332",
  appId: "1:971131220332:web:2c1d4bd7d62e692c16c349"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}