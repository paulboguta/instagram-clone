import styled from "styled-components";
import { ProfileDetails } from "../../components/profile/ProfileDetails";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(3, 1fr);
  height: 100vh;
  @media (max-width: 768px) {
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

// buttons follow edit etc grid-area: 2 / 2 / 3 / 3
// posts grid-area: 3 / 2 / 4 / 3

export const Img = styled.img`
  @media (min-width: 768px) {
    grid-area: 1 / 1 / 2 / 3;
  }
  width: 100%;
  height: 400px;
`;
