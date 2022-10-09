import styled from "styled-components";

export const ButtonsLikeCommentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 8px;
  gap: 6px;
  box-shadow: ${(props) => props.theme.boxShadowPrimary};
`;

export const ButtonLike = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => props.theme.fontPrimary};
`;

export const ButtonComment = styled(ButtonLike)`
  padding: 2px;
`;

export const BoxShadow = styled.div`
  width: 100%;
`;
