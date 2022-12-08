import firebase from 'firebase';
// import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDVh1U1Ys1t3AmW6H63BPYyN4XT5YlvHio",
  authDomain: "blush-ac600.firebaseapp.com",
  projectId: "blush-ac600",
  storageBucket: "blush-ac600.appspot.com",
  messagingSenderId: "131715233095",
  appId: "1:131715233095:web:d0bf4849b741995e548862",
  measurementId: "G-XKFVKM8572"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
