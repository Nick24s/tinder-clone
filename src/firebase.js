import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyBX6wNft5Q6AoHR2HCM7ygO3gG0lP7o68c",
    authDomain: "tinder-copy-f0ed6.firebaseapp.com",
    projectId: "tinder-copy-f0ed6",
    storageBucket: "tinder-copy-f0ed6.appspot.com",
    messagingSenderId: "1041144207653",
    appId: "1:1041144207653:web:eb212f757e9ed2026a62cc",
    measurementId: "G-4CT51NN38M"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);