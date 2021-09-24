import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD_y0rDtZBGLTFrRftetQyNLu8BcWUwKUE",
    authDomain: "linkedin-clone-yt-abca0.firebaseapp.com",
    projectId: "linkedin-clone-yt-abca0",
    storageBucket: "linkedin-clone-yt-abca0.appspot.com",
    messagingSenderId: "503304515638",
    appId: "1:503304515638:web:80aac91336e4b544fd6897"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()

export {db, auth};
