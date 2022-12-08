import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { BiMessageSquareAdd } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useAppDispatch } from "store/store";
import { checkIfFollowed } from "features/user/utils/user.utils";
import {
  selectCurrentUser,
  updateFollowCurrentUser,
} from "features/user/store/currentUserSlice";
import {
  doFollowService,
  doUnfollowService,
} from "features/user/services/follow.service";
import { selectUsers, updateFollowUsers } from "features/user/store/usersSlice";
import { IUser } from "features/user/types";
import { useSelector } from "react-redux";
import { ButtonDmAdd } from "./ButtonDmAdd";
import { ButtonEditFollow } from "./ButtonEditFollow";
import { ButtonUnfollow } from "./ButtonUnfollow";

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
  const [isOnOwnProfile, setIsOnOwnProfile] = useState(false);
  const dispatch = useAppDispatch();
  const { uid } = useSelector(selectCurrentUser);
  const { userID } = useParams();
  const user = useSelector(selectUsers).find((u: IUser) => {
    return u.uid === userID;
  })!;

  const onClickEditProfile = () => {
    navigate("/setup");
  };

  const onClickFollow = async () => {
    const { newFollowing, newFollowers } = await doFollowService(uid, userID!);
    dispatch(updateFollowCurrentUser({ newFollowing, newFollowers }));
    dispatch(
      updateFollowUsers({
        newFollowing,
        newFollowers,
        uid1: uid,
        uid2: userID,
      })
    );
  };

  const onClickUnfollow = async () => {
    const { newFollowing, newFollowers } = await doUnfollowService(
      uid,
      userID!
    );
    dispatch(updateFollowCurrentUser({ newFollowing, newFollowers }));
    dispatch(
      updateFollowUsers({
        newFollowing,
        newFollowers,
        uid1: uid,
        uid2: userID,
      })
    );
  };

  // const onClickDm = () => {
  //   console.log("dm");
  // };

  const onClickAdd = () => {
    onClickAddPost();
  };

  useEffect(() => {
    setIsFollowed(checkIfFollowed(user?.followers, uid));
    setIsOnOwnProfile(userID === uid);
  }, [user?.followers, uid, userID]);

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
