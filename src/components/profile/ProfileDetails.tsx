import { Wrapper, Username, Bio } from "./ProfileDetails.styled";
import { ProfileStats } from "./ProfileStats/ProfileStats";
import { ProfileImg } from "./ProfileImg/ProfileImg";

interface IProfileDetialsProps {
  username: string;
  profilePic: string;
  bio: string;
}

export const ProfileDetails = ({
  username,
  profilePic,
  bio,
}: IProfileDetialsProps) => {
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
