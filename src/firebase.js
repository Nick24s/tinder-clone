import { initializeApp , getApps , getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCTjjgtAhYnsi2J_yTkcE4m92fr00RtKg",
  authDomain: "friendlychat-f4617-342614.firebaseapp.com",
  databaseURL: "https://friendlychat-f4617-342614-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "friendlychat-f4617-342614",
  storageBucket: "friendlychat-f4617-342614.appspot.com",
  messagingSenderId: "174672509050",
  appId: "1:174672509050:web:720d4b100b6d5c7e7b23c3",
  measurementId: "G-CD1RT6MG74"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app , db ,storage };