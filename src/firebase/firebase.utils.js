import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCU_hXV8JfzTQOQTPe1DuzqKvYZAT0ma1g',
  authDomain: 'react-shop-94567.firebaseapp.com',
  databaseURL: 'https://react-shop-94567.firebaseio.com',
  projectId: 'react-shop-94567',
  storageBucket: '',
  messagingSenderId: '412635842103',
  appId: '1:412635842103:web:0e8334ed9903930d'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
