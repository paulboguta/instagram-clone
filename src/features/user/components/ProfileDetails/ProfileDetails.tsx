import { useSelector } from "react-redux";
import { selectUsers } from "features/user/store/usersSlice";
import { IUser } from "features/user/types";
import { useParams } from "react-router-dom";
import * as Styled from "./ProfileDetails.styles";
import { ProfileStats } from "../ProfileStats/ProfileStats";
import { ProfileImg } from "../ProfileImg/ProfileImg";

interface IProfileDetialsProps {
  onClickShowFollowersModal: () => void;
  onClickShowFollowingModal: () => void;
}

export const ProfileDetails = ({
  onClickShowFollowersModal,
  onClickShowFollowingModal,
}: IProfileDetialsProps) => {
  const { userID } = useParams();
  const user = useSelector(selectUsers).find((u: IUser) => {
    return u.uid === userID;
  });
  return (
    <Styled.Wrapper>
      <ProfileImg profileImg={user?.profilePic!} />
      <Styled.Username>@{user?.username}</Styled.Username>
      <hr />
      <Styled.Bio>{user?.bio}</Styled.Bio>
      <hr />
      <ProfileStats
        onClickShowFollowersModal={onClickShowFollowersModal}
        onClickShowFollowingModal={onClickShowFollowingModal}
      />
    </Styled.Wrapper>
  );
};
