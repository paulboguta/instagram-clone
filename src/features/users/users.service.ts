import {
  collection,
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "services/firebase";
import { IFollower } from "types/user.types";

export const getUserProfileData = async (id: string) => {
  const usersRef = doc(db, "users", id);
  const data = await getDoc(usersRef);
  return data;
};

export const getUsersPostsAndFollowers = async (id: string) => {
  const usersRef = doc(db, "users", id);
  const user = await getDoc(usersRef);
  const postsRef = collection(db, `users/${id}/posts`);
  const posts = await getDocs(postsRef);
  const data = {
    posts: posts.size,
    followers: user.data()!.followers.length,
    following: user.data()!.following.length,
  };

  return data;
};

export const checkIfFollowed = (
  document: DocumentSnapshot<DocumentData>,
  uid: string
) => {
  return document
    .data()!
    .followers.some((follower: IFollower) => follower.uid === uid);
};
