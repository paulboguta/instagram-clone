import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "services/firebase";

const addUserToCollection = async (email: string, uid: string) => {
  await setDoc(
    doc(db, "users", uid),
    {
      email,
      uid,
      username: "",
      bio: "",
      profilePic: "",
      theme: "themeLight",
      postCounter: 0,
      likedPosts: [],
      followers: [],
      following: [],
    },
    { merge: true }
  );
};

export const login = async (email: string, password: string) => {
  const user = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const signup = async (email: string, password: string) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  addUserToCollection(email, user.user.uid);
  return user;
};
