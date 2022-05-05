// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/app"
import "firebase/auth"

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDM9LIPJEgL579MZEymDxW0mgHkbwa2p8w",
    authDomain: "manager-4e2df.firebaseapp.com",
    projectId: "manager-4e2df",
    storageBucket: "manager-4e2df.appspot.com",
    messagingSenderId: "1020540023542",
    appId: "1:1020540023542:web:76a5abe93af52ad30772d7"
  })
}

export default firebase