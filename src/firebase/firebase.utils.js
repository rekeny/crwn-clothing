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
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message );
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

