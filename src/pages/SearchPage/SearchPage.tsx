import { Search } from "../../components/Navbar/Search/Search";
import { Navbar } from "../../components/Navbar/Navbar";
import { NavbarButtons } from "../../components/Navbar/NavbarButtons/NavbarButtons";
import { Wrapper, WrapperNav } from "./SearchPage.styles";
import { useEffect } from "react";
import { useWindowDimensions } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
export const SearchPage = () => {
  const navigate = useNavigate();
  const windowDimensions = useWindowDimensions();

  // search page is only for mobile users so if device width is
  // over 768px move to default page
  useEffect(() => {
    if (windowDimensions.width > 768) {
      navigate("/");
    }
  }, [windowDimensions]);

  return (
    <Wrapper>
      <Search />
      <WrapperNav>
        <Navbar />
      </WrapperNav>
    </Wrapper>
  );
};
