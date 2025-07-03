// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6-Rs29cmIgWgR9wkz5__Pratku3OYNO4",
  authDomain: "github-20870.firebaseapp.com",
  projectId: "github-20870",
  storageBucket: "github-20870.firebasestorage.app",
  messagingSenderId: "63258694590",
  appId: "1:63258694590:web:2fdc56f73c9b2a171f5fef",
  measurementId: "G-9WGD2FGDFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);