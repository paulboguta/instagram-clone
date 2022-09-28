import { createContext } from "react";

export type DarkModeContext = {
  darkMode: boolean;
  changeDarkModeOnClick(): void;
};

export const DarkModeContext = createContext<DarkModeContext>({
  darkMode: false,
  changeDarkModeOnClick: () => {},
});
