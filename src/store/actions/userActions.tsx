import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { AppDispatch } from "../hooks";

export const SET_USER = "SET_USER";
export const DO_SETUP = "DO_SETUP";
export const DO_FIRST_SETUP = "DO_FIRST_SETUP";

export const setUser = (uid: string) => async (dispatch: AppDispatch) => {
  const usersRef = doc(db, "users", uid);
  setDoc(usersRef, { userID: uid }, { merge: true });
  dispatch({
    type: SET_USER,
    uid: uid,
  });
};

export const doSetup =
  (
    uid: string,
    username: string,
    bio: string,
    profilePic: string,
    theme: string
  ) =>
  async (dispatch: AppDispatch) => {
    const docRef = doc(db, "users", uid);

    await updateDoc(docRef, {
      username: username,
      bio: bio,
      profilePic: profilePic,
      theme: theme,
    });

    dispatch({
      type: DO_SETUP,
      username: username,
      bio: bio,
      uid: uid,
      profilePic: profilePic,
      theme: theme,
    });
  };

export const doFirstSetup =
  (
    uid: string,
    username: string,
    bio: string,
    profilePic: string,
    theme: string
  ) =>
  async (dispatch: AppDispatch) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      username: username,
      bio: bio,
      profilePic: profilePic,
      theme: theme,
      postCounter: 0,
      likedPosts: [],
      followers: [],
      following: [],
    });
    dispatch({
      type: DO_SETUP,
      username: username,
      bio: bio,
      uid: uid,
      profilePic: profilePic,
      theme: theme,
      postCounter: 0,
      likedPosts: [],
      followers: 0,
      following: 0,
    });
  };
