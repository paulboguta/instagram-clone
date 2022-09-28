import { Wrapper, ButtonImg, LogoImg, Search } from "./Navbar.styles";
import Logo from "../../assets/logo.png";
import { NavbarButtons } from "./NavbarButtons/NavbarButtons";
import { useNavigate } from "react-router-dom";

interface INavbarProps {
  onProfileClick(): void;
}

export const Navbar = ({ onProfileClick }: INavbarProps) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <ButtonImg id="logo-navbar" onClick={() => navigate("/")}>
        <LogoImg src={Logo} alt="logo" />
      </ButtonImg>
      <Search placeholder="Search" id="search-navbar" />
      <NavbarButtons onProfileClick={onProfileClick} />
    </Wrapper>
  );
};
