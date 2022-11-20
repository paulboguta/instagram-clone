import { createContext } from "react";

interface IDarkModeContext {
  darkMode: boolean;
  changeDarkModeOnClick(): void;
}

export const DarkModeContext = createContext<IDarkModeContext>({
  darkMode: false,
  changeDarkModeOnClick: () => {},
});
