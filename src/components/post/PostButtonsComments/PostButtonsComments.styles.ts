import styled from "styled-components";

interface IBoxShadowProps {
  hideComments: boolean;
}

export const ButtonsLikeCommentWrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
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

export const BoxShadow = styled.div<IBoxShadowProps>`
  width: 100%;

  @media (max-width: 1200px) {
    position: ${(props) =>
      props.hideComments === true ? "absolute" : "static"};
    bottom: 0;
  }
`;
