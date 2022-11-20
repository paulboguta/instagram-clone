import { useEffect, useState } from "react";
import { getUserProfileData } from "features/users/users.service";
import { useLocation } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { ProfileDetails } from "../../components/profile/ProfileDetails";
import Background1 from "../../assets/background/background-1.jpeg";
import { Wrapper, Img } from "./ProfilePage.styles";
import { ProfileButtons } from "../../components/profile/ProfileButtons/ProfileButtons";
import { FollowersModal } from "../../components/profile/FollowersModal/FollowersModal";
import { FollowingFollowersContext } from "../../contexts/FollowingFollowersContext";
import { AddPostModal } from "../../components/post/AddPostModal/AddPostModal";
import { ProfilePosts } from "../../components/post/ProfilePosts/ProfilePosts";

export const ProfilePage = () => {
  const [user, setUser] = useState({
    username: "",
    profilePic: "",
    bio: "",
  });
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showAddPost, setShowAddPost] = useState(false);
  const [onClickConfirmAddPost, setOnClickConfirmAddPost] = useState(false);
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

  const onClickConfirmAddPostHandler = () => {
    setOnClickConfirmAddPost((prev) => !prev);
    setShowAddPost(false);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getUserProfileData(id);

      setUser({
        username: data.data()!.username,
        profilePic: data.data()!.profilePic,
        bio: data.data()!.bio,
      });
    };
    getData();
  }, [id]);

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
        <ProfileDetails
          username={user.username}
          profilePic={user.profilePic}
          bio={user.bio}
        />
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
