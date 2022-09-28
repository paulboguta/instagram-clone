import { Navbar } from "../../components/Navbar/Navbar";
import { ProfileDetails } from "../../components/profile/ProfileDetails";
import Background1 from "../../assets/background/background-1.jpeg";
import { Wrapper, Img, Posts } from "./ProfilePage.styles";
import { ProfileButtons } from "../../components/profile/ProfileButtons/ProfileButtons";
import { ProfilePost } from "../../components/post";

interface IProfilePageProps {
  onProfileClick(): void;
  profileClicked: boolean;
  onResultClick(): void;
  resultClicked: boolean;
}

export const ProfilePage = ({
  onProfileClick,
  profileClicked,
  onResultClick,
  resultClicked,
}: IProfilePageProps) => {
  return (
    <Wrapper>
      <Navbar onProfileClick={onProfileClick} onResultClick={onResultClick} />
      <Img src={Background1} />
      <ProfileDetails
        profileClicked={profileClicked}
        resultClicked={resultClicked}
      />
      <ProfileButtons profileClicked={profileClicked} />
      <Posts>
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
      </Posts>
    </Wrapper>
  );
};
