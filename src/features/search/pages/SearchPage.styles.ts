import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: 768px) {
    background-color: ${(props) => props.theme.backgroundPrimary};
    width: 100vw;
    height: 100vh;
  }
`;

export const WrapperNav = styled.div`
  position: absolute;
  width: 100vw;
  bottom: 0;
`;
