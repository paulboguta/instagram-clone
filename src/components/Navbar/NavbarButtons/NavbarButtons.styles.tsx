import styled from "styled-components";

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;

  @media (min-width: 768px) {
    margin-right: 100px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const ButtonNav = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  & :nth-child(2) {
    display: none;
  }

  &:hover {
    & :first-child {
      display: none;
    }
    & :last-child {
      display: block;
      fill: ${(props) => props.theme.backgroundOpposite};
    }
  }

  & > * {
    &:active {
      transition: 0.1s ease-in;
      transform: scale(80%);
    }
  }
`;

export const ButtonNavDesktop = styled(ButtonNav)`
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ButtonNavMobile = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;
