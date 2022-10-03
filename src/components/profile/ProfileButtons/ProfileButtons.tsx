import styled from "styled-components";
import { ButtonDmAdd } from "./ButtonDmAdd";
import { ButtonEditFollow } from "./ButtonEditFollow";
import { ButtonUnfollow } from "./ButtonUnfollow";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiMessageSquareAdd } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useSignInWithGoogle } from "../../../features/auth/signInWithGoogle";
import { useContext } from "react";
import { ProfileResultContext } from "../../../contexts/ProfileResultContext";
import { RootState, useAppDispatch } from "../../../store/hooks";
import { doFollow } from "../../../store/actions/userActions";
import { doUnfollow } from "../../../store/actions/userActions";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../services/firebase";

export const ProfileButtons = () => {
  const navigate = useNavigate();
  const [userID, setUserID] = useState<string>("");
  const [isFollowed, setIsFollowed] = useState<boolean>();
  const [isOnOwnProfilePage, setIsOnOwnProfilePage] = useState<boolean>(false);
  const { profileClicked, resultClicked } = useContext(ProfileResultContext);
  const { signInWithGoogle } = useSignInWithGoogle();
  const dispatch = useAppDispatch();
  const currentUser = useSelector(
    (state: RootState) => state.rootReducer.currentUser
  );

  const id = window.location.pathname.slice(6);
  const url = window.location.pathname.split("/").pop();

  const setUser = () => {
    setUserID(currentUser.uid);
  };

  const getDocs = async () => {
    const usersRef = doc(db, "users", id);
    onSnapshot(usersRef, (doc) => {
      if (
        doc.data()!.followers.some((follower: any) => follower.uid === userID)
      ) {
        setIsFollowed(true);
      } else {
        setIsFollowed(false);
      }
    });
  };

  const onClickEditProfile = () => {
    navigate("/edit");
  };

  const onClickFollow = () => {
    dispatch(doFollow(userID, id));
  };

  const onClickUnfollow = () => {
    dispatch(doUnfollow(userID, id));
  };

  const onClickDm = () => {
    console.log("dm");
  };

  const onClickAdd = () => {
    console.log("add post");
  };

  useEffect(() => {
    setUser();
    if (userID === id) {
      setIsOnOwnProfilePage(true);
    } else {
      setIsOnOwnProfilePage(false);
    }
    getDocs();
  }, [
    currentUser,
    isOnOwnProfilePage,
    profileClicked,
    resultClicked,
    signInWithGoogle,
    url,
    onClickFollow,
    onClickUnfollow,
  ]);

  return (
    <Wrapper>
      {isOnOwnProfilePage && (
        <ButtonEditFollow onClick={onClickEditProfile} text="Edit Profile" />
      )}
      {isOnOwnProfilePage && <ButtonDmAdd element={<AiOutlinePlus />} />}

      {!isOnOwnProfilePage && !isFollowed && (
        <ButtonEditFollow onClick={onClickFollow} text="Follow" />
      )}
      {!isOnOwnProfilePage && isFollowed && (
        <ButtonUnfollow onClick={onClickUnfollow} text="Unfollow" />
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
