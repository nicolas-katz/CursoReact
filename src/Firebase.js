// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9jMZ_kDosejCOWdDwjJRst7YENVysibY",
  authDomain: "coderhouse-project-3d62b.firebaseapp.com",
  projectId: "coderhouse-project-3d62b",
  storageBucket: "coderhouse-project-3d62b.appspot.com",
  messagingSenderId: "114853500295",
  appId: "1:114853500295:web:0e5d0e47ba8b76431a6f22",
  measurementId: "G-07WQ70G749"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);

export default db;