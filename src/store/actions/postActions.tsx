import {
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { ActionTypes } from "store/types";
import { AppDispatch } from "store/store";
import { createPost } from "features/posts/profilePosts.service";
import { db } from "../../services/firebase";

export const addPost =
  (uid: string, image: string, description: string) =>
  async (dispatch: AppDispatch) => {
    const { username, postID, date } = await createPost(
      uid,
      image,
      description
    );
    dispatch({
      type: ActionTypes.ADD_POST,
      uid,
      image,
      description,
      username,
      id: postID,
      dateAdded: date,
    });
  };

export const addComment =
  (uid: string, id: string, comment: string) =>
  async (dispatch: AppDispatch) => {
    const postRef = doc(db, `users/${uid}/posts/`, id);
    const postData = await getDoc(postRef);

    const arr: any[] = [];
    if (postData.data()!.comments.length > 0) {
      postData.data()!.comments.map((comment: any[]) => {
        arr.push(comment);
      });
    }
    arr.push({
      uid,

      comment,
    });

    await setDoc(
      postRef,
      {
        comments: arr,
      },
      { merge: true }
    );

    dispatch({
      type: ActionTypes.ADD_COMMENT,
      id,
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
          arr.push({ uid });
          userPost = doc.data()!.uid;
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
      type: ActionTypes.LIKE_POST,
      likes: arr,
    });
  };

export const unlikePost =
  (uid: string, id: string) => async (dispatch: AppDispatch) => {
    const allPosts = query(collectionGroup(db, "posts"));
    const querySnapshot = await getDocs(allPosts);

    const arr: any[] = [];
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
      type: ActionTypes.UNLIKE_POST,
      likes: arr,
      id,
    });
  };
