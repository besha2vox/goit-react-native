import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyDr5IXeg5bE-rzD9tRgmAFpk4ImL_0x3c0',
    authDomain: 'rn-hw-goit-b590e.firebaseapp.com',
    projectId: 'rn-hw-goit-b590e',
    storageBucket: 'rn-hw-goit-b590e.appspot.com',
    messagingSenderId: '752993729458',
    appId: '1:752993729458:web:15e1b6933105d486bd82ab',
    measurementId: 'G-N2RGP00T6B',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
