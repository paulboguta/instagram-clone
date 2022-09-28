import { Navbar } from "../../components/Navbar/Navbar";
import { ProfileDetails } from "../../components/profile/ProfileDetails";
import Background1 from "../../assets/background/background-1.jpeg";
import { Wrapper, Img } from "./ProfilePage.styles";
import { ProfileButtons } from "../../components/profile/ProfileButtons/ProfileButtons";
import { useState } from "react";

export const ProfilePage = () => {
  return (
    <Wrapper>
      <Navbar />
      <Img src={Background1} />
      <ProfileDetails />
      <ProfileButtons />
    </Wrapper>
  );
};
