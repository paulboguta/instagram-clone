import {
  IconWrapper,
  ButtonNav,
  ButtonNavMobile,
  ButtonNavDesktop,
} from "./NavbarButtons.styles";
import {
  AiOutlineHome,
  AiOutlineHeart,
  AiFillHeart,
  AiFillHome,
  AiOutlineMessage,
  AiOutlineSearch,
  AiFillMessage,
} from "react-icons/ai";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { IoAddCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ProfileResultContext } from "../../../contexts/ProfileResultContext";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/hooks";

export const NavbarButtons = () => {
  const navigate = useNavigate();
  const [userID, setUserID] = useState<string>("");
  const { onProfileClick, resultClicked } = useContext(ProfileResultContext);
  const currentUser = useSelector(
    (state: RootState) => state.rootReducer.currentUser
  );

  useEffect(() => {
    setUserID(currentUser.uid);
  }, [currentUser, onProfileClick, resultClicked]);

  const onClick = () => {
    onProfileClick();
    navigate(`/user/${userID}`);
  };

  return (
    <IconWrapper>
      <IconContext.Provider value={{ size: "24px" }}>
        <ButtonNav onClick={() => navigate("/")} id="button-nav-home">
          <AiOutlineHome />
          <AiFillHome />
        </ButtonNav>
        <ButtonNavMobile onClick={() => navigate("/search")}>
          <AiOutlineSearch />
        </ButtonNavMobile>
        <ButtonNavMobile>
          <IoAddCircleOutline />
        </ButtonNavMobile>
        <ButtonNav
          onClick={() => navigate("/messages")}
          id="button-nav-messages"
        >
          <AiOutlineMessage />
          <AiFillMessage />
        </ButtonNav>
        <ButtonNavDesktop
          onClick={() => navigate("/notifications")}
          id="button-nav-notifications"
        >
          <AiOutlineHeart />
          <AiFillHeart />
        </ButtonNavDesktop>
        <ButtonNav onClick={onClick} id="button-nav-profile">
          <BsPerson />
          <BsPersonFill />
        </ButtonNav>
      </IconContext.Provider>
    </IconWrapper>
  );
};
