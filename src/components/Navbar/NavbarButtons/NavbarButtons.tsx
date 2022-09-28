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

export const NavbarButtons = () => {
  const navigate = useNavigate();

  return (
    <IconWrapper>
      <IconContext.Provider value={{ size: "24px" }}>
        <ButtonNav onClick={() => navigate("/")} id="button-nav-home">
          <AiOutlineHome />
          <AiFillHome />
        </ButtonNav>
        <ButtonNavMobile>
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
        <ButtonNav
          onClick={() => navigate("/profilepage")}
          id="button-nav-profile"
        >
          <BsPerson />
          <BsPersonFill />
        </ButtonNav>
      </IconContext.Provider>
    </IconWrapper>
  );
};
