import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBjnEz4ONo7TkTg32PH9d6aaXltzL9vN78",
    authDomain: "clone-93419.firebaseapp.com",
    databaseURL: "https://clone-93419.firebaseio.com",
    projectId: "clone-93419",
    storageBucket: "clone-93419.appspot.com",
    messagingSenderId: "642076116270",
    appId: "1:642076116270:web:6d0ce25c0b5f52c474e6bf",
    measurementId: "G-0K7CD5J61E"
});


const auth = firebase.auth();

export  {auth};