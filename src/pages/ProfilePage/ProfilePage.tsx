import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "hooks/hooks";
import { setCurrentProfileAction } from "store/actions/currentProfileAction";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { Navbar } from "../../components/Navbar/Navbar";
import { ProfileDetails } from "../../components/profile/ProfileDetails";
import Background1 from "../../assets/background/background-1.jpeg";
import { Wrapper, Img } from "./ProfilePage.styles";
import { ProfileButtons } from "../../components/profile/ProfileButtons/ProfileButtons";
import { FollowersModal } from "../../components/profile/FollowersModal/FollowersModal";
import { AddPostModal } from "../../components/post/AddPostModal/AddPostModal";
import { ProfilePosts } from "../../components/post/ProfilePosts/ProfilePosts";

export const ProfilePage = () => {
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showAddPost, setShowAddPost] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const { uid } = useSelector(
    (state: RootState) => state.rootReducer.currentUser
  );
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
