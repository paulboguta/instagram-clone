import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { AppDispatch } from "../hooks";

export const ADD_POST = "ADD_POST";

export const addPost =
  (uid: string, image: string, description: string) =>
  async (dispatch: AppDispatch) => {
    const usersRef = doc(db, "users", uid);
    const userData = await getDoc(usersRef);
    const username = userData.data()!.username;
    const profilePic = userData.data()!.profilePic;

    const postsRef = collection(db, "users", uid, "posts");
    await addDoc(postsRef, {
      image: image,
      description: description,
      likes: [],
      comments: [],
      username: username,
      profilePic: profilePic,
    });
    dispatch({
      type: ADD_POST,
      uid: uid,
      image: image,
      description: description,
      username: username,
      profilePic: profilePic,
    });
  };
