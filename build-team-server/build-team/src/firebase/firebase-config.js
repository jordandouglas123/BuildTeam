// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoGfjf5fmFkvLNXaDtllvOyWayiKEtLaI",
    authDomain: "build-team-6ad63.firebaseapp.com",
    projectId: "build-team-6ad63",
    storageBucket: "build-team-6ad63.appspot.com",
    messagingSenderId: "282023317971",
    appId: "1:282023317971:web:417f2d3fc0826a8aa29f26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();