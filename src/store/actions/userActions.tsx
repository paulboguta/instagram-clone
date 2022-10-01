import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { AppDispatch } from "../hooks";

export const SET_USER = "SET_USER";
export const DO_SETUP = "DO_SETUP";
export const DO_FIRST_SETUP = "DO_FIRST_SETUP";
export const DO_FOLLOW = "DO_FOLLOW";
export const DO_UNFOLLOW = "DO_UNFOLLOW";

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
      followers: [],
      following: [],
    });
  };

export const doFollow =
  (uid1: string, uid2: string) => async (dispatch: AppDispatch) => {
    const docRef = doc(db, "users", uid1);
    const data = await getDoc(docRef);
    const following = data.data()!.following;
    following.push(uid2);
    await updateDoc(docRef, {
      following: following,
    });

    const docRef2 = doc(db, "users", uid2);
    const data2 = await getDoc(docRef2);
    const followers = data2.data()!.followers;
    followers.push(uid1);
    await updateDoc(docRef2, {
      followers: followers,
    });

    dispatch({
      type: DO_FOLLOW,
      uid1: uid1,
      uid2: uid2,
    });
  };

export const doUnfollow =
  (uid1: string, uid2: string) => async (dispatch: AppDispatch) => {
    const docRef = doc(db, "users", uid1);
    const data = await getDoc(docRef);
    const following = data.data()!.following.filter((word: string) => {
      return word !== uid2;
    });

    await updateDoc(docRef, {
      following: following,
    });

    const docRef2 = doc(db, "users", uid2);
    const data2 = await getDoc(docRef2);
    const followers = data2.data()!.followers.filter((word: string) => {
      return word !== uid1;
    });
    await updateDoc(docRef2, {
      followers: followers,
    });
    dispatch({
      type: DO_UNFOLLOW,
      uid1: uid1,
      uid2: uid2,
    });
  };
