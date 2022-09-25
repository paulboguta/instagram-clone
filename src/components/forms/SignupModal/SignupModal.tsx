import { Wrapper, Buttons } from "./SignupModal.styles";
import Logo from "../../../assets/logo.png";
import { TextField } from "../TextField/TextField";
import { ButtonSignup } from "../Buttons/ButtonSignup/ButtonSignup";
import { ChangeEvent } from "react";

interface ISignupModalProps {
  onClick?(event: React.MouseEvent<HTMLButtonElement>): Promise<void> | any;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
  onClickError?(event: React.MouseEvent<HTMLButtonElement>): void;
  correctUsername?: boolean;
  authing?: boolean;
}

export const SignupModal = ({
  onClick,
  onChange,
  correctUsername,
  onClickError,
  authing,
}: ISignupModalProps) => {
  return (
    <Wrapper>
      <img src={Logo} alt="instagram logo" />
      <h2>Sign In</h2>
      <TextField onChange={onChange} />
      <Buttons>
        {!authing && (
          <ButtonSignup onClick={correctUsername ? onClick : onClickError} />
        )}
      </Buttons>
    </Wrapper>
  );
};
