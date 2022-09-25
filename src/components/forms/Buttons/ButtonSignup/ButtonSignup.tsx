import { Wrapper } from "./ButtonSignup.styles";

interface IButtonSignupProps {
  onClick?(event: React.MouseEvent<HTMLButtonElement>): Promise<void>;
}

export const ButtonSignup = ({ onClick }: IButtonSignupProps) => {
  return <Wrapper onClick={onClick}>Sign in with Google</Wrapper>;
};
