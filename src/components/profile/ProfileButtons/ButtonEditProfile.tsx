import styled from "styled-components";
import { IButtonProps } from "./interfaces";

export const ButtonEditProfile = ({ onClick }: IButtonProps) => {
  return <Wrapper onClick={onClick}>Edit Profile</Wrapper>;
};

const Wrapper = styled.button`
  background-color: ${(props) => props.theme.backgroundOpposite};
  color: ${(props) => props.theme.backgroundPrimary};
  width: 120px;
  height: 36px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-weight: 700;

  @media (min-width: 768px) {
    margin-top: -18px;
  }

  &:hover {
    transition: 0.3s ease-in;
    background-color: ${(props) => props.theme.buttonHoverBackground};
  }
`;
