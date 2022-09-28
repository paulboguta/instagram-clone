import { GlobalStyle, themeDark, themeLight } from "./styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./store/store";
import { SignupPage } from "./pages/Signup";
import { SetupPage } from "./pages/SetupPage/SetupPage";
import { AuthRoute } from "./features/auth/AuthRoute";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { Feed } from "./pages/Feed/Feed";
import { useState } from "react";
import { DarkModeContext } from "./contexts/DarkModeContext";
import { EditPage } from "./pages/EditPage/EditPage";

const App = () => {
  const [profileClicked, setProfileClicked] = useState<boolean>(false);

  const onProfileClick = () => {
    setProfileClicked((profileClicked) => !profileClicked);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route
          path="/user/:userID" // to change /user/:uid
          element={
            <ProfilePage
              onProfileClick={onProfileClick}
              profileClicked={profileClicked}
            />
          }
        />
        <Route path="/" element={<Feed onProfileClick={onProfileClick} />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const AppWrapper = () => {
  const [theme, setTheme] = useState(themeLight);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const changeDarkModeOnClick = () => {
    setDarkMode((darkMode) => !darkMode);
    darkMode ? setTheme(themeDark) : setTheme(themeLight);
  };

  return (
    <DarkModeContext.Provider value={{ changeDarkModeOnClick, darkMode }}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </DarkModeContext.Provider>
  );
};

export default AppWrapper;
