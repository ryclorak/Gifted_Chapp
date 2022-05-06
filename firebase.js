import { initializeApp, getApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: 'AIzaSyAqnLt9B0YAT5E1gwsDgpRJoLx5s2IkQ3E',
    authDomain: 'gifted-chapp.firebaseapp.com',
    projectId: 'gifted-chapp',
    storageBucket: 'gifted-chapp.appspot.com',
    messagingSenderId: '28144136953',
    appId: '1:28144136953:web:f375b12aef68585eb2e828',
    measurementId: 'G-0C1F32YWBM'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // lets see what this is all about
const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true}); //TODO: look into this

export { db, auth, analytics };
