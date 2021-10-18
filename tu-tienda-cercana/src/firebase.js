import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFvbK9tR5ty1mM_HftwbQhIPUJ73-jNvM",
  authDomain: "tu-tienda-cercana-6d34c.firebaseapp.com",
  projectId: "tu-tienda-cercana-6d34c",
  storageBucket: "tu-tienda-cercana-6d34c.appspot.com",
  messagingSenderId: "538125056085",
  appId: "1:538125056085:web:7b35dea9e48ad3a0423cdc"
  };

  // firebase.initializeApp(firebaseConfig);

export const fb = firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();