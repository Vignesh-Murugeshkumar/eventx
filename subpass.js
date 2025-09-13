import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs, setDoc, doc, deleteDoc, updateDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBLZjJRBVbZMvrVljBwma65PWdpysmltpk",
  authDomain: "webapp-fc84b.firebaseapp.com",
  projectId: "webapp-fc84b",
  storageBucket: "webapp-fc84b.appspot.com",
  messagingSenderId: "341307639010",
  appId: "1:341307639010:web:abcdef1234567890abcdef"
};

const app = initializeApp(firebaseConfig);
const dbFirestore = getFirestore(app);

console.log("Firebase app initialized:", app);
console.log("Firestore instance:", dbFirestore);

window.dbFirestore = dbFirestore;
window.firebaseCollection = collection;
window.firebaseGetDocs = getDocs;
window.firebaseSetDoc = setDoc;
window.firebaseDoc = doc;
window.firebaseDeleteDoc = deleteDoc;
window.firebaseUpdateDoc = updateDoc;
window.firebaseOnSnapshot = onSnapshot;
