import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "services/firebase";
import { IUser } from "types/user.types";

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

export const getAllUsers = async () => {
  const usersRef = collection(db, "users");
  const users = await getDocs(usersRef);
  const arr: IUser[] = [];

  users.forEach((user: QueryDocumentSnapshot<DocumentData>) => {
    arr.push({
      username: user.data()!.username,
      profilePic: user.data()!.profilePic,
      bio: user.data()!.bio,
      uid: user.data()!.uid,
      postCounter: user.data()!.postCounter,
      likedPosts: user.data()!.likedPosts,
      followers: user.data()!.followers,
      following: user.data()!.following,
      theme: user.data()!.theme,
    });
  });
  return arr;
};
