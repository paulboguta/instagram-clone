import * as Styled from "./Messages.styles";
import { Message } from "../Message/Message";

export const Messages = () => {
  // message uid:
  // current user: side="right"
  // other user: side="left"

  return (
    <Styled.Wrapper>
      <Styled.WrapperSide>
        <Message side="left" />
      </Styled.WrapperSide>
      <Styled.WrapperSide>
        <Message side="right" />
        <Message side="right" />
        <Message side="right" />
      </Styled.WrapperSide>
    </Styled.Wrapper>
  );
};
