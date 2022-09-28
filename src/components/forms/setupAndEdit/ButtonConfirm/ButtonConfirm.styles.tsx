import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.buttonConfirm};
  color: ${(props) => props.theme.backgroundOpposite};
  border: none;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.boxShadowPrimary};
  border-radius: 24px;
  width: 200px;
  height: 50px;
  font-size: 20px;
  letter-spacing: 1px;
  margin-top: 30px;

  &:hover {
    background-color: #dcbae7;
    transition: 0.5s ease-in;
  }
`;
