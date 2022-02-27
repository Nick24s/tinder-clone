import { initializeApp , getApps , getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfhxFSlSTf4qROb5g-YWMB4dHIxuiJ2G0",
  authDomain: "chat-fc72b.firebaseapp.com",
  projectId: "chat-fc72b",
  storageBucket: "chat-fc72b.appspot.com",
  messagingSenderId: "1054193157421",
  appId: "1:1054193157421:web:de84778ff6104728853fa4",
  measurementId: "G-2JGEZW56K5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app , db ,storage };