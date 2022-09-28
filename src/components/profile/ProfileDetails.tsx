import { ProfileImg } from "./ProfileImg/ProfileImg";
import { ProfileStats } from "./ProfileStats/ProfileStats";
import { Wrapper, Username, Bio } from "./ProfileDetails.styled";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../services/firebase";
import { useAuth } from "../../hooks/hooks";
import { useContext } from "react";
import { ProfileResultContext } from "../../contexts/ProfileResultContext";

export const ProfileDetails = () => {
  const [username, setUsername] = useState<string>("");
  const [profilePic, setProfilePic] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const currentUser = useAuth();
  const { profileClicked, resultClicked } = useContext(ProfileResultContext);
  const id = window.location.pathname.slice(6);
  const url = window.location.pathname.split("/").pop();

  const getDocs = async () => {
    const usersRef = doc(db, "users", id);
    const data = await getDoc(usersRef);
    setUsername(data.data()!.username);
    setProfilePic(data.data()!.profilePic);
    setBio(data.data()!.bio);
  };

  useEffect(() => {
    getDocs();
  }, [currentUser, profileClicked, url, resultClicked]);

  return (
    <Wrapper>
      <ProfileImg profileImg={profilePic} />
      <Username>@{username}</Username>
      <hr />
      <Bio>{bio}</Bio>
      <hr />
      <ProfileStats />
    </Wrapper>
  );
};
