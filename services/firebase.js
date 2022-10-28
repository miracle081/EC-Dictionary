// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXnTrXKPmmpL-0alJlXfAj5VoK9Hf0s3o",
  authDomain: "ec-dictionary.firebaseapp.com",
  projectId: "ec-dictionary",
  storageBucket: "ec-dictionary.appspot.com",
  messagingSenderId: "1020793324075",
  appId: "1:1020793324075:web:37b635c994f093ee23a06e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// data base
export const db = getFirestore(app)