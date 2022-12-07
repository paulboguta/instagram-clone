import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 0 0 16px 1px rgb(0 0 0 / 10%);
  position: absolute;
  z-index: 10;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);

  @media (min-width: 768px) {
    width: 400px;
    height: 572px;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }
`;

export const Description = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  textarea {
    resize: none;
    outline: none;
    border: ${(props) => props.theme.border1};
    border-radius: 15px;
    padding: 6px;
    width: 380px;
    height: 100px;
    font-family: "Helveltica", sans-serif;
    color: ${(props) => props.theme.fontPrimary};
    background-color: ${(props) => props.theme.backgroundPrimary};
  }

  p {
    color: ${(props) => props.theme.fontSecondary};
    font-size: 12px;
  }
`;

export const AddPhotoWrapper = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 4px;
  margin-top: 8px;
`;

export const ButtonDrop = styled.button`
  width: 100px;
  height: 32px;
  background-color: ${(props) => props.theme.buttonConfirm};
  color: ${(props) => props.theme.backgroundOpposite};
  border: none;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.boxShadowPrimary};
  border-radius: 16px;
  font-weight: 500;
  margin-top: 8px;
`;

export const ButtonUpdate = styled.button`
  width: 80px;
  height: 24px;
  background-color: ${(props) => props.theme.buttonConfirm};
  color: ${(props) => props.theme.backgroundOpposite};
  border: none;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.boxShadowPrimary};
  font-weight: 500;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const ButtonRemove = styled(ButtonUpdate)`
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const FlexButtonUpdateRemove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
