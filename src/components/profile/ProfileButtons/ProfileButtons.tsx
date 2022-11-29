import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { BiMessageSquareAdd } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { doc, onSnapshot } from "firebase/firestore";
import { checkIfFollowed } from "utils/user.utils";
import { ButtonDmAdd } from "./ButtonDmAdd";
import { ButtonEditFollow } from "./ButtonEditFollow";
import { ButtonUnfollow } from "./ButtonUnfollow";
import { RootState } from "../../../store/store";
import { doFollow, doUnfollow } from "../../../store/actions/userActions";
import { db } from "../../../services/firebase";

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

interface IProfileButtonsProps {
  onClickAddPost(): void;
}

export const ProfileButtons = ({ onClickAddPost }: IProfileButtonsProps) => {
  const navigate = useNavigate();
  const [isFollowed, setIsFollowed] = useState<boolean>(false);
  const [isOnOwnProfilePage, setIsOnOwnProfilePage] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { uid } = useAppSelector(
    (state: RootState) => state.rootReducer.currentUser
  );

  const location = useLocation();
  const id = location.pathname.slice(6);

  const onClickEditProfile = () => {
    navigate("/setup");
  };

  const onClickFollow = () => {
    dispatch(doFollow(uid, id));
  };

  const onClickUnfollow = () => {
    dispatch(doUnfollow(uid, id));
  };

  // const onClickDm = () => {
  //   console.log("dm");
  // };

  const onClickAdd = () => {
    onClickAddPost();
  };

  // listen for live changes when user clicks follow/unfollow
  const usersRef = doc(db, "users", id);
  onSnapshot(usersRef, (document) => {
    setIsFollowed(checkIfFollowed(document, uid));
  });

  useEffect(() => {
    setIsOnOwnProfilePage(uid === id);
  }, [id, uid]);

  return (
    <Wrapper>
      {isOnOwnProfilePage && (
        <>
          <ButtonEditFollow onClick={onClickEditProfile} text="Edit Profile" />
          <ButtonDmAdd element={<AiOutlinePlus />} onClick={onClickAdd} />
        </>
      )}
      {!isOnOwnProfilePage &&
        (!isFollowed ? (
          <ButtonEditFollow onClick={onClickFollow} text="Follow" />
        ) : (
          <ButtonUnfollow onClick={onClickUnfollow} text="Unfollow" />
        ))}
      {!isOnOwnProfilePage && <ButtonDmAdd element={<BiMessageSquareAdd />} />}
    </Wrapper>
  );
};
