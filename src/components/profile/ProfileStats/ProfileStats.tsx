import { getUsersPostsAndFollowers } from "features/users/users.service";
import { collection, doc, onSnapshot } from "firebase/firestore";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "services/firebase";
import {
  Wrapper,
  Posts,
  FollowersButton,
  Gray,
  FollowingButton,
} from "./ProfileStats.style";

interface IProfileStatsProps {
  onClickShowFollowersModal: () => void;
  onClickShowFollowingModal: () => void;
}

export const ProfileStats = ({
  onClickShowFollowersModal,
  onClickShowFollowingModal,
}: IProfileStatsProps) => {
  const [posts, setPosts] = useState<number>(0);
  const [followersCounter, setFollowersCounter] = useState<number>(0);
  const [followingCounter, setFollowingCounter] = useState<number>(0);
  const location = useLocation();
  const id = location.pathname.slice(6);

  // const getData = async () => {
  //   // get data on load
  //   const data = await getUsersPostsAndFollowers(id);
  //   setPosts(data.posts);
  //   setFollowersCounter(data.followers.length);
  //   setFollowingCounter(data.following.length);
  // };

  // // listen to live changes of following/followers
  // const usersRef = doc(db, "users", id);
  // onSnapshot(usersRef, (user) => {
  //   setFollowersCounter(user.data()!.followers.length);
  //   setFollowingCounter(user.data()!.following.length);
  // });

  // // listen to live changes of posts
  // const postsRef = collection(db, `users/${id}/posts`);
  // onSnapshot(postsRef, async () => {
  //   const dataPosts = await getUsersPostsAndFollowers(id);
  //   setPosts(dataPosts.posts);
  // });

  // useEffect(() => {
  //   getData();
  // }, [id]);

  return (
    <Wrapper>
      <Posts>
        <Gray>{posts}</Gray>Posts
      </Posts>
      <FollowersButton onClick={onClickShowFollowersModal}>
        <h2>Followers</h2>
        <Gray>{followersCounter}</Gray>
      </FollowersButton>
      <FollowingButton onClick={onClickShowFollowingModal}>
        <h2>Following</h2>
        <Gray>{followingCounter}</Gray>
      </FollowingButton>
    </Wrapper>
  );
};
