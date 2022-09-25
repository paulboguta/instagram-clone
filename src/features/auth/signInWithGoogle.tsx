import { auth, provider } from "../../services/firebase";
import { signInWithPopup } from "firebase/auth";
import { redirect } from "react-router-dom";
import React, { useState } from "react";
import { getAdditionalUserInfo } from "firebase/auth";
import { useAppDispatch } from "../../store/hooks";
import { setActiveUser } from "../../store/slices/userSlice/userSlice";

export const useSignInWithGoogle = () => {
  const dispatch = useAppDispatch();
  const [authing, setAuthing] = useState<boolean>(false);

  const signInWithGoogle = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setAuthing(true);
    signInWithPopup(auth, provider)
      .then(async (response) => {
        const isNew = getAdditionalUserInfo(response)!.isNewUser;

        dispatch(setActiveUser(response.user.uid));

        if (isNew) {
          redirect("/setup");
        } else {
          redirect("/");
        }
        setAuthing(false);
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  return { authing, signInWithGoogle };
};
