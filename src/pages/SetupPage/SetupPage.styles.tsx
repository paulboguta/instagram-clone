import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 16px;
  box-shadow: ${(props) => props.theme.boxShadowPrimary};
  border: ${(props) => props.theme.border1};
  background-color: ${(props) => props.theme.backgroundPrimary};

  @media (min-width: 768px) {
    width: 500px;
    height: 672px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }
`;

export const Img = styled.img`
  height: 70px;
  width: 70px;
  margin-top: 30px;
  margin-bottom: 20px;
`;
