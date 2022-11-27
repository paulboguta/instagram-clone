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
  border: ${(props) => props.theme.border1};
  color: ${(props) => props.theme.fontSecondary};

  div {
    padding: 5px;
  }

  hr {
    border: ${(props) => props.theme.border1};
    height: 88%;
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
