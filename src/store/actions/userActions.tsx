import {
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import { ActionTypes } from "store/types";
import { AppDispatch } from "store/store";
import { db } from "../../services/firebase";

export const doSetup =
  (
    uid: string,
    username: string,
    bio: string,
    profilePic: string,
    theme: string
  ) =>
  async (dispatch: AppDispatch) => {
    // update user doc
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      username,
      bio,
      profilePic,
      theme,
    });

    // update posts (profilepic, username. in likes and comments also profilepic, username)
    const allPosts = query(collectionGroup(db, "posts"));
    const querySnapshot = await getDocs(allPosts);

    querySnapshot.forEach((doc: any) => {
      console.log(doc.data());
      // updateDoc(doc(db, "posts", doc.data().id), {
      //   profilePic: profilePic,
      //   likes: doc.data()!.likes.map((like: any) => {
      //     if (like.uid === uid) {
      //       return {
      //         username: username,
      //         profilePic: profilePic,
      //         uid: like.uid,
      //       };
      //     } else {
      //       return like;
      //     }
      //   }),
      //   comments: doc.data()!.comments.map((comment: any) => {
      //     if (comment.uid === uid) {
      //       return {
      //         username: username,
      //         profilePic: profilePic,
      //         uid: comment.uid,
      //         comment: comment.comment,
      //       };
      //     } else {
      //       return comment;
      //     }
      //   }),
      // });
    });

    dispatch({
      type: ActionTypes.DO_SETUP,
      username,
      bio,
      uid,
      profilePic,
      theme,
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
      username,
      bio,
      profilePic,
      theme,
      postCounter: 0,
      likedPosts: [],
      followers: [],
      following: [],
    });
    dispatch({
      type: ActionTypes.DO_SETUP,
      username,
      bio,
      uid,
      profilePic,
      theme,
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
