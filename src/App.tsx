import { Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider, useSelector } from "react-redux";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { SignUp } from "pages/SignUp/SignUp";
import { SignIn } from "pages/SignIn/SignIn";
import { GlobalStyle, themeDark, themeLight } from "./styles/globalStyles";
import store from "./store/store";
import { SetupPage } from "./pages/SetupPage/SetupPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { Feed } from "./pages/Feed/Feed";
import { DarkModeContext } from "./contexts/DarkModeContext";
import { ProfileResultContext } from "./contexts/ProfileResultContext";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { LikesModalContext } from "./contexts/LikesModalContext";
import { PostPage } from "./pages/PostPage/PostPage";
import { RootState } from "./store/store";

const App = () => {
  // navigate to signin if user is not signed in
  // const { uid } = useSelector(
  //   (state: RootState) => state.rootReducer.currentUser
  // );
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (uid === "") {
  //     navigate("/signup");
  //   }
  // }, []);
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/setup" element={<SetupPage />} />
      <Route path="/user/:userID" element={<ProfilePage />} />
      <Route path="/" element={<Feed />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/post/:postID" element={<PostPage />} />
    </Routes>
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

  // on url change also hide likes modal
  const url = window.location.pathname.split("/").pop();
  useEffect(() => {
    setShowModalLikes(false);
  }, [url]);

  const changeDarkModeOnClick = () => {
    setDarkMode((prev) => !prev);
    setTheme(darkMode ? themeDark : themeLight);
  };

  const onProfileClick = () => {
    setProfileClicked((prev) => !prev);
  };

  const onResultClick = () => {
    setResultClicked((prev) => !prev);
  };

  const onClickPost = useCallback(
    (id: string, event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setPostID(id);
      navigate(`/post/${id}`);
    },
    [navigate]
  );

  const profileResultValues = useMemo(
    () => ({
      onProfileClick,
      onResultClick,
      profileClicked,
      resultClicked,
    }),
    [profileClicked, resultClicked]
  );

  const likesModalValues = useMemo(
    () => ({
      showModalLikes,
      onClickHideLikesModal,
      onClickShowLikesModal,
      likesModalID,
      onClickPost,
      postID,
    }),
    [likesModalID, onClickPost, postID, showModalLikes]
  );

  const darkModeValues = useMemo(
    () => ({ changeDarkModeOnClick, darkMode }),
    [changeDarkModeOnClick, darkMode]
  );

  return (
    <DarkModeContext.Provider value={darkModeValues}>
      <ProfileResultContext.Provider value={profileResultValues}>
        <LikesModalContext.Provider value={likesModalValues}>
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
