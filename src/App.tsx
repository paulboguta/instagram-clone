import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { SignUp } from "features/auth/pages/SignUp";
import { SignIn } from "features/auth/pages/SignIn";
import { selectCurrentUser } from "features/user/store/currentUserSlice";
import { Chat } from "features/chat/pages/Chat";
import { SetupPage } from "./features/setup/pages/SetupPage";
import { ProfilePage } from "./features/user/pages/ProfilePage";
import { Feed } from "./pages/Feed/Feed";
import { SearchPage } from "./features/search/pages/SearchPage";
import { PostPage } from "./features/posts/pages/PostPage";

export const App = () => {
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
      <Route path="/messages" element={<Chat />} />
    </Routes>
  );
};
