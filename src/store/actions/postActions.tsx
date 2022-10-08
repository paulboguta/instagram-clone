import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase";
import { AppDispatch } from "../hooks";

export const ADD_POST = "ADD_POST";

export const addPost =
  (uid: string, image: string, description: string) =>
  async (dispatch: AppDispatch) => {
    const usersRef = collection(db, "users", uid, "posts");
    await addDoc(usersRef, {
      image: image,
      description: description,
      likes: [],
      comments: [],
    });
    dispatch({
      type: ADD_POST,
      uid: uid,
      image: image,
      description: description,
    });
  };
