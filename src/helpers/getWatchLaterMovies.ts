import {AppDispatch} from "../store/store";
import {doc, onSnapshot} from "firebase/firestore";
import {db} from "../common/firebase/firebase-config";
import {CategoryType} from "../types/IDatabase";
import {setFavoriteMovies, setWatchLaterMovies} from "../store/reducers/user/userSlice";

export const getWatchLaterMovies = (currentUser: any, dispatch: AppDispatch) => {
  onSnapshot(doc(db, CategoryType.Later, currentUser.uid), (doc) => {
    const data = doc.data();
    if (data) {
      dispatch(setWatchLaterMovies(Object.values(data as Object)))
    }
  });
}