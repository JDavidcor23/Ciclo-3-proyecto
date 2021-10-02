import firebase from 'firebase/app'
import database from 'firebase/database'
import auth from 'firebase/auth'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnSwoTHDi3iyd0TtM-6uw_AWe1iTUjRQ8",
  authDomain: "tutienda-14a20.firebaseapp.com",
  projectId: "tutienda-14a20",
  storageBucket: "tutienda-14a20.appspot.com",
  messagingSenderId: "77914241324",
  appId: "1:77914241324:web:68eb46dad8c3f7835d5489"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);