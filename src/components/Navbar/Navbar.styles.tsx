import styled from "styled-components";

export const Desktop = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 60px;

  /* From https://css.glass */
  background: ${(props) => props.theme.backgroundGlassNavbar};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    top: 0;
  }

  @media (max-width: 768px) {
    bottom: 0;
    background: ${(props) => props.theme.backgroundGlassNavbar2};
  }
`;

export const ButtonImg = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoImg = styled.img`
  height: 50px;
`;
