import { useCallback, useEffect, useState } from "react";
import { getUserProfileData } from "features/users/users.service";
import { useLocation } from "react-router-dom";
import { getProfilePosts } from "features/posts/profilePosts.service";
import { IPost } from "types/post.types";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "services/firebase";
import { Navbar } from "../../components/Navbar/Navbar";
import { ProfileDetails } from "../../components/profile/ProfileDetails";
import Background1 from "../../assets/background/background-1.jpeg";
import { Wrapper, Img } from "./ProfilePage.styles";
import { ProfileButtons } from "../../components/profile/ProfileButtons/ProfileButtons";
import { FollowersModal } from "../../components/profile/FollowersModal/FollowersModal";
import { AddPostModal } from "../../components/post/AddPostModal/AddPostModal";
import { ProfilePosts } from "../../components/post/ProfilePosts/ProfilePosts";

export const ProfilePage = () => {
  const [user, setUser] = useState({
    username: "",
    profilePic: "",
    bio: "",
  });
  const [posts, setPosts] = useState<IPost[]>([]);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showAddPost, setShowAddPost] = useState(false);
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

  // render posts on load
  const getProfilePostsData = useCallback(async () => {
    setPosts(await getProfilePosts(id));
  }, [id]);

  // listen to live post changes
  const postsRef = collection(db, "users", id, "posts");
  onSnapshot(postsRef, async () => {
    getProfilePostsData();
  });

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
    getProfilePostsData();
  }, [getProfilePostsData, id]);

  return (
    <Wrapper>
      {showAddPost && (
        <AddPostModal
          onClick={onClickClose}
          onClickConfirm={onClickConfirmAddPostHandler}
        />
      )}

      <Navbar />
      <Img src={Background1} />
      <ProfileDetails
        username={user.username}
        profilePic={user.profilePic}
        bio={user.bio}
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
