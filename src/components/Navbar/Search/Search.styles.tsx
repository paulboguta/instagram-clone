import styled from "styled-components";

export const SearchStyled = styled.input`
  border: ${(props) => props.theme.border1};
  background-color: ${(props) => props.theme.backgroundGlassNavbar};
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

export const Results = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  box-shadow: ${(props) => props.theme.boxShadow};
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
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
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
