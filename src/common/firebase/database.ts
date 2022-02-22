import {doc, getDoc, onSnapshot, setDoc} from "firebase/firestore";
import {db} from "./firebase-config";

import {IMovie} from "../../types/IMovie";
import {IUser} from "../../types/IUser";
import {Collection} from "../../types/IDatabase";
import {IComment} from "../../types/IComment";
import {AppDispatch} from "../../store/store";
import {setFavoriteMovies, setWatchLaterMovies} from "../../store/reducers/user/userSlice";
import {setSingleMovieComments} from "../../store/reducers/movie/movieSlice";

export const addFilmToCategory = async (movie: IMovie, user: IUser, collection: Collection) => {
  const previousData = await getDocumentByUserID(user, collection);
  if (!previousData) {
    await setDoc(doc(db, collection, `${user.uid}`), {
      [movie.imdbID]: movie,
    });
    return;
  }

  // TODO: Find better way. Too slow.
  await setDoc(doc(db, collection, `${user.uid}`), {
    ...previousData,
    [movie.imdbID]: movie,
  });
}

export const getFavoriteMovies = (user: any, dispatch: AppDispatch) => {
  onSnapshot(doc(db, Collection.Favorite, user.uid), (doc) => {
    const data = doc.data();
    if (data) {
      dispatch(setFavoriteMovies(Object.values(data as Object)))
    }
  });
}

export const getWatchLaterMovies = (user: any, dispatch: AppDispatch) => {
  onSnapshot(doc(db, Collection.Later, user.uid), (doc) => {
    const data = doc.data();
    if (data) {
      dispatch(setWatchLaterMovies(Object.values(data as Object)))
    }
  });
}

export const removeFilmFromCategory = async (id: string, user: IUser, collection: Collection) => {
  const previousData = await getDocumentByUserID(user, collection);

  if (!previousData) return;

  // TODO: Find better way. Too slow.
  await setDoc(doc(db, collection, `${user.uid}`), {
    ...Object.values(previousData).filter((movie: IMovie) => movie.imdbID !== id)
  });
}

export const addCommentToFilm = async (filmID: string, comment: IComment, collection: Collection) => {
  const previousData = await getDocumentByFilmId(filmID, collection);
  if (!previousData) {
    await setDoc(doc(db, collection, filmID), {
      [comment.commentId]: comment,
    });
    return;
  }

  // TODO: Find better way. Too slow.
  await setDoc(doc(db, collection, filmID), {
    ...previousData,
    [comment.commentId]: comment,
  });
}

export const getFilmComments = (filmId: string, dispatch: AppDispatch) => {
  onSnapshot(doc(db, Collection.Comments, filmId), (doc) => {
    const data = doc.data();
    if (data) {
      dispatch(setSingleMovieComments(Object.values(data as Object)));
    }
  });
}

export const removeFilmComment = async (filmId: string, commentId: string, collection: Collection) => {
  const previousData = await getDocumentByFilmId(filmId, collection);

  if (!previousData) return;

  // TODO: Find better way. Too slow.
  await setDoc(doc(db, collection, filmId), {
    ...Object.values(previousData).filter((comment: IComment) => comment.commentId !== commentId)
  });
}

export const getDocumentByUserID = async (user: IUser, collection: Collection) => {
  if (!user) return;

  const docRef = doc(db, collection, user.uid);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

export const getDocumentByFilmId = async (filmId: string, collection: Collection) => {
  const docRef = doc(db, collection, filmId);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}