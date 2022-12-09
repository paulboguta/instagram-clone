import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "../components/Search/Search";
import { Navbar } from "../../../components/Navbar/Navbar";
import * as Styled from "./SearchPage.styles";
import { useWindowDimensions } from "../../../hooks/hooks";

export const SearchPage = () => {
  const navigate = useNavigate();
  const windowDimensions = useWindowDimensions();

  // search page is only for mobile users so if device width is
  // over 768px move to default page
  useEffect(() => {
    if (windowDimensions.width > 768) {
      navigate("/");
    }
  }, [navigate, windowDimensions]);

  return (
    <Styled.Wrapper>
      <Search />
      <Styled.WrapperNav>
        <Navbar />
      </Styled.WrapperNav>
    </Styled.Wrapper>
  );
};
