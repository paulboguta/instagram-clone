import styled from "styled-components";
import { ButtonLike } from "../PostButtonsComments/PostButtonsComments.styles";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  box-shadow: ${(props) => props.theme.boxShadowPrimary};
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 450px) {
    width: 100vw;
  }
  @media (min-width: 450px) and (max-width: 1160px) {
    width: 350px;
  }
  @media (min-width: 1160px) and (max-width: 1660px) {
    width: 450px;
  }
  @media (min-width: 1660px) {
    width: 550px;
  }
`;

export const Img = styled.img`
  @media (max-width: 450px) {
    width: 100vw;
    height: width;
  }

  @media (min-width: 450px) and (max-width: 1160px) {
    width: 350px;
    height: 350px;
  }
  @media (min-width: 1160px) and (max-width: 1660px) {
    width: 450px;
    height: 450px;
  }
  @media (min-width: 1660px) {
    width: 550px;
    height: 550px;
  }
`;

export const ButtonPost = styled.button`
  background-color: ${(props) => props.theme.backgroundPrimary};
  border-radius: 16px;
  padding: 4px;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  align-self: flex-start;

  div {
    color: ${(props) => props.theme.fontPrimary};
    font-weight: 500;
    margin-left: 8px;
  }
`;

export const ProfileImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #dcbae7;
  -webkit-box-shadow: 0px 0px 12px 0px rgba(220, 186, 231, 1);
  -moz-box-shadow: 0px 0px 12px 0px rgba(220, 186, 231, 1);
  box-shadow: 0px 0px 12px 0px rgba(220, 186, 231, 1);
`;

export const WrapperTopButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonEdit = styled(ButtonLike)`
  margin-right: 12px;
  color: ${(props) => props.theme.fontPrimary};
`;

export const ButtonMoveToPost = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
