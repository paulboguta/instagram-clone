import { Routes, Route, useLocation } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { SignUp } from "pages/SignUp/SignUp";
import { SignIn } from "pages/SignIn/SignIn";
import { Theme } from "styles/Theme";
import { selectCurrentUser } from "user/store/slices/currentUserSlice";
import { GlobalStyle } from "./styles/globalStyles";
import store from "./store/store";
import { SetupPage } from "./pages/SetupPage/SetupPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { Feed } from "./pages/Feed/Feed";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { PostPage } from "./pages/PostPage/PostPage";

const App = () => {
  // navigate to signin if user is not signed in
  const [showModalLikes, setShowModalLikes] = useState<boolean>(false);
  const [postID, setPostID] = useState("");

  const onClickShowModalLikes = (id: string) => {
    setShowModalLikes(true);
    setPostID(id);
  };

  const onClickHideModalLikes = () => {
    setShowModalLikes(false);
  };

  // on url change also hide likes modal
  const location = useLocation();
  const url = location.pathname.split("/").pop();
  useEffect(() => {
    setShowModalLikes(false);
  }, [url]);

  const { uid } = useSelector(selectCurrentUser);

  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/setup" element={<SetupPage />} />
      <Route path="/user/:userID" element={<ProfilePage />} />
      <Route
        path="/"
        element={
          uid.length ? (
            <Feed
              onClickShowModalLikes={onClickShowModalLikes}
              postID={postID}
              onClickHideModalLikes={onClickHideModalLikes}
              showModalLikes={showModalLikes}
            />
          ) : (
            <SignUp />
          )
        }
      />
      <Route path="/search" element={<SearchPage />} />
      <Route
        path="/post/:postID"
        element={
          <PostPage
            onClickShowModalLikes={onClickShowModalLikes}
            onClickHideModalLikes={onClickHideModalLikes}
            showModalLikes={showModalLikes}
          />
        }
      />
    </Routes>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <Theme>
        <GlobalStyle />
        <App />
      </Theme>
    </Provider>
  );
};

export default AppWrapper;
