// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-4YUPDrd4EcIS5pPw28iqJFmk15_WK_A",
  authDomain: "shopedro-e5758.firebaseapp.com",
  projectId: "shopedro-e5758",
  storageBucket: "shopedro-e5758.appspot.com",
  messagingSenderId: "1035961110189",
  appId: "1:1035961110189:web:af36d2242a6f1771ebc024",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
