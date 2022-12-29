import styled from "styled-components";

interface StyledProps {
  side: string;
}

export const Wrapper = styled.div<StyledProps>`
  display: flex;
  flex-direction: ${(props) => (props.side === "left" ? "row-reverse" : "row")};
  background-color: ${(props) => props.theme.backgroundPrimary};
  align-items: center;
  gap: 10px;
`;

export const MessageWrapper = styled.p`
  background-color: #3f00ff;
  color: ${(props) => props.theme.fontPrimary};
  border-radius: 12px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  max-width: 300px;
  min-height: 40px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  height: 40px;
  border-radius: 50%;
  background-color: #dcbae7;

  &:hover {
    transition: 0.3s ease-in;
    transform: scale(110%);
    background-color: #b462d0;
  }
`;
