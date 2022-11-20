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
import { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { ProfileResultContext } from "../../../contexts/ProfileResultContext";
import {
  IconWrapper,
  ButtonNav,
  ButtonNavMobile,
  ButtonNavDesktop,
} from "./NavbarButtons.styles";
import { LikesModalContext } from "../../../contexts/LikesModalContext";

export const NavbarButtons = () => {
  const navigate = useNavigate();
  const [userID, setUserID] = useState<string>("");
  const { onProfileClick, resultClicked } = useContext(ProfileResultContext);
  const { onClickHideLikesModal } = useContext(LikesModalContext);
  const currentUser = useSelector(
    (state: RootState) => state.rootReducer.currentUser
  );

  useEffect(() => {
    setUserID(currentUser.uid);
  }, [currentUser, onProfileClick, resultClicked]);

  const onClickProfile = () => {
    onProfileClick();
    navigate(`/user/${userID}`);
  };

  const onClickHome = () => {
    navigate("/");
  };

  const onClickSearch = () => {
    navigate("/search");
  };

  const onClickMessages = () => {
    navigate("/messages");
  };

  const onClickNotifications = () => {
    navigate("/notifications");
  };

  return (
    <IconWrapper>
      <IconContext.Provider value={{ size: "24px" }}>
        <ButtonNav onClick={onClickHome} id="button-nav-home">
          <AiOutlineHome />
          <AiFillHome />
        </ButtonNav>
        <ButtonNavMobile onClick={onClickSearch}>
          <AiOutlineSearch />
        </ButtonNavMobile>
        <ButtonNavMobile>
          <IoAddCircleOutline />
        </ButtonNavMobile>
        <ButtonNav onClick={onClickMessages} id="button-nav-messages">
          <AiOutlineMessage />
          <AiFillMessage />
        </ButtonNav>
        <ButtonNavDesktop
          onClick={onClickNotifications}
          id="button-nav-notifications"
        >
          <AiOutlineHeart />
          <AiFillHeart />
        </ButtonNavDesktop>
        <ButtonNav onClick={onClickProfile} id="button-nav-profile">
          <BsPerson />
          <BsPersonFill />
        </ButtonNav>
      </IconContext.Provider>
    </IconWrapper>
  );
};
