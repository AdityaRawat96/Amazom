import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA1sVG2NvzzlwEFwaaBsaXiKxTJDJe6EVo",
    authDomain: "fir-3a1d6.firebaseapp.com",
    databaseURL: "https://fir-3a1d6.firebaseio.com",
    projectId: "fir-3a1d6",
    storageBucket: "fir-3a1d6.appspot.com",
    messagingSenderId: "607438541426",
    appId: "1:607438541426:web:2f5dc41e4239ee1f6b28eb",
    measurementId: "G-D68KN2BVFB"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };