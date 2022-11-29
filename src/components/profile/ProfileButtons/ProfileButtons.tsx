import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { BiMessageSquareAdd } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { checkIfFollowed } from "utils/user.utils";
import { ButtonDmAdd } from "./ButtonDmAdd";
import { ButtonEditFollow } from "./ButtonEditFollow";
import { ButtonUnfollow } from "./ButtonUnfollow";
import { RootState } from "../../../store/store";
import {
  doFollowAction,
  doUnfollowAction,
} from "../../../store/actions/userActions";

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
  const dispatch = useAppDispatch();
  const { uid } = useAppSelector(
    (state: RootState) => state.rootReducer.currentUser
  );
  const { isOnOwnProfile, followers } = useAppSelector(
    (state: RootState) => state.rootReducer.currentProfileReducer
  );

  const location = useLocation();
  const id = location.pathname.slice(6);

  const onClickEditProfile = () => {
    navigate("/setup");
  };

  const onClickFollow = () => {
    dispatch(doFollowAction(uid, id));
  };

  const onClickUnfollow = () => {
    dispatch(doUnfollowAction(uid, id));
  };

  // const onClickDm = () => {
  //   console.log("dm");
  // };

  const onClickAdd = () => {
    onClickAddPost();
  };

  useEffect(() => {
    setIsFollowed(checkIfFollowed(followers, uid));
  }, [followers, uid]);

  return (
    <Wrapper>
      {isOnOwnProfile && (
        <>
          <ButtonEditFollow onClick={onClickEditProfile} text="Edit Profile" />
          <ButtonDmAdd element={<AiOutlinePlus />} onClick={onClickAdd} />
        </>
      )}
      {!isOnOwnProfile &&
        (!isFollowed ? (
          <ButtonEditFollow onClick={onClickFollow} text="Follow" />
        ) : (
          <ButtonUnfollow onClick={onClickUnfollow} text="Unfollow" />
        ))}
      {!isOnOwnProfile && <ButtonDmAdd element={<BiMessageSquareAdd />} />}
    </Wrapper>
  );
};
