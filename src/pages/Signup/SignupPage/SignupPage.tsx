import { SignupModal } from "../../../components/forms";
import { Wrapper } from "./SignupPage.styles";
import { useSignInWithGoogle } from "../../../features/auth/signInWithGoogle";

export const SignupPage = () => {
  const { signInWithGoogle, authing } = useSignInWithGoogle();

  return (
    <Wrapper>
      <SignupModal onClick={signInWithGoogle} authing={authing} />
    </Wrapper>
  );
};
