import firebase from "firebase";
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyDTzVOnZKyxfZlSA3khW71lmF8r3pZFIOQ",
  authDomain: "anime-paradox-6f626.firebaseapp.com",
  projectId: "anime-paradox-6f626",
  storageBucket: "anime-paradox-6f626.appspot.com",
  messagingSenderId: "605795101177",
  appId: "1:605795101177:web:8d5f99ca27f4e8c773b528",
  measurementId: "G-011K8Y7WK7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
