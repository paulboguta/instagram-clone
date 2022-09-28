import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Helvetica', sans-serif;
}
/* :root {
    --primary-font-color: rgb(0, 0, 0);
    --secondary-font-color: rgb(136, 136, 136);
    --nav-background-color: rgba(255, 255, 255, 0.733);
    --primary-transparent-color: rgba(255, 255, 255, 0.98);
    --user-menu-font-color: rgb(0, 0, 0);
    --save-color: rgb(73, 209, 107);
    --save-shadow-color: rgba(73, 209, 107, 0.336);
    --primary-background-color: rgb(255, 255, 255);
    --primary-border: 1px solid rgba(41, 41, 41, 0);
    --secondary-border: 1px solid rgb(206, 206, 206);
    --loading-gradient: linear-gradient(to right, #ffffff, #c2c2c2);
    --messages-sidebar-background: rgba(255, 255, 255, 0.87);
    --messages-bubble-background: #d3d3d3;
    --menu-hover-color: rgba(0, 0, 0, 0.1);
    --notification-type-color: rgb(75, 75, 75);
    --home-card-overlay: rgba(255, 255, 255, 0.85);
} */
  `;

export const themeLight = {
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

export const themeDark = {
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
