import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  box-shadow: ${(props) => props.theme.boxShadowPrimary};
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;

  div {
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 18px;
    color: ${(props) => props.theme.fontPrimary};
  }

  @media (min-width: 1160px) {
    width: 400px;
    height: 300px;
    top: 35%;
    right: 50%;
    transform: translate(50%, -50%);
    border-radius: 16px;
  }

  @media (min-width: 1560px) {
    width: 400px;
    height: 300px;
    top: 35%;
    right: 70%;
    transform: translate(50%, -50%);
    border-radius: 16px;
  }
  @media (max-width: 1160px) and (min-width: 768px) {
    width: 400px;
    height: 300px;
    top: 80%;
    right: 50%;
    transform: translate(50%, -50%);
    border-radius: 16px;
  }
  @media (max-width: 768px) {
    width: 300px;
    height: 500px;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    border-radius: 16px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 30px;
  padding-left: 20%;
  width: 100%;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(207, 207, 207, 0.394);
  cursor: pointer;

  img {
    height: 50px;
    border-radius: 50%;
    background-color: #dcbae7;
    -webkit-box-shadow: 0px 0px 12px 0px rgba(220, 186, 231, 1);
    -moz-box-shadow: 0px 0px 12px 0px rgba(220, 186, 231, 1);
    box-shadow: 0px 0px 12px 0px rgba(220, 186, 231, 1);
  }

  div {
    color: ${(props) => props.theme.fontPrimary};
    font-size: 16px;
  }
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  left: 10px;
  top: 10px;
  height: 30px;
  width: 30px;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.backgroundOpposite};
  }
`;
