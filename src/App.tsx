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
import React, { useState } from "react";
import { DarkModeContext } from "./contexts/DarkModeContext";
import { ProfileResultContext } from "./contexts/ProfileResultContext";
import { EditPage } from "./pages/EditPage/EditPage";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { LikesModalContext } from "./contexts/LikesModalContext";
import { PostPage } from "./pages/PostPage/PostPage";
import { useNavigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/user/:userID" element={<ProfilePage />} />
        <Route path="/" element={<Feed />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/post/:postID" element={<PostPage />} />
      </Routes>
    </>
  );
};

const AppWrapper = () => {
  const [theme, setTheme] = useState(themeLight);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [profileClicked, setProfileClicked] = useState<boolean>(false);
  const [resultClicked, setResultClicked] = useState<boolean>(false);
  const [showModalLikes, setShowModalLikes] = useState<boolean>(false);
  const [likesModalID, setLikesModalID] = useState("");
  const [postID, setPostID] = useState("");
  const navigate = useNavigate();

  const onClickShowLikesModal = (id: string) => {
    setLikesModalID(id);
    setShowModalLikes(true);
  };
  const onClickHideLikesModal = () => {
    setShowModalLikes(false);
  };

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

  const onClickPost = (
    id: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setPostID(id);
    navigate(`/post/${id}`);
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
        <LikesModalContext.Provider
          value={{
            showModalLikes,
            onClickHideLikesModal,
            onClickShowLikesModal,
            likesModalID,
            onClickPost,
            postID,
          }}
        >
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <App />
            </ThemeProvider>
          </Provider>
        </LikesModalContext.Provider>
      </ProfileResultContext.Provider>
    </DarkModeContext.Provider>
  );
};

export default AppWrapper;
