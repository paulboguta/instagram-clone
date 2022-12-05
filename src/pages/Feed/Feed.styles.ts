import styled from "styled-components";

interface IFeedPostsStyleProps {
  loading: boolean;
}

export const FeedPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  height: 100%;
  gap: 30px;
  background-color: ${(props) => props.theme.backgroundPrimary};

  @media (max-width: 768px) {
    padding-top: 30px;
    padding-bottom: 50px;
  }
`;

export const Wrapper = styled.div<IFeedPostsStyleProps>`
  background-color: ${(props) => props.theme.backgroundPrimary};
  height: ${(props) => (props.loading ? "100vh" : "100%")};
`;
