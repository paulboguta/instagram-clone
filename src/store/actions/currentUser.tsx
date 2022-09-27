import { doc, setDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { AppDispatch } from "../hooks";

export const SET_USER = "SET_USER";
export const LOG_OUT = "LOG_OUT";

export const setUser = (uid: string) => async (dispatch: AppDispatch) => {
  await setDoc(doc(db, "users", uid), {
    userID: uid,
  });
  dispatch({
    type: SET_USER,
    uid: uid,
  });
};

export default {
  setUser,
};
