import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA01ucpuo7RSR5fYHMjG0EUQ6GP-mpLGEo",
  authDomain: "training-smart.firebaseapp.com",
  databaseURL: "https://training-smart.firebaseio.com",
  projectId: "training-smart",
  storageBucket: "training-smart.appspot.com",
  messagingSenderId: "985171769825",
  appId: "1:985171769825:web:a27491ce38ac1fb0b73aa0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
