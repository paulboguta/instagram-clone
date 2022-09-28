import styled from "styled-components";
import { ButtonDmAdd } from "./ButtonDmAdd";
import { ButtonEditFollow } from "./ButtonEditFollow";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/hooks";
import { BiMessageSquareAdd } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useSignInWithGoogle } from "../../../features/auth/signInWithGoogle";
import { useContext } from "react";
import { ProfileResultContext } from "../../../contexts/ProfileResultContext";

export const ProfileButtons = () => {
  const navigate = useNavigate();
  const [userID, setUserID] = useState<string>("");
  const [isOnOwnProfilePage, setIsOnOwnProfilePage] = useState<boolean>(false);
  const currentUser = useAuth();
  const { profileClicked } = useContext(ProfileResultContext);
  const { signInWithGoogle } = useSignInWithGoogle();

  const onClickEditProfile = () => {
    navigate("/edit");
  };

  const onClickFollow = () => {
    console.log("follow");
  };

  const onClickDm = () => {
    console.log("dm");
  };

  const onClickAdd = () => {
    console.log("add post");
  };

  const id = window.location.pathname.slice(6);
  const url = window.location.pathname.split("/").pop();
  const setUser = async () => {
    await setUserID(currentUser.uid);
  };

  useEffect(() => {
    setUser();
    if (userID === id) {
      setIsOnOwnProfilePage(true);
    } else {
      setIsOnOwnProfilePage(false);
    }
  }, [currentUser, isOnOwnProfilePage, profileClicked, signInWithGoogle, url]);

  return (
    <Wrapper>
      {isOnOwnProfilePage && (
        <ButtonEditFollow onClick={onClickEditProfile} text="Edit Profile" />
      )}
      {isOnOwnProfilePage && <ButtonDmAdd element={<AiOutlinePlus />} />}

      {!isOnOwnProfilePage && (
        <ButtonEditFollow onClick={onClickFollow} text="Follow" />
      )}
      {!isOnOwnProfilePage && <ButtonDmAdd element={<BiMessageSquareAdd />} />}
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  @media (min-width: 1160px) {
    display: flex;
    justify-content: flex-end;
    height: 30px;
    margin-right: 90px;
  }
  display: flex;
  gap: 20px;
`;
