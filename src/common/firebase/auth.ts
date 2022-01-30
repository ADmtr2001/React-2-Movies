import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "./firebase-config";

export const register = async (email: string, password: string) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch(e: any) {
    console.log(e.message);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch(e: any) {
    console.log(e.message);
  }
}

export const logout = async () => {
  await signOut(auth);
}