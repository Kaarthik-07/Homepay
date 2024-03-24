// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrMtnwnWp-esNejY7lFTz1M5omJpCScDc",
  authDomain: "homepay-81d22.firebaseapp.com",
  projectId: "homepay-81d22",
  storageBucket: "homepay-81d22.appspot.com",
  messagingSenderId: "367778220667",
  appId: "1:367778220667:web:6b887d488cc894714370de",
  measurementId: "G-RTBTRBGEE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
