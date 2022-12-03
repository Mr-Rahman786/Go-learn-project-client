// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVPglx_Wxf33b7GP1BTRX_x3e3xYXVLmE",
    authDomain: "go-learn-to-fun.firebaseapp.com",
    projectId: "go-learn-to-fun",
    storageBucket: "go-learn-to-fun.appspot.com",
    messagingSenderId: "8292001645",
    appId: "1:8292001645:web:f385e789b596caf34edc64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  

export default app;
