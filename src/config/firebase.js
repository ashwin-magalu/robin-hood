import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwxna-4ZE08WkFC_5IUqvxTDfkEzgaDI",
  authDomain: "sociogram-worlds.firebaseapp.com",
  databaseURL: "https://sociogram-worlds.firebaseio.com",
  projectId: "sociogram-worlds",
  storageBucket: "sociogram-worlds.appspot.com",
  messagingSenderId: "59879525778",
  appId: "1:598795257178:web:83caace17e2844ee51f63",
  measurementId: "G-RJXWXF90Z8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
