// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1thS0zdqSZZ0Pw7Le6CZ0Z2h4GzNexHg",
  authDomain: "uber-next-clone-b7062.firebaseapp.com",
  projectId: "uber-next-clone-b7062",
  storageBucket: "uber-next-clone-b7062.appspot.com",
  messagingSenderId: "461025993201",
  appId: "1:461025993201:web:d53a8f5da14ff1cefbe450"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();


export {app, provider, auth};