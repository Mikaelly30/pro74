import firebase from "firebase/app";
//require('@firebase/firestore');
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCjfhpONN-IV-yIdnGnFa1URWUQ3x-3uqg",
    authDomain: "pro71-6481a.firebaseapp.com",
    projectId: "pro71-6481a",
    storageBucket: "pro71-6481a.appspot.com",
    messagingSenderId: "325335393658",
    appId: "1:325335393658:web:6a29e3b51befd327f1e2c3"
};
   
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();