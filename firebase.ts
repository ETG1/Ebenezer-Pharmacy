// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLXSGXxU7f2OihpF4K1eCVcEo3RpCQo8k",
  authDomain: "ebenezer-pharmacy.firebaseapp.com",
  projectId: "ebenezer-pharmacy",
  storageBucket: "ebenezer-pharmacy.firebasestorage.app",
  messagingSenderId: "702886350269",
  appId: "1:702886350269:web:4d245f31d2348c60e296d4"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export {app, db}