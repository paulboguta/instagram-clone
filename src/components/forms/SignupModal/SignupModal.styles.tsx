import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 16px;
  box-shadow: 0 0 16px 1px rgb(0 0 0 / 10%);
  border: ${(props) => props.theme.border1};

  @media (min-width: 768px) {
    width: 400px;
    height: 672px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }

  img {
    height: 64px;
    width: 64px;
    margin-top: 40px;
  }

  h2 {
    margin-bottom: 90px;
  }

  h2,
  span {
    color: #686868;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;
