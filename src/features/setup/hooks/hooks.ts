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
