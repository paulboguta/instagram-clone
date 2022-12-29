import { selectCurrentUser } from "features/user/store/currentUserSlice";
import { useSelector } from "react-redux";
import * as Styled from "./Message.styles";

interface IMessageProps {
  side: string;
}

export const Message = ({ side }: IMessageProps) => {
  const { profilePic } = useSelector(selectCurrentUser);
  return (
    <Styled.Wrapper side={side}>
      <Styled.MessageWrapper>
        Hi! Its me Pawel How are you today? Im testing how messages work! :D
      </Styled.MessageWrapper>
      <Styled.Button>
        <Styled.Img src={profilePic} />
      </Styled.Button>
    </Styled.Wrapper>
  );
};
