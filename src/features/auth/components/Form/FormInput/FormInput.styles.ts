import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
`;

export const WrapperInput = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 40px;
  width: 60%;
  border-radius: 16px;
  border: ${(props) => props.theme.border1};
  color: ${(props) => props.theme.fontSecondary};

  div {
    padding: 10px;
  }

  hr {
    border: ${(props) => props.theme.border1};
    height: 88%;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  width: 60%;
  border: none;
  font-size: 16px;
  color: ${(props) => props.theme.fontPrimary};

  &:focus {
    outline: none;
    width: 100%;
  }
`;

export const HelperText = styled.div``;

export const HelperErrorText = styled.div`
  font-size: 12px;
  color: red;
  width: 60%;
  padding-left: 10px;
`;
