import { useNavigate } from "react-router-dom";
import * as Styled from "./Navbar.styles";
import { Search } from "../../features/search/components/Search/Search";
import Logo from "../../assets/logo.png";
import { NavbarButtons } from "./NavbarButtons/NavbarButtons";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Styled.Wrapper>
      <Styled.ButtonImg id="logo-navbar" onClick={() => navigate("/")}>
        <Styled.LogoImg src={Logo} alt="logo" />
      </Styled.ButtonImg>
      <Styled.Desktop>
        <Search />
      </Styled.Desktop>
      <NavbarButtons />
    </Styled.Wrapper>
  );
};
