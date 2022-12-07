import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "hooks/hooks";
import { setCurrentProfileAction } from "store/actions/currentProfileAction";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { selectCurrentUser } from "features/user/store/currentUserSlice";
import { Navbar } from "../../../components/Navbar/Navbar";
import Background1 from "../../../assets/background/background-1.jpeg";
import { Wrapper, Img } from "./ProfilePage.styles";
import { ProfileButtons, FollowersModal, ProfileDetails } from "../components";
import { AddPostModal, ProfilePosts } from "../../posts/components";

export const ProfilePage = () => {
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showAddPost, setShowAddPost] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const { uid } = useSelector(selectCurrentUser);
  const { posts } = useSelector(
    (state: RootState) => state.rootReducer.currentProfileReducer
  );
  const location = useLocation();
  const id = location.pathname.slice(6);

  const onClickShowFollowersModal = () => {
    setShowFollowers((prev) => !prev);
  };

  const onClickShowFollowingModal = () => {
    setShowFollowing((prev) => !prev);
  };

  const onClickHideModals = () => {
    setShowFollowers(false);
    setShowFollowing(false);
  };

  const onClickClose = () => {
    setShowAddPost(false);
  };

  const onClickAddPost = () => {
    setShowAddPost(true);
  };

  const onClickConfirmAddPostHandler = async () => {
    setShowAddPost(false);
  };

  // hide modals on url change => search/navbar/opening posts/dms etc..
  useEffect(() => {
    setShowFollowers(false);
    setShowFollowing(false);
  }, [location.pathname]);

  useEffect(() => {
    dispatch(setCurrentProfileAction(id, uid)).then(() => setLoading(false));
  }, [dispatch, id, uid]);

  return (
    <Wrapper loading={loading}>
      {showAddPost && (
        <AddPostModal
          onClick={onClickClose}
          onClickConfirm={onClickConfirmAddPostHandler}
        />
      )}

      <Navbar />
      <Img src={Background1} />
      <ProfileDetails
        onClickShowFollowersModal={onClickShowFollowersModal}
        onClickShowFollowingModal={onClickShowFollowingModal}
      />
      <ProfileButtons onClickAddPost={onClickAddPost} />
      <ProfilePosts data={posts} />
      {showFollowers && (
        <FollowersModal
          header="Followers"
          modal="followers"
          id={id}
          onClickHideModals={onClickHideModals}
        />
      )}
      {showFollowing && (
        <FollowersModal
          header="Following"
          modal="following"
          id={id}
          onClickHideModals={onClickHideModals}
        />
      )}
    </Wrapper>
  );
};
