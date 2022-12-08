import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateSetup } from "features/setup/utils/setup.validation";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  updateSetupCurrentUser,
} from "features/user/store/currentUserSlice";
import { doSetupService } from "features/user/services/setup.service";
import { useAppDispatch } from "store/store";
import { Wrapper, Form, Img } from "./SetupPage.styles";
import Logo from "../../../assets/logo.png";
import {
  TextField,
  Bio,
  ProfilePicForm,
  ButtonConfirm,
  ToggleDarkMode,
} from "../components/index";

export const SetupPage = () => {
  const [username, setUsername] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [profilePic, setProfilePic] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
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

  const onClickConfirm = async () => {
    if (validateSetup(username, bio, profilePic)) {
      try {
        await doSetupService(user.uid, username, bio, profilePic, user.theme);
        dispatch(
          updateSetupCurrentUser({
            uid: user.uid,
            username,
            bio,
            profilePic,
            theme: user.theme,
          })
        );
        navigate("/");
      } catch (err) {
        console.log(err);
      }
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
