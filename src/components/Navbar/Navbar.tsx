import { Wrapper, ButtonImg, LogoImg, Desktop } from "./Navbar.styles";
import { Search } from "./Search/Search";
import Logo from "../../assets/logo.png";
import { NavbarButtons } from "./NavbarButtons/NavbarButtons";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ButtonImg id="logo-navbar" onClick={() => navigate("/")}>
        <LogoImg src={Logo} alt="logo" />
      </ButtonImg>
      <Desktop>
        <Search />
      </Desktop>
      <NavbarButtons />
    </Wrapper>
  );
};
