import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAPzVwH-2BEKOxkDUkYJ2FOFvv2Ek_rUkI",
  authDomain: "wilm-film-project.firebaseapp.com",
  projectId: "wilm-film-project",
  storageBucket: "wilm-film-project.appspot.com",
  messagingSenderId: "1055236061937",
  appId: "1:1055236061937:web:c943532accf3e6d9278750"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);