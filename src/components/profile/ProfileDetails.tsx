import { Wrapper, Username, Bio } from "./ProfileDetails.styled";
import { ProfileStats } from "./ProfileStats/ProfileStats";
import { ProfileImg } from "./ProfileImg/ProfileImg";

interface IProfileDetialsProps {
  username: string;
  profilePic: string;
  bio: string;
  onClickShowFollowersModal: () => void;
  onClickShowFollowingModal: () => void;
}

export const ProfileDetails = ({
  username,
  profilePic,
  bio,
  onClickShowFollowersModal,
  onClickShowFollowingModal,
}: IProfileDetialsProps) => {
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
