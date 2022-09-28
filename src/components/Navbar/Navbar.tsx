import { Wrapper, ButtonImg, LogoImg } from "./Navbar.styles";
import { Search } from "./Search/Search";
import Logo from "../../assets/logo.png";
import { NavbarButtons } from "./NavbarButtons/NavbarButtons";
import { useNavigate } from "react-router-dom";

interface INavbarProps {
  onProfileClick(): void;
  onResultClick(): void;
}

export const Navbar = ({ onProfileClick, onResultClick }: INavbarProps) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <ButtonImg id="logo-navbar" onClick={() => navigate("/")}>
        <LogoImg src={Logo} alt="logo" />
      </ButtonImg>
      <Search onResultClick={onResultClick} />
      <NavbarButtons onProfileClick={onProfileClick} />
    </Wrapper>
  );
};
