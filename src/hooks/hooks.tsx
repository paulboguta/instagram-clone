import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../services/firebase";

export const useToggle = (defaultValue: boolean) => {
  const [value, setValue] = useState(defaultValue);

  const toggle = () => setValue(!value);

  return [value, toggle];
};

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<any>();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
};
