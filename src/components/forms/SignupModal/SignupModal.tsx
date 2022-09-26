import { Wrapper, Buttons } from "./SignupModal.styles";
import Logo from "../../../assets/logo.png";
import { ButtonSignup } from "../Buttons/ButtonSignup/ButtonSignup";
import { ChangeEvent } from "react";

interface ISignupModalProps {
  onClick?(event: React.MouseEvent<HTMLButtonElement>): Promise<void> | any;

  authing?: boolean;
}

export const SignupModal = ({ onClick, authing }: ISignupModalProps) => {
  return (
    <Wrapper>
      <img src={Logo} alt="instagram logo" />
      <h2>Sign In</h2>
      <Buttons>{!authing && <ButtonSignup onClick={onClick} />}</Buttons>
    </Wrapper>
  );
};
