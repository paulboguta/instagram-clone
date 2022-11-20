import { doc, getDoc } from "firebase/firestore";
import { db } from "services/firebase";
import { AppDispatch } from "store/store";
import { ActionTypes } from "store/types";

export const setCurrentUser =
  (uid: string) => async (dispatch: AppDispatch) => {
    const docRef = doc(db, "users", uid);
    const user = (await getDoc(docRef)).data();
    if (user) {
      dispatch({
        type: ActionTypes.SET_CURRENT_USER,
        uid: user.uid,
        username: user.username,
        bio: user.bio,
        profilePic: user.profilePic,
        theme: user.theme,
        postCounter: user.postCounter,
        likedPosts: user.likedPosts,
        followers: user.followers,
        following: user.following,
      });
    }
  };
