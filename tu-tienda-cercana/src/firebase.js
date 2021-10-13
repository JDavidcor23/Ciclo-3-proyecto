import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIycKvmZLKswQ14g828qd4gif0jfb9GVY",
  authDomain: "crud-bef77.firebaseapp.com",
  databaseURL: "https://crud-bef77-default-rtdb.firebaseio.com",
  projectId: "crud-bef77",
  storageBucket: "crud-bef77.appspot.com",
  messagingSenderId: "786551161379",
  appId: "1:786551161379:web:9ff7264e321f6ef5212796"
  };

  // firebase.initializeApp(firebaseConfig);

export const fb = firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();