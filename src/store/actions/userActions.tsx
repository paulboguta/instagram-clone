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
    const following1 = data.data()!.following;
    const username1 = data.data()!.username;
    const profilePic1 = data.data()!.profilePic;
    const docRef2 = doc(db, "users", uid2);
    const data2 = await getDoc(docRef2);
    const followers2 = data2.data()!.followers;
    const username2 = data2.data()!.username;
    const profilePic2 = data2.data()!.profilePic;

    following1.push({
      uid: uid2,
      username: username2,
      profilePic: profilePic2,
    });

    await updateDoc(docRef, {
      following: following1,
    });

    followers2.push({
      uid: uid1,
      username: username1,
      profilePic: profilePic1,
    });
    await updateDoc(docRef2, {
      followers: followers2,
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
    const following = data.data()!.following.filter((word: any) => {
      if (word.uid !== uid2) {
        return word;
      }
    });

    await updateDoc(docRef, {
      following: following,
    });

    const docRef2 = doc(db, "users", uid2);
    const data2 = await getDoc(docRef2);
    const followers = data2.data()!.followers.filter((word: any) => {
      if (word.uid !== uid1) {
        return word;
      }
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
