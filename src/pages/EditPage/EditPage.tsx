import { Wrapper, Form, Img } from "../SetupPage/SetupPage.styles";
import Logo from "../../assets/logo.png";
import { TextField } from "../../components/forms";
import { Bio } from "../../components/forms";
import { ProfilePicForm } from "../../components/forms";
import { ButtonConfirm } from "../../components/forms";
import { ToggleDarkMode } from "../../components/forms";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useAuth } from "../../hooks/hooks";
import { useAppDispatch } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import { doSetup } from "../../store/actions/userActions";
import { db } from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";

export const EditPage = () => {
  const [username, setUsername] = useState<string>("");
  const [profilePic, setProfilePic] = useState<string>("");
  const [theme, setTheme] = useState<string>("themeLight");
  const [bio, setBio] = useState<string>("");
  const currentUser = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);

  const getDocs = async () => {
    const usersRef = doc(db, "users", currentUser.uid);
    const data = await getDoc(usersRef);
    setBio(data.data()!.bio);
    setUsername(data.data()!.username);
    setProfilePic(data.data()!.profilePic);
  };

  const onChangeUsernameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onChangeBioInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(event.target.value);
  };

  const onClickPic = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProfilePic(event.currentTarget.firstElementChild!.getAttribute("src")!);
  };

  const onClickConfirm = async () => {
    // username, bio, profilepic validation
    if (username.length < 4 || username.length > 16) {
      alert("Wrong username! It has to be from 4 to 16 characters");
      return;
    }
    if (bio.length > 120) {
      alert("Bio is too long! Maximum is 120 characters.");
      return;
    }
    if (profilePic === "") {
      alert("You have to choose profile picture!");
      return;
    }
    if (bio.length < 2) {
      setBio(`Hello it's @${username}!`);
    }
    await dispatch(doSetup(currentUser.uid, username, bio, profilePic, theme));
    navigate(`/user/${currentUser.uid}`);
  };

  useEffect(() => {
    getDocs();
  }, [currentUser]);

  useEffect(() => {
    darkMode ? setTheme("themeDark") : setTheme("themeLight");
  }, [darkMode]);
  return (
    <Wrapper>
      <Form>
        <Img src={Logo} />
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
