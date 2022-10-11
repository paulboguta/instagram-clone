import {
  collection,
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
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
      id: postID,
      dateAdded: date,
      uid: uid,
    });
    dispatch({
      type: ADD_POST,
      uid: uid,
      image: image,
      description: description,
      username: username,
      id: postID,
      dateAdded: date,
    });
  };

export const addComment =
  (uid: string, id: string, comment: string) =>
  async (dispatch: AppDispatch) => {
    const postRef = doc(db, `users/${uid}/posts/`, id);
    const postData = await getDoc(postRef);

    let arr: any[] = [];
    if (postData.data()!.comments.length > 0) {
      postData.data()!.comments.map((comment: any[]) => {
        arr.push(comment);
      });
    }
    arr.push({
      uid: uid,

      comment: comment,
    });

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
    const allPosts = query(collectionGroup(db, "posts"));
    const querySnapshot = await getDocs(allPosts);

    let arr: any[] = [];
    let userPost: string;
    const manageData = async () => {
      querySnapshot.forEach((doc) => {
        if (doc.id === id) {
          if (doc.data()!.likes.length > 0) {
            arr = doc.data()!.likes;
          }
          arr.push({ uid: uid });
          userPost = doc.data()!.uid;
        }
        return;
      });
      const postRef = doc(db, `users/${userPost}/posts`, id);

      await setDoc(
        postRef,
        {
          likes: arr,
        },
        { merge: true }
      );
    };

    manageData();

    dispatch({
      type: LIKE_POST,
      likes: arr,
    });
  };

export const unlikePost =
  (uid: string, id: string) => async (dispatch: AppDispatch) => {
    const allPosts = query(collectionGroup(db, "posts"));
    const querySnapshot = await getDocs(allPosts);

    let arr: any[] = [];
    let userPost: string;
    const manageData = async () => {
      querySnapshot.forEach((doc) => {
        if (doc.data()!.id === id) {
          userPost = doc.data()!.uid;
          doc.data()!.likes.filter((like: any) => {
            if (like.uid !== uid) {
              arr.push(like);
            }
          });
        }
      });
      const postRef = doc(db, `users/${userPost}/posts`, id);

      await setDoc(
        postRef,
        {
          likes: arr,
        },
        { merge: true }
      );
    };

    manageData();

    dispatch({
      type: UNLIKE_POST,
      likes: arr,
      id: id,
    });
  };
