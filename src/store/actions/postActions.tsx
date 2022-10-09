import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { AppDispatch } from "../hooks";

export const ADD_POST = "ADD_POST";
export const ADD_COMMENT = "ADD_COMMENT";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";

export const addPost =
  (uid: string, image: string, description: string) =>
  async (dispatch: AppDispatch) => {
    const usersRef = doc(db, "users", uid);
    const userData = await getDoc(usersRef);
    const username = userData.data()!.username;
    const profilePic = userData.data()!.profilePic;

    const postsRef = collection(db, "users", uid, "posts");
    const docRef = doc(postsRef);
    const postID = docRef.id;
    const date = new Date();
    await setDoc(doc(postsRef, `${docRef.id}`), {
      image: image,
      description: description,
      likes: [],
      comments: [],
      username: username,
      profilePic: profilePic,
      id: postID,
      dateAdded: date,
    });
    dispatch({
      type: ADD_POST,
      uid: uid,
      image: image,
      description: description,
      username: username,
      profilePic: profilePic,
      id: postID,
      dateAdded: date,
    });
  };

export const addComment =
  (uid: string, id: string, comment: string) =>
  async (dispatch: AppDispatch) => {
    const userRef = doc(db, "users", uid);
    const userData = await getDoc(userRef);
    const username = userData.data()!.username;

    const postRef = doc(db, `users/${uid}/posts/`, id);
    const postData = await getDoc(postRef);

    let arr: any[] = [];
    if (postData.data()!.comments.length > 0) {
      postData.data()!.comments.map((comment: any[]) => {
        arr.push(comment);
      });
    }
    arr.push({ uid: uid, username: username, comment: comment });

    await setDoc(
      postRef,
      {
        comments: arr,
      },
      { merge: true }
    );

    dispatch({
      type: ADD_COMMENT,
      id: id,
      comments: arr,
    });
  };

export const likePost =
  (uid: string, id: string) => async (dispatch: AppDispatch) => {
    const userRef = doc(db, "users", uid);
    const userData = await getDoc(userRef);
    const username = userData.data()!.username;
    const profilePic = userData.data()!.profilePic;

    const postRef = doc(db, `users/${uid}/posts/`, id);
    const postData = await getDoc(postRef);

    let arr: any[] = [];
    if (postData.data()!.likes.length > 0) {
      postData.data()!.likes.map((like: any[]) => {
        arr.push(like);
      });
    }
    arr.push({ uid: uid, username: username, profilePic: profilePic });

    await setDoc(
      postRef,
      {
        likes: arr,
      },
      { merge: true }
    );

    dispatch({
      type: LIKE_POST,
      likes: arr,
    });
  };

export const unlikePost =
  (uid: string, id: string) => async (dispatch: AppDispatch) => {
    const postRef = doc(db, `users/${uid}/posts/`, id);
    const postData = await getDoc(postRef);

    const likes = postData.data()!.likes.filter((like: any) => {
      if (like.uid !== uid) {
        return like;
      }
    });

    await setDoc(
      postRef,
      {
        likes: likes,
      },
      { merge: true }
    );

    dispatch({
      type: UNLIKE_POST,
      likes: likes,
      id: id,
    });
  };
