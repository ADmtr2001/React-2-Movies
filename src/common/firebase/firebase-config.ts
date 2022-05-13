import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "wilm-film-project.firebaseapp.com",
  projectId: "wilm-film-project",
  storageBucket: "wilm-film-project.appspot.com",
  messagingSenderId: "1055236061937",
  appId: "1:1055236061937:web:c943532accf3e6d9278750",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).catch((error) => console.log(error));
};

export const db = getFirestore(app);
