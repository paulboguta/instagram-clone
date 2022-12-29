import { Navbar } from "components/Navbar/Navbar";
import { ContactList } from "../components/ContactList/ContactList";
import { Messages } from "../components/Messages/Messages";
import * as Styled from "./Chat.styles";

export const Chat = () => {
  return (
    <Styled.Wrapper>
      <Navbar />
      <Styled.ChatWrapper>
        <ContactList />
        <Messages />
      </Styled.ChatWrapper>
    </Styled.Wrapper>
  );
};
