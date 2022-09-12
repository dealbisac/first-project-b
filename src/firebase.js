import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIrIYXRTA2ei3dV9SaabZDzhD36lLDRcE",
    authDomain: "todo-list-section-b.firebaseapp.com",
    projectId: "todo-list-section-b",
    storageBucket: "todo-list-section-b.appspot.com",
    messagingSenderId: "142051602601",
    appId: "1:142051602601:web:dbd1c3dcef60a4829e79b8",
    measurementId: "G-VN2J30F020"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
