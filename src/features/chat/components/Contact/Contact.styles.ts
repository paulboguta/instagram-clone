import styled from "styled-components";

export const Wrapper = styled.button`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  background: rgba(101, 93, 93, 0.05);
  backdrop-filter: blur(3.3px);
  cursor: pointer;
  border: none;
  width: 100%;
  padding-left: 30px;
  padding-block: 5px;
  justify-items: flex-start;
  align-items: center;

  &:hover {
    transition: 0.3s ease-in;
    background-color: ${(props) => props.theme.backgroundPrimary};
  }

  &:active {
    transition: 0.1s ease-in;
    transform: scale(95%);
  }
`;

export const Img = styled.img`
  grid-area: 1 / 1 / 3 / 2;
  height: 50px;
  border-radius: 50%;
  background-color: #dcbae7;
`;

export const Name = styled.div`
  margin-left: -20px;
  grid-area: 1 / 2 / 2 / 4;
  color: ${(props) => props.theme.fontPrimary};
`;

export const LastMessage = styled.div`
  margin-left: -20px;
  grid-area: 2 / 2 / 3 / 4;
  color: ${(props) => props.theme.fontSecondary};
`;
