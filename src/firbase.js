// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBn8t1MFcGlkXW8owKvDPHJGljHSh2tkg",
  authDomain: "netflix-clone-d0bc0.firebaseapp.com",
  projectId: "netflix-clone-d0bc0",
  storageBucket: "netflix-clone-d0bc0.appspot.com",
  messagingSenderId: "990435768838",
  appId: "1:990435768838:web:c2159d9f85f39825582187",
  measurementId: "G-P1SNHTLT39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
