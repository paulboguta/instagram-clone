import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateSetup } from "features/validation/setup.validation";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { Wrapper, Form, Img } from "./SetupPage.styles";
import Logo from "../../assets/logo.png";
import {
  TextField,
  Bio,
  ProfilePicForm,
  ButtonConfirm,
  ToggleDarkMode,
} from "../../components/forms";
import { useAppDispatch } from "../../hooks/hooks";
import { doSetupAction } from "../../store/actions/userActions";

export const SetupPage = () => {
  const [username, setUsername] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [profilePic, setProfilePic] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.rootReducer.currentUser);
  const { theme } = useSelector(
    (state: RootState) => state.rootReducer.currentUser
  );
  const onChangeUsernameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onChangeBioInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(event.target.value);
  };

  const onClickPic = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProfilePic(event.currentTarget.firstElementChild!.getAttribute("src")!);
  };

  useEffect(() => {
    if (user.bio.length || user.username.length || user.profilePic.length) {
      setUsername(user.username);
      setBio(user.bio);
      setProfilePic(user.profilePic);
    }
  }, [user.bio, user.profilePic, user.username]);

  const onClickConfirm = () => {
    if (validateSetup(username, bio, profilePic)) {
      if (bio.length < 2) {
        setBio(`Hello it's @${username}!`);
      }
      dispatch(doSetupAction(user.uid, username, bio, profilePic, theme));
      navigate("/");
    }
  };

  return (
    <Wrapper>
      <Form>
        <Img alt="logo" src={Logo} />
        <TextField
          placeholder="username"
          onChange={onChangeUsernameInput}
          value={username}
        />
        <Bio onChange={onChangeBioInput} text={bio} />
        <ProfilePicForm onClickPic={onClickPic} profilepic={profilePic} />
        <ToggleDarkMode />
        <ButtonConfirm onClick={onClickConfirm} />
      </Form>
    </Wrapper>
  );
};
