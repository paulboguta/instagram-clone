import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -80px;
  width: 400px;

  hr {
    border: ${(props) => props.theme.border1};
    width: 60%;
  }
`;

export const Username = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.backgroundOpposite};
  margin-top: 8px;
  margin-bottom: 5px;
`;

export const Bio = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.backgroundOpposite};
  margin-top: 20px;
  margin-bottom: 5px;
`;
