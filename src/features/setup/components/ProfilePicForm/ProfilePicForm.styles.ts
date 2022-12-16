import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 30px;

  p {
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
    color: ${(props) => props.theme.fontPrimary};
  }
`;

export const ButtonPreview = styled.button`
  background-color: ${(props) => props.theme.buttonSetupProfilePicBackground};
  border: transparent;
  width: 340px;
  height: 70px;
  border-radius: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    height: 60px;
    width: 60px;
    background-color: #daa7e9;
    border-radius: 50%;
  }

  &:hover {
    transform: scale(105%);
    transition: 0.3s ease-in;

    img {
      transition: 0.7s ease-in;
      background-color: #bb6dd3;
    }
  }
`;

export const WrapperForm = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  box-shadow: ${(props) => props.theme.boxShadowPrimary};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 700px;
  height: 500px;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export const WrapperMemojis = styled.div`
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ButtonConfirm = styled.button`
  align-self: center;
  justify-self: center;
  background-color: ${(props) => props.theme.buttonConfirm};
  color: ${(props) => props.theme.backgroundOpposite};
  border: none;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.boxShadowPrimary};
  border-radius: 24px;
  width: 200px;
  height: 50px;
  font-size: 20px;
  letter-spacing: 1px;
  margin-top: 30px;

  &:hover {
    background-color: #dcbae7;
    transition: 0.5s ease-in;
  }
`;

interface IStyledImg {
  chosen: boolean;
}

export const Img = styled.img<IStyledImg>`
  background-color: ${(props) => (props.chosen ? "#b462d0" : "#dcbae7")};

  height: 70px;
  width: 70px;
  border-radius: 50%;

  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
  }

  &:hover {
    background-color: #b462d0;
    transition: 0.3s ease-in;
  }

  &:active {
    transform: scale(90%);
    transition: 0.05s ease-in;
  }
`;
