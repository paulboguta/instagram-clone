import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60%;

  p {
    color: ${(props) => props.theme.fontSecondary};
    font-size: 11px;
    margin-top: 10px;
  }
`;

export const WrapperInput = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 25px;
  border-radius: 16px;
  border: 1px solid #c0c0c0;
  color: ${(props) => props.theme.fontSecondary};

  div {
    padding: 5px;
  }

  hr {
    margin: 0;
    color: #c0c0c0;
    height: 80%;
  }

  input {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.fontPrimary};

    &:focus {
      outline: none;
      width: 100%;
    }
  }
`;
