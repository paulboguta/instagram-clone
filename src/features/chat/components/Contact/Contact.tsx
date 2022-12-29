import { selectCurrentUser } from "features/user/store/currentUserSlice";
import { useSelector } from "react-redux";
import * as Styled from "./Contact.styles";

export const Contact = () => {
  const { profilePic } = useSelector(selectCurrentUser);
  return (
    <Styled.Wrapper>
      <Styled.Img src={profilePic} />
      <Styled.Name>Name</Styled.Name>
      <Styled.LastMessage>Last msg</Styled.LastMessage>
    </Styled.Wrapper>
  );
};
