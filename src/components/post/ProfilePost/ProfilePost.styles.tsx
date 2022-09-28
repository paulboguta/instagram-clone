import styled from "styled-components";

export const Wrapper = styled.button`
  height: 245px;
  width: 245px;
  border: none;
  cursor: pointer;
  border-radius: 16px;

  @media (max-width: 768px) {
    width: 33vw;
    height: 33vw;
    border-radius: 0px;
  }

  @media (max-width: 1160px) and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 1160px) {
    box-shadow: ${(props) => props.theme.boxShadowPrimary};
  }

  img {
    height: 250px;
    width: 250px;
    border-radius: 16px;

    @media (max-width: 768px) {
      width: 33.3vw;
      height: 33.3vw;
      border-radius: 0px;
    }

    @media (max-width: 1160px) and (min-width: 768px) {
      width: 210px;
      height: 210px;
      border-radius: 0px;
    }

    &:hover {
      transition: 0.3s ease-in;
      opacity: 0.7;
      filter: alpha(opacity=30);
    }
  }
`;
