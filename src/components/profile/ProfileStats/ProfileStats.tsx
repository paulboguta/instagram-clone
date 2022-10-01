import { doc, onSnapshot } from "firebase/firestore";
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

export const ProfileStats = () => {
  const [posts, setPosts] = useState<number>(0);
  const [followersCounter, setFollowersCounter] = useState<number>(0);
  const [followingCounter, setFollowingCounter] = useState<number>(0);
  const id = window.location.pathname.slice(6);
  const url = window.location.pathname;
  const { profileClicked, resultClicked } = useContext(ProfileResultContext);

  const getDocs = async () => {
    const usersRef = doc(db, "users", id);
    onSnapshot(usersRef, (doc) => {
      setPosts(doc.data()!.postCounter);
      setFollowersCounter(doc.data()!.followers.length);
      setFollowingCounter(doc.data()!.following.length);
    });
  };

  useEffect(() => {
    getDocs();
  }, [resultClicked, profileClicked, url]);

  return (
    <Wrapper>
      <Posts>
        <Gray>{posts}</Gray>Posts
      </Posts>
      <FollowersButton>
        <h2>Followers</h2>
        <Gray>{followersCounter}</Gray>
      </FollowersButton>
      <FollowingButton>
        <h2>Following</h2>
        <Gray>{followingCounter}</Gray>
      </FollowingButton>
    </Wrapper>
  );
};
