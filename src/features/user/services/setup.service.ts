import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../services/firebase";

export const doSetupService = async (
  uid: string,
  username: string,
  bio: string,
  profilePic: string,
  theme: string
) => {
  const docRef = doc(db, "users", uid);
  await updateDoc(docRef, {
    username,
    bio,
    profilePic,
    theme,
  });
};
