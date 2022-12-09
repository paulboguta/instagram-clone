import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfilePosts } from "features/posts/services/posts.service";
import { IPost } from "features/posts/types";
import { Navbar } from "../../../components/Navbar/Navbar";
import Background1 from "../../../assets/background/background-1.jpeg";
import * as Styled from "./ProfilePage.styles";
import { ProfileButtons, FollowersModal, ProfileDetails } from "../components";
import { AddPostModal, ProfilePosts } from "../../posts/components";

export const ProfilePage = () => {
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [showAddPost, setShowAddPost] = useState(false);
  const { userID } = useParams();
  useEffect(() => {
    const getData = async () => {
      setPosts(await getProfilePosts(userID!));
    };
    getData();
  }, [userID]);

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
  // later change to context and portal
  useEffect(() => {
    setShowFollowers(false);
    setShowFollowing(false);
  }, [userID]);

  return (
    <Styled.Wrapper>
      {showAddPost && (
        <AddPostModal
          onClick={onClickClose}
          onClickConfirm={onClickConfirmAddPostHandler}
        />
      )}

      <Navbar />
      <Styled.Img src={Background1} />
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
          id={userID!}
          onClickHideModals={onClickHideModals}
        />
      )}
      {showFollowing && (
        <FollowersModal
          header="Following"
          modal="following"
          id={userID!}
          onClickHideModals={onClickHideModals}
        />
      )}
    </Styled.Wrapper>
  );
};
