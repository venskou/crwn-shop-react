import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAsMAvvv57WeXBWv4rEXrG4R_4WFJ82eHY',
  authDomain: 'crwn-db-88e89.firebaseapp.com',
  databaseURL: 'https://crwn-db-88e89.firebaseio.com',
  projectId: 'crwn-db-88e89',
  storageBucket: 'crwn-db-88e89.appspot.com',
  messagingSenderId: '339679104390',
  appId: '1:339679104390:web:d5111ea3805e5069147007',
  measurementId: 'G-5MXPWW8KV9',
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
        ...additionalData,
      })
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
