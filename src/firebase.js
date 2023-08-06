import firebase from "firebase/compat/app"; 
import "firebase/compat/auth";
import "firebase/compat/firestore" 



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFrjRPWaKdE0tr8dZUlg-2tFLcrijlg90",
  authDomain: "whats-app-clone-26022.firebaseapp.com",
  projectId: "whats-app-clone-26022",
  storageBucket: "whats-app-clone-26022.appspot.com",
  messagingSenderId: "1034854064420",
  appId: "1:1034854064420:web:195cf1cdd41daf266293b1",
  measurementId: "G-Y634XGX119"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;