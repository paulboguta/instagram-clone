import styled from "styled-components";

export const Wrapper = styled.div`
  width: 350px;
  background: rgba(101, 93, 93, 0.05);
  height: 100%;
`;

export const ContactWrapper = styled.div`
  overflow: scroll;
  height: 100%;
  padding-top: 60px;
`;

export const MeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-block: 5px;
  position: absolute;
  z-index: 5;
  width: 350px;
  background: rgba(101, 93, 93, 0.05);
  backdrop-filter: blur(3.3px);
`;

export const Messages = styled.div`
  color: ${(props) => props.theme.fontPrimary};
  font-weight: 700;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

export const List = styled.ul``;
