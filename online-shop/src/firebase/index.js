import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBbpqWHBJlvXqO7yDQYzx1BSOFeFkc0dXo",
  authDomain: "shop2-72b21.firebaseapp.com",
  projectId: "shop2-72b21",
  storageBucket: "shop2-72b21.appspot.com",
  messagingSenderId: "792899184334",
  appId: "1:792899184334:web:8c9585126ef522ec89929f"
};


export const app = initializeApp(firebaseConfig);

export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore();

export const auth = getAuth();

export const loginWithGoogle = async () => {
    const res = await signInWithPopup(auth, googleProvider);

    const userRef = doc(db, 'users', res?.user?.uid);

    const data = await getDoc(userRef);

    if (false) {
        setDoc(userRef, {
            userName: res?.user?.displayName,
            age: 23
        });
    } else {
        // console.log(data ? data.get() : 'no data');

        console.log(data ? data.get('age') : 'no data again');
    }

    return res ? res.user : {};
};

export const appSignOut = async () => {
    const res = await signOut(auth);
};

export const createUser = async (email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log(res);
};

export const signIn = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(email, password);
    } catch (err) {
        if (err.message === 'auth/account-is-missing') {
            console.log('сначала создайте аккаунт!');
        }
    }
};