import { ActionTypes } from "store/types";
import { AppDispatch } from "store/store";
import { doSetup } from "features/users/setup.service";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "services/firebase";
import { IUser } from "types/user.types";

export const doSetupAction =
  (
    uid: string,
    username: string,
    bio: string,
    profilePic: string,
    theme: string
  ) =>
  async (dispatch: AppDispatch) => {
    await doSetup(uid, username, bio, profilePic, theme);
    dispatch({
      type: ActionTypes.DO_SETUP,
      username,
      bio,
      uid,
      profilePic,
      theme,
    });
  };

export const getAllUsersAction =
  (users: IUser[]) => async (dispatch: AppDispatch) => {
    dispatch({
      type: ActionTypes.GET_ALL_USERS,
      users,
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
      type: ActionTypes.DO_FOLLOW,
      uid1,
      uid2,
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
      following,
    });

    const docRef2 = doc(db, "users", uid2);
    const data2 = await getDoc(docRef2);
    const followers = data2.data()!.followers.filter((word: any) => {
      if (word.uid !== uid1) {
        return word;
      }
    });
    await updateDoc(docRef2, {
      followers,
    });
    dispatch({
      type: ActionTypes.DO_UNFOLLOW,
      uid1,
      uid2,
    });
  };
