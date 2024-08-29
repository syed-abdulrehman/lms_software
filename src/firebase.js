// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCavZZPDSQP19uYG1iwAb7uUG4SLE792v0",
  authDomain: "lmssoftware-88cdb.firebaseapp.com",
  projectId: "lmssoftware-88cdb",
  storageBucket: "lmssoftware-88cdb.appspot.com",
  messagingSenderId: "833145922938",
  appId: "1:833145922938:web:6624b68be1e0153a1522c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = firebase.firestore();
export const db = getFirestore(app);
