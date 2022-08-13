import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWu_UgaT0ixIElp4uV7frz5Ws1EE-BXz8",
  authDomain: "pettogether-af372.firebaseapp.com",
  projectId: "pettogether-af372",
  storageBucket: "pettogether-af372.appspot.com",
  messagingSenderId: "604732696033",
  appId: "1:604732696033:web:6e9dcd2c1ddb0f63e69ea0",
  measurementId: "G-GXPJQ9H39Q"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const dbService = firebase.firestore();
