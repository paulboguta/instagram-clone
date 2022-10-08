import styled from "styled-components";

export const Posts = styled.div`
  grid-area: 3 / 2 / 4 / 3;

  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-content: center;

  @media (min-width: 1160px) {
    margin-top: -200px;
    width: 770px;
    position: absolute;
    right: 80px;
    top: 680px;
  }

  @media (max-width: 1160px) {
    margin-top: 50px;

    p {
      margin-left: 220px;

      width: 100px;
    }
  }

  @media (max-width: 1161px) and (min-width: 768px) {
    width: 600px;
  }

  @media (max-width: 768px) {
    grid-column-gap: 0;
    grid-row-gap: 0;
  }

  @media (max-width: 1660px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1660px) {
    grid-template-columns: repeat(4, 1fr);
    right: 330px;
  }

  @media (min-width: 2000px) {
    grid-template-columns: repeat(5, 1fr);
    right: 580px;
  }
`;
