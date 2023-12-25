// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZzGhxmwp9yojPfwtaJ64I20uRJmkQh5E",
  authDomain: "fubk-library-app.firebaseapp.com",
  projectId: "fubk-library-app",
  storageBucket: "fubk-library-app.appspot.com",
  messagingSenderId: "969207417082",
  appId: "1:969207417082:web:920447b26f1f3904f5e143"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;