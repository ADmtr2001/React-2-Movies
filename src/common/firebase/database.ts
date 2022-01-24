import {collection, doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "./firebase-config";
import {useAppSelector} from "../../hooks/redux";
import React from "react";
import {IMovie} from "../../types/IMovie";
import {IUser} from "../../types/IUser";

export enum CategoryType {
  Favorite = 'favorite',
  Later = 'later',
}

export const addFilmToCategory = async (e: React.MouseEvent<HTMLButtonElement>, movie: IMovie, user: IUser, category: CategoryType) => {
  const previousData = await getDocument(user, category);
  if (!previousData) {
    await setDoc(doc(db, category, `${user.uid}`), {
      [movie.imdbID]: movie
    });
    return;
  }

  await setDoc(doc(db, category, `${user.uid}`), {
    ...previousData,
    [movie.imdbID]: movie
  });
}

export const getDocument = async (user: IUser, category: CategoryType) => {
  if (!user) return;

  const docRef = doc(db, category, user.uid);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}