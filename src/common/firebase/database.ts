import React from "react";

import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "./firebase-config";

import {IMovie} from "../../types/IMovie";
import {IUser} from "../../types/IUser";
import {CategoryType} from "../../types/IDatabase";

export const addFilmToCategory = async (movie: IMovie, user: IUser, category: CategoryType) => {
  const previousData = await getDocument(user, category);
  if (!previousData) {
    await setDoc(doc(db, category, `${user.uid}`), {
      [movie.imdbID]: movie
    });
    return;
  }

  // TODO: Find better way. Too slow.
  await setDoc(doc(db, category, `${user.uid}`), {
    ...previousData,
    [movie.imdbID]: movie
  });
}

export const removeFilmFromCategory = async (id: string, user: IUser, category: CategoryType) => {
  const previousData = await getDocument(user, category);

  if (!previousData) return;

  // TODO: Find better way. Too slow.
  await setDoc(doc(db, category, `${user.uid}`), {
    ...Object.values(previousData).filter((movie: IMovie) => movie.imdbID !== id)
  });
}

export const getDocument = async (user: IUser, category: CategoryType) => {
  if (!user) return;

  const docRef = doc(db, category, user.uid);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}