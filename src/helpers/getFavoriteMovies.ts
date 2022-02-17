import {getDocument} from "../common/firebase/database";
import {doc, onSnapshot} from 'firebase/firestore';
import {CategoryType} from "../types/IDatabase";
import {AppDispatch} from "../store/store";
import {setFavoriteMovies, setWatchLaterMovies} from "../store/reducers/user/userSlice";
import {db} from "../common/firebase/firebase-config";

export const getFavoriteMovies = (currentUser: any, dispatch: AppDispatch) => {
  onSnapshot(doc(db, CategoryType.Favorite, currentUser.uid), (doc) => {
    const data = doc.data();
    if (data) {
      dispatch(setFavoriteMovies(Object.values(data as Object)))
    }
  });
}