import styled from "styled-components";

export const WrapperAll = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  height: 100vh;
  @media (max-width: 768px) {
    overflow: hidden;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.backgroundPrimary};
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 16px;
  box-shadow: ${(props) => props.theme.boxShadowPrimary};
  height: 500px;

  @media (max-width: 1200px) {
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 30%;
    transform: translateX(-50%);
    overflow: hidden;
    height: 90vh;
    margin-left: 20%;
  }

  @media (max-width: 1200px) and (min-width: 768px) {
    position: absolute;
    top: 80px;
  }
`;

export const Img = styled.img`
  @media (max-width: 420px) {
    width: 100vw;
    height: 100vw;
    margin-top: 100px;
  }

  @media (max-width: 1200px) {
    width: 420px;
    height: 420px;
  }

  @media (min-width: 1200px) {
    width: 500px;
    height: 500px;
  }

  @media (max-width: 1200px) {
    margin-top: 100px;
  }

  @media (min-width: 1200px) {
    border-bottom-left-radius: 16px;
    border-top-left-radius: 16px;
  }
`;
export const PostProfileSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  padding-inline: 80px;
  margin-top: 8px;
  width: 100%;
  height: 40%;

  @media (max-width: 1200px) {
    position: absolute;
    top: -30px;
    left: -120px;
  }
`;

export const ProfilePic = styled.img`
  height: 100px;
  border-radius: 50%;
  background-color: #dcbae7;
  -webkit-box-shadow: 0px 0px 12px 0px rgba(220, 186, 231, 1);
  -moz-box-shadow: 0px 0px 12px 0px rgba(220, 186, 231, 1);
  box-shadow: 0px 0px 12px 0px rgba(220, 186, 231, 1);
  grid-area: 1 / 1 / 2 / 2;

  @media (max-width: 1200px) {
    height: 50px;
    justify-self: flex-end;
  }
`;
export const Username = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  grid-area: 1 / 2 / 2 / 3;
  font-size: 24px;
  color: ${(props) => props.theme.fontPrimary};

  &:hover {
    transition: 0.2s ease-in;
    transform: scale(102%);
  }

  @media (max-width: 1200px) {
    font-size: 18px;
    justify-self: flex-start;
  }
`;
export const Description = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  text-align: center;
  color: ${(props) => props.theme.fontSecondary};
  font-size: 14px;

  @media (max-width: 1200px) {
    margin-top: 12px;
    text-align: left;
    margin-left: 10px;
  }
`;

export const WrapperComments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 55%;
  @media (max-width: 1200px) {
    height: 200%;
  }
`;

export const MarginTop = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
