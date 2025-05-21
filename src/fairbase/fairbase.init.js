// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNA-Tqw-sq8sadGC0K13bKYXc1VhNdkoY",
  authDomain: "plant-care-tracker-6dcaf.firebaseapp.com",
  projectId: "plant-care-tracker-6dcaf",
  storageBucket: "plant-care-tracker-6dcaf.firebasestorage.app",
  messagingSenderId: "618092916235",
  appId: "1:618092916235:web:c9cdcb79d8669d8903210e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);