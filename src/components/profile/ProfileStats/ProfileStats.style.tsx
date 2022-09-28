import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);

  h2 {
    font-weight: 400;
    font-size: 18px;
  }
`;

export const Posts = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  text-align: center;
  font-size: 18px;
  color: ${(props) => props.theme.fontPrimary};
`;

export const FollowersButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
  color: ${(props) => props.theme.fontPrimary};
`;

export const Gray = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.fontSecondary};
  margin-top: 5px;
`;

export const FollowingButton = styled(FollowersButton)``;
