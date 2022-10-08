import { Navbar } from "../../components/Navbar/Navbar";
import { ProfileDetails } from "../../components/profile/ProfileDetails";
import Background1 from "../../assets/background/background-1.jpeg";
import { Wrapper, Img } from "./ProfilePage.styles";
import { ProfileButtons } from "../../components/profile/ProfileButtons/ProfileButtons";
import { ProfilePost } from "../../components/post";
import { FollowersModal } from "../../components/profile/FollowersModal/FollowersModal";
import { useState } from "react";
import { FollowingFollowersContext } from "../../contexts/FollowingFollowersContext";
import { AddPostModal } from "../../components/post/AddPostModal/AddPostModal";
import { ProfilePosts } from "../../components/post/ProfilePosts/ProfilePosts";

export const ProfilePage = () => {
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showAddPost, setShowAddPost] = useState(false);
  const [onClickConfirmAddPost, setOnClickConfirmAddPost] = useState(false);

  const onClickShowFollowersModal = () => {
    setShowFollowers((showFollowers) => !showFollowers);
  };

  const onClickShowFollowingModal = () => {
    setShowFollowing((showFollowing) => !showFollowing);
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

  const onClickConfirmAddPostHandler = () => {
    setOnClickConfirmAddPost((onClickAddPost) => !onClickAddPost);
    setShowAddPost(false);
  };

  return (
    <Wrapper>
      {showAddPost && (
        <AddPostModal
          onClick={onClickClose}
          onClickConfirm={onClickConfirmAddPostHandler}
        />
      )}
      <FollowingFollowersContext.Provider
        value={{
          showFollowers,
          showFollowing,
          onClickShowFollowersModal,
          onClickShowFollowingModal,
          onClickHideModals,
        }}
      >
        <Navbar />
        <Img src={Background1} />
        <ProfileDetails />
        <ProfileButtons onClickAddPost={onClickAddPost} />
        <ProfilePosts confirmed={onClickConfirmAddPost} />
        {showFollowers && (
          <FollowersModal header="Followers" modal="followers" />
        )}
        {showFollowing && (
          <FollowersModal header="Following" modal="following" />
        )}
      </FollowingFollowersContext.Provider>
    </Wrapper>
  );
};
