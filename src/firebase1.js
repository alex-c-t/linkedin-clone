import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCPw63IFqYK5yeQOO3uOO54LHDwwwGoaIo",
  authDomain: "linkedin-clone-e0c72.firebaseapp.com",
  projectId: "linkedin-clone-e0c72",
  storageBucket: "linkedin-clone-e0c72.appspot.com",
  messagingSenderId: "608499370539",
  appId: "1:608499370539:web:e50940521fafcd7bb8f86e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()

export {db, auth};
