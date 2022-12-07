import styled from "styled-components";
import { ProfileDetails } from "../components/ProfileDetails/ProfileDetails";

interface IWrapperProps {
  loading: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(3, 1fr);

  @media (max-width: 1160px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  background-color: ${(props) => props.theme.backgroundPrimary};
  height: ${(props) => (props.loading ? "100vh" : "100%")};
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
