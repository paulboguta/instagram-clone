import styled from "styled-components";
import { ProfileDetails } from "../../components/profile/ProfileDetails";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(3, 1fr);
  height: 100vh;
  @media (max-width: 1160px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

export const ProfileDetailsGrid = styled(ProfileDetails)`
  @media (min-width: 768px) {
    grid-area: 2 / 1 / 4 / 2;
  }
`;

export const Img = styled.img`
  @media (min-width: 768px) {
    grid-area: 1 / 1 / 2 / 3;
  }
  width: 100%;
  height: 400px;
`;

export const Posts = styled.div`
  grid-area: 3 / 2 / 4 / 3;

  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-content: center;

  @media (min-width: 1160px) {
    margin-top: -200px;
    width: 770px;
    position: absolute;
    right: 80px;
    top: 680px;
  }

  @media (max-width: 1160px) {
    margin-top: 50px;
  }

  @media (max-width: 1161px) and (min-width: 768px) {
    width: 600px;
  }

  @media (max-width: 768px) {
    grid-column-gap: 0;
    grid-row-gap: 0;
  }

  @media (max-width: 1660px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1660px) {
    grid-template-columns: repeat(4, 1fr);
    right: 330px;
  }

  @media (min-width: 2000px) {
    grid-template-columns: repeat(5, 1fr);
    right: 580px;
  }
`;
