import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { AppDispatch } from "../hooks";

export const DO_SETUP = "DO_SETUP";

export const doSetup =
  (uid: string, username: string, bio: string, profilePic: string) =>
  async (dispatch: AppDispatch) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      username: username,
      bio: bio,
      profilePic: profilePic,
    });
    dispatch({
      type: DO_SETUP,
      username: username,
      bio: bio,
      uid: uid,
      profilePic: profilePic,
    });
  };
