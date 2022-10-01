import { GlobalStyle, themeDark, themeLight } from "./styles/globalStyles";
import { Routes, Route } from "react-router-dom";
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
import { ProfileResultContext } from "./contexts/ProfileResultContext";
import { EditPage } from "./pages/EditPage/EditPage";
import { SearchPage } from "./pages/SearchPage/SearchPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/signup"
          element={
            <AuthRoute>
              <SignupPage />
            </AuthRoute>
          }
        />
        <Route
          path="/setup"
          element={
            <AuthRoute>
              <SetupPage />
            </AuthRoute>
          }
        />
        <Route path="/user/:userID" element={<ProfilePage />} />
        <Route
          path="/"
          element={
            <AuthRoute>
              <Feed />
            </AuthRoute>
          }
        />
        <Route
          path="/edit"
          element={
            <AuthRoute>
              <EditPage />
            </AuthRoute>
          }
        />
        <Route
          path="/search"
          element={
            <AuthRoute>
              <SearchPage />
            </AuthRoute>
          }
        />
      </Routes>
    </>
  );
};

const AppWrapper = () => {
  const [theme, setTheme] = useState(themeLight);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [profileClicked, setProfileClicked] = useState<boolean>(false);
  const [resultClicked, setResultClicked] = useState<boolean>(false);

  const changeDarkModeOnClick = () => {
    setDarkMode((darkMode) => !darkMode);
    darkMode ? setTheme(themeDark) : setTheme(themeLight);
  };

  const onProfileClick = () => {
    setProfileClicked((profileClicked) => !profileClicked);
  };

  const onResultClick = () => {
    setResultClicked((resultClicked) => !resultClicked);
  };

  return (
    <DarkModeContext.Provider value={{ changeDarkModeOnClick, darkMode }}>
      <ProfileResultContext.Provider
        value={{
          onProfileClick,
          onResultClick,
          profileClicked,
          resultClicked,
        }}
      >
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </Provider>
      </ProfileResultContext.Provider>
    </DarkModeContext.Provider>
  );
};

export default AppWrapper;
