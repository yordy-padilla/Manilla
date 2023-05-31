// Import the functions you need from the SDKs you need

import {getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABF8dleMokVTgJE8BF5Z87n6hHHtakM8I",
  authDomain: "dbmanillas.firebaseapp.com",
  projectId: "dbmanillas",
  storageBucket: "dbmanillas.appspot.com",
  messagingSenderId: "516592139507",
  appId: "1:516592139507:web:562d0fe4da88fdd8550b86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}