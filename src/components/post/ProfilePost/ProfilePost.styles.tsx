import styled from "styled-components";

export const Wrapper = styled.button`
  height: 250px;
  width: 250px;
  border: none;
  cursor: pointer;

  @media (max-width: 1160px) and (min-width: 768px) {
    width: 25vw;
    height: 25vw;
    border-radius: 16px;
  }
  @media (max-width: 768px) {
    width: 33.333vw;
    height: 33.333vw;
  }

  @media (min-width: 1160px) {
    box-shadow: ${(props) => props.theme.boxShadowPrimary};
    border-radius: 16px;
  }

  img {
    height: 250px;
    width: 250px;

    @media (max-width: 1160px) and (min-width: 768px) {
      width: 25vw;
      height: 25vw;
      border-radius: 16px;
    }

    @media (max-width: 768px) {
      width: 33.333vw;
      height: 33.333vw;
    }

    @media (min-width: 1160px) {
      border-radius: 16px;
    }

    &:hover {
      @media (min-width: 768px) {
        transition: 0.3s ease-in;
        opacity: 0.7;
        filter: alpha(opacity=30);
      }
    }
  }
`;
