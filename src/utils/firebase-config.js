import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDADC8OPJ_5V5nN-4KggMkrrGL2nPktdoQ",
    authDomain: "micro2-f0fda.firebaseapp.com",
    projectId: "micro2-f0fda",
    storageBucket: "micro2-f0fda.appspot.com",
    messagingSenderId: "397813951763",
    appId: "1:397813951763:web:f7c2ecebd40a7626787ee6",
    measurementId: "G-XCG5KLS0H8"
  };

const app = firebase.initializeApp(firebaseConfig)



// Database instance
export const db = app.firestore();

// Authentication instance
export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();