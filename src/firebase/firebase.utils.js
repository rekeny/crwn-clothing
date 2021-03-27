import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD5VyvNjJgzobv7TQpG7W9akpTmfJwSm-U",
    authDomain: "crwn-db-4508d.firebaseapp.com",
    projectId: "crwn-db-4508d",
    storageBucket: "crwn-db-4508d.appspot.com",
    messagingSenderId: "693926905394",
    appId: "1:693926905394:web:4ee8a09f0b97552c995e2b",
    measurementId: "G-QNTEF2Z6D6"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

