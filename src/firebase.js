import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCf70UKHCVXldl5Lk7Mn5wEwNWSajUbccY",
  authDomain: "codingpeer-5e5a8.firebaseapp.com",
  projectId: "codingpeer-5e5a8",
  databaseURL: "https://codingpeer-5e5a8-default-rtdb.firebaseio.com/",
  storageBucket: "codingpeer-5e5a8.appspot.com",
  messagingSenderId: "428364167533",
  appId: "1:428364167533:web:b3385665677e460b5c4264"
});

export default app;
export const auth = app.auth();
export const database = firebase.database();
export const storage = firebase.storage();
export const firebaseapp = firebase;