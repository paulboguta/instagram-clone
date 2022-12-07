import styled from "styled-components";
import { IButtonProps } from "./button.types";

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

export const ButtonEditFollow = ({ onClick, text }: IButtonProps) => {
  return (
    <Wrapper onClick={onClick} id="button-follow">
      {text}
    </Wrapper>
  );
};
