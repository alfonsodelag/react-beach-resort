import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBzwZhvOR8-TcT2fDK2mDGVCQEOgzpfhg8",
    authDomain: "reservations-app-db8d2.firebaseapp.com",
    databaseURL: "https://reservations-app-db8d2.firebaseio.com",
    projectId: "reservations-app-db8d2",
    storageBucket: "reservations-app-db8d2.appspot.com",
    messagingSenderId: "623334814939",
    appId: "1:623334814939:web:95b44a4302108ddca088fe",
    measurementId: "G-1MX2QET99J"
});

const auth = firebase.auth();

console.log("auth: ", auth);

export { auth }