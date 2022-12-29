import { selectCurrentUser } from "features/user/store/currentUserSlice";
import { useSelector } from "react-redux";
import { BiMessageSquareAdd } from "react-icons/bi";
import { useMemo } from "react";
import { IconContext } from "react-icons";
import { Contact } from "../Contact/Contact";
import { Img } from "../Contact/Contact.styles";
import * as Styled from "./ContactList.styles";

export const ContactList = () => {
  const { profilePic, theme } = useSelector(selectCurrentUser);

  const IconValue = useMemo(
    () => ({
      size: "20px",
      color: `${theme === "themeLight" ? "#000" : "#fff"}`,
    }),
    [theme]
  );

  return (
    <Styled.Wrapper>
      <Styled.MeWrapper>
        <Img src={profilePic} />
        <Styled.Messages>Messages</Styled.Messages>
        <Styled.Button>
          <IconContext.Provider value={IconValue}>
            <BiMessageSquareAdd />
          </IconContext.Provider>
        </Styled.Button>
      </Styled.MeWrapper>
      <Styled.ContactWrapper>
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </Styled.ContactWrapper>
    </Styled.Wrapper>
  );
};
