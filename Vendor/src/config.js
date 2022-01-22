import firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBoE21j3-o3eABr2iA3_CCwIC6YkXGzQDE",
  authDomain: "print-it-fd3f4.firebaseapp.com",
  databaseURL: "https://print-it-fd3f4-default-rtdb.firebaseio.com",
  projectId: "print-it-fd3f4",
  storageBucket: "print-it-fd3f4.appspot.com",
  messagingSenderId: "495542409688",
  appId: "1:495542409688:web:094e821277cc26019cfaad",
  measurementId: "G-9Z9BYF8927",
};
const application = firebase.initializeApp(firebaseConfig);
export const auth = application.auth();

export var db = application.firestore();
export var storage = application.storage();

export default application;
