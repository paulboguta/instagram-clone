import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { Wrapper, Username, Bio } from "./ProfileDetails.styled";
import { ProfileStats } from "./ProfileStats/ProfileStats";
import { ProfileImg } from "./ProfileImg/ProfileImg";

interface IProfileDetialsProps {
  onClickShowFollowersModal: () => void;
  onClickShowFollowingModal: () => void;
}

export const ProfileDetails = ({
  onClickShowFollowersModal,
  onClickShowFollowingModal,
}: IProfileDetialsProps) => {
  const { username, profilePic, bio } = useSelector(
    (state: RootState) => state.rootReducer.currentProfileReducer
  );
  return (
    <Wrapper>
      <ProfileImg profileImg={profilePic} />
      <Username>@{username}</Username>
      <hr />
      <Bio>{bio}</Bio>
      <hr />
      <ProfileStats
        onClickShowFollowersModal={onClickShowFollowersModal}
        onClickShowFollowingModal={onClickShowFollowingModal}
      />
    </Wrapper>
  );
};
