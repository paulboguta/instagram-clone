import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  height: 100vh;
`;

export const ChatWrapper = styled.div`
  padding-top: 60px;
  display: flex;
  height: 100%;
  width: 100%;
`;
