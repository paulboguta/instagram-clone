import { Routes, Route, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { SignUp } from "pages/SignUp/SignUp";
import { SignIn } from "pages/SignIn/SignIn";
import { GlobalStyle } from "./styles/globalStyles";
import store from "./store/store";
import { SetupPage } from "./pages/SetupPage/SetupPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { Feed } from "./pages/Feed/Feed";
import { DarkModeContext } from "./contexts/DarkModeContext";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { LikesModalContext } from "./contexts/LikesModalContext";
import { PostPage } from "./pages/PostPage/PostPage";
import { Theme } from "styles/Theme";

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
  const [darkMode, setDarkMode] = useState<boolean>(false);
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

  const changeDarkModeOnClick = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, [darkMode]);

  const onClickPost = useCallback(
    (id: string, event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setPostID(id);
      navigate(`/post/${id}`);
    },
    [navigate]
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
      <Theme>
        <LikesModalContext.Provider value={likesModalValues}>
          <Provider store={store}>
            <GlobalStyle />
            <App />
          </Provider>
        </LikesModalContext.Provider>
      </Theme>
    </DarkModeContext.Provider>
  );
};

export default AppWrapper;
