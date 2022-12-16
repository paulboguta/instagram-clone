import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SetupSchema } from "features/setup/utils/setup.validation";
import { updateSetupCurrentUser } from "features/user/store/currentUserSlice";
import { doSetupService } from "features/user/services/setup.service";
import { useAppDispatch } from "store/store";
import { ErrorMessage } from "styles/globalStyles";
import * as Styled from "./SetupPage.styles";
import Logo from "../../../assets/logo.png";
import {
  TextField,
  Bio,
  ProfilePicForm,
  ButtonConfirm,
  ToggleDarkMode,
} from "../components/index";
import { useSetup } from "../hooks/hooks";

export const SetupPage = () => {
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { setUserData, userData, uid, theme } = useSetup();

  const onChangeUsernameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, username: event.target.value });
  };

  const onChangeBioInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setUserData({ ...userData, bio: event.target.value });
  };

  const onClickPic = (event: React.MouseEvent<HTMLButtonElement>) => {
    setUserData({
      ...userData,
      profilePic: event.currentTarget.firstElementChild!.getAttribute("src")!,
    });
  };

  const onClickConfirm = async () => {
    const valid = await SetupSchema.isValid({
      username: userData.username,
      bio: userData.bio,
      profilePic: userData.profilePic,
    });
    if (valid) {
      try {
        const parsedBio =
          userData.bio.length < 2
            ? `Hello it's ${userData.username}`
            : userData.bio;
        await doSetupService(
          uid,
          userData.username,
          parsedBio,
          userData.profilePic,
          theme
        );
        dispatch(
          updateSetupCurrentUser({
            uid,
            username: userData.username,
            bio: parsedBio,
            profilePic: userData.profilePic,
            theme,
          })
        );
        navigate("/");
      } catch (err) {
        setError(true);
      }
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.Form>
        {error ? <ErrorMessage>Something went wrong...</ErrorMessage> : null}
        <Styled.Img alt="logo" src={Logo} />
        <TextField
          placeholder="username"
          onChange={onChangeUsernameInput}
          value={userData.username}
        />
        <Bio onChange={onChangeBioInput} text={userData.bio} />
        <ProfilePicForm
          onClickPic={onClickPic}
          profilepic={userData.profilePic}
        />
        <ToggleDarkMode />
        <ButtonConfirm onClick={onClickConfirm} />
      </Styled.Form>
    </Styled.Wrapper>
  );
};
