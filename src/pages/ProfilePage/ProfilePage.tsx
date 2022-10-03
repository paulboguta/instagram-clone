import { Navbar } from "../../components/Navbar/Navbar";
import { ProfileDetails } from "../../components/profile/ProfileDetails";
import Background1 from "../../assets/background/background-1.jpeg";
import { Wrapper, Img, Posts } from "./ProfilePage.styles";
import { ProfileButtons } from "../../components/profile/ProfileButtons/ProfileButtons";
import { ProfilePost } from "../../components/post";
import { FollowersModal } from "../../components/profile/FollowersModal/FollowersModal";
import { useState } from "react";
import { FollowingFollowersContext } from "../../contexts/FollowingFollowersContext";

export const ProfilePage = () => {
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);

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

  return (
    <Wrapper>
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
        <ProfileButtons />
        <Posts>
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
        </Posts>
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
