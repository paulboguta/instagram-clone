import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Mobile = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const SearchStyled = styled.input`
  border: ${(props) => props.theme.border1};
  background-color: ${(props) => props.theme.backgroundGlassNavbar};
  color: ${(props) => props.theme.fontPrimary};
  height: 24px;
  width: 160px;
  text-align: center;
  border-radius: 12px;
  outline: none;

  @media (min-width: 768px) {
    &:focus {
      transition: 0.3s ease-out;
      width: 260px;
      margin-left: -50px;
      height: 28px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 40px;
    border-radius: 12px;
  }
`;

export const Results = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  box-shadow: ${(props) => props.theme.boxShadowPrimary};
  width: 260px;
  height: 100px;
  margin-top: 10px;
  border-radius: 16px;
  right: 50%;
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 80%;
    position: static;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.fontSecondary};

  div {
    padding-top: 3px;
  }

  img {
    background-color: #dcbae7;
    border-radius: 50%;
    height: 30px;
    width: 30px;
  }

  &:hover {
    img {
      transition: 0.3s ease-in;
      background-color: #c17bd9;
    }

    div {
      transition: 0.3s ease-in;
      color: ${(props) => props.theme.fontPrimary};
    }
  }
`;

export const ErrorMessage = styled.p``;
