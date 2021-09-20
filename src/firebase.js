import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXfd4irw_xYO-l-pQj-vp5qvpOO15My0Y",
    authDomain: "login-64333.firebaseapp.com",
    projectId: "login-64333",
    storageBucket: "login-64333.appspot.com",
    messagingSenderId: "996765633490",
    appId: "1:996765633490:web:b22869aff0aee7bd14160b",
    measurementId: "G-S9446HBQ6F"
  };

  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

const db = firebaseApp.firestore()

export {auth, provider}

export default db