import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};

  textarea {
    resize: none;
    outline: none;
    border: ${(props) => props.theme.border1};
    border-radius: 15px;
    padding: 6px;
    width: 400px;
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
