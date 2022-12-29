import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Helvetica', sans-serif;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar {
  display: none;
}

img {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
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

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
`;
