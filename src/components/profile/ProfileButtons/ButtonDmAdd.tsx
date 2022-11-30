import styled from "styled-components";
import { IButtonProps } from "./interfaces";

const Wrapper = styled.button`
  background-color: ${(props) => props.theme.backgroundOpposite};
  color: ${(props) => props.theme.backgroundPrimary};
  width: 36px;
  height: 36px;
  text-align: center;
  padding-top: 2px;
  font-size: 20px;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-top: -18px;
  }

  &:hover {
    transition: 0.3s ease-in;
    background-color: ${(props) => props.theme.buttonHoverBackground};
  }
`;

export const ButtonDmAdd = ({ element, onClick }: IButtonProps) => {
  return <Wrapper onClick={onClick}>{element}</Wrapper>;
};
