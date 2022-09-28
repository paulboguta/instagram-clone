import { Navbar } from "../../components/Navbar/Navbar";
import { ProfileDetails } from "../../components/profile/ProfileDetails";
import Background1 from "../../assets/background/background-1.jpeg";
import { Wrapper, Img, Posts } from "./ProfilePage.styles";
import { ProfileButtons } from "../../components/profile/ProfileButtons/ProfileButtons";
import { ProfilePost } from "../../components/post";

export const ProfilePage = () => {
  return (
    <Wrapper>
      <Navbar />
      <Img src={Background1} />
      <ProfileDetails />
      <ProfileButtons />
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
