// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDI9BwXneEekgiuCgBz5afDY5ziQtn5V3Y",
    authDomain: "e-comm-store-867ff.firebaseapp.com",
    databaseURL: "https://e-comm-store-867ff-default-rtdb.firebaseio.com",
    projectId: "e-comm-store-867ff",
    storageBucket: "e-comm-store-867ff.appspot.com",
    messagingSenderId: "1026040429422",
    appId: "1:1026040429422:web:851586ca85d3aa611f1f7f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;