import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 60px;
  background-color: ${(props) => props.theme.backgroundPrimary};
  box-shadow: ${(props) => props.theme.boxShadowPrimary};
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    top: 0;
  }

  @media (max-width: 768px) {
    bottom: 0;
  }
`;

export const ButtonImg = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoImg = styled.img`
  height: 50px;
`;

export const Search = styled.input`
  border: ${(props) => props.theme.border1};
  height: 24px;
  width: 160px;
  text-align: center;
  border-radius: 8px;
  outline: none;

  &:focus {
    transition: 0.3s ease-out;
    width: 260px;
    margin-left: -50px;
    height: 28px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
