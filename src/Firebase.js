// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxJGMb8-VxKvIJ54EmmF1673fNTh2GfVA",
  authDomain: "dbmanilla.firebaseapp.com",
  databaseURL: "https://dbmanilla-default-rtdb.firebaseio.com",
  projectId: "dbmanilla",
  storageBucket: "dbmanilla.appspot.com",
  messagingSenderId: "397862982454",
  appId: "1:397862982454:web:8b1a6a2e705ced35555997"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}