import styled from "styled-components";

export const FeedPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  height: 100%;
  gap: 30px;

  @media (max-width: 768px) {
    padding-top: 30px;
  }
`;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  height: 100%;
`;