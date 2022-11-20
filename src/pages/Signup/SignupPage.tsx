import styled from "styled-components";
import { SignupModal } from "../../components/forms";
import { useSignInWithGoogle } from "../../features/auth/signInWithGoogle";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignupPage = () => {
  const { signInWithGoogle, authing } = useSignInWithGoogle();

  return (
    <Wrapper>
      <SignupModal onClick={signInWithGoogle} authing={authing} />
    </Wrapper>
  );
};
