import { doc, getDoc } from "firebase/firestore";
import { db } from "services/firebase";

export const getUserProfileData = async (id: string) => {
  const usersRef = doc(db, "users", id);
  const data = await getDoc(usersRef);
  return data;
};
