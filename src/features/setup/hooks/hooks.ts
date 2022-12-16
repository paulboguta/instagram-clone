import { selectCurrentUser } from "features/user/store/currentUserSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useDarkMode = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { theme } = useSelector(selectCurrentUser);

  useEffect(() => {
    setIsActive(theme === "themeLight");
  }, [theme]);

  return { isActive };
};

interface IUserData {
  username: string;
  bio: string;
  profilePic: string;
}

export const useSetup = () => {
  const user = useSelector(selectCurrentUser);
  const [userData, setUserData] = useState<IUserData>({
    username: "",
    bio: "",
    profilePic: "",
  });

  useEffect(() => {
    if (user.bio.length || user.username.length || user.profilePic.length) {
      setUserData({
        username: user.username,
        bio: user.bio,
        profilePic: user.profilePic,
      });
    }
  }, [user.bio, user.profilePic, user.username]);

  return { userData, setUserData, theme: user.theme, uid: user.uid };
};
