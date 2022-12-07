import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { selectCurrentUser } from "features/user/store/currentUserSlice";
import { ITheme } from "./style.types";

interface IThemeProps {
  children: React.ReactNode;
}

export const themeLight: ITheme = {
  fontPrimary: "#000",
  fontSecondary: "rgb(136, 136, 136)",
  border1: "1px solid rgb(41, 41, 41, 0.1)",
  border2: "1px solid rgb(41, 41, 41)",
  backgroundPrimary: "rgb(255, 255, 255)",
  backgroundOpposite: "#121212 ",
  boxShadowPrimary: "0 0 16px 1px rgb(0 0 0 / 10%)",
  boxShadowSecondary: "0 0 16px 1px rgb(255 255 255 / 10%)",
  buttonHoverBackground: "#343434",
  buttonSetupProfilePicBackground: "#f2f1f1",
  buttonConfirm: "#fff",
  backgroundGlassNavbar: "rgba(255, 255, 255, 0.8)",
  backgroundGlassNavbar2: "rgba(255, 255, 255, 0.8)",
};

export const themeDark: ITheme = {
  fontPrimary: "#fff",
  fontSecondary: "rgb(136, 136, 136)",
  border1: "1px solid rgb(41, 41, 41)",
  border2: "1px solid rgb(41, 41, 41)",
  backgroundPrimary: "#121212 ",
  backgroundOpposite: "#fff",
  boxShadowPrimary: "0 0 16px 1px rgb(255 255 255 / 10%)",
  boxShadowSecondary: "0 0 16px 1px rgb(0 0 0 / 10%)",
  buttonHoverBackground: "#d9c7df",
  buttonSetupProfilePicBackground: "#2d2d2d",
  buttonConfirm: "#2d2d2d",
  backgroundGlassNavbar: "rgba(17, 19, 18, 0.8)",
  backgroundGlassNavbar2: "rgba(122, 125, 124, 0.8)",
};

export const Theme: React.FC<IThemeProps> = ({ children }: IThemeProps) => {
  const { theme } = useSelector(selectCurrentUser);

  return (
    <ThemeProvider theme={theme === "themeDark" ? themeDark : themeLight}>
      {children}
    </ThemeProvider>
  );
};
