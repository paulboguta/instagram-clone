import { useSelector } from "react-redux";
import { selectUsers } from "features/user/store/usersSlice";
import { IUser } from "features/user/types";
import { useParams } from "react-router-dom";
import { Wrapper, Username, Bio } from "./ProfileDetails.styles";
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
    <Wrapper>
      <ProfileImg profileImg={user?.profilePic!} />
      <Username>@{user?.username}</Username>
      <hr />
      <Bio>{user?.bio}</Bio>
      <hr />
      <ProfileStats
        onClickShowFollowersModal={onClickShowFollowersModal}
        onClickShowFollowingModal={onClickShowFollowingModal}
      />
    </Wrapper>
  );
};
