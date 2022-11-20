import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { ProfileResultContext } from "../../../contexts/ProfileResultContext";
import { db } from "../../../services/firebase";
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
  const id = window.location.pathname.slice(6);
  const url = window.location.pathname;
  const { profileClicked, resultClicked } = useContext(ProfileResultContext);

  const getData = async () => {
    const usersRef = doc(db, "users", id);

    // getting all posts from user and displaying number of posts
    const postsRef = collection(db, `users/${id}/posts`);
    const posts = await getDocs(postsRef);
    const arr: any[] = [];
    posts.forEach((doc) => {
      arr.push(doc.data()!);
    });
    setPosts(arr.length);

    onSnapshot(usersRef, (doc) => {
      setFollowersCounter(doc.data()!.followers.length);
      setFollowingCounter(doc.data()!.following.length);
    });
  };

  useEffect(() => {
    getData();
  }, [resultClicked, profileClicked, url]);

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
