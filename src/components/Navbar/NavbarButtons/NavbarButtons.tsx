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
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "features/user/store/currentUserSlice";
import * as Styled from "./NavbarButtons.styles";

export const NavbarButtons = () => {
  const navigate = useNavigate();
  const [userID, setUserID] = useState<string>("");
  const { uid } = useSelector(selectCurrentUser);

  useEffect(() => {
    setUserID(uid);
  }, [uid]);

  const onClickProfile = () => {
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

  const IconValue = useMemo(
    () => ({
      size: "24px",
    }),
    []
  );

  return (
    <Styled.IconWrapper>
      <IconContext.Provider value={IconValue}>
        <Styled.ButtonNav onClick={onClickHome} id="button-nav-home">
          <AiOutlineHome />
          <AiFillHome />
        </Styled.ButtonNav>
        <Styled.ButtonNavMobile onClick={onClickSearch}>
          <AiOutlineSearch />
        </Styled.ButtonNavMobile>
        <Styled.ButtonNavMobile>
          <IoAddCircleOutline />
        </Styled.ButtonNavMobile>
        <Styled.ButtonNav onClick={onClickMessages} id="button-nav-messages">
          <AiOutlineMessage />
          <AiFillMessage />
        </Styled.ButtonNav>
        <Styled.ButtonNavDesktop
          onClick={onClickNotifications}
          id="button-nav-notifications"
        >
          <AiOutlineHeart />
          <AiFillHeart />
        </Styled.ButtonNavDesktop>
        <Styled.ButtonNav onClick={onClickProfile} id="button-nav-profile">
          <BsPerson />
          <BsPersonFill />
        </Styled.ButtonNav>
      </IconContext.Provider>
    </Styled.IconWrapper>
  );
};
