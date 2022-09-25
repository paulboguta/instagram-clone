import { SignupModal } from "../../../components/forms";
import { Wrapper } from "./SignupPage.styles";
import { useSignInWithGoogle } from "../../../features/auth/signInWithGoogle";
import { ChangeEvent, useEffect, useState } from "react";

export const SignupPage = () => {
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [correctUsername, setCorrectUsername] = useState<boolean>(false);

  useEffect(() => {
    usernameInput.length > 3 && usernameInput.length < 16
      ? setCorrectUsername(true)
      : setCorrectUsername(false);
  }, [usernameInput]);

  const { signInWithGoogle, authing } = useSignInWithGoogle();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsernameInput(event.target.value);
  };

  const onClickError = () => {
    alert("Wrong username! It has to be 4-16 characters long.");
  };

  return (
    <Wrapper>
      <SignupModal
        onClick={signInWithGoogle}
        correctUsername={correctUsername}
        onChange={onChange}
        onClickError={onClickError}
        authing={authing}
      />
    </Wrapper>
  );
};
