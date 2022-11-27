import {
  collection,
  collectionGroup,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  QueryDocumentSnapshot,
  setDoc,
} from "firebase/firestore";
import { db } from "services/firebase";
import { IComment, ILike, IPost } from "types/post.types";

export const getProfilePosts = async (id: string) => {
  const postsRef = collection(db, "users", id, "posts");
  const posts = await getDocs(postsRef);

  const arr: IPost[] = [];
  posts.forEach((document) => {
    arr.push({
      comments: document.data()!.comments,
      dateAdded: document.data()!.dateAdded,
      description: document.data()!.description,
      id: document.data()!.id,
      image: document.data()!.image,
      likes: document.data()!.likes,
      uid: document.data()!.uid,
      username: document.data()!.username,
    });
  });
  return arr;
};

export const getFeedPosts = async () => {
  const allPosts = query(collectionGroup(db, "posts"));
  const querySnapshot = await getDocs(allPosts);
  const arr: IPost[] = [];
  querySnapshot.forEach((document: QueryDocumentSnapshot<DocumentData>) => {
    arr.push({
      comments: document.data()!.comments,
      dateAdded: document.data()!.dateAdded,
      description: document.data()!.description,
      id: document.data()!.id,
      image: document.data()!.image,
      likes: document.data()!.likes,
      uid: document.data()!.uid,
      username: document.data()!.username,
    });
  });
  return arr.reverse();
};

export const checkIfPostIsLiked = (post: IPost, uid: string) => {
  return post.likes.some((liker: ILike) => liker.uid === uid);
};

export const getUserDataForThisPost = async (uid: string) => {
  const userRef = doc(db, "users", uid);
  const userData = await getDoc(userRef);
  const { username, profilePic } = userData.data()!;

  return { username, profilePic };
};

export const createPost = async (
  uid: string,
  image: string,
  description: string
) => {
  const usersRef = doc(db, "users", uid);
  const userData = await getDoc(usersRef);
  const { username } = userData.data()!;

  const postsRef = collection(db, "users", uid, "posts");
  const docRef = doc(postsRef);
  const postID = docRef.id;
  const date = new Date();
  await setDoc(doc(postsRef, `${docRef.id}`), {
    image,
    description,
    likes: [],
    comments: [],
    username,
    id: postID,
    dateAdded: date,
    uid,
  });

  return { postID, username, date };
};

export const addComment = async (uid: string, id: string, comment: string) => {
  const postRef = doc(db, "users", uid, "posts", id);
  const postData = await getDoc(postRef);
  const arr: IComment[] = [];
  if (postData.data()!.comments.length > 0) {
    postData.data()!.comments.map((item: IComment) => {
      return arr.push(item);
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

  return arr;
};
