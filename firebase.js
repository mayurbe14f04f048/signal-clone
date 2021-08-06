import  firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDmPb5QFeOKcKUxnKTlQlcGbYKC4jsQpos",
    authDomain: "signal-clone-c50fa.firebaseapp.com",
    projectId: "signal-clone-c50fa",
    storageBucket: "signal-clone-c50fa.appspot.com",
    messagingSenderId: "653053080758",
    appId: "1:653053080758:web:e927e290f24becf6d8a217"
  };


let app;

if (firebase.apps.length===0){
    app = firebase.initializeApp(firebaseConfig)
} else{
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db,auth}