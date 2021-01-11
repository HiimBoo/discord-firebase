import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDetcDBtjvrFqRUQcmYoKweuVQuUEXc4GQ",
  authDomain: "discord-clone-34786.firebaseapp.com",
  projectId: "discord-clone-34786",
  storageBucket: "discord-clone-34786.appspot.com",
  messagingSenderId: "356497032898",
  appId: "1:356497032898:web:7b279908152415e4ff9d5b",
  measurementId: "G-VBDJNEHZVG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
