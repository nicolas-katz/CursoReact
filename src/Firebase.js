import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9jMZ_kDosejCOWdDwjJRst7YENVysibY",
  authDomain: "coderhouse-project-3d62b.firebaseapp.com",
  projectId: "coderhouse-project-3d62b",
  storageBucket: "coderhouse-project-3d62b.appspot.com",
  messagingSenderId: "114853500295",
  appId: "1:114853500295:web:0e5d0e47ba8b76431a6f22",
  measurementId: "G-07WQ70G749"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;