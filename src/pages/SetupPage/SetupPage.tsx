import { Wrapper, Form, Img } from "./SetupPage.styles";
import Logo from "../../assets/logo.png";
import { TextField } from "./TextField/TextField";
import { Bio } from "./Bio/Bio";
import { ProfilePicForm } from "./ProfilePicForm/ProfilePicForm";
import { ButtonConfirm } from "./ButtonConfirm/ButtonConfirm";
import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import {
  getUsername,
  getBio,
  getProfilePicture,
} from "../../store/slices/userSlice/userSlice";

export const SetupPage = () => {
  const [username, setUsername] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [profilePic, setProfilePic] = useState<string>("");
  const dispatch = useAppDispatch();

  const onChangeUsernameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onChangeBioInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(event.target.value);
  };

  const onClickPic = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProfilePic(event.currentTarget.firstElementChild!.getAttribute("src")!);
  };

  const onClickConfirm = () => {
    // username, bio, profilepic validation
    if (username.length < 4 || username.length > 16) {
      alert("Wrong username! It has to be from 4 to 16 characters");
      return;
    }
    if (bio.length > 120) {
      alert("Bio is too long! Maximum is 120 characters.");
      return;
    }

    if (profilePic == "") {
      alert("You have to choose profile picture!");
      return;
    }

    // managing data
    dispatch(getUsername(username));
    dispatch(getBio(bio));
    dispatch(getProfilePicture(profilePic));
  };

  return (
    <Wrapper>
      <Form>
        <Img src={Logo} />
        <TextField placeholder="username" onChange={onChangeUsernameInput} />
        <Bio onChange={onChangeBioInput} />
        <ProfilePicForm onClickPic={onClickPic} profilepic={profilePic} />
        <ButtonConfirm onClick={onClickConfirm} />
      </Form>
    </Wrapper>
  );
};
